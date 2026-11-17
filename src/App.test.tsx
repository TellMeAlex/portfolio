import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import App from './App'
import { LanguageProvider, type Lang } from './i18n'
import { TALKS, TIMELINE } from './content/portfolio'

const renderApp = (lang: Lang = 'es') =>
  render(
    <LanguageProvider initialLang={lang}>
      <App />
    </LanguageProvider>
  )

const jsonResponse = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  })

describe('App', () => {
  beforeEach(() => {
    vi.stubGlobal('fetch', vi.fn())
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('renders the hero, the 9 talks and the full timeline', () => {
    renderApp()
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Soy Alejandro'
    )
    const talks = screen.getByRole('region', { name: /ls charlas/ })
    expect(within(talks).getAllByRole('listitem')).toHaveLength(TALKS.length)
    expect(
      screen.getByText(`${TIMELINE.length} commits · 2021 → 2026`)
    ).toBeInTheDocument()
  })

  it('toggles between Spanish and English', async () => {
    const user = userEvent.setup()
    renderApp()
    await user.click(screen.getByRole('button', { name: 'Switch to English' }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      "I'm Alejandro"
    )
    expect(document.documentElement.lang).toBe('en')
    await user.click(screen.getByRole('button', { name: 'Cambiar a español' }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Soy Alejandro'
    )
  })

  it('filters the timeline and rewrites the git log command', async () => {
    const user = userEvent.setup()
    renderApp()
    const talkCount = TIMELINE.filter(e => e.kind === 'talk').length

    await user.click(screen.getByRole('button', { name: /^charlas/ }))

    expect(
      screen.getByRole('heading', { name: /git log --oneline --grep=talk/ })
    ).toBeInTheDocument()
    expect(
      screen.getByText(`${talkCount} commits · 2021 → 2026`)
    ).toBeInTheDocument()
    const timeline = screen.getByRole('region', { name: /git log/ })
    expect(within(timeline).getAllByRole('listitem')).toHaveLength(talkCount)
  })

  it('uses Chrome built-in AI when available without contacting the server', async () => {
    const user = userEvent.setup()
    const session = {
      prompt: vi.fn().mockResolvedValue('MCP Servers — 45 min.'),
      destroy: vi.fn(),
    }
    vi.stubGlobal('LanguageModel', {
      availability: vi.fn().mockResolvedValue('available'),
      create: vi.fn().mockResolvedValue(session),
    })
    renderApp()
    await user.click(
      screen.getByRole('button', { name: '¿En qué charla hablas de MCP?' })
    )
    expect(await screen.findByText('MCP Servers — 45 min.')).toBeInTheDocument()
    expect(fetch).not.toHaveBeenCalled()
    expect(screen.getByText('IA local')).toBeInTheDocument()
    expect(session.destroy).toHaveBeenCalledOnce()
  })

  it('preserves the last local exchange as context for a follow-up', async () => {
    const user = userEvent.setup()
    const session = {
      prompt: vi
        .fn()
        .mockResolvedValueOnce('Primera respuesta')
        .mockResolvedValueOnce('Segunda respuesta'),
      destroy: vi.fn(),
    }
    const create = vi.fn().mockResolvedValue(session)
    vi.stubGlobal('LanguageModel', {
      availability: vi.fn().mockResolvedValue('available'),
      create,
    })
    renderApp()
    const input = screen.getByLabelText('pregunta algo sobre Alejandro…')
    await user.type(input, 'primera{enter}')
    await within(screen.getByRole('log')).findByText('Primera respuesta')
    await user.type(input, '¿y después?{enter}')
    await within(screen.getByRole('log')).findByText('Segunda respuesta')
    expect(create.mock.calls[1][0].initialPrompts).toEqual(
      expect.arrayContaining([
        { role: 'user', content: 'primera' },
        { role: 'assistant', content: 'Primera respuesta' },
      ])
    )
  })

  it('never sends a question remotely until the visitor chooses server mode', async () => {
    const user = userEvent.setup()
    renderApp()
    await user.click(
      screen.getByRole('button', { name: '¿En qué charla hablas de MCP?' })
    )
    expect(fetch).not.toHaveBeenCalled()
    expect(
      await screen.findByText(/usar el servidor envía/i)
    ).toBeInTheDocument()
    vi.mocked(fetch).mockResolvedValueOnce(
      jsonResponse({ text: 'MCP Servers' })
    )
    await user.click(screen.getByRole('button', { name: /usar servidor/i }))
    expect(
      await within(screen.getByRole('log')).findByText('MCP Servers')
    ).toBeInTheDocument()
    const body = JSON.parse(vi.mocked(fetch).mock.calls[0][1]?.body as string)
    expect(body.messages).toEqual([
      { role: 'user', content: '¿En qué charla hablas de MCP?' },
    ])
  })

  it('requires fresh consent for each remote question and sends no history', async () => {
    const user = userEvent.setup()
    vi.mocked(fetch).mockResolvedValue(jsonResponse({ text: 'Respuesta' }))
    renderApp()
    const input = screen.getByLabelText('pregunta algo sobre Alejandro…')
    await user.type(input, 'primera{enter}')
    await user.click(
      await screen.findByRole('button', { name: /usar servidor/i })
    )
    await within(screen.getByRole('log')).findByText('Respuesta')
    await user.type(input, 'segunda{enter}')
    expect(fetch).toHaveBeenCalledTimes(1)
    await user.click(
      await screen.findByRole('button', { name: /usar servidor/i })
    )
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(2))
    expect(
      JSON.parse(vi.mocked(fetch).mock.calls[1][1]?.body as string).messages
    ).toEqual([{ role: 'user', content: 'segunda' }])
  })

  it('sends a question to /api/ask and renders the plain-text reply', async () => {
    const user = userEvent.setup()
    const fetchMock = vi.mocked(fetch)
    fetchMock.mockResolvedValueOnce(
      jsonResponse({ text: '**MCP Servers** — 45 min.' })
    )
    renderApp()

    await user.click(
      screen.getByRole('button', { name: '¿En qué charla hablas de MCP?' })
    )
    await user.click(
      await screen.findByRole('button', { name: /usar servidor/i })
    )

    expect(fetchMock).toHaveBeenCalledWith(
      '/api/ask',
      expect.objectContaining({ method: 'POST' })
    )
    const body = JSON.parse(fetchMock.mock.calls[0][1]?.body as string)
    expect(body).toEqual({
      lang: 'es',
      messages: [{ role: 'user', content: '¿En qué charla hablas de MCP?' }],
    })
    await waitFor(() => {
      expect(screen.getByText('MCP Servers — 45 min.')).toBeInTheDocument()
    })
  })

  it('offers the CV download from the site', () => {
    renderApp()
    expect(document.querySelectorAll('a[href="/cv.pdf"]')).toHaveLength(3)
  })

  it('does not present the unavailable Skills vs Subagentes resource as a link', () => {
    renderApp()
    expect(
      screen.queryByRole('link', { name: /Skills vs Subagentes/ })
    ).not.toBeInTheDocument()
    expect(screen.getByText('Material no disponible')).toBeInTheDocument()
  })

  it('links the Vibe Coding card to the matching public essay', () => {
    renderApp()
    expect(
      screen.getByRole('link', { name: /Vibe Coding vs Software Engineering/ })
    ).toHaveAttribute(
      'href',
      'https://codigosinsiesta.com/ensayos/vibe-coding-vs-software-engineering/'
    )
  })

  it('never claims the agent is online when it returns a demo', async () => {
    const user = userEvent.setup()
    vi.mocked(fetch).mockResolvedValueOnce(
      jsonResponse({ text: 'Demo sin conexión', demo: true })
    )
    renderApp()
    expect(screen.queryByText('online')).not.toBeInTheDocument()

    await user.click(
      screen.getByRole('button', { name: '¿En qué charla hablas de MCP?' })
    )
    await user.click(
      await screen.findByRole('button', { name: /usar servidor/i })
    )
    expect(await screen.findByText('Demo sin conexión')).toBeInTheDocument()
    expect(screen.getByText('demo sin conexión')).toBeInTheDocument()
  })

  it('shows a friendly error when the agent endpoint fails', async () => {
    const user = userEvent.setup()
    vi.mocked(fetch).mockResolvedValueOnce(
      new Response('<html>', { status: 404 })
    )
    renderApp()

    await user.type(
      screen.getByLabelText('pregunta algo sobre Alejandro…'),
      'hola{enter}'
    )
    await user.click(
      await screen.findByRole('button', { name: /usar servidor/i })
    )

    await waitFor(() => {
      expect(
        screen.getByText('Algo falló al consultar. Inténtalo de nuevo.')
      ).toBeInTheDocument()
    })
  })
})
