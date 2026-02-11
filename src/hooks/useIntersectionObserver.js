import { useEffect, useRef, useState } from 'react'

/**
 * Hook for detecting when an element enters the viewport
 * Used for scroll-triggered animations and lazy loading
 *
 * @param {Object} options - Intersection Observer options
 * @param {number} options.threshold - Percentage of element visibility (0-1)
 * @param {string} options.root - Root element for intersection
 * @param {string} options.rootMargin - Margin around root
 * @param {boolean} options.triggerOnce - Only trigger once
 * @returns {Array} - [ref, isVisible, entry]
 */
export function useIntersectionObserver({
  threshold = 0.1,
  root = null,
  rootMargin = '0px',
  triggerOnce = false
} = {}) {
  const [isVisible, setIsVisible] = useState(false)
  const [entry, setEntry] = useState(null)
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setEntry(entry)

        if (entry.isIntersecting) {
          setIsVisible(true)
          // If triggerOnce is true, disconnect after first intersection
          if (triggerOnce) {
            observer.disconnect()
          }
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        root,
        rootMargin
      }
    )

    observer.observe(element)

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [threshold, root, rootMargin, triggerOnce])

  return [ref, isVisible, entry]
}
