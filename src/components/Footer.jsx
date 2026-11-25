import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { Phone, Globe, ArrowUp, ChevronRight, Plane } from 'lucide-react'
import Logo from './Logo'
import { SITE, telHref } from '../data/site'
import { DESTINATIONS } from '../data/destinations'
import { SERVICES } from '../data/services'

const P = { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true }
const SOCIALS = {
  facebook: { label: 'Facebook', icon: <svg {...P}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg> },
  instagram: { label: 'Instagram', icon: <svg {...P}><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></svg> },
  linkedin: { label: 'LinkedIn', icon: <svg {...P}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg> },
  youtube: { label: 'YouTube', icon: <svg {...P}><path d="M2.5 17a24 24 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49 49 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24 24 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49 49 0 0 1-16.2 0A2 2 0 0 1 2.5 17z" /><path d="m10 15 5-3-5-3z" /></svg> },
}
const ALWAYS_SHOWN = ['instagram', 'facebook', 'linkedin']
const QUICK = [['Home', '/'], ['About Us', '/about'], ['Universities', '/universities'], ['Blog', '/blog'], ['Contact Us', '/contact']]

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } }
const col = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } }
const heading = 'mb-5 font-display text-lg !text-gold after:mt-2 after:block after:h-0.5 after:w-8 after:bg-gold/60 after:content-[""]'
const linkCls = 'group inline-flex items-center gap-1 text-sm text-white/80 transition-all duration-200 hover:translate-x-1 hover:text-gold'

function FooterLink({ to, children }) {
  return (
    <Link to={to} className={linkCls}>
      <ChevronRight size={14} className="-ml-1 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />{children}
    </Link>
  )
}

const rise = { hidden: { opacity: 0, scale: 0, y: 12 }, show: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 15 } } }
const tip = { rest: { opacity: 0, y: 6 }, hover: { opacity: 1, y: 0 } }
const btn = { rest: { y: 0, rotate: 0, scale: 1 }, hover: { y: -6, rotate: -8, scale: 1.12 } }
const circle = 'relative flex h-12 w-12 items-center justify-center rounded-full border border-gold bg-white/5 text-white shadow-md transition-colors hover:bg-gold hover:text-burgundy focus-visible:bg-gold focus-visible:text-burgundy'

// Round icon button with pulse ring, hover lift/tilt and a name tooltip. Without a URL it shows "Coming soon" when clicked.
function SocialButton({ k, url, i, reduce }) {
  const [soon, setSoon] = useState(false)
  const { label, icon } = SOCIALS[k]
  const inner = (
    <>
      {!reduce && <motion.span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-full border border-gold"
        animate={{ scale: [1, 1.55], opacity: [0.6, 0] }} transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.6, ease: 'easeOut' }} />}
      {icon}
      <motion.span variants={tip} aria-hidden="true" className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-ivory px-3 py-1 text-xs font-semibold text-burgundy shadow">
        {url ? label : 'Coming soon'}
      </motion.span>
    </>
  )
  return (
    <motion.li variants={rise}>
      {url ? (
        <motion.a href={url} target="_blank" rel="noopener noreferrer" aria-label={`MIR on ${label}`} variants={btn} initial="rest" animate="rest" whileHover="hover" whileFocus="hover" whileTap={{ scale: 0.9 }} className={circle}>{inner}</motion.a>
      ) : (
        <motion.button type="button" aria-label={`${label} link coming soon`} variants={btn} initial="rest" animate={soon ? 'hover' : 'rest'} whileHover="hover" whileFocus="hover" whileTap={{ scale: 0.9 }}
          onClick={() => { setSoon(true); setTimeout(() => setSoon(false), 1600) }} className={circle}>{inner}</motion.button>
      )}
    </motion.li>
  )
}

export default function Footer() {
  const reduce = useReducedMotion()
  // Instagram, Facebook and LinkedIn always show. Without a URL in src/data/site.js the button is inactive (not clickable).
  const socials = ALWAYS_SHOWN.concat(Object.keys(SITE.socials).filter((k) => !ALWAYS_SHOWN.includes(k) && SITE.socials[k])).filter((k) => SOCIALS[k]).map((k) => [k, SITE.socials[k]])
  return (
    <footer className="relative isolate overflow-hidden bg-burgundy text-white">
      {/* Gold line that draws in + slow floating decorative rings */}
      <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.1, ease: 'easeOut' }}
        className="h-1 origin-left bg-linear-to-r from-gold via-white/70 to-gold" aria-hidden="true" />
      <motion.span aria-hidden="true" animate={{ y: [0, -14, 0] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -right-20 top-10 -z-10 h-72 w-72 rounded-full border border-gold/30" />
      <motion.span aria-hidden="true" animate={{ y: [0, 12, 0] }} transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -left-24 bottom-16 -z-10 h-56 w-56 rounded-full border border-gold/20" />

      {/* Flight band: plane glides along a dashed route */}
      <div className="relative h-20 overflow-hidden" aria-hidden="true">
        <div className="absolute inset-x-0 top-1/2 border-t border-dashed border-white/25" />
        {reduce ? (
          <Plane size={26} className="absolute left-[12%] top-1/2 -translate-y-1/2 rotate-45 text-gold" />
        ) : (
          <motion.div className="absolute top-1/2 flex items-center" initial={{ left: '-18%' }} animate={{ left: '108%' }}
            transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}>
            <span className="mr-1 h-px w-24 bg-linear-to-r from-transparent to-gold sm:w-40" />
            <motion.span animate={{ y: [-14, 10, -14], rotate: [38, 52, 38] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="block">
              <Plane size={30} className="text-gold drop-shadow" />
            </motion.span>
          </motion.div>
        )}
      </div>

      <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }} className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <motion.div variants={col}>
          <Logo light />
          <p className="mt-4 text-sm leading-relaxed text-white/80">Personalized guidance on international study options, admissions and applications.</p>
          {socials.length > 0 && (
            <div className="mt-6">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">Follow Us</p>
              <motion.ul variants={{ hidden: {}, show: { transition: { staggerChildren: 0.14, delayChildren: 0.4 } } }} className="flex flex-nowrap items-center gap-4">
                {socials.map(([k, url], i) => <SocialButton key={k} k={k} url={url} i={i} reduce={reduce} />)}
              </motion.ul>
            </div>
          )}
        </motion.div>

        <motion.nav variants={col} aria-label="Quick links"><h2 className={heading}>Quick Links</h2><ul className="space-y-3">{QUICK.map(([t, to]) => <li key={to}><FooterLink to={to}>{t}</FooterLink></li>)}</ul></motion.nav>
        <motion.nav variants={col} aria-label="Study destinations"><h2 className={heading}>Study Destinations</h2><ul className="space-y-3">{DESTINATIONS.map((d) => <li key={d.slug}><FooterLink to={`/destinations/${d.slug}`}>{d.name}</FooterLink></li>)}</ul></motion.nav>

        <motion.div variants={col}>
          <h2 className={heading}>Our Services</h2>
          <ul className="mb-6 space-y-3">{SERVICES.map((s) => <li key={s.slug}><FooterLink to="/services">{s.title}</FooterLink></li>)}</ul>
          <ul className="space-y-3 text-sm text-white/80">
            {SITE.phones.map((p) => (
              <li key={p}><a href={telHref(p)} className="group inline-flex items-center gap-3 hover:text-gold"><span className="flex h-8 w-8 items-center justify-center rounded-full border border-gold/60 transition-colors group-hover:bg-gold group-hover:text-burgundy"><Phone size={14} aria-hidden="true" /></span>{p}</a></li>
            ))}
            <li><a href={SITE.url} className="group inline-flex items-center gap-3 hover:text-gold"><span className="flex h-8 w-8 items-center justify-center rounded-full border border-gold/60 transition-colors group-hover:bg-gold group-hover:text-burgundy"><Globe size={14} aria-hidden="true" /></span>mireducationconsultants.com</a></li>
          </ul>
        </motion.div>
      </motion.div>

      <div className="border-t border-gold/40">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-4 pb-20 text-xs text-white/80 sm:flex-row sm:pb-4 sm:pr-24">
          <p className="text-center sm:text-left">© 2026 MIR Education &amp; Immigration Consultants. All Rights Reserved. · mireducationconsultants.com</p>
          <motion.button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} whileHover={{ y: -3 }} whileTap={{ scale: 0.95 }}
            className="inline-flex min-h-10 items-center gap-2 rounded-full border border-gold px-4 font-semibold text-white transition-colors hover:bg-gold hover:text-burgundy">
            Back to top <ArrowUp size={14} aria-hidden="true" />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
