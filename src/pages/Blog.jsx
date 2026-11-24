import Seo from '../components/Seo'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import CtaBanner from '../components/CtaBanner'
import { POSTS } from '../data/blog'

export default function Blog() {
  return (
    <>
      <Seo title="Blog | Study Abroad Guides | MIR Education Consultants" description="Study abroad guides and admission tips from MIR Education & Immigration Consultants. Articles coming soon." path="/blog" />
      <PageHeader eyebrow="Blog" title="Study Abroad Guides & Insights" desc="Placeholder articles — full content coming soon." />
      <section className="section">
        <div className="container-x grid gap-6 md:grid-cols-2">
          {POSTS.map((p, i) => (
            <Reveal as="article" key={p.title} delay={(i % 2) * 0.08} className="card flex h-full flex-col overflow-hidden">
              <div className="flex h-32 items-center justify-center bg-gradient-to-br from-primary to-olive"><span className="border-y border-gold px-4 py-1 font-display text-white">{p.category}</span></div>
              <div className="flex flex-1 flex-col p-6">
                <h2 className="text-xl">{p.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed">{p.excerpt}</p>
                <span className="mt-4 inline-block w-fit rounded-full border border-gold px-3 py-1 text-xs font-semibold text-olive">Coming soon</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBanner />
    </>
  )
}
