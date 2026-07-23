import { useDocumentTitle } from '../lib/useDocumentTitle'
import { site } from '../data/content'
import { PageHeader } from '../components/ui/PageHeader'
import { MasonryGrid } from '../components/gallery/MasonryGrid'
import { CtaBand } from '../components/ui/CtaBand'

export function GalleryPage() {
  useDocumentTitle(`Gallery | ${site.name}`)

  return (
    <>
      <PageHeader
        eyebrow="Campus Life"
        title="Gallery"
        description="A look at everyday life on campus — classrooms, competitions, and everything in between."
      />

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <MasonryGrid />
        <p className="mx-auto mt-10 max-w-lg text-center text-xs text-ink-500">
          Placeholder photography shown above — swap in Hillwoods Academy's own campus
          photos before publishing.
        </p>
      </section>

      <CtaBand
        eyebrow="Come See For Yourself"
        title="Pictures only tell half the story."
        description="Schedule a campus visit and experience Hillwoods Academy in person."
        buttonLabel="Schedule a Visit"
        buttonTo="/admissions"
      />
    </>
  )
}
