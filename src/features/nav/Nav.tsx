/**
 * Nav — terminal-style top bar: pulsing status dot, `~/tellmealex — zsh`,
 * section links, CV pill and the ES/EN toggle.
 */
import React from 'react'
import { useLang } from '@/i18n'
import { NAVIGATION } from '@/constants/personal'
import { SITE } from '@/content/portfolio'
import './Nav.css'

export const Nav: React.FC = () => {
  const { lang, toggleLang } = useLang()
  const es = lang === 'es'

  return (
    <nav
      id="navigation"
      className="nav"
      aria-label={es ? 'Navegación principal' : 'Main navigation'}
    >
      <a href={NAVIGATION.hero} className="nav__brand">
        <span className="nav__dot" aria-hidden="true" />
        <span className="nav__brand-name">~/{SITE.name}</span>
        <span className="nav__brand-shell" aria-hidden="true">
          — zsh
        </span>
      </a>
      <div className="nav__links">
        <a href={NAVIGATION.talks} className="nav__link">
          ./charlas
        </a>
        <a href={NAVIGATION.timeline} className="nav__link">
          ./cronologia
        </a>
        <a href={NAVIGATION.ask} className="nav__link nav__link--ask">
          $ ask alex
        </a>
        <a
          href={SITE.cvUrl}
          className="nav__cv"
          download
          aria-label={es ? 'Descargar CV en PDF' : 'Download CV as PDF'}
        >
          <span aria-hidden="true">↓</span> cv.pdf
        </a>
        <button
          type="button"
          className="lang-toggle"
          onClick={toggleLang}
          aria-label={es ? 'Switch to English' : 'Cambiar a español'}
          aria-pressed={!es}
        >
          {es ? 'ES · en' : 'es · EN'}
        </button>
      </div>
    </nav>
  )
}
