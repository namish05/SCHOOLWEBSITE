import {
  BookOpen,
  Cpu,
  FlaskConical,
  Monitor,
  Palette,
  Trophy,
} from 'lucide-react'
import { facilities } from '../../data/content'
import { StaggerGroup, StaggerItem } from '../ui/Reveal'

const icons = { FlaskConical, Cpu, BookOpen, Trophy, Palette, Monitor }

export function FacilitiesGrid() {
  return (
    <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {facilities.map((facility) => {
        const Icon = icons[facility.icon as keyof typeof icons]
        return (
          <StaggerItem key={facility.title}>
            <div className="notch-corner h-full border border-navy-900/8 bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-400/50 hover:shadow-xl hover:shadow-navy-900/5">
              <Icon className="text-crimson-500" size={26} strokeWidth={1.75} />
              <h3 className="mt-4 font-display text-lg font-semibold text-navy-900">
                {facility.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">
                {facility.description}
              </p>
            </div>
          </StaggerItem>
        )
      })}
    </StaggerGroup>
  )
}
