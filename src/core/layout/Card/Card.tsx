import React from 'react'
import type { CardProps } from './Card.types'
import './Card.css'

export const Card: React.FC<CardProps> = ({
  children,
  size = 'medium',
  className = '',
  loading = false,
  error = false,
  onClick,
  ariaLabel,
}) => {
  const cardClasses = [
    'card',
    `card--${size}`,
    loading && 'card--loading',
    error && 'card--error',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <article
      className={cardClasses}
      onClick={onClick}
      role="article"
      aria-label={ariaLabel}
      aria-busy={loading}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </article>
  )
}
