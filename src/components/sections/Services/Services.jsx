import { motion } from 'framer-motion'
import { BentoGrid } from './BentoGrid'
import { GradientText } from '@components/ui/GradientText'
import { fadeInUp } from '@lib/animations'
import coursesData from '@assets/data/courses.json'

export function Services() {
  const { courses } = coursesData

  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Section header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Choose Your{' '}
            <GradientText as="span">AI Learning Path</GradientText>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're just starting or building advanced AI solutions, we have
            the perfect course to accelerate your journey.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <BentoGrid courses={courses} />
      </div>
    </section>
  )
}
