import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders without crashing', () => {
    const { container } = render(<App />)
    expect(container.textContent).toContain('TellMeAlex')
  })

  it('renders main sections', () => {
    const { container } = render(<App />)
    expect(container.textContent).toContain("Hi, I'm")
    expect(container.textContent).toContain('About Me')
    expect(container.textContent).toContain('Skills & Technologies')
    expect(container.textContent).toContain('Featured Projects')
    expect(container.textContent).toContain('Get In Touch')
  })

  it('has proper navigation links', () => {
    const { container } = render(<App />)
    expect(container.textContent).toContain('About')
    expect(container.textContent).toContain('Skills')
    expect(container.textContent).toContain('Projects')
  })
})
