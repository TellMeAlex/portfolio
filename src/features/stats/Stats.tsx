import React from 'react'
import { Card } from '../../core/layout/Card'
import './Stats.css'

interface StatCounterProps {
  value: string
  label: string
  icon?: string
  size?: 'small' | 'medium'
}

const StatCounter: React.FC<StatCounterProps> = ({
  value,
  label,
  icon,
  size = 'small',
}) => {
  return (
    <Card size={size} ariaLabel={label}>
      <div className="stats-counter">
        <div className="counter-wrapper">
          {icon && (
            <div className="counter-icon" aria-hidden="true">
              {icon}
            </div>
          )}
          <div className="counter-content">
            <div className="counter-value">
              <span className="counter">{value}</span>
            </div>
            <p className="counter-label">{label}</p>
          </div>
        </div>
      </div>
    </Card>
  )
}

export const ProjectsCounter: React.FC = () => {
  return (
    <StatCounter value="50+" label="Proyectos completados" icon="🎯" />
  )
}

export const ExperienceCounter: React.FC = () => {
  return <StatCounter value="3+" label="Años de experiencia" icon="⏱️" />
}
