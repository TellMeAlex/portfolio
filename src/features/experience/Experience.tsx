/**
 * Experience Timeline Feature
 * Interactive professional experience timeline
 * Source: prds/phases/PHASE-03-Advanced-Features.md#step-1
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
      ariaLabel="Professional Experience"
      className="experience-card"
    >
      <div className="timeline-header">
        <h2 className="section-title">
          <span className="title-icon" aria-hidden="true">
            💼
          </span>
          Experiencia Laboral
        </h2>
      </div>

      <div className="timeline-container" ref={timelineRef}>
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

  return (
    <article
      className={`timeline-item ${isCurrentCompany ? 'timeline-item--current' : ''}`}
      data-company={company.name.toLowerCase().replace(/\s+/g, '-')}
    >
      <div className="timeline-marker">
        <div className="timeline-dot" />
        <div className="timeline-date">
          {company.period.displayStart} - {company.period.displayEnd}
        </div>
      </div>

      <div className="timeline-content">
        <div className="company-header">
          <h3 className="company-name">{company.name}</h3>
          <div className="company-location">
            <span className="location-icon" aria-hidden="true">
              📍
            </span>
            {company.location}
          </div>
        </div>

        <div className="positions-list">
          {company.positions.map((position, positionIndex) => (
            <PositionItem
              key={`${position.title}-${positionIndex}`}
              position={position}
            />
          ))}
        </div>
      </div>
    </article>
  )
}

interface PositionItemProps {
  position: Position
}

const PositionItem: React.FC<PositionItemProps> = ({ position }) => {
  const isCurrentPosition = position.period.current

  return (
    <div
      className={`position-item ${isCurrentPosition ? 'position-item--current' : ''}`}
      data-position={position.title.toLowerCase().replace(/\s+/g, '-')}
    >
      <div className="position-header">
        <h4 className="position-title">{position.title}</h4>
        <div className="position-period">{position.period.display}</div>
      </div>

      <ul className="position-achievements">
        {position.responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>

      <div className="position-skills">
        {position.technologies.map((tech, index) => (
          <span key={index} className="skill-tag">
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}
