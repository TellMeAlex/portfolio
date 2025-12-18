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
  id,
  keyboardHint,
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
      id={id}
      className={cardClasses}
      onClick={onClick}
      role="article"
      aria-label={ariaLabel}
      aria-busy={loading}
      tabIndex={onClick || id ? 0 : undefined}
    >
      {children}
      {keyboardHint && (
        <span className="keyboard-shortcut-hint" aria-hidden="true">
          Alt + {keyboardHint}
        </span>
      )}
    </article>
  )
}
