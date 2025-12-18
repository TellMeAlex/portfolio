import React from 'react'
import { Card } from '@/core/layout/Card'
import { Button } from '@/core/ui/Button'
import { useTypingEffect } from '@/hooks/useTypingEffect'
import { scrollToSection } from '@/utils/scroll'
import './Hero.css'

export const Hero: React.FC = () => {
  const { displayText } = useTypingEffect({
    text: 'Technical Leader Specialist | Experto en IA',
    speed: 80,
    loop: false,
    startDelay: 800,
  })

  return (
    <Card
      size="xl"
      ariaLabel="Sección de presentación"
      className="hero-card"
      id="hero"
      keyboardHint="1"
    >
      <div className="hero-content">
        {/* Hero Text */}
        <div className="hero-text">
          <h2 id="hero-heading" className="hero-name">
            <span role="img" aria-label="Mano saludando" aria-hidden="true">
              👋
            </span>{' '}
            Hola, soy Alejandro
          </h2>

          <div
            className="hero-title"
            aria-live="polite"
            aria-label="Especialidad profesional con efecto de escritura"
          >
            <span className="typed-text" role="text">
              {displayText}
              <span className="typing-cursor" aria-hidden="true" />
            </span>
          </div>

          <p className="hero-subtitle">
            Liderando la transformación digital con IA en NTT DATA
          </p>

          <div className="hero-location" aria-label="Ubicación profesional">
            <span className="location-icon" aria-hidden="true">
              📍
            </span>
            <span>
              Jaén, Andalucía{' '}
              <span role="img" aria-label="España" aria-hidden="true">
                🇪🇸
              </span>
            </span>
          </div>
        </div>

        {/* CTAs */}
        <nav className="hero-actions" aria-label="Acciones principales">
          <Button
            variant="primary"
            onClick={() => scrollToSection('projects')}
            ariaLabel="Navegar a la sección de proyectos destacados"
          >
            <span>Ver Proyectos</span>
            <span className="btn-icon" aria-hidden="true">
              →
            </span>
          </Button>
          <Button
            variant="secondary"
            onClick={() => scrollToSection('contact')}
            ariaLabel="Navegar a la sección de contacto"
          >
            <span className="btn-icon" aria-hidden="true">
              📧
            </span>
            <span>Contactar</span>
          </Button>
        </nav>
      </div>
    </Card>
  )
}
