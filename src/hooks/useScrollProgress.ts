/**
 * useScrollProgress Hook
 * Tracks scroll progress for progress indicator
 * Source: prds/phases/PHASE-04-Animations.md
 */
import { useEffect, useState } from 'react'

export const useScrollProgress = () => {
  // Initialize with 100 if reduced motion is preferred
  const [scrollProgress, setScrollProgress] = useState(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
    return prefersReducedMotion ? 100 : 0
  })

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion) {
      return
    }

    const updateScrollProgress = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop

      const scrollableHeight = documentHeight - windowHeight
      const progress = (scrollTop / scrollableHeight) * 100

      setScrollProgress(Math.min(progress, 100))
    }

    // Update on mount
    updateScrollProgress()

    // Update on scroll
    window.addEventListener('scroll', updateScrollProgress, { passive: true })

    return () => {
      window.removeEventListener('scroll', updateScrollProgress)
    }
  }, [])

  return scrollProgress
}
