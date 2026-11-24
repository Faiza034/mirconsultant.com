import { Link } from 'react-router-dom'
import { Check, MapPin } from 'lucide-react'
import Seo from '../components/Seo'
import Hero from '../components/Hero'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import SmartImage from '../components/SmartImage'
import DestinationCard from '../components/DestinationCard'
import ServiceCard from '../components/ServiceCard'
import TestimonialCard from '../components/TestimonialCard'
import FAQ from '../components/FAQ'
import CtaBanner from '../components/CtaBanner'
import HowItWorks from '../components/HowItWorks'
import ContactForm from '../components/ContactForm'
import { DESTINATIONS } from '../data/destinations'
import { SERVICES } from '../data/services'
import { TESTIMONIALS } from '../data/testimonials'
import { OPPORTUNITIES } from '../data/opportunities'
import { IMAGES } from '../data/site'

const BENEFITS = ['Personalized Student Guidance', 'Clear Admission Information', 'Application Documentation Support', 'Professional Consultation', 'Guidance Throughout Your Application Journey']

export default function Home() {
  return (
    <>
      <Seo title="MIR Education & Immigration Consultants | Study Abroad" description="Explore international study opportunities with MIR Education & Immigration Consultants. Get admission guidance, application support and international education consultation." path="/" />
      <Hero />

      <section className="section" aria-labelledby="intro-h">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">About MIR</p>
            <h2 id="intro-h" className="text-3xl sm:text-4xl">Your Journey to International Education Starts with MIR.</h2>
            <div className="my-5 h-0.5 w-16 bg-gold" />
            <p className="leading-relaxed">At MIR Education &amp; Immigration Consultants, we help students explore international education opportunities and take informed steps towards their academic future.</p>
            <p className="mt-4 leading-relaxed">From selecting suitable study destinations to understanding admission requirements and preparing applications, our team provides guidance throughout the process.</p>
            <Link to="/about" className="btn-primary mt-7">Discover More About Us</Link>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="relative">
              <div className="absolute -bottom-3 -right-3 h-full w-full rounded-2xl border border-gold" aria-hidden="true" />
              <SmartImage src={IMAGES.about} alt="Students studying together" label="Student guidance" className="relative aspect-[4/3] w-full rounded-2xl shadow-lg" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-white" aria-labelledby="dest-h">
        <div className="container-x">
          <SectionHeading eyebrow="Destinations" title="Explore Your Study Destinations" desc="Discover international education opportunities and explore destinations that match your academic goals." />
          <h2 id="dest-h" className="sr-only">Study destinations</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{DESTINATIONS.map((d, i) => <DestinationCard key={d.slug} d={d} delay={i * 0.08} />)}</div>
        </div>
      </section>

      <section className="section" aria-label="Our services">
        <div className="container-x">
          <SectionHeading eyebrow="Our Services" title="How We Help You Achieve Your Dreams" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{SERVICES.map((s, i) => <ServiceCard key={s.slug} s={s} delay={i * 0.08} />)}</div>
        </div>
      </section>

      <section className="section bg-olive text-white" aria-labelledby="why-h">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">Why Choose MIR?</p>
            <h2 id="why-h" className="text-3xl !text-white sm:text-4xl">Your Journey Deserves the Right Guidance.</h2>
            <div className="my-5 h-0.5 w-16 bg-gold" />
            <p className="leading-relaxed text-white/85">Choosing the right educational path is an important decision. MIR aims to make your international education journey clearer through professional guidance and personalized support.</p>
          </Reveal>
          <ul className="space-y-4">
            {BENEFITS.map((b, i) => (
              <Reveal as="li" key={b} delay={i * 0.07} className="flex items-center gap-4 rounded-2xl border border-gold/60 bg-white/5 p-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold text-primary"><Check size={18} aria-hidden="true" /></span>
                <span className="font-medium">{b}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <HowItWorks />

      <section className="section bg-white" aria-label="Featured study opportunities">
        <div className="container-x">
          <SectionHeading eyebrow="Opportunities" title="Explore Your Opportunities" desc="Illustrative examples only — program availability, requirements, fees and deadlines must be confirmed with each university." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {OPPORTUNITIES.map((o, i) => (
              <Reveal key={o.country} delay={i * 0.08} className="card flex h-full flex-col p-6">
                <span className="mb-3 inline-flex w-fit items-center gap-1 rounded-full bg-ivory px-3 py-1 text-xs font-semibold text-olive"><MapPin size={12} aria-hidden="true" />{o.country}</span>
                <h3 className="text-xl">{o.program}</h3>
                <p className="mt-2 text-sm"><strong>Level:</strong> {o.level}</p>
                <p className="mt-1 flex-1 text-sm"><strong>Typical requirements:</strong> {o.req}</p>
                <p className="mt-3 text-[11px] uppercase tracking-wide text-gold">Illustrative sample</p>
                <Link to="/contact#inquiry" className="mt-3 inline-flex min-h-11 items-center text-sm font-semibold text-primary">Learn More →</Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-label="Student testimonials">
        <div className="container-x">
          <SectionHeading eyebrow="Testimonials" title="What Students Say About Their Experience" desc="Placeholder content — to be replaced with genuine student testimonials." />
          <div className="grid gap-6 md:grid-cols-3">{TESTIMONIALS.map((t, i) => <Reveal key={i} delay={i * 0.1}><TestimonialCard t={t} /></Reveal>)}</div>
        </div>
      </section>

      <section className="section bg-white" aria-label="Frequently asked questions">
        <div className="container-x"><SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" /><FAQ /></div>
      </section>

      <CtaBanner />

      <section className="section" id="contact" aria-label="Contact">
        <div className="container-x">
          <SectionHeading eyebrow="Contact" title="MIR Education & Immigration Consultants" desc="Have questions about studying abroad? Contact our team to discuss your academic goals and explore available opportunities." />
          <Reveal><div id="inquiry"><ContactForm /></div></Reveal>
        </div>
      </section>
    </>
  )
}
