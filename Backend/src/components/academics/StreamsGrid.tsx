import { academicStreams } from '../../data/content'
import { StaggerGroup, StaggerItem } from '../ui/Reveal'

export function StreamsGrid() {
  return (
    <StaggerGroup className="grid gap-6 lg:grid-cols-3">
      {academicStreams.map((stream) => (
        <StaggerItem key={stream.name}>
          <div className="h-full rounded-2xl bg-navy-900 p-8 text-parchment-50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-navy-950/20">
            <h3 className="font-display text-2xl font-semibold text-gold-300">
              {stream.name}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-parchment-50/75">
              {stream.detail}
            </p>
            <p className="mt-5 border-t border-parchment-50/10 pt-4 text-sm italic text-parchment-50/60">
              {stream.forWhom}
            </p>
          </div>
        </StaggerItem>
      ))}
    </StaggerGroup>
  )
}
