import React, { useEffect } from 'react'
import { SkipLinks } from './core/layout/SkipLinks'
import { initPerformanceMonitor } from './utils/performance'
import { useKeyboardNav } from './hooks/useKeyboardNav'
import { useLang } from './i18n'
import { Nav } from './features/nav'
import { Hero } from './features/hero'
import { Talks } from './features/talks'
import { Timeline } from './features/timeline'
import { AskAlex } from './features/ask'
import { About } from './features/about'
import { Footer } from './features/footer'
import './App.css'

const App: React.FC = () => {
  const { lang } = useLang()

  // Core Web Vitals tracking
  useEffect(() => {
    initPerformanceMonitor()
  }, [])

  // Alt+1-6 section shortcuts
  useKeyboardNav()

  return (
    <>
      {/* Skip Links for Accessibility - WCAG 2.4.1 */}
      <SkipLinks
        links={[
          {
            href: '#main-content',
            label:
              lang === 'es'
                ? 'Saltar al contenido principal'
                : 'Skip to main content',
          },
          {
            href: '#navigation',
            label:
              lang === 'es' ? 'Saltar a la navegación' : 'Skip to navigation',
          },
        ]}
      />

      <div className="page">
        <div className="page__bar" aria-hidden="true" />
        <Nav />
        <main
          id="main-content"
          tabIndex={-1}
          aria-label={
            lang === 'es'
              ? 'Portfolio de Alejandro de la Fuente'
              : "Alejandro de la Fuente's portfolio"
          }
        >
          <Hero />
          <Talks />
          <Timeline />
          <AskAlex />
          <About />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
