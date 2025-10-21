import React from 'react'
import { BentoGrid } from './core/layout/BentoGrid'
import { Card } from './core/layout/Card'
import { SkipLinks } from './core/layout/SkipLinks'
import { ThemeToggle } from './core/ui/ThemeToggle'
import { Hero } from './features/hero'
import { About } from './features/about'
import { Contact } from './features/contact'

const App: React.FC = () => {
  return (
    <>
      {/* Skip Links for Accessibility - WCAG 2.4.1 */}
      <SkipLinks />

      {/* Main Content */}
      <div className="min-h-screen">
        {/* Header with Theme Toggle */}
        <header
          id="navigation"
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 100,
            padding: '1rem 2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: 'var(--color-bg-secondary)',
            borderBottom: '1px solid rgba(100, 255, 218, 0.1)',
          }}
        >
          <h1
            style={{
              fontSize: 'var(--text-2xl)',
              fontWeight: 'var(--font-bold)',
              color: 'var(--color-text-primary)',
            }}
          >
            Alejandro de la Fuente
          </h1>
          <ThemeToggle />
        </header>

        {/* Main Portfolio Grid */}
        <main id="main-content" tabIndex={-1}>
          <BentoGrid>
            {/* Hero Section - XL (3x2) */}
            <Hero />

            {/* About Section - Large (2x2) */}
            <About />

            {/* Skills Card - Medium (2x1) */}
            <Card size="medium" ariaLabel="Skills">
              <div className="card-header">
                <h2 className="card-title">Habilidades</h2>
              </div>
              <div className="card-body">
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 'var(--space-2)',
                  }}
                >
                  {[
                    'React',
                    'TypeScript',
                    'AI',
                    'Microfrontends',
                    'Node.js',
                    'Leadership',
                  ].map(skill => (
                    <span
                      key={skill}
                      style={{
                        padding: 'var(--space-2) var(--space-4)',
                        background: 'rgba(100, 255, 218, 0.1)',
                        borderRadius: 'var(--radius-full)',
                        fontSize: 'var(--text-sm)',
                        color: 'var(--color-accent)',
                        border: '1px solid var(--color-cyan)',
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Card>

            {/* Stats Cards - Small (1x1) */}
            <Card size="small" ariaLabel="Projects completed">
              <div
                className="card-body"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                }}
              >
                <h3
                  style={{
                    fontSize: 'var(--text-5xl)',
                    fontWeight: 'var(--font-bold)',
                    color: 'var(--color-cyan)',
                  }}
                >
                  50+
                </h3>
                <p style={{ color: 'var(--color-text-secondary)' }}>
                  Proyectos completados
                </p>
              </div>
            </Card>

            <Card size="small" ariaLabel="Years of experience">
              <div
                className="card-body"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                }}
              >
                <h3
                  style={{
                    fontSize: 'var(--text-5xl)',
                    fontWeight: 'var(--font-bold)',
                    color: 'var(--color-cyan)',
                  }}
                >
                  3+
                </h3>
                <p style={{ color: 'var(--color-text-secondary)' }}>
                  Años de experiencia
                </p>
              </div>
            </Card>

            {/* Contact Section - Medium (2x1) */}
            <Contact />
          </BentoGrid>
        </main>

        {/* Footer */}
        <footer
          style={{
            padding: 'var(--space-16) var(--space-8)',
            textAlign: 'center',
            borderTop: '1px solid rgba(100, 255, 218, 0.1)',
          }}
        >
          <p
            style={{
              color: 'var(--color-text-secondary)',
              fontSize: 'var(--text-sm)',
            }}
          >
            © 2025 Alejandro de la Fuente. Built with React + TypeScript.
          </p>
          <p
            style={{
              color: 'var(--color-text-secondary)',
              fontSize: 'var(--text-xs)',
              marginTop: 'var(--space-2)',
            }}
          >
            Phase 1: Foundation & Design System ✨
          </p>
        </footer>
      </div>
    </>
  )
}

export default App
