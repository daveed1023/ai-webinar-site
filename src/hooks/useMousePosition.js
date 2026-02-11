import { useState, useEffect } from 'react'
import { throttle } from '@lib/utils'

/**
 * Hook to track mouse position
 * Used for magnetic buttons, custom cursor, and particle effects
 *
 * @param {number} throttleMs - Throttle delay in milliseconds (default: 50)
 * @returns {Object} - { x, y } mouse coordinates
 */
export function useMousePosition(throttleMs = 50) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = throttle((e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }, throttleMs)

    window.addEventListener('mousemove', updateMousePosition)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [throttleMs])

  return mousePosition
}

/**
 * Hook to track mouse position normalized to -1 to 1 range
 * Useful for 3D camera/object rotation
 *
 * @param {number} throttleMs - Throttle delay in milliseconds
 * @returns {Object} - { x, y } normalized coordinates (-1 to 1)
 */
export function useNormalizedMousePosition(throttleMs = 50) {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updatePosition = throttle((e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1
      const y = -(e.clientY / window.innerHeight) * 2 + 1
      setPosition({ x, y })
    }, throttleMs)

    window.addEventListener('mousemove', updatePosition)

    return () => {
      window.removeEventListener('mousemove', updatePosition)
    }
  }, [throttleMs])

  return position
}
