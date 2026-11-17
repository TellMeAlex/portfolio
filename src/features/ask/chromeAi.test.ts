import { afterEach, describe, expect, it, vi } from 'vitest'
import { askLocally } from './chromeAi'

afterEach(() => vi.unstubAllGlobals())

describe('Chrome built-in AI', () => {
  it('returns null without a supported LanguageModel', async () => {
    vi.stubGlobal('LanguageModel', undefined)
    expect(await askLocally('es', '¿Qué haces?', () => {})).toBeNull()
  })

  it('answers locally when the model is ready and destroys the session', async () => {
    const session = {
      prompt: vi.fn().mockResolvedValue('Trabajo con IA.'),
      destroy: vi.fn(),
    }
    const availability = vi.fn().mockResolvedValue('available')
    const create = vi.fn().mockResolvedValue(session)
    vi.stubGlobal('LanguageModel', { availability, create })

    expect(await askLocally('es', '¿Qué haces?', () => {})).toEqual({
      text: 'Trabajo con IA.',
    })
    expect(availability).toHaveBeenCalledOnce()
    expect(create).toHaveBeenCalledOnce()
    expect(session.prompt).toHaveBeenCalledWith('¿Qué haces?')
    expect(session.destroy).toHaveBeenCalledOnce()
  })

  it('does not download a model implicitly when it is downloadable', async () => {
    const create = vi.fn()
    vi.stubGlobal('LanguageModel', {
      availability: vi.fn().mockResolvedValue('downloadable'),
      create,
    })
    expect(await askLocally('es', 'Hola', () => {})).toBeNull()
    expect(create).not.toHaveBeenCalled()
  })

  it('downloads the model only after explicit opt-in and reports progress', async () => {
    const session = {
      prompt: vi.fn().mockResolvedValue('OK'),
      destroy: vi.fn(),
    }
    const create = vi.fn().mockImplementation(async options => {
      options.monitor({
        addEventListener: (_: string, cb: (e: { loaded: number }) => void) =>
          cb({ loaded: 0.5 }),
      })
      return session
    })
    vi.stubGlobal('LanguageModel', {
      availability: vi.fn().mockResolvedValue('downloadable'),
      create,
    })
    const onProgress = vi.fn()
    expect(await askLocally('es', 'Hola', onProgress, true)).toEqual({
      text: 'OK',
    })
    expect(onProgress).toHaveBeenCalledWith(0.5)
    expect(create).toHaveBeenCalledOnce()
  })

  it('cleans up when inference fails', async () => {
    const session = {
      prompt: vi.fn().mockRejectedValue(new Error('failed')),
      destroy: vi.fn(),
    }
    vi.stubGlobal('LanguageModel', {
      availability: vi.fn().mockResolvedValue('available'),
      create: vi.fn().mockResolvedValue(session),
    })
    await expect(askLocally('en', 'Hello', () => {})).rejects.toThrow('failed')
    expect(session.destroy).toHaveBeenCalledOnce()
  })
})
