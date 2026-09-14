/**
 * Hero — "Soy Alejandro. Construyo software con criterio." + the typing terminal.
 */
import React from 'react'
import { useLang } from '@/i18n'
import { NAVIGATION } from '@/constants/personal'
import { HERO, SITE } from '@/content/portfolio'
import { Eyebrow } from '@/core/ui/Eyebrow'
import { Terminal } from './Terminal'
import './Hero.css'

export const Hero: React.FC = () => {
  const { t } = useLang()
  const title = t(HERO.title)

  return (
    <header id="hero" className="hero" tabIndex={-1}>
      <div className="hero__copy">
        <Eyebrow>{HERO.eyebrow}</Eyebrow>
        <h1 className="hero__title">
          {title.lead}
          <br />
          {title.body}
          <span className="hero__accent">{title.accent}</span>.
        </h1>
        <p className="hero__bio">{t(HERO.bio)}</p>
        <div className="hero__actions">
          <a href={SITE.cvUrl} className="btn btn--primary" download>
            <span className="btn__icon" aria-hidden="true">
              ↓
            </span>
            {t(HERO.cvLabel)}
          </a>
          <a href={NAVIGATION.timeline} className="btn btn--ghost">
            ./cronologia →
          </a>
          <span className="hero__note">{HERO.cvNote}</span>
        </div>
      </div>
      <Terminal />
    </header>
  )
}
