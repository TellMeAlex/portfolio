import React from 'react'
import { Card } from '@/core/layout/Card'
import { calculateYearsOfExperience } from '@/utils/date'
import './About.css'

export const About: React.FC = () => {
  const years = calculateYearsOfExperience('2021-02')

  return (
    <Card
      size="large"
      ariaLabel="Sobre mí"
      className="about-card"
      id="about"
      keyboardHint="2"
    >
      <div className="about-header">
        <h2 className="section-title" id="about-heading">
          Sobre Mí
        </h2>
        <div
          className="badge badge--available"
          role="status"
          aria-label="Estado de disponibilidad"
        >
          <span className="badge-icon" aria-hidden="true">
            🚀
          </span>
          <span>Disponible para nuevos retos</span>
        </div>
      </div>

      <div className="about-content" aria-labelledby="about-heading">
        <p className="about-text">
          Desarrollador web especializado en ReactJS con más de {years} años
          liderando proyectos de transformación digital en NTT DATA. Actualmente
          me desempeño como Expert Architect dentro del área de Digital
          Architecture, liderando iniciativas de IA y formación para clientes
          como Inditex con mayor alcance e impacto organizativo.
        </p>

        <p className="about-text">
          Mi enfoque combina desarrollo frontend de alto rendimiento con
          arquitecturas escalables (micro frontends) y un fuerte componente de
          liderazgo técnico, mentoría y evangelización tecnológica.
        </p>

        <div
          className="about-highlights"
          role="list"
          aria-label="Aspectos destacados"
        >
          <div className="highlight-item" role="listitem">
            <span className="highlight-icon" aria-hidden="true">
              🤖
            </span>
            <span className="highlight-text">Especialista en IA</span>
          </div>
          <div className="highlight-item" role="listitem">
            <span className="highlight-value" aria-label={`${years} años`}>
              {years}+
            </span>
            <span className="highlight-label">años de experiencia</span>
          </div>
        </div>
      </div>
    </Card>
  )
}
