import { useRef, useState, forwardRef } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@lib/utils'
import { Button } from './Button'
import { useIsDesktop } from '@hooks/useMediaQuery'

/**
 * Magnetic Button Component
 * Button that follows the cursor on hover (desktop only)
 * Uses Framer Motion for smooth spring animations
 */
const MagneticButton = forwardRef(
  ({ className, children, magnetStrength = 0.3, ...props }, ref) => {
    const buttonRef = useRef(null)
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const isDesktop = useIsDesktop()

    // Only enable magnetic effect on desktop
    if (!isDesktop) {
      return (
        <Button ref={ref} className={className} {...props}>
          {children}
        </Button>
      )
    }

    const handleMouseMove = (e) => {
      const button = buttonRef.current
      if (!button) return

      const { clientX, clientY } = e
      const { left, top, width, height } = button.getBoundingClientRect()

      // Calculate distance from center
      const centerX = left + width / 2
      const centerY = top + height / 2

      // Apply magnetic effect
      const x = (clientX - centerX) * magnetStrength
      const y = (clientY - centerY) * magnetStrength

      setPosition({ x, y })
    }

    const handleMouseLeave = () => {
      setPosition({ x: 0, y: 0 })
    }

    return (
      <motion.div
        ref={buttonRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ x: position.x, y: position.y }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 15,
          mass: 0.1
        }}
        className="inline-block"
      >
        <Button ref={ref} className={cn('group', className)} {...props}>
          {children}
        </Button>
      </motion.div>
    )
  }
)

MagneticButton.displayName = 'MagneticButton'

export { MagneticButton }
