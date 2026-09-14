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

    await waitFor(() => {
      expect(
        screen.getByText('Algo falló al consultar. Inténtalo de nuevo.')
      ).toBeInTheDocument()
    })
  })
})
