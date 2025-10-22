import React from 'react'
import { BentoGrid } from './core/layout/BentoGrid'
import { SkipLinks } from './core/layout/SkipLinks'
import { ThemeToggle } from './core/ui/ThemeToggle'
import { ScrollProgress } from './core/ui/ScrollProgress'
import { Hero } from './features/hero'
import { About } from './features/about'
import { AILeadership } from './features/ai-leadership'
import { Contact } from './features/contact'
import { Skills } from './features/skills'
import { ProjectsCounter, ExperienceCounter } from './features/stats'
import { Experience } from './features/experience'
import { Projects } from './features/projects'

const App: React.FC = () => {
  return (
    <>
      {/* Skip Links for Accessibility - WCAG 2.4.1 */}
      <SkipLinks />

      {/* Scroll Progress Indicator */}
      <ScrollProgress />

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

            {/* AI Leadership Section - Large (2x2) */}
            <AILeadership />

            {/* Experience Timeline - XL (3x2) */}
            <Experience />

            {/* Projects Showcase - XL (3x3) */}
            <Projects />

            {/* Skills Section - Medium (2x1) */}
            <Skills />

            {/* Stats Cards - Small (1x1) */}
            <ProjectsCounter />
            <ExperienceCounter />

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
            Phase 4: Advanced Animations & Microinteractions ✨
          </p>
        </footer>
      </div>
    </>
  )
}

export default App
