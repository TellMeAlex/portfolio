import React from 'react'
import { Card } from '@/core/layout/Card'
import './About.css'

export const About: React.FC = () => {
  return (
    <Card size="large" ariaLabel="About me section" className="about-card">
      <div className="about-header">
        <h2 className="section-title">Sobre Mí</h2>
        <div className="badge badge--available">
          <span className="badge-icon" aria-hidden="true">
            🚀
          </span>
          <span>Disponible para nuevos retos</span>
        </div>
      </div>

      <div className="about-content">
        <p className="about-text">
          Desarrollador web especializado en ReactJS con más de 3 años liderando
          proyectos de transformación digital en NTT DATA. Actualmente me
          desempeño como Technical Leader Specialist, liderando iniciativas de
          IA y automatización para clientes como Inditex.
        </p>

        <p className="about-text">
          Mi enfoque combina desarrollo frontend de alto rendimiento con
          arquitecturas escalables (micro frontends) y un fuerte componente de
          liderazgo técnico, mentoría y evangelización tecnológica.
        </p>

        <div className="about-highlights">
          <div className="highlight-item">
            <span className="highlight-icon" aria-hidden="true">
              🤖
            </span>
            <span className="highlight-text">Especialista en IA</span>
          </div>
          <div className="highlight-item">
            <span className="highlight-value">3+</span>
            <span className="highlight-label">años de experiencia</span>
          </div>
        </div>
      </div>
    </Card>
  )
}
