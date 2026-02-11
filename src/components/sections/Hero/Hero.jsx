import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { GradientText } from '@components/ui/GradientText'
import { MagneticButton } from '@components/ui/MagneticButton'
import { GlowButton } from '@components/ui/GlowButton'
import { fadeInUp, staggerContainer, staggerItem } from '@lib/animations'

export function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-500/10 to-pink-500/20 dark:from-primary/30 dark:via-purple-500/20 dark:to-pink-500/30" />
      <div className="absolute inset-0 animated-gradient opacity-30" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]" />

      {/* Content */}
      <div className="container-custom relative z-10 py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div variants={staggerItem} className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Transform Your Business with AI
              </span>
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={staggerItem}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance"
          >
            Master AI.{' '}
            <GradientText as="span" className="block mt-2">
              Transform The Past </Past>.
            </GradientText>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={staggerItem}
            className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto text-balance"
          >
            Expert-led AI webinars designed for professionals and businesses.
            From ChatGPT basics to custom AI solutions, master the tools
            shaping the future.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={staggerItem}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <GlowButton
              size="lg"
              onClick={() => scrollToSection('services')}
              className="group"
            >
              View Courses
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </GlowButton>

            <MagneticButton
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('contact')}
            >
              Book Consultation
            </MagneticButton>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={staggerItem}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: '10K+', label: 'Students' },
              { value: '500+', label: 'Companies' },
              { value: '98%', label: 'Satisfaction' },
              { value: '15+', label: 'Years Experience' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  )
}
