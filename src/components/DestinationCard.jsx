import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import SmartImage from './SmartImage'

export default function DestinationCard({ d, delay = 0 }) {
  return (
    <motion.article initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.5, delay }}
      whileHover={{ y: -6 }} className="card group flex h-full flex-col overflow-hidden transition-shadow hover:shadow-xl">
      <div className="aspect-[4/3] overflow-hidden">
        <SmartImage src={d.image} alt={`${d.name} study destination`} label={d.name} className="h-full w-full transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-gold">{d.tagline}</p>
        <h3 className="mt-1 text-2xl">{d.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed">{d.short}</p>
        <Link to={`/destinations/${d.slug}`} className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary">
          Explore More <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </motion.article>
  )
}
