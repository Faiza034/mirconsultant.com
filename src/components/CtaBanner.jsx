import { Link } from 'react-router-dom'
import Reveal from './Reveal'

export default function CtaBanner({ title = 'Ready to Begin Your International Journey?', desc = 'Take the first step towards your educational future. Connect with MIR Education & Immigration Consultants for personalized study guidance.', button = 'Book Your Consultation' }) {
  return (
    <section className="bg-burgundy py-16 text-center sm:py-20" aria-label="Call to action">
      <Reveal className="container-x max-w-3xl">
        <div className="mx-auto mb-6 h-0.5 w-16 bg-gold" />
        <h2 className="text-3xl !text-white sm:text-4xl">{title}</h2>
        <p className="mt-4 text-lg text-white/85">{desc}</p>
        <Link to="/contact#inquiry" className="btn-gold mt-8">{button}</Link>
      </Reveal>
    </section>
  )
}
