/**
 * useCounterAnimation Hook
 * Animates numbers from 0 to target value
 */
import { useEffect, useState } from 'react'

interface UseCounterAnimationOptions {
  target: number
  duration?: number
  isActive: boolean
}

export const useCounterAnimation = ({
  target,
  duration = 2000,
  isActive,
}: UseCounterAnimationOptions): number => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!isActive) return

    const fps = 60
    const totalFrames = (duration / 1000) * fps
    const increment = target / totalFrames

    let frame = 0
    let currentValue = 0

    const animate = () => {
      frame++
      currentValue += increment

      if (frame >= totalFrames) {
        setCurrent(target)
        return
      }

      setCurrent(Math.floor(currentValue))
      requestAnimationFrame(animate)
    }

    const animationId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationId)
  }, [target, duration, isActive])

  return current
}
