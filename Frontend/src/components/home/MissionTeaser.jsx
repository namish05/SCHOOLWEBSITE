import { Link } from '@tanstack/react-router'
import { aboutMission, site, yearsOfExcellence } from '../../data/content'
import { Reveal } from '../ui/Reveal'
import { SectionEyebrow } from '../ui/SectionEyebrow'

export function MissionTeaser() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <div className="relative">
            <div className="shield-clip aspect-[4/5] w-full max-w-md overflow-hidden bg-navy-900">
              <img
                src="/hero.jpg"
                alt={`${site.name} campus`}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-2 flex flex-col items-center justify-center rounded-full bg-crimson-500 px-6 py-6 text-center text-parchment-50 shadow-xl shadow-crimson-500/30 sm:right-6">
              <span className="font-mono text-2xl font-semibold leading-none">
                {yearsOfExcellence}+
              </span>
              <span className="mt-1 text-[10px] uppercase tracking-[0.15em]">Years</span>
            </div>
          </div>
        </Reveal>

        <div>
          <SectionEyebrow>Our Purpose</SectionEyebrow>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-navy-900 sm:text-5xl">
              Excellence isn't a slogan on our crest — it's the standard we teach to.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg leading-relaxed text-ink-700">{aboutMission}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <Link
              to="/about"
              className="link-underline mt-7 inline-flex items-center gap-2 font-semibold text-crimson-500"
            >
              Read our full story &rarr;
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
