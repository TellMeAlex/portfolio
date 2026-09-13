/**
 * Eyebrow — the "24×2 bar + mono label" section marker used across the page.
 * Renders as a heading element so sections stay navigable for screen readers.
 */
import React from 'react'
import './Eyebrow.css'

interface EyebrowProps {
  children: React.ReactNode
  /** Accent colour for bar + text (defaults to the blue accent). */
  color?: string
  /** Element to render — `h2` for section titles, `span` for inline labels. */
  as?: 'h2' | 'span' | 'div'
  /** Keep the label's original casing instead of uppercase tracking. */
  plain?: boolean
  className?: string
  id?: string
}

export const Eyebrow: React.FC<EyebrowProps> = ({
  children,
  color,
  as: Tag = 'span',
  plain = false,
  className = '',
  id,
}) => (
  <Tag
    id={id}
    className={`eyebrow ${plain ? 'eyebrow--plain' : ''} ${className}`.trim()}
    style={
      color ? ({ '--eyebrow-color': color } as React.CSSProperties) : undefined
    }
  >
    <span className="eyebrow__bar" aria-hidden="true" />
    <span className="eyebrow__label">{children}</span>
  </Tag>
)
