import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders without crashing', () => {
    const { container } = render(<App />)
    expect(container.textContent).toContain('Alejandro')
  })

  it('renders main sections', () => {
    const { container } = render(<App />)
    expect(container.textContent).toContain('Hola, soy')
    expect(container.textContent).toContain('Sobre Mí')
    expect(container.textContent).toContain('Stack Técnico')
    expect(container.textContent).toContain('Contacto')
  })

  it('has proper navigation links', () => {
    const { container } = render(<App />)
    expect(container.textContent).toContain('Alejandro de la Fuente')
  })
})
