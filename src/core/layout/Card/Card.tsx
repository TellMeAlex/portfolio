import React from 'react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
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
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.2,
    triggerOnce: true,
  })

  const cardClasses = [
    'card',
    `card--${size}`,
    loading && 'card--loading',
    error && 'card--error',
    isVisible && 'animate-on-scroll',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <article
      ref={ref}
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
