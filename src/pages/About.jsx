import { Target, Eye, Compass, HeartHandshake } from 'lucide-react'
import Seo from '../components/Seo'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import SmartImage from '../components/SmartImage'
import CtaBanner from '../components/CtaBanner'
import { IMAGES } from '../data/site'

const BLOCKS = [
  { icon: Target, t: 'Our Mission', d: 'To help students explore international education opportunities and take informed, confident steps towards their academic future.' },
  { icon: Eye, t: 'Our Vision', d: 'To be a trusted guide for students seeking clear, honest and personalized information about studying abroad.' },
  { icon: Compass, t: 'Our Approach', d: 'We listen first, then explain options, requirements and procedures clearly, and support you through each stage of your application journey.' },
]
const WHY = ['Personalized guidance based on your background and goals', 'Clear explanations of admission requirements', 'Support with documentation and applications', 'Honest information — we do not promise admissions or visa outcomes']

export default function About() {
  return (
    <>
      <Seo title="About Us | MIR Education & Immigration Consultants" description="Learn about MIR Education & Immigration Consultants, our mission, vision and approach to guiding students towards international education." path="/about" />
      <PageHeader eyebrow="About Us" title="About MIR Education & Immigration Consultants" desc="Guidance that helps you make informed decisions about studying abroad." />
      <section className="section">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-3xl">Who We Are</h2>
            <div className="my-5 h-0.5 w-16 bg-gold" />
            <p className="leading-relaxed">MIR Education &amp; Immigration Consultants helps students explore international education opportunities. From choosing a suitable destination to understanding admission requirements and preparing applications, our team provides guidance throughout the process.</p>
            <p className="mt-4 leading-relaxed">Requirements differ by university, country and applicant circumstances, so we focus on giving you accurate, personalized information.</p>
          </Reveal>
          <Reveal delay={0.1}><SmartImage src={IMAGES.consult} alt="Student consultation" label="MIR consultation" className="aspect-[4/3] w-full rounded-2xl shadow-lg" /></Reveal>
        </div>
      </section>
      <section className="section bg-white">
        <div className="container-x grid gap-6 md:grid-cols-3">
          {BLOCKS.map(({ icon: I, t, d }, i) => (
            <Reveal key={t} delay={i * 0.1} className="card h-full p-7">
              <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-gold bg-ivory text-olive"><I size={26} aria-hidden="true" /></span>
              <h3 className="text-xl">{t}</h3><p className="mt-3 text-sm leading-relaxed">{d}</p>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="container-x max-w-3xl">
          <SectionHeading title="Why Students Should Connect with MIR" />
          <ul className="space-y-4">
            {WHY.map((w) => <li key={w} className="card flex items-center gap-4 p-4"><HeartHandshake size={22} className="shrink-0 text-gold" aria-hidden="true" /><span>{w}</span></li>)}
          </ul>
        </div>
      </section>
      <CtaBanner />
    </>
  )
}
