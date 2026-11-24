import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function ServiceCard({ s, delay = 0 }) {
  const Icon = s.icon
  return (
    <motion.article initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.5, delay }}
      whileHover={{ y: -6 }} className="card group flex h-full flex-col p-7 transition-shadow hover:shadow-xl">
      <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-gold bg-ivory text-olive"><Icon size={26} aria-hidden="true" /></span>
      <h3 className="text-xl">{s.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed">{s.desc}</p>
      <Link to="/services" className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary">
        Learn More <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </Link>
    </motion.article>
  )
}
