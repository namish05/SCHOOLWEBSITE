import { BookOpen, FlaskConical, GraduationCap, Sprout } from 'lucide-react'
import { homePrograms } from '../../data/content'
import { Reveal, StaggerGroup, StaggerItem } from '../ui/Reveal'
import { SectionEyebrow } from '../ui/SectionEyebrow'

const icons = { Sprout, BookOpen, FlaskConical, GraduationCap }

export function ProgramsGrid() {
  return (
    <section className="bg-parchment-100/60 py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionEyebrow>The Journey</SectionEyebrow>
        <Reveal delay={0.05}>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold text-navy-900 sm:text-5xl">
            Four stages, one continuous path.
          </h2>
        </Reveal>

        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {homePrograms.map((program) => {
            const Icon = icons[program.icon]
            return (
              <StaggerItem key={program.title}>
                <div className="notch-corner group h-full border border-navy-900/8 bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-400/50 hover:shadow-xl hover:shadow-navy-900/5">
                  <Icon className="text-crimson-500" size={28} strokeWidth={1.75} />
                  <p className="mt-5 font-mono text-xs uppercase tracking-[0.15em] text-gold-600">
                    {program.range}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-semibold text-navy-900">
                    {program.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-700">
                    {program.description}
                  </p>
                </div>
              </StaggerItem>
            )
          })}
        </StaggerGroup>
      </div>
    </section>
  )
}
