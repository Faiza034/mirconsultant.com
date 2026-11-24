import { motion } from 'framer-motion'

// Scroll-reveal wrapper. Reduced-motion is handled globally by <MotionConfig reducedMotion="user">.
export default function Reveal({ children, delay = 0, className = '', as = 'div' }) {
  const Tag = motion[as]
  return (
    <Tag initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }} className={className}>
      {children}
    </Tag>
  )
}
