/**
 * POST /api/ask — the `$ ask alex` endpoint.
 *
 * Request:  { lang: 'es'|'en', messages: [{ role: 'user'|'assistant', content: string }] }
 * Response: { text: string, demo?: true }
 *
 * Answers with Claude using only the facts in ./facts.mjs. When ANTHROPIC_API_KEY
 * is not set the endpoint returns a demo reply so the UI works without secrets.
 * Framework-free: works as a Node `http` handler and as a Vite dev middleware.
 */
import Anthropic from '@anthropic-ai/sdk'
import { demoReply, refusalReply, systemPrompt } from './facts.mjs'

const MODEL = 'claude-opus-5'
const MAX_BODY_BYTES = 16 * 1024
const MAX_MESSAGES = 12
const MAX_MESSAGE_CHARS = 600
const MAX_OUTPUT_TOKENS = 400
const REQUEST_TIMEOUT_MS = 30_000

// Per-IP rate limit: the endpoint spends real money, so keep it modest.
const RATE_LIMIT = { windowMs: 10 * 60 * 1000, max: 20 }
const buckets = new Map()

const isRateLimited = ip => {
  const now = Date.now()
  const bucket = buckets.get(ip)
  if (!bucket || now - bucket.start > RATE_LIMIT.windowMs) {
    buckets.set(ip, { start: now, count: 1 })
    return false
  }
  bucket.count += 1
  return bucket.count > RATE_LIMIT.max
}

// Drop stale buckets so the map cannot grow without bound.
setInterval(() => {
  const now = Date.now()
  for (const [ip, bucket] of buckets) {
    if (now - bucket.start > RATE_LIMIT.windowMs) buckets.delete(ip)
  }
}, RATE_LIMIT.windowMs).unref()

let client = null
const getClient = () => {
  if (!process.env.ANTHROPIC_API_KEY) return null
  client ??= new Anthropic({ timeout: REQUEST_TIMEOUT_MS, maxRetries: 1 })
  return client
}

const readJson = req =>
  new Promise((resolve, reject) => {
    let size = 0
    const chunks = []
    req.on('data', chunk => {
      size += chunk.length
      if (size > MAX_BODY_BYTES) {
        reject(Object.assign(new Error('payload too large'), { status: 413 }))
        req.destroy()
        return
      }
      chunks.push(chunk)
    })
    req.on('end', () => {
      try {
        resolve(JSON.parse(Buffer.concat(chunks).toString('utf8') || '{}'))
      } catch {
        reject(Object.assign(new Error('invalid JSON'), { status: 400 }))
      }
    })
    req.on('error', reject)
  })

/**
 * Validate and normalise the conversation: alternating user/assistant turns,
 * starting and ending with the user, trimmed to the size limits.
 */
export const normaliseMessages = raw => {
  if (!Array.isArray(raw) || raw.length === 0) return null
  const messages = []
  for (const m of raw.slice(-MAX_MESSAGES)) {
    const role =
      m?.role === 'assistant' ? 'assistant' : m?.role === 'user' ? 'user' : null
    const content = typeof m?.content === 'string' ? m.content.trim() : ''
    if (!role || !content) return null
    const last = messages[messages.length - 1]
    if (last && last.role === role) return null
    messages.push({ role, content: content.slice(0, MAX_MESSAGE_CHARS) })
  }
  // Conversations must begin with the user; drop a leading assistant turn.
  if (messages[0].role === 'assistant') messages.shift()
  if (messages.length === 0 || messages[messages.length - 1].role !== 'user')
    return null
  return messages
}

const send = (res, status, body) => {
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
  })
  res.end(JSON.stringify(body))
}

const clientIp = req =>
  (req.headers['x-forwarded-for'] ?? '').split(',')[0].trim() ||
  req.socket?.remoteAddress ||
  'unknown'

/**
 * Ask Claude. Exported separately so it can be unit-tested and reused.
 * @param {{ lang: 'es'|'en', messages: Array<{role: 'user'|'assistant', content: string}> }} input
 */
export const askClaude = async ({ lang, messages }) => {
  const anthropic = getClient()
  if (!anthropic) return { text: demoReply(lang), demo: true }

  const response = await anthropic.beta.messages.create({
    model: MODEL,
    max_tokens: MAX_OUTPUT_TOKENS,
    // Short factual replies: keep thinking on but shallow.
    output_config: { effort: 'low' },
    // Re-run on Anthropic's recommended fallback model if a safety classifier declines.
    betas: ['server-side-fallback-2026-07-01'],
    fallbacks: 'default',
    system: [
      {
        type: 'text',
        text: systemPrompt(lang),
        cache_control: { type: 'ephemeral' },
      },
    ],
    messages,
  })

  if (response.stop_reason === 'refusal') return { text: refusalReply(lang) }

  const text = response.content
    .filter(block => block.type === 'text')
    .map(block => block.text)
    .join('\n')
    .trim()

  return { text: text || refusalReply(lang) }
}

/** Node `http` / Connect-style handler for POST /api/ask. */
export const handleAsk = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return send(res, 405, { error: 'method not allowed' })
  }
  if (isRateLimited(clientIp(req))) {
    return send(res, 429, { error: 'too many requests' })
  }

  let body
  try {
    body = await readJson(req)
  } catch (err) {
    return send(res, err.status ?? 400, { error: err.message })
  }

  const lang = body.lang === 'en' ? 'en' : 'es'
  const messages = normaliseMessages(body.messages)
  if (!messages) return send(res, 400, { error: 'invalid messages' })

  try {
    return send(res, 200, await askClaude({ lang, messages }))
  } catch (err) {
    if (err instanceof Anthropic.RateLimitError) {
      return send(res, 429, { error: 'upstream rate limit' })
    }
    if (err instanceof Anthropic.APIError) {
      console.error(
        `[ask] Anthropic API error ${err.status ?? ''}: ${err.message}`
      )
      return send(res, 502, { error: 'upstream error' })
    }
    console.error('[ask] unexpected error', err)
    return send(res, 500, { error: 'internal error' })
  }
}
