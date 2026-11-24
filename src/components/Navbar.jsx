import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Menu, X } from 'lucide-react'
import Logo from './Logo'
import { NAV } from '../data/site'
import { DESTINATIONS } from '../data/destinations'

const linkCls = ({ isActive }) =>
  `relative py-2 text-sm font-medium transition-colors hover:text-primary ${isActive ? 'text-primary after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:bg-gold' : 'text-olive'}`

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-40 border-b border-gold/40 bg-ivory/95 backdrop-blur transition-shadow ${scrolled ? 'shadow-md' : ''}`}>
      <div className="container-x flex h-20 items-center justify-between gap-4">
        <Logo />
        <nav aria-label="Main navigation" className="hidden items-center gap-6 lg:flex">
          {NAV.map((n) => n.dropdown ? (
            <div key={n.to} className="group relative">
              <NavLink to={n.to} end className={linkCls}><span className="inline-flex items-center gap-1">{n.label}<ChevronDown size={14} aria-hidden="true" /></span></NavLink>
              <div className="invisible absolute left-1/2 top-full w-52 -translate-x-1/2 pt-3 opacity-0 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                <ul className="card overflow-hidden py-2 shadow-lg">
                  {DESTINATIONS.map((d) => (
                    <li key={d.slug}><Link to={`/destinations/${d.slug}`} className="block px-4 py-2 text-sm hover:bg-ivory hover:text-primary">{d.name}</Link></li>
                  ))}
                </ul>
              </div>
            </div>
          ) : <NavLink key={n.to} to={n.to} end={n.to === '/'} className={linkCls}>{n.label}</NavLink>)}
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/contact" className="btn-gold hidden border border-primary/20 sm:inline-flex">Apply Now</Link>
          <button type="button" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gold text-primary lg:hidden">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav id="mobile-menu" aria-label="Mobile navigation" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-gold/40 bg-ivory lg:hidden">
            <ul className="container-x space-y-1 py-4">
              {NAV.map((n) => (
                <li key={n.to}><NavLink to={n.to} end={n.to === '/'} className={({ isActive }) => `block rounded-lg px-3 py-3 text-base font-medium ${isActive ? 'bg-primary text-white' : 'text-olive hover:bg-white'}`}>{n.label}</NavLink></li>
              ))}
              <li className="pt-2"><Link to="/contact" className="btn-gold w-full border border-primary/20">Apply Now</Link></li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
