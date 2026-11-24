import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// EDIT ME: put your own photos in /public/images/hero/ and use '/images/hero/campus-1.jpg'.
// `tag` (optional) shows a small label on the photo, e.g. 'Germany'. Only add it if the photo really shows that place.
// Slides that fail to load are skipped automatically. Write an accurate `alt` for each photo.
const u = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1920&q=75`
const SLIDES = [
  { src: u('photo-1541339907198-e08756dedf3f'), alt: 'University campus building', tag: '' },
  { src: u('photo-1523050854058-8df90110c9f1'), alt: 'Graduating students celebrating', tag: '' },
  { src: u('photo-1562774053-701939374585'), alt: 'University campus with students', tag: '' },
  { src: u('photo-1498243691581-b145c3f54a5a'), alt: 'Historic university architecture', tag: '' },
  { src: u('photo-1564981797816-1043664bf78d'), alt: 'International university building', tag: '' },
]
const INTERVAL = 5000

const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } }

export default function Hero() {
  const [failed, setFailed] = useState([])
  const [idx, setIdx] = useState(0)
  const [paused, setPaused] = useState(false)
  const slides = SLIDES.filter((s) => !failed.includes(s.src))
  const n = slides.length
  const current = n ? idx % n : 0
  const go = useCallback((d) => setIdx((i) => (i + d + n) % Math.max(n, 1)), [n])

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (n < 2 || paused || reduce) return
    const t = setInterval(() => go(1), INTERVAL)
    return () => clearInterval(t)
  }, [n, paused, go, idx])

  return (
    <section className="relative isolate flex min-h-[78vh] items-end overflow-hidden bg-gradient-to-br from-ivory via-white to-ivory md:min-h-[85vh] md:items-center"
      onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}
      aria-roledescription="carousel" aria-label="International university photos">
      {/* Photos stay fully visible: crossfade + slow zoom */}
      <div className="absolute inset-0 -z-10">
        <AnimatePresence initial={false}>
          {n > 0 && (
            <motion.img key={slides[current].src} src={slides[current].src} alt={slides[current].alt}
              initial={{ opacity: 0, scale: 1.1 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
              transition={{ opacity: { duration: 1.1 }, scale: { duration: 6.5, ease: 'easeOut' } }}
              className="absolute inset-0 h-full w-full object-cover" />
          )}
        </AnimatePresence>
      </div>
      {/* Hidden loaders detect broken URLs so they can be skipped */}
      {SLIDES.map((s) => !failed.includes(s.src) && (
        <img key={s.src} src={s.src} alt="" aria-hidden="true" className="hidden" onError={() => setFailed((f) => [...f, s.src])} />
      ))}

      {/* Short text in a compact light panel */}
      <div className="container-x w-full pb-16 pt-24 md:py-24">
        <motion.div initial="hidden" animate="show" transition={{ staggerChildren: 0.12 }}
          className="max-w-xl rounded-2xl border border-gold bg-ivory/90 p-6 shadow-xl backdrop-blur-sm sm:p-9">
          <motion.p variants={item} className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary sm:text-xs">
            Your International Education Journey Starts Here
          </motion.p>
          <motion.h1 variants={item} className="text-3xl leading-tight sm:text-5xl">
            Your Dream. Your Future. <span className="text-burgundy">Your Destination.</span>
          </motion.h1>
          <motion.div variants={item} className="my-4 h-1 w-16 rounded-full bg-gold" />
          <motion.p variants={item} className="font-display text-lg italic text-primary sm:text-xl">Study Abroad with Confidence.</motion.p>
          <motion.div variants={item} className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link to="/destinations" className="btn-primary">Explore Destinations</Link>
            <Link to="/contact" className="btn-outline bg-white/70">Apply Now</Link>
          </motion.div>
        </motion.div>
      </div>

      {n > 0 && slides[current].tag && (
        <span className="absolute bottom-14 right-5 hidden rounded-full border border-gold bg-ivory/90 px-4 py-1.5 text-sm font-semibold text-primary md:block">{slides[current].tag}</span>
      )}
      {n > 1 && (
        <>
          <button type="button" onClick={() => go(-1)} aria-label="Previous photo" className="absolute left-3 top-1/3 hidden h-11 w-11 items-center justify-center rounded-full border border-gold bg-ivory/90 text-primary transition hover:bg-gold md:flex"><ChevronLeft size={22} /></button>
          <button type="button" onClick={() => go(1)} aria-label="Next photo" className="absolute right-3 top-1/3 hidden h-11 w-11 items-center justify-center rounded-full border border-gold bg-ivory/90 text-primary transition hover:bg-gold md:flex"><ChevronRight size={22} /></button>
          <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-ivory/80 px-3 py-2" role="group" aria-label="Choose photo">
            {slides.map((s, i) => (
              <button key={s.src} type="button" onClick={() => setIdx(i)} aria-label={`Show photo ${i + 1}`} aria-current={i === current}
                className={`h-2.5 rounded-full border border-gold transition-all ${i === current ? 'w-8 bg-primary' : 'w-2.5 bg-white'}`} />
            ))}
          </div>
        </>
      )}
    </section>
  )
}
