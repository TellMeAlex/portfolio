import React, { lazy, Suspense, useEffect, useState } from 'react'
import { BentoGrid } from './core/layout/BentoGrid'
import { SkipLinks } from './core/layout/SkipLinks'
import { ThemeToggle } from './core/ui/ThemeToggle'
import { PaletteSelector } from './core/ui/PaletteSelector'
import { ScrollProgress } from './core/ui/ScrollProgress'
import { CardSkeleton } from './core/ui/CardSkeleton'
import { AccessibilityButton } from './core/ui/AccessibilityButton'
import { AccessibilityPanel } from './core/ui/AccessibilityPanel'
import { initPerformanceMonitor } from './utils/performance'
import { useKeyboardNav } from './hooks/useKeyboardNav'
import { announceToScreenReader } from './utils/screenReader'
import './App.css'

// Critical above-the-fold components (eager loading)
import { Hero } from './features/hero'
import { About } from './features/about'
import { AILeadership } from './features/ai-leadership'
import { Contact } from './features/contact'

// Below-the-fold components (lazy loading for better performance)
const Experience = lazy(() =>
  import('./features/experience').then(m => ({ default: m.Experience }))
)
const Projects = lazy(() =>
  import('./features/projects').then(m => ({ default: m.Projects }))
)
const Skills = lazy(() =>
  import('./features/skills').then(m => ({ default: m.Skills }))
)
const ProjectsCounter = lazy(() =>
  import('./features/stats').then(m => ({ default: m.ProjectsCounter }))
)
const ExperienceCounter = lazy(() =>
  import('./features/stats').then(m => ({ default: m.ExperienceCounter }))
)

const App: React.FC = () => {
  const [isAccessibilityPanelOpen, setIsAccessibilityPanelOpen] =
    useState(false)

  // Initialize Performance Monitor for Core Web Vitals tracking
  useEffect(() => {
    initPerformanceMonitor()
  }, [])

  // Enable keyboard navigation shortcuts (Alt+1-6)
  useKeyboardNav()

  // Alt+A to toggle accessibility panel
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.altKey && event.key.toLowerCase() === 'a') {
        event.preventDefault()
        setIsAccessibilityPanelOpen(prev => !prev)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Announce accessibility panel state changes
  useEffect(() => {
    if (isAccessibilityPanelOpen) {
      announceToScreenReader('Panel de accesibilidad abierto', 'polite')
    }
  }, [isAccessibilityPanelOpen])

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
            padding: '1rem var(--grid-padding-mobile)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: 'var(--color-bg-secondary)',
            borderBottom: '1px solid rgba(var(--color-accent-rgb), 0.1)',
            maxWidth: 'var(--grid-max-width)',
            margin: '0 auto',
            width: '100%',
            boxSizing: 'border-box',
          }}
        >
          <div
            role="banner"
            aria-label="Site logo"
            style={{
              fontSize: 'var(--text-2xl)',
              fontWeight: 'var(--font-bold)',
              color: 'var(--color-text-primary)',
            }}
          >
            Alejandro de la Fuente
          </div>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <PaletteSelector />
            <ThemeToggle />
          </div>
        </header>

        {/* Main Portfolio Grid */}
        <main
          id="main-content"
          tabIndex={-1}
          aria-label="Portfolio principal de Alejandro de la Fuente"
        >
          <BentoGrid>
            {/* Hero Section - XL (3x2) */}
            <Hero />

            {/* About Section - Large (2x2) */}
            <About />

            {/* AI Leadership Section - Large (2x2) */}
            <AILeadership />

            {/* Experience Timeline - XL (3x2) - Lazy loaded */}
            <Suspense
              fallback={
                <CardSkeleton
                  size="xl"
                  ariaLabel="Cargando experiencia laboral"
                />
              }
            >
              <Experience />
            </Suspense>

            {/* Projects Showcase - XL (3x3) - Lazy loaded */}
            <Suspense
              fallback={
                <CardSkeleton size="xl" ariaLabel="Cargando proyectos" />
              }
            >
              <Projects />
            </Suspense>

            {/* Skills Section - Large (2x2) - Lazy loaded */}
            <Suspense
              fallback={
                <CardSkeleton
                  size="large"
                  ariaLabel="Cargando habilidades técnicas"
                />
              }
            >
              <Skills />
            </Suspense>

            {/* Stats Cards - Small (1x1) - Lazy loaded */}
            <Suspense
              fallback={
                <CardSkeleton
                  size="small"
                  ariaLabel="Cargando contador de proyectos"
                />
              }
            >
              <ProjectsCounter />
            </Suspense>
            <Suspense
              fallback={
                <CardSkeleton
                  size="small"
                  ariaLabel="Cargando años de experiencia"
                />
              }
            >
              <ExperienceCounter />
            </Suspense>

            {/* Contact Section - Medium (2x1) */}
            <Contact />
          </BentoGrid>
        </main>

        {/* Footer */}
        <footer
          style={{
            padding: 'var(--space-16) var(--grid-padding-mobile)',
            textAlign: 'center',
            borderTop: '1px solid rgba(var(--color-accent-rgb), 0.1)',
            maxWidth: 'var(--grid-max-width)',
            margin: '0 auto',
            width: '100%',
            boxSizing: 'border-box',
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
            Phase 6: Final Polish & Accessibility ♿
          </p>
        </footer>
      </div>

      {/* Accessibility Controls */}
      <AccessibilityButton onClick={() => setIsAccessibilityPanelOpen(true)} />
      <AccessibilityPanel
        isOpen={isAccessibilityPanelOpen}
        onClose={() => setIsAccessibilityPanelOpen(false)}
      />
    </>
  )
}

export default App
