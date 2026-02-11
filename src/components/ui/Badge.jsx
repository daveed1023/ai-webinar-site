import { cva } from 'class-variance-authority'
import { cn } from '@lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'bg-primary/10 text-primary border border-primary/20',
        secondary:
          'bg-secondary text-secondary-foreground',
        destructive:
          'bg-destructive/10 text-destructive border border-destructive/20',
        outline:
          'text-foreground border border-input',
        success:
          'bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20',
        warning:
          'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border border-yellow-500/20',
        purple:
          'bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

function Badge({ className, variant, ...props }) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
