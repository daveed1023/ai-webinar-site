import { useState, useEffect } from 'react'
import { throttle } from '@lib/utils'

/**
 * Hook to track scroll progress
 * Returns percentage of page scrolled (0-100)
 *
 * @param {number} throttleMs - Throttle delay in milliseconds
 * @returns {number} - Scroll progress percentage (0-100)
 */
export function useScrollProgress(throttleMs = 50) {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const calculateScrollProgress = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY

      const totalScrollableHeight = documentHeight - windowHeight
      const progress = (scrollTop / totalScrollableHeight) * 100

      setScrollProgress(Math.min(100, Math.max(0, progress)))
    }

    const throttledCalculate = throttle(calculateScrollProgress, throttleMs)

    // Calculate initial progress
    calculateScrollProgress()

    window.addEventListener('scroll', throttledCalculate, { passive: true })
    window.addEventListener('resize', throttledCalculate)

    return () => {
      window.removeEventListener('scroll', throttledCalculate)
      window.removeEventListener('resize', throttledCalculate)
    }
  }, [throttleMs])

  return scrollProgress
}
