import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useMousePosition } from '@hooks/useMousePosition'
import { useIsDesktop } from '@hooks/useMediaQuery'

/**
 * Custom Cursor Component
 * Modern custom cursor effect for desktop
 * Shows different states based on hover targets
 */
export function CustomCursor() {
  const { x, y } = useMousePosition(10)
  const isDesktop = useIsDesktop()
  const [cursorVariant, setCursorVariant] = useState('default')

  useEffect(() => {
    if (!isDesktop) return

    const handleMouseOver = (e) => {
      const target = e.target

      // Check if hovering over interactive elements
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('cursor-pointer')
      ) {
        setCursorVariant('pointer')
      } else if (
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.classList.contains('cursor-text')
      ) {
        setCursorVariant('text')
      } else {
        setCursorVariant('default')
      }
    }

    document.addEventListener('mouseover', handleMouseOver)

    return () => {
      document.removeEventListener('mouseover', handleMouseOver)
    }
  }, [isDesktop])

  // Don't render on mobile
  if (!isDesktop) return null

  const variants = {
    default: {
      x: x - 12,
      y: y - 12,
      scale: 1,
      backgroundColor: 'rgba(124, 58, 237, 0.3)',
      border: '2px solid rgba(124, 58, 237, 0.8)'
    },
    pointer: {
      x: x - 20,
      y: y - 20,
      scale: 1.5,
      backgroundColor: 'rgba(124, 58, 237, 0.1)',
      border: '2px solid rgba(124, 58, 237, 1)'
    },
    text: {
      x: x - 2,
      y: y - 12,
      scale: 1,
      width: 2,
      height: 24,
      borderRadius: 1,
      backgroundColor: 'rgba(124, 58, 237, 0.8)',
      border: 'none'
    }
  }

  return (
    <>
      {/* Hide default cursor */}
      <style>{`
        body, body * {
          cursor: none !important;
        }
      `}</style>

      {/* Custom cursor */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-50 mix-blend-difference"
        variants={variants}
        animate={cursorVariant}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.5
        }}
        style={{
          width: cursorVariant === 'text' ? 2 : 24,
          height: cursorVariant === 'text' ? 24 : 24,
        }}
      />

      {/* Cursor trail/dot */}
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 rounded-full bg-primary pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: x - 2,
          y: y - 2
        }}
        transition={{
          type: 'spring',
          stiffness: 1000,
          damping: 50,
          mass: 0.1
        }}
      />
    </>
  )
}
