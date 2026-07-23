import { useDocumentTitle } from '../lib/useDocumentTitle'
import { site } from '../data/content'
import { ParallaxHero } from '../components/home/ParallaxHero'
import { StatsStrip } from '../components/home/StatsStrip'
import { HighlightsRibbon } from '../components/home/HighlightsRibbon'
import { MissionTeaser } from '../components/home/MissionTeaser'
import { ProgramsGrid } from '../components/home/ProgramsGrid'
import { Testimonials } from '../components/home/Testimonials'
import { CtaBand } from '../components/ui/CtaBand'

export function HomePage() {
  useDocumentTitle(`${site.name} | Dedicated to Excellence Since ${site.founded}`)

  return (
    <>
      <ParallaxHero />
      <StatsStrip />
      <div className="mt-20">
        <HighlightsRibbon />
      </div>
      <MissionTeaser />
      <ProgramsGrid />
      <Testimonials />
      <CtaBand
        eyebrow="Admissions Open"
        title="Give your child a place they'll be proud to call school."
        description="Seats for the new academic session are filling up. Start an inquiry today and our admissions team will walk you through every step."
        buttonLabel="Start Your Inquiry"
        buttonTo="/admissions"
      />
    </>
  )
}
