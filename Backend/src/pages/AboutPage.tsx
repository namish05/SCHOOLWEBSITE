import { useDocumentTitle } from '../lib/useDocumentTitle'
import { site, aboutMission, aboutVision, yearsOfExcellence } from '../data/content'
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
        description={`${yearsOfExcellence}+ years of educating students in ${site.city}, ${site.state} — one classroom, one milestone at a time.`}
      />

      <section className="mx-auto max-w-5xl px-5 py-24 lg:px-8">
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
