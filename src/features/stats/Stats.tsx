/**
 * Stats Counter Feature - Enhanced with Counter Animation
 * Animated counters with Intersection Observer
 * Source: prds/phases/PHASE-03-Advanced-Features.md#step-4
 */
import React from 'react'
import { Card } from '@/core/layout/Card'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { useCounterAnimation } from '@/hooks/useCounterAnimation'
import { calculateYearsOfExperience } from '@/utils/date'
import './Stats.css'

interface StatCounterProps {
  value: number
  suffix?: string
  label: string
  icon?: string
  size?: 'small' | 'medium'
}

const StatCounter: React.FC<StatCounterProps> = ({
  value,
  suffix = '',
  label,
  icon,
  size = 'small',
}) => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.5 })
  const currentValue = useCounterAnimation({
    target: value,
    duration: 2000,
    isActive: isVisible,
  })

  return (
    <Card size={size} ariaLabel={label}>
      <div className="stats-counter" ref={ref}>
        <div className="counter-wrapper">
          {icon && (
            <div className="counter-icon" aria-hidden="true">
              {icon}
            </div>
          )}
          <div className="counter-content">
            <div className="counter-value">
              <span
                className={`counter ${isVisible ? 'counter-complete' : ''}`}
                aria-label={`${value}${suffix} ${label}`}
              >
                {isVisible ? currentValue : 0}
                {suffix}
              </span>
            </div>
            <p className="counter-label">{label}</p>
          </div>
        </div>
      </div>
    </Card>
  )
}

export const ProjectsCounter: React.FC = () => {
  return <StatCounter value={5} label="Proyectos alto impacto" icon="🚀" />
}

export const ExperienceCounter: React.FC = () => {
  const years = calculateYearsOfExperience('2021-02')
  return <StatCounter value={years} suffix="+" label="Años experiencia" icon="💼" />
}
