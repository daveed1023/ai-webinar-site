import { cn } from '@lib/utils'

/**
 * Gradient Text Component
 * Renders text with animated gradient and shimmer effect
 */
export function GradientText({ children, className, shimmer = true, as: Component = 'span' }) {
  return (
    <Component
      className={cn(
        'gradient-text font-bold',
        shimmer && 'shimmer-container',
        className
      )}
    >
      {children}
    </Component>
  )
}

/**
 * Alternative gradient style
 */
export function GradientTextAlt({ children, className, as: Component = 'span' }) {
  return (
    <Component
      className={cn(
        'gradient-text-alt font-bold',
        className
      )}
    >
      {children}
    </Component>
  )
}
