/**
 * usePrefersReducedMotion
 * Tracks the OS-level "reduce motion" preference so JS-driven animations
 * (terminal typing, spine travel) can be skipped — CSS animations are
 * already neutralised by the reset under the same media query.
 */
import { useEffect, useState } from 'react'

const QUERY = '(prefers-reduced-motion: reduce)'

export const usePrefersReducedMotion = (): boolean => {
  const [reduced, setReduced] = useState<boolean>(() =>
    typeof window !== 'undefined' && typeof window.matchMedia === 'function'
      ? window.matchMedia(QUERY).matches
      : false
  )

  useEffect(() => {
    if (typeof window.matchMedia !== 'function') return
    const mql = window.matchMedia(QUERY)
    const onChange = (event: MediaQueryListEvent) => setReduced(event.matches)
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [])

  return reduced
}
