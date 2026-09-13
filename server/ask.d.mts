import type { IncomingMessage, ServerResponse } from 'node:http'

export declare const handleAsk: (
  req: IncomingMessage,
  res: ServerResponse
) => Promise<void>

export declare const askClaude: (input: {
  lang: 'es' | 'en'
  messages: Array<{ role: 'user' | 'assistant'; content: string }>
}) => Promise<{ text: string; demo?: true }>

export declare const normaliseMessages: (
  raw: unknown
) => Array<{ role: 'user' | 'assistant'; content: string }> | null
