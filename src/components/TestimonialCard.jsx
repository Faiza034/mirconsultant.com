import { Quote } from 'lucide-react'
import SmartImage from './SmartImage'

export default function TestimonialCard({ t }) {
  return (
    <figure className="card flex h-full flex-col p-7">
      <Quote size={28} className="text-gold" aria-hidden="true" />
      <blockquote className="mt-4 flex-1 text-sm italic leading-relaxed">{t.text}</blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-gold/40 pt-4">
        <SmartImage src={t.photo} alt={`Photo of ${t.name}`} label={t.name[0]} className="h-11 w-11 rounded-full [&_span]:border-0 [&_span]:p-0" />
        <div><p className="font-semibold text-primary">{t.name}</p><p className="text-xs">{t.country}</p></div>
      </figcaption>
    </figure>
  )
}
