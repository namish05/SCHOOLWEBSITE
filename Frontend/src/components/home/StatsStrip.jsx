import { heroStats } from '../../data/content'
import { AnimatedCounter } from '../ui/AnimatedCounter'
import { StaggerGroup, StaggerItem } from '../ui/Reveal'

export function StatsStrip() {
  return (
    <div className="relative z-20 mx-auto -mt-16 max-w-6xl px-5 lg:px-8">
      <StaggerGroup className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-gold-500/15 shadow-2xl shadow-navy-950/25 sm:grid-cols-4">
        {heroStats.map((stat) => (
          <StaggerItem
            key={stat.label}
            className="flex flex-col items-center gap-1 bg-navy-900 px-4 py-9 text-center"
          >
            <span className="font-mono text-4xl font-semibold text-gold-300 sm:text-5xl">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </span>
            <span className="mt-1 max-w-[10rem] text-xs uppercase tracking-[0.12em] text-parchment-50/70">
              {stat.label}
            </span>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </div>
  )
}
