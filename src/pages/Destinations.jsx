import Seo from '../components/Seo'
import PageHeader from '../components/PageHeader'
import DestinationCard from '../components/DestinationCard'
import CtaBanner from '../components/CtaBanner'
import { DESTINATIONS } from '../data/destinations'

export default function Destinations() {
  return (
    <>
      <Seo title="Study Destinations | Germany, Cyprus, UK & Italy | MIR" description="Explore study destinations including Germany, Cyprus, the United Kingdom and Italy with MIR Education & Immigration Consultants." path="/destinations" />
      <PageHeader eyebrow="Study Destinations" title="Explore Your Study Destinations" desc="General information to help you start planning. Always confirm requirements with the university and official sources." />
      <section className="section">
        <div className="container-x grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{DESTINATIONS.map((d, i) => <DestinationCard key={d.slug} d={d} delay={i * 0.08} />)}</div>
      </section>
      <CtaBanner />
    </>
  )
}
