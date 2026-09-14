import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { askClaude, normaliseMessages } from './ask.mjs'

describe('normaliseMessages', () => {
  it('accepts an alternating conversation ending with the user', () => {
    expect(
      normaliseMessages([
        { role: 'user', content: 'hola' },
        { role: 'assistant', content: 'hey' },
        { role: 'user', content: '  ¿MCP?  ' },
      ])
    ).toEqual([
      { role: 'user', content: 'hola' },
      { role: 'assistant', content: 'hey' },
      { role: 'user', content: '¿MCP?' },
    ])
  })

  it('rejects empty, malformed or non-alternating input', () => {
    expect(normaliseMessages([])).toBeNull()
    expect(normaliseMessages('nope')).toBeNull()
    expect(normaliseMessages([{ role: 'user', content: '' }])).toBeNull()
    expect(normaliseMessages([{ role: 'system', content: 'x' }])).toBeNull()
    expect(
      normaliseMessages([
        { role: 'user', content: 'a' },
        { role: 'user', content: 'b' },
      ])
    ).toBeNull()
    expect(normaliseMessages([{ role: 'assistant', content: 'a' }])).toBeNull()
  })

  it('truncates long messages and keeps only the latest turns', () => {
    const long = 'x'.repeat(1000)
    const many = Array.from({ length: 29 }, (_, i) => ({
      role: i % 2 === 0 ? 'user' : 'assistant',
      content: `m${i}`,
    }))
    expect(
      normaliseMessages([{ role: 'user', content: long }])[0].content
    ).toHaveLength(600)
    const trimmed = normaliseMessages(many)
    expect(trimmed.length).toBeLessThanOrEqual(12)
    expect(trimmed.at(-1)).toEqual({ role: 'user', content: 'm28' })
  })
})

describe('askClaude', () => {
  const original = process.env.ANTHROPIC_API_KEY
  beforeEach(() => {
    delete process.env.ANTHROPIC_API_KEY
  })
  afterEach(() => {
    if (original) process.env.ANTHROPIC_API_KEY = original
  })

  it('returns a demo reply in the requested language when no key is configured', async () => {
    const es = await askClaude({
      lang: 'es',
      messages: [{ role: 'user', content: 'hola' }],
    })
    const en = await askClaude({
      lang: 'en',
      messages: [{ role: 'user', content: 'hi' }],
    })
    expect(es.demo).toBe(true)
    expect(es.text).toMatch(/Demo sin conexión/)
    expect(en.text).toMatch(/Offline demo/)
  })
})
