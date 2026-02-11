import { forwardRef } from 'react'
import { cn } from '@lib/utils'
import { Button } from './Button'

/**
 * Glow Button Component
 * Button with animated glow effect perfect for CTAs
 */
const GlowButton = forwardRef(
  ({ className, children, glowStrength = 'normal', ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(
          'relative overflow-hidden',
          glowStrength === 'strong' ? 'glow-strong' : 'glow',
          'animate-glow',
          className
        )}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        {/* Animated background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
      </Button>
    )
  }
)

GlowButton.displayName = 'GlowButton'

export { GlowButton }
