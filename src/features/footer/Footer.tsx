/**
 * Footer — "Hecho con ♥ y agentes de IA · 2026 / exit 0"
 */
import React from 'react'
import { useLang } from '@/i18n'
import { getCurrentYear } from '@/utils/date'
import './Footer.css'

export const Footer: React.FC = () => {
  const { lang } = useLang()
  const es = lang === 'es'

  return (
    <footer className="footer" role="contentinfo">
      <span>
        {es ? 'Hecho con' : 'Made with'}{' '}
        <span className="footer__heart" aria-label={es ? 'amor' : 'love'}>
          ♥
        </span>{' '}
        {es ? 'y agentes de IA' : 'and AI agents'} · {getCurrentYear()}
      </span>
      <span>exit 0</span>
    </footer>
  )
}
