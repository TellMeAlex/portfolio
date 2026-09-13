/**
 * Production server: serves the Vite build from ./dist and mounts /api/ask.
 * Zero dependencies beyond the Anthropic SDK — replaces the previous nginx
 * runtime so the chatbot has a backend in the same container.
 *
 * Env: PORT (default 80), ANTHROPIC_API_KEY (optional — demo replies without it).
 */
import { createServer } from 'node:http'
import { createReadStream, statSync } from 'node:fs'
import { extname, join, normalize, resolve, sep } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createGzip } from 'node:zlib'
import { handleAsk } from './ask.mjs'

const here = fileURLToPath(new URL('.', import.meta.url))
const DIST = resolve(here, '..', 'dist')
const PORT = Number(process.env.PORT ?? 80)

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.map': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.pdf': 'application/pdf',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.webmanifest': 'application/manifest+json',
}

const COMPRESSIBLE = new Set([
  '.html',
  '.js',
  '.mjs',
  '.css',
  '.json',
  '.map',
  '.svg',
  '.txt',
  '.xml',
  '.webmanifest',
])

// Mirrors the headers the old nginx.conf applied to every response.
const SECURITY_HEADERS = {
  'X-Frame-Options': 'SAMEORIGIN',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy':
    'geolocation=(), microphone=(), camera=(), magnetometer=(), gyroscope=(), accelerometer=()',
  'Content-Security-Policy':
    "default-src 'self'; script-src 'self' 'wasm-unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https:; frame-ancestors 'self';",
}

const cacheControlFor = pathname => {
  // Vite hashes everything under /assets — safe to cache forever.
  if (pathname.startsWith('/assets/'))
    return 'public, max-age=31536000, immutable'
  if (pathname.endsWith('.html') || pathname === '/') {
    return 'public, must-revalidate, max-age=86400'
  }
  return 'public, max-age=604800'
}

const fileStat = filePath => {
  try {
    const stat = statSync(filePath)
    return stat.isFile() ? stat : null
  } catch {
    return null
  }
}

const sendFile = (req, res, filePath, pathname, status = 200) => {
  const stat = fileStat(filePath)
  if (!stat) {
    res.writeHead(404, { ...SECURITY_HEADERS, 'Content-Type': 'text/plain' })
    return res.end('Not found')
  }
  const ext = extname(filePath).toLowerCase()
  const headers = {
    ...SECURITY_HEADERS,
    'Content-Type': MIME[ext] ?? 'application/octet-stream',
    'Cache-Control': cacheControlFor(pathname),
    Vary: 'Accept-Encoding',
  }

  const wantsGzip = /\bgzip\b/.test(req.headers['accept-encoding'] ?? '')
  const gzip = wantsGzip && COMPRESSIBLE.has(ext) && stat.size > 1024
  if (gzip) headers['Content-Encoding'] = 'gzip'
  else headers['Content-Length'] = stat.size

  res.writeHead(status, headers)
  if (req.method === 'HEAD') return res.end()

  const stream = createReadStream(filePath)
  stream.on('error', () => res.destroy())
  if (gzip) stream.pipe(createGzip()).pipe(res)
  else stream.pipe(res)
}

const server = createServer((req, res) => {
  const url = new URL(req.url ?? '/', 'http://localhost')
  const pathname = decodeURIComponent(url.pathname)

  if (pathname === '/api/ask') return void handleAsk(req, res)
  if (pathname.startsWith('/api/')) {
    res.writeHead(404, { 'Content-Type': 'application/json' })
    return res.end('{"error":"not found"}')
  }

  if (pathname === '/health' || pathname === '/health.html') {
    res.writeHead(200, {
      'Content-Type': 'text/plain',
      'Cache-Control': 'no-store',
    })
    return res.end('ok')
  }

  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.writeHead(405, { ...SECURITY_HEADERS, Allow: 'GET, HEAD' })
    return res.end()
  }

  // Resolve inside dist only — reject any path that escapes it.
  const filePath = normalize(join(DIST, pathname))
  if (!filePath.startsWith(DIST + sep) && filePath !== DIST) {
    res.writeHead(403, SECURITY_HEADERS)
    return res.end()
  }

  if (fileStat(filePath)) return sendFile(req, res, filePath, pathname)

  // SPA fallback for extension-less routes; real missing files stay 404.
  if (!extname(pathname)) {
    return sendFile(req, res, join(DIST, 'index.html'), '/')
  }
  res.writeHead(404, { ...SECURITY_HEADERS, 'Content-Type': 'text/plain' })
  res.end('Not found')
})

server.listen(PORT, () => {
  const mode = process.env.ANTHROPIC_API_KEY
    ? 'live'
    : 'demo (no ANTHROPIC_API_KEY)'
  console.log(`tellmealex.dev listening on :${PORT} — /api/ask ${mode}`)
})

const shutdown = () => server.close(() => process.exit(0))
process.on('SIGTERM', shutdown)
process.on('SIGINT', shutdown)
