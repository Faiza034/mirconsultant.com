import { Check } from 'lucide-react'
import Seo from '../components/Seo'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import CtaBanner from '../components/CtaBanner'
import { SERVICES } from '../data/services'

export default function Services() {
  return (
    <>
      <Seo title="Our Services | Admission & Visa Guidance | MIR Education" description="Study options, admission guidance, application support and visa guidance from MIR Education & Immigration Consultants." path="/services" />
      <PageHeader eyebrow="Our Services" title="How We Help You Achieve Your Dreams" desc="Support at every stage of your international education journey." />
      <section className="section">
        <div className="container-x space-y-8">
          {SERVICES.map((s, i) => {
            const Icon = s.icon
            return (
              <Reveal key={s.slug} className="card grid gap-6 p-7 sm:p-10 md:grid-cols-[auto_1fr]" >
                <span id={s.slug} className="flex h-16 w-16 items-center justify-center rounded-full border border-gold bg-ivory text-olive"><Icon size={30} aria-hidden="true" /></span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gold">Service {i + 1}</p>
                  <h2 className="mt-1 text-2xl">{s.title}</h2>
                  <p className="mt-3 leading-relaxed">{s.desc}</p>
                  <ul className="mt-4 space-y-2">{s.points.map((p) => <li key={p} className="flex items-start gap-3 text-sm"><Check size={16} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />{p}</li>)}</ul>
                </div>
              </Reveal>
            )
          })}
          <p className="text-center text-xs">Admission and visa decisions are made by universities and government authorities. MIR provides guidance only and cannot guarantee outcomes.</p>
        </div>
      </section>
      <CtaBanner />
    </>
  )
}
