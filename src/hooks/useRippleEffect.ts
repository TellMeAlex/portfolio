/**
 * useRippleEffect Hook
 * Creates a ripple effect on button clicks
 */
import { useEffect, useRef } from 'react'

export const useRippleEffect = () => {
  const rippleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const button = rippleRef.current
    if (!button) return

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion) return

    const handleClick = (e: globalThis.MouseEvent) => {
      const ripple = document.createElement('span')
      const rect = button.getBoundingClientRect()
      const size = Math.max(rect.width, rect.height)
      const x = e.clientX - rect.left - size / 2
      const y = e.clientY - rect.top - size / 2

      ripple.classList.add('ripple')
      ripple.style.width = `${size}px`
      ripple.style.height = `${size}px`
      ripple.style.left = `${x}px`
      ripple.style.top = `${y}px`

      button.appendChild(ripple)

      setTimeout(() => {
        ripple.remove()
      }, 600)
    }

    button.addEventListener('click', handleClick)

    return () => {
      button.removeEventListener('click', handleClick)
    }
  }, [])

  return rippleRef
}
