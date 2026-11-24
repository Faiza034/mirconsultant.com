import { motion } from 'framer-motion'

export default function PageHeader({ eyebrow, title, desc }) {
  return (
    <header className="bg-primary py-16 text-center sm:py-24">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="container-x max-w-3xl">
        {eyebrow && <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">{eyebrow}</p>}
        <h1 className="text-4xl !text-white sm:text-5xl">{title}</h1>
        <div className="mx-auto mt-5 h-0.5 w-16 bg-gold" />
        {desc && <p className="mt-5 text-lg text-white/85">{desc}</p>}
      </motion.div>
    </header>
  )
}
