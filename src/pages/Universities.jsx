import { ExternalLink, MapPin } from 'lucide-react'
import Seo from '../components/Seo'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import CtaBanner from '../components/CtaBanner'
import { UNIVERSITIES } from '../data/universities'

export default function Universities() {
  return (
    <>
      <Seo title="Universities | Explore International Universities | MIR" description="Browse a selection of international universities in Germany, Cyprus, the UK and Italy and visit their official websites." path="/universities" />
      <PageHeader eyebrow="Universities" title="Explore International Universities" desc="A selection of well-known institutions, listed for information. Listing does not imply a partnership with MIR." />
      <section className="section">
        <div className="container-x grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {UNIVERSITIES.map((u, i) => (
            <Reveal key={u.name} delay={(i % 3) * 0.08} className="card flex h-full flex-col p-6">
              <span className="mb-3 inline-block w-fit rounded-full bg-ivory px-3 py-1 text-xs font-semibold text-olive">{u.country}</span>
              <h2 className="text-xl">{u.name}</h2>
              <p className="mt-2 flex items-center gap-1.5 text-sm"><MapPin size={14} className="text-gold" aria-hidden="true" />{u.location}</p>
              <p className="mt-2 flex-1 text-sm"><strong>Programs:</strong> {u.programs}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href={u.url} target="_blank" rel="noopener noreferrer" className="btn-outline !min-h-10 !px-4">Official Website <ExternalLink size={14} aria-hidden="true" /></a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBanner title="Need Help Choosing a University?" desc="Speak with MIR about programs that match your background and goals." button="Book Your Consultation" />
    </>
  )
}
