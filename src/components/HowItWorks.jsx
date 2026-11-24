import { motion, useReducedMotion } from 'framer-motion'
import { MessageCircle, Globe, FileText, Plane } from 'lucide-react'
import SectionHeading from './SectionHeading'
import useMediaQuery from '../hooks/useMediaQuery'

const STEPS = [
  { icon: MessageCircle, title: 'Free Initial Consultation', desc: 'Discuss your academic background, interests and study goals.' },
  { icon: Globe, title: 'Choose Your Destination', desc: 'Explore suitable countries, universities and academic programs.' },
  { icon: FileText, title: 'Application Preparation', desc: 'Receive guidance with required documents and admission applications.' },
  { icon: Plane, title: 'Next-Step Guidance', desc: 'Understand the subsequent admission and visa procedures.' },
]
const DRAW = 3 // seconds for the desktop line to travel across all four steps

export default function HowItWorks() {
  const desktop = useMediaQuery('(min-width: 1024px)')
  const reduce = useReducedMotion()
  const start = reduce ? false : 'hidden'
  const vp = { once: true, amount: desktop ? 0.3 : 0.35 }

  return (
    <section className="section overflow-hidden" aria-labelledby="how-h">
      <div className="container-x">
        <SectionHeading eyebrow="How It Works" title="Your Journey in Four Simple Steps" />
        <h2 id="how-h" className="sr-only">How it works</h2>

        <ol className="relative grid gap-8 lg:grid-cols-4 lg:gap-6">
          {/* Desktop route: dashed track, gold progress line and a travelling plane */}
          {desktop && (
            <motion.div className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-7" aria-hidden="true"
              initial={start} whileInView="show" viewport={{ once: true, amount: 0.3 }}>
              <div className="absolute inset-x-0 top-0 border-t-2 border-dashed border-gold/40" />
              <motion.div variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1, transition: { duration: DRAW, ease: 'linear' } } }}
                className="absolute inset-x-0 top-0 h-0.5 origin-left bg-gold" />
              <motion.div variants={{ hidden: { left: '0%', opacity: 0 }, show: { left: '100%', opacity: [0, 1, 1, 1], transition: { duration: DRAW, ease: 'linear' } } }}
                className="absolute -top-3 -translate-x-1/2">
                <Plane size={26} className="rotate-45 text-primary drop-shadow" />
              </motion.div>
            </motion.div>
          )}

          {STEPS.map(({ icon: Icon, title, desc }, i) => {
            const delay = desktop && !reduce ? (i * DRAW) / 3 : 0
            return (
              <li key={title} className="relative flex gap-5 lg:flex-col lg:items-center lg:gap-6">
                {/* Mobile connector to the next step */}
                {i < STEPS.length - 1 && (
                  <motion.span aria-hidden="true" className="absolute -bottom-8 left-[27px] top-14 w-0.5 origin-top bg-gold lg:hidden"
                    initial={start} whileInView="show" viewport={vp} variants={{ hidden: { scaleY: 0 }, show: { scaleY: 1, transition: { duration: 0.8, delay: 0.3 } } }} />
                )}

                {/* Numbered node with pulse ring */}
                <motion.div className="relative z-10 shrink-0 self-start lg:self-auto" initial={start} whileInView="show" viewport={vp}
                  variants={{ hidden: { scale: 0, opacity: 0 }, show: { scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 260, damping: 16, delay } } }}>
                  {!reduce && <motion.span aria-hidden="true" className="absolute inset-0 rounded-full border-2 border-gold"
                    animate={{ scale: [1, 1.7], opacity: [0.7, 0] }} transition={{ duration: 2.2, repeat: Infinity, delay: delay + 0.6, ease: 'easeOut' }} />}
                  <span className="relative flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold bg-primary font-display text-xl text-white shadow-lg">{i + 1}</span>
                </motion.div>

                {/* Card */}
                <motion.div className="card group relative flex-1 overflow-hidden p-6 transition-shadow hover:shadow-xl lg:w-full lg:text-center"
                  initial={start} whileInView="show" viewport={vp} whileHover={reduce ? undefined : { y: -6 }}
                  variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, delay: delay + 0.15, ease: 'easeOut' } } }}>
                  <span aria-hidden="true" className="pointer-events-none absolute -right-1 -top-3 font-display text-7xl font-bold text-gold/20 transition-transform duration-500 group-hover:scale-110">0{i + 1}</span>
                  <span className="relative mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold bg-ivory text-olive transition-colors group-hover:bg-gold group-hover:text-primary lg:mx-auto"><Icon size={22} aria-hidden="true" /></span>
                  <p className="relative text-xs font-semibold uppercase tracking-[0.2em] text-gold">Step {i + 1}</p>
                  <h3 className="relative mt-1 text-lg">{title}</h3>
                  <p className="relative mt-2 text-sm leading-relaxed">{desc}</p>
                  <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100" />
                </motion.div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
