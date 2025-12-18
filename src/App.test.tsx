import { render, waitFor } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders without crashing', () => {
    const { container } = render(<App />)
    expect(container.textContent).toContain('Alejandro')
  })

  it('renders main sections including lazy-loaded components', async () => {
    const { container } = render(<App />)

    // Above-the-fold content (eager loaded) should be available immediately
    expect(container.textContent).toContain('Hola, soy')
    expect(container.textContent).toContain('Sobre Mí')
    expect(container.textContent).toContain('Contacto')

    // Wait for lazy-loaded components to render
    await waitFor(
      () => {
        expect(container.textContent).toContain('Stack Técnico')
      },
      { timeout: 3000 }
    )
  })

  it('has proper navigation links', () => {
    const { container } = render(<App />)
    expect(container.textContent).toContain('Alejandro de la Fuente')
  })
})
