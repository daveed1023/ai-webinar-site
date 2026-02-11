import { motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'
import { Card } from '@components/ui/Card'
import { Badge } from '@components/ui/Badge'
import { Button } from '@components/ui/Button'
import { cn } from '@lib/utils'

export function CourseCard({ course }) {
  const {
    tier,
    title,
    tagline,
    description,
    price,
    duration,
    sessions,
    features,
    highlights,
    cta,
    popular,
    gridSpan
  } = course

  return (
    <Card
      className={cn(
        'flex flex-col h-full',
        gridSpan,
        popular && 'ring-2 ring-primary shadow-2xl shadow-primary/20'
      )}
      glass={true}
      glow={popular}
    >
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <Badge variant={popular ? 'default' : 'secondary'}>
            {tier}
          </Badge>
          {popular && (
            <div className="flex items-center gap-1 text-primary text-sm font-medium">
              <Star className="w-4 h-4 fill-current" />
              <span>Most Popular</span>
            </div>
          )}
        </div>

        <h3 className="text-2xl md:text-3xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-primary font-medium mb-3">{tagline}</p>
        <p className="text-muted-foreground">{description}</p>
      </div>

      {/* Pricing */}
      <div className="mb-6">
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-4xl font-bold gradient-text">{price}</span>
          {duration && (
            <span className="text-sm text-muted-foreground">/ {duration}</span>
          )}
        </div>
        {sessions && (
          <p className="text-sm text-muted-foreground">{sessions}</p>
        )}
      </div>

      {/* Highlights */}
      {highlights && highlights.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {highlights.map((highlight, index) => (
            <Badge key={index} variant="purple" className="text-xs">
              {highlight}
            </Badge>
          ))}
        </div>
      )}

      {/* Features */}
      <div className="flex-1 mb-6">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Button */}
      <Button
        variant={popular ? 'primary' : 'outline'}
        size="lg"
        className="w-full"
      >
        {cta}
      </Button>
    </Card>
  )
}
