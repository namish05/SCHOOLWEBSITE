import { useDocumentTitle } from '../lib/useDocumentTitle'
import { site } from '../data/content'
import { PageHeader } from '../components/ui/PageHeader'
import { SectionEyebrow } from '../components/ui/SectionEyebrow'
import { Reveal } from '../components/ui/Reveal'
import { StagesRail } from '../components/academics/StagesRail'
import { StreamsGrid } from '../components/academics/StreamsGrid'
import { FacilitiesGrid } from '../components/academics/FacilitiesGrid'
import { CtaBand } from '../components/ui/CtaBand'

export function AcademicsPage() {
  useDocumentTitle(`Academics | ${site.name}`)

  return (
    <>
      <PageHeader
        eyebrow="CBSE Curriculum"
        title="Academics at Hillwoods"
        description="A structured path from Nursery to Grade XII, built stage by stage around how children actually learn."
      />

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <SectionEyebrow>The Five Stages</SectionEyebrow>
        <Reveal delay={0.05}>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold text-navy-900 sm:text-5xl">
            A curriculum that grows with your child.
          </h2>
        </Reveal>
        <div className="mt-14">
          <StagesRail />
        </div>
      </section>

      <section className="bg-navy-950 py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionEyebrow tone="gold" align="center">
            Grades XI &ndash; XII
          </SectionEyebrow>
          <Reveal delay={0.05}>
            <h2 className="mx-auto mt-4 max-w-xl text-center font-display text-4xl font-semibold text-parchment-50 sm:text-5xl">
              Choose a stream, not just a subject list
            </h2>
          </Reveal>
          <div className="mt-14">
            <StreamsGrid />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <SectionEyebrow>Beyond the Classroom</SectionEyebrow>
        <Reveal delay={0.05}>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold text-navy-900 sm:text-5xl">
            Facilities built for hands-on learning.
          </h2>
        </Reveal>
        <div className="mt-14">
          <FacilitiesGrid />
        </div>
      </section>

      <CtaBand
        eyebrow="See It Yourself"
        title="The best way to understand our academics is to walk the halls."
        description="Book a campus tour and sit in on a class before you decide."
        buttonLabel="Book a Campus Visit"
        buttonTo="/admissions"
      />
    </>
  )
}
