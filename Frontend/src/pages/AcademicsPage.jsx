import { Award, BookOpen, Compass, Palette } from 'lucide-react'
import { useDocumentTitle } from '../lib/useDocumentTitle'
import { schoolInfoData, site } from '../data/content'
import { PageHeader } from '../components/ui/PageHeader'
import { SectionEyebrow } from '../components/ui/SectionEyebrow'
import { Reveal } from '../components/ui/Reveal'
import { StagesRail } from '../components/academics/StagesRail'
import { FacilitiesGrid } from '../components/academics/FacilitiesGrid'
import { CtaBand } from '../components/ui/CtaBand'

export function AcademicsPage() {
  useDocumentTitle(`Academics | ${site.name}`)

  return (
    <>
      <PageHeader
        eyebrow="CBSE Curriculum"
        title="Academics at Hillwoods"
        description="A well-rounded CBSE education on CC Road, Deoria, balancing core academic subjects, creative arts, and physical education."
      />

      {/* Curriculum & Medium of Instruction Overview */}
      <section className="mx-auto max-w-7xl px-5 pt-16 pb-8 lg:px-8">
        <div className="rounded-3xl border border-navy-900/8 bg-white p-8 lg:p-12 shadow-sm">
          <SectionEyebrow tone="crimson">Curriculum &amp; Medium of Instruction</SectionEyebrow>
          <Reveal delay={0.05}>
            <h2 className="mt-3 font-display text-3xl font-semibold text-navy-950 sm:text-4xl max-w-3xl">
              Equipping every student for academic excellence and future success
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-base leading-relaxed text-ink-700 sm:text-lg max-w-3xl">
              {schoolInfoData.curriculum}
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-navy-900/8 bg-parchment-50/60 p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-crimson-500/10 text-crimson-600">
                <BookOpen size={22} />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-navy-900">
                Academic Subjects
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-ink-600">
                Rigorous conceptual grounding in Sciences, Mathematics, Social Studies, and English/Hindi languages.
              </p>
            </div>

            <div className="rounded-2xl border border-navy-900/8 bg-parchment-50/60 p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-500/10 text-gold-600">
                <Palette size={22} />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-navy-900">
                Creative Arts &amp; Expression
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-ink-600">
                Developing creative thinking through visual arts, performing arts, drama, and vocal/instrumental music.
              </p>
            </div>

            <div className="rounded-2xl border border-navy-900/8 bg-parchment-50/60 p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900/10 text-navy-900">
                <Award size={22} />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-navy-900">
                Physical Education &amp; Fitness
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-ink-600">
                Daily sports, competitive team games, motor coordination, and personal wellness programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <SectionEyebrow>Three Academic Stages</SectionEyebrow>
        <Reveal delay={0.05}>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold text-navy-900 sm:text-5xl">
            A curriculum designed from Nursery to Class VIII.
          </h2>
        </Reveal>
        <div className="mt-14">
          <StagesRail />
        </div>
      </section>

      {/* 4 Core Campus Highlights */}
      <section className="bg-navy-950 py-24 text-parchment-50">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionEyebrow tone="gold" align="center">
            Core Facilities &amp; Student Life
          </SectionEyebrow>
          <Reveal delay={0.05}>
            <h2 className="mx-auto mt-4 max-w-2xl text-center font-display text-4xl font-semibold text-parchment-50 sm:text-5xl">
              Nurturing Mind, Body &amp; Creative Expression
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-parchment-50/70 sm:text-base">
              At Hillwoods Academy, every child benefits from practical computer training, dedicated
              physical play, grand sports events, and vibrant festive celebrations.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-400/20 text-gold-300">
                <BookOpen size={24} />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-white">
                Modern Computer Lab
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-parchment-50/75">
                Dedicated computer laboratory with high-speed systems, digital literacy modules, and practical coding exercises.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-crimson-500/20 text-crimson-400">
                <Award size={24} />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-white">
                Daily Games Period
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-parchment-50/75">
                Structured games periods every day instilling sportsmanship, physical fitness, motor agility, and teamwork.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/20 text-amber-300">
                <Award size={24} />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-white">
                Annual Sports Meet
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-parchment-50/75">
                Grand annual sports meet "Udaan" held at the Sports Stadium with track &amp; field races, parades, and medals.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/20 text-purple-300">
                <Palette size={24} />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-white">
                Festive Events
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-parchment-50/75">
                Joyful celebration of Independence Day, Republic Day, cultural festivals, science exhibitions, and summer camps.
              </p>
            </div>
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
