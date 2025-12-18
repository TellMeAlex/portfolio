/**
 * Experience Timeline Feature
 * Interactive professional experience timeline
 */
import React, { useEffect, useRef } from 'react'
import { Card } from '@/core/layout/Card'
import { experienceData } from './experienceData'
import type { Company, Position } from './Experience.types'
import './Experience.css'

export const Experience: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Intersection Observer for timeline animation
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('timeline-visible')
          }
        })
      },
      { threshold: 0.2 }
    )

    const items = timelineRef.current?.querySelectorAll('.timeline-item')
    items?.forEach(item => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <Card
      size="xl"
      ariaLabel="Experiencia Profesional"
      className="experience-card"
      id="experience"
      keyboardHint="3"
    >
      <div className="timeline-header">
        <h2 className="section-title" id="experience-heading">
          <span className="title-icon" aria-hidden="true">
            💼
          </span>
          Experiencia Laboral
        </h2>
      </div>

      <div
        className="timeline-container"
        ref={timelineRef}
        role="list"
        aria-label="Línea temporal de experiencia profesional"
      >
        {/* Vertical timeline line */}
        <div className="timeline-line" aria-hidden="true" />

        {experienceData.companies.map((company, companyIndex) => (
          <TimelineItem
            key={`${company.name}-${companyIndex}`}
            company={company}
          />
        ))}
      </div>
    </Card>
  )
}

interface TimelineItemProps {
  company: Company
}

const TimelineItem: React.FC<TimelineItemProps> = ({ company }) => {
  const isCurrentCompany = company.period.current
  const companyId = company.name.toLowerCase().replace(/\s+/g, '-')

  return (
    <article
      className={`timeline-item ${isCurrentCompany ? 'timeline-item--current' : ''}`}
      data-company={companyId}
      role="listitem"
      aria-labelledby={`${companyId}-heading`}
    >
      <div className="timeline-marker" aria-hidden="true">
        <div className="timeline-dot" />
        <div className="timeline-date">
          {company.period.displayStart} - {company.period.displayEnd}
        </div>
      </div>

      <div className="timeline-content">
        <header className="company-header">
          <h3 className="company-name" id={`${companyId}-heading`}>{company.name}</h3>
          <div className="company-location" aria-label={`Ubicación: ${company.location}`}>
            <span className="location-icon" aria-hidden="true">
              📍
            </span>
            {company.location}
          </div>
        </header>

        <div
          className="positions-list"
          role="list"
          aria-label={`Posiciones en ${company.name}`}
        >
          {company.positions.map((position, positionIndex) => (
            <PositionItem
              key={`${position.title}-${positionIndex}`}
              position={position}
              companyId={companyId}
              index={positionIndex}
            />
          ))}
        </div>
      </div>
    </article>
  )
}

interface PositionItemProps {
  position: Position
  companyId: string
  index: number
}

const PositionItem: React.FC<PositionItemProps> = ({ position, companyId, index }) => {
  const isCurrentPosition = position.period.current
  const positionId = `${companyId}-pos-${index}`

  return (
    <div
      className={`position-item ${isCurrentPosition ? 'position-item--current' : ''}`}
      data-position={position.title.toLowerCase().replace(/\s+/g, '-')}
      role="listitem"
    >
      <div className="position-header">
        <h4 className="position-title" id={`${positionId}-title`}>{position.title}</h4>
        <time className="position-period" dateTime={position.period.display}>{position.period.display}</time>
      </div>

      <ul
        className="position-achievements"
        aria-label={`Logros como ${position.title}`}
      >
        {position.responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>

      <div
        className="position-skills"
        role="list"
        aria-label="Tecnologías utilizadas"
      >
        {position.technologies.map((tech, index) => (
          <span key={index} className="skill-tag" role="listitem">
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}
