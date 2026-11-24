import Seo from '../components/Seo'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import ContactForm from '../components/ContactForm'
import { SITE } from '../data/site'

export default function Contact() {
  return (
    <>
      <Seo title="Contact Us | Book a Consultation | MIR Education Consultants" description="Contact MIR Education & Immigration Consultants to discuss your study abroad goals. Call, message on WhatsApp or send an inquiry." path="/contact" />
      <PageHeader eyebrow="Contact Us" title="Book Your Consultation" desc="Have questions about studying abroad? Contact our team to discuss your academic goals." />
      <section className="section">
        <div className="container-x">
          <Reveal><div id="inquiry"><ContactForm /></div></Reveal>
          {/* Shown only once a verified office address is added in src/data/site.js */}
          {SITE.address && <p className="mt-8 text-center text-sm"><strong>Office:</strong> {SITE.address}</p>}
        </div>
      </section>
    </>
  )
}
