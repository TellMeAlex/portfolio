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
    <Card size="xl" ariaLabel="Presentation section" className="hero-card">
      <div className="hero-content">
        {/* Hero Text */}
        <div className="hero-text">
          <h1 className="hero-name">
            <span role="img" aria-label="waving hand">
              👋
            </span>{' '}
            Hola, soy Alejandro
          </h1>

          <div className="hero-title">
            <span className="typed-text">
              {displayText}
              <span className="typing-cursor" aria-hidden="true" />
            </span>
          </div>

          <p className="hero-subtitle">
            Liderando la transformación digital con IA en NTT DATA
          </p>

          <div className="hero-location">
            <span className="location-icon" aria-hidden="true">
              📍
            </span>
            <span>
              Jaén, Andalucía{' '}
              <span role="img" aria-label="España">
                🇪🇸
              </span>
            </span>
          </div>
        </div>

        {/* CTAs */}
        <div className="hero-actions">
          <Button
            variant="primary"
            onClick={() => scrollToSection('projects')}
            ariaLabel="Navigate to projects section"
          >
            <span>Ver Proyectos</span>
            <span className="btn-icon" aria-hidden="true">
              →
            </span>
          </Button>
          <Button
            variant="secondary"
            onClick={() => scrollToSection('contact')}
            ariaLabel="Navigate to contact section"
          >
            <span className="btn-icon" aria-hidden="true">
              📧
            </span>
            <span>Contactar</span>
          </Button>
        </div>
      </div>
    </Card>
  )
}
