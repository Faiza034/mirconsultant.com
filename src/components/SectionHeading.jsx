import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, desc, center = true, light = false }) {
  return (
    <Reveal className={`mb-12 max-w-3xl ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">{eyebrow}</p>}
      <h2 className={`text-3xl sm:text-4xl ${light ? '!text-white' : ''}`}>{title}</h2>
      <div className={`mt-4 h-0.5 w-16 bg-gold ${center ? 'mx-auto' : ''}`} />
      {desc && <p className={`mt-5 text-base leading-relaxed sm:text-lg ${light ? 'text-white/85' : ''}`}>{desc}</p>}
    </Reveal>
  )
}
