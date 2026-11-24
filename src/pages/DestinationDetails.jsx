import { Link, useParams } from 'react-router-dom'
import Seo from '../components/Seo'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import SmartImage from '../components/SmartImage'
import CtaBanner from '../components/CtaBanner'
import NotFound from './NotFound'
import { DESTINATIONS } from '../data/destinations'

export default function DestinationDetails() {
  const { slug } = useParams()
  const d = DESTINATIONS.find((x) => x.slug === slug)
  if (!d) return <NotFound />
  const blocks = [['Education Opportunities', d.opportunities], ['Study Levels', d.levels], ['Admission Considerations', d.admission], ['Language Requirements', d.language], ['Documentation Information', d.documents]]
  return (
    <>
      <Seo title={`Study in ${d.name} from Pakistan | MIR Education Consultants`} description={`${d.intro} Contact MIR Education & Immigration Consultants for guidance.`} path={`/destinations/${d.slug}`} />
      <PageHeader eyebrow={d.tagline} title={`Study in ${d.name}`} desc={d.intro} />
      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <SmartImage src={d.image} alt={`${d.name} destination`} label={d.name} className="aspect-[16/9] w-full rounded-2xl shadow-lg" />
            {blocks.map(([t, items], i) => (
              <Reveal key={t} delay={i * 0.04} className="card p-6">
                <h2 className="text-xl">{t}</h2>
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm marker:text-gold">{items.map((x) => <li key={x}>{x}</li>)}</ul>
              </Reveal>
            ))}
            <p className="text-xs">General information only. Requirements vary by university, program and applicant circumstances and change over time — confirm with official sources before applying.</p>
          </div>
          <aside className="h-fit space-y-4 lg:sticky lg:top-28">
            <div className="card p-6">
              <h2 className="text-xl">Other Destinations</h2>
              <ul className="mt-3 space-y-1">{DESTINATIONS.filter((x) => x.slug !== d.slug).map((x) => <li key={x.slug}><Link to={`/destinations/${x.slug}`} className="flex min-h-11 items-center font-medium hover:text-primary">{x.name}</Link></li>)}</ul>
            </div>
            <Link to="/contact#inquiry" className="btn-primary w-full">Talk to MIR About {d.name}</Link>
          </aside>
        </div>
      </section>
      <CtaBanner />
    </>
  )
}
