import { motion } from 'framer-motion'
import { CourseCard } from './CourseCard'
import { staggerContainer, staggerItem } from '@lib/animations'

export function BentoGrid({ courses }) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto"
    >
      {courses.map((course, index) => (
        <motion.div
          key={course.id}
          variants={staggerItem}
          className={course.gridSpan}
        >
          <CourseCard course={course} />
        </motion.div>
      ))}
    </motion.div>
  )
}
