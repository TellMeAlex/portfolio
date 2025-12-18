/**
 * ScrollProgress Component
 * Displays scroll progress indicator at top of page
 */
import React from 'react'
import { useScrollProgress } from '@/hooks/useScrollProgress'
import './ScrollProgress.css'

export const ScrollProgress: React.FC = () => {
  const progress = useScrollProgress()

  return (
    <div
      className="scroll-progress"
      role="progressbar"
      aria-label="Page scroll progress"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div className="scroll-progress-bar" style={{ width: `${progress}%` }} />
    </div>
  )
}
