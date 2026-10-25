import { Award, CheckCircle2, Layers, MapPin, ShieldCheck, Star } from 'lucide-react'
import { useDocumentTitle } from '../lib/useDocumentTitle'
import { site, aboutMission, aboutVision, yearsOfExcellence, schoolInfoData } from '../data/content'
import { PageHeader } from '../components/ui/PageHeader'
import { SectionEyebrow } from '../components/ui/SectionEyebrow'
import { Reveal } from '../components/ui/Reveal'
import { Timeline } from '../components/about/Timeline'
import { ValuesGrid } from '../components/about/ValuesGrid'
import { Leadership } from '../components/about/Leadership'
import { CtaBand } from '../components/ui/CtaBand'

export function AboutPage() {
  useDocumentTitle(`About Us | ${site.name}`)

  return (
    <>
      <PageHeader
        eyebrow="Our Story"
        title={`About ${site.name}`}
        description={`${yearsOfExcellence}+ years of educating students in ${site.locality}, ${site.city} — dedicated to academic excellence and nurturing holistic character.`}
      />

      {/* Institutional Overview & Profile */}
      <section className="mx-auto max-w-7xl px-5 pt-20 pb-12 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7">
            <SectionEyebrow tone="crimson">Institutional Overview</SectionEyebrow>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-display text-3xl font-semibold text-navy-950 sm:text-4xl">
                A prestigious educational institution in {site.locality}, {site.city}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-base leading-relaxed text-ink-700 sm:text-lg">
                {schoolInfoData.overview}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-4 text-sm leading-relaxed text-ink-600">
                {schoolInfoData.governance}
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-navy-900/10 bg-white p-7 shadow-sm">
                <div className="flex items-center justify-between border-b border-navy-900/8 pb-4">
                  <div className="flex items-center gap-1.5 text-gold-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-gold-500 text-gold-500" />
                    ))}
                  </div>
                  <span className="font-mono text-xs font-semibold text-navy-900">
                    Rated {schoolInfoData.rating} / 5
                  </span>
                </div>

                <div className="mt-5 space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-crimson-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-navy-900 block">Campus Location</span>
                      <span className="text-xs text-ink-600">{site.fullAddress}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Layers size={18} className="text-gold-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-navy-900 block">Levels of Schooling</span>
                      <span className="text-xs text-ink-600">Primary and Secondary Education (CBSE)</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <ShieldCheck size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-navy-900 block">Governance</span>
                      <span className="text-xs text-ink-600">Structured Academic & Administrative Framework</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-navy-900/8 bg-white p-8">
              <SectionEyebrow tone="crimson">Mission</SectionEyebrow>
              <p className="mt-5 text-lg leading-relaxed text-ink-700">{aboutMission}</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-2xl border border-navy-900/8 bg-white p-8">
              <SectionEyebrow tone="crimson">Vision</SectionEyebrow>
              <p className="mt-5 text-lg leading-relaxed text-ink-700">{aboutVision}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-parchment-100/60 py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionEyebrow align="center">What We Stand For</SectionEyebrow>
          <Reveal delay={0.05}>
            <h2 className="mx-auto mt-4 max-w-xl text-center font-display text-4xl font-semibold text-navy-900 sm:text-5xl">
              Our values
            </h2>
          </Reveal>
          <div className="mt-14">
            <ValuesGrid />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <SectionEyebrow align="center">Since {site.founded}</SectionEyebrow>
        <Reveal delay={0.05}>
          <h2 className="mx-auto mt-4 max-w-xl text-center font-display text-4xl font-semibold text-navy-900 sm:text-5xl">
            Our journey so far
          </h2>
        </Reveal>
        <div className="mt-16">
          <Timeline />
        </div>
      </section>

      <section className="bg-parchment-100/60 py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionEyebrow align="center">Leadership</SectionEyebrow>
          <Reveal delay={0.05}>
            <h2 className="mx-auto mt-4 max-w-xl text-center font-display text-4xl font-semibold text-navy-900 sm:text-5xl">
              The people behind Hillwoods
            </h2>
          </Reveal>
          <div className="mt-14">
            <Leadership />
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Join Our Story"
        title="Every great chapter starts with a single visit."
        description="Come see the campus, meet our faculty, and picture your child's next few years with us."
        buttonLabel="Plan a Campus Visit"
        buttonTo="/admissions"
      />
    </>
  )
}
