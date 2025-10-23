import React from 'react'
import './CardSkeleton.css'

interface CardSkeletonProps {
  size?: 'small' | 'medium' | 'large' | 'xl'
  ariaLabel?: string
}

/**
 * CardSkeleton - Loading skeleton for lazy-loaded cards
 * Prevents layout shift while components load
 */
export const CardSkeleton: React.FC<CardSkeletonProps> = ({
  size = 'medium',
  ariaLabel = 'Cargando contenido',
}) => {
  return (
    <div
      className={`card-skeleton card-skeleton--${size}`}
      role="status"
      aria-busy="true"
      aria-live="polite"
      aria-label={ariaLabel}
    >
      <div className="card-skeleton__header">
        <div className="card-skeleton__title" />
        <div className="card-skeleton__subtitle" />
      </div>
      <div className="card-skeleton__content">
        <div className="card-skeleton__line" />
        <div className="card-skeleton__line" />
        <div className="card-skeleton__line card-skeleton__line--short" />
      </div>
    </div>
  )
}
