/**
 * useAskAlex — chat state for the `$ ask alex` panel.
 * Sends the conversation to `POST /api/ask` (see server/ask.mjs) and appends
 * the agent's plain-text reply. No memory across sessions: state lives here only.
 */
import { useCallback, useEffect, useState } from 'react'
import type { Lang } from '@/i18n'
import { stripMarkdown } from '@/utils/text'
import { askLocally, localAvailability } from './chromeAi'

export interface ChatMessage {
  role: 'user' | 'bot'
  text: string
}

interface AskResponse {
  text?: string
  error?: string
  demo?: boolean
}

export const ASK_ENDPOINT = '/api/ask'

/** Hard cap on what a visitor can type — mirrors the server-side limit. */
export const MAX_QUESTION_LENGTH = 600

export const useAskAlex = (lang: Lang, errorText: string) => {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [input, setInput] = useState('')
  const [busy, setBusy] = useState(false)
  const [status, setStatus] = useState<
    'unknown' | 'local' | 'online' | 'demo' | 'error'
  >('unknown')
  const [availability, setAvailability] = useState('unavailable')
  const [progress, setProgress] = useState<number | null>(null)
  const [pendingQuestion, setPendingQuestion] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    localAvailability(lang).then(
      value => {
        if (!cancelled) setAvailability(value)
      },
      () => {
        if (!cancelled) setAvailability('unavailable')
      }
    )
    return () => {
      cancelled = true
    }
  }, [lang])

  const enableLocal = useCallback(async () => {
    setBusy(true)
    setStatus('unknown')
    setProgress(0)
    try {
      const result = await askLocally(
        lang,
        lang === 'es' ? 'Hola' : 'Hello',
        setProgress,
        true
      )
      if (!result) throw new Error('Local model unavailable')
      setAvailability('available')
      setStatus('local')
    } catch {
      setStatus('error')
    } finally {
      setProgress(null)
      setBusy(false)
    }
  }, [lang])

  const ask = useCallback(
    async (question?: string, approved = false) => {
      const q = (question ?? input).trim().slice(0, MAX_QUESTION_LENGTH)
      if (!q || busy) return
      if (availability !== 'available' && !approved) {
        setPendingQuestion(q)
        return
      }
      setPendingQuestion(null)
      const history: ChatMessage[] = [...messages, { role: 'user', text: q }]
      setMessages(history)
      setInput('')
      setBusy(true)

      let reply: string
      try {
        const local = approved
          ? null
          : await askLocally(
              lang,
              q,
              () => {},
              false,
              messages.map(m => ({
                role: m.role === 'bot' ? 'assistant' : 'user',
                content: m.text,
              }))
            )
        if (local) {
          reply = stripMarkdown(local.text)
          setStatus('local')
        } else if (approved) {
          const res = await fetch(ASK_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              lang,
              messages: [{ role: 'user', content: q }],
            }),
          })
          const contentType = res.headers.get('content-type') ?? ''
          if (!res.ok || !contentType.includes('application/json')) {
            throw new Error(`ask failed: ${res.status}`)
          }
          const data = (await res.json()) as AskResponse
          if (!data.text) throw new Error(data.error ?? 'empty reply')
          reply = stripMarkdown(data.text)
          setStatus(data.demo ? 'demo' : 'online')
        } else {
          setPendingQuestion(q)
          setMessages(messages)
          setBusy(false)
          return
        }
      } catch {
        if (!approved) {
          setPendingQuestion(q)
          setMessages(messages)
          setStatus('error')
          setBusy(false)
          return
        }
        setStatus('error')
        reply = errorText
      }

      setMessages([...history, { role: 'bot', text: reply }])
      setBusy(false)
    },
    [availability, busy, errorText, input, lang, messages]
  )

  const approveRemote = useCallback(() => {
    if (pendingQuestion) void ask(pendingQuestion, true)
  }, [ask, pendingQuestion])

  return {
    messages,
    input,
    setInput,
    busy,
    status,
    availability,
    progress,
    enableLocal,
    pendingQuestion,
    approveRemote,
    cancelRemote: () => setPendingQuestion(null),
    ask,
  }
}
