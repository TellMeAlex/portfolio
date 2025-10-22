/**
 * useTypingEffect Hook
 * Creates a typewriter animation effect for text
 * Source: prds/phases/PHASE-04-Animations.md
 */
import { useEffect, useState } from 'react'

interface UseTypingEffectOptions {
  text: string
  speed?: number
  deleteSpeed?: number
  pauseTime?: number
  loop?: boolean
  startDelay?: number
}

export const useTypingEffect = ({
  text,
  speed = 80,
  deleteSpeed = 40,
  pauseTime = 2000,
  loop = false,
  startDelay = 500,
}: UseTypingEffectOptions) => {
  // Initialize with full text if reduced motion is preferred
  const [displayText, setDisplayText] = useState(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
    return prefersReducedMotion ? text : ''
  })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion) {
      return
    }

    // Start delay
    if (!hasStarted) {
      const startTimer = setTimeout(() => {
        setHasStarted(true)
      }, startDelay)

      return () => clearTimeout(startTimer)
    }

    // Don't proceed if paused
    if (isPaused) return

    const type = () => {
      // Calculate current text
      const currentText = isDeleting
        ? text.substring(0, currentIndex)
        : text.substring(0, currentIndex + 1)

      setDisplayText(currentText)

      // Determine delay
      let delay = isDeleting ? deleteSpeed : speed

      // Add variance for natural feel
      delay += Math.random() * 50

      // Handle typing completion
      if (!isDeleting && currentIndex === text.length) {
        if (loop) {
          setIsPaused(true)
          setTimeout(() => {
            setIsPaused(false)
            setIsDeleting(true)
          }, pauseTime)
          return
        }
        return
      }

      // Handle deletion completion
      if (isDeleting && currentIndex === 0) {
        setIsDeleting(false)
        setTimeout(() => {
          setCurrentIndex(prev => prev + 1)
        }, 500)
        return
      }

      // Continue typing/deleting
      const timer = setTimeout(() => {
        setCurrentIndex(prev => (isDeleting ? prev - 1 : prev + 1))
      }, delay)

      return () => clearTimeout(timer)
    }

    const cleanup = type()
    return cleanup
  }, [
    text,
    currentIndex,
    isDeleting,
    isPaused,
    hasStarted,
    speed,
    deleteSpeed,
    pauseTime,
    loop,
    startDelay,
  ])

  return {
    displayText,
    isTyping: hasStarted && !isPaused,
  }
}
