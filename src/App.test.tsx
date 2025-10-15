import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
    expect(screen.getByText('TellMeAlex')).toBeInTheDocument()
  })

  it('renders main sections', () => {
    render(<App />)
    expect(screen.getByText("Hi, I'm")).toBeInTheDocument()
    expect(screen.getByText('About Me')).toBeInTheDocument()
    expect(screen.getByText('Skills & Technologies')).toBeInTheDocument()
    expect(screen.getByText('Featured Projects')).toBeInTheDocument()
    expect(screen.getAllByText('Get In Touch').length).toBeGreaterThan(0)
  })

  it('has proper navigation links', () => {
    render(<App />)
    const navigation = screen.getByRole('navigation')
    expect(navigation).toBeInTheDocument()

    // Check specific navigation links in header
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Skills')).toBeInTheDocument()
    expect(screen.getByText('Projects')).toBeInTheDocument()
  })
})