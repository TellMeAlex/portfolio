/**
 * useIntersectionObserver Hook
 * Reusable hook for scroll-triggered animations
 */
import { useEffect, useRef, useState } from 'react'

interface UseIntersectionObserverOptions {
  threshold?: number
  root?: Element | null
  rootMargin?: string
  triggerOnce?: boolean
}

export const useIntersectionObserver = (
  options: UseIntersectionObserverOptions = {}
) => {
  const {
    threshold = 0.3,
    root = null,
    rootMargin = '0px',
    triggerOnce = true,
  } = options

  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            if (triggerOnce) {
              observer.unobserve(entry.target)
            }
          } else if (!triggerOnce) {
            setIsVisible(false)
          }
        })
      },
      { threshold, root, rootMargin }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [threshold, root, rootMargin, triggerOnce])

  return { ref, isVisible }
}
