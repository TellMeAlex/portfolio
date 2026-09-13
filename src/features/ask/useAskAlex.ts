/**
 * useAskAlex — chat state for the `$ ask alex` panel.
 * Sends the conversation to `POST /api/ask` (see server/ask.mjs) and appends
 * the agent's plain-text reply. No memory across sessions: state lives here only.
 */
import { useCallback, useState } from 'react'
import type { Lang } from '@/i18n'
import { stripMarkdown } from '@/utils/text'

export interface ChatMessage {
  role: 'user' | 'bot'
  text: string
}

interface AskResponse {
  text?: string
  error?: string
}

export const ASK_ENDPOINT = '/api/ask'

/** Hard cap on what a visitor can type — mirrors the server-side limit. */
export const MAX_QUESTION_LENGTH = 600

export const useAskAlex = (lang: Lang, errorText: string) => {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [input, setInput] = useState('')
  const [busy, setBusy] = useState(false)

  const ask = useCallback(
    async (question?: string) => {
      const q = (question ?? input).trim().slice(0, MAX_QUESTION_LENGTH)
      if (!q || busy) return

      const history: ChatMessage[] = [...messages, { role: 'user', text: q }]
      setMessages(history)
      setInput('')
      setBusy(true)

      let reply: string
      try {
        const res = await fetch(ASK_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            lang,
            messages: history.map(m => ({
              role: m.role === 'user' ? 'user' : 'assistant',
              content: m.text,
            })),
          }),
        })
        const contentType = res.headers.get('content-type') ?? ''
        if (!res.ok || !contentType.includes('application/json')) {
          throw new Error(`ask failed: ${res.status}`)
        }
        const data = (await res.json()) as AskResponse
        if (!data.text) throw new Error(data.error ?? 'empty reply')
        reply = stripMarkdown(data.text)
      } catch {
        reply = errorText
      }

      setMessages([...history, { role: 'bot', text: reply }])
      setBusy(false)
    },
    [busy, errorText, input, lang, messages]
  )

  return { messages, input, setInput, busy, ask }
}
