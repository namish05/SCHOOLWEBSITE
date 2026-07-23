import { Award, Lightbulb, ShieldCheck, Users } from 'lucide-react'
import { aboutValues } from '../../data/content'
import { StaggerGroup, StaggerItem } from '../ui/Reveal'

const icons = { Award, Lightbulb, ShieldCheck, Users }

export function ValuesGrid() {
  return (
    <StaggerGroup className="grid gap-6 sm:grid-cols-2">
      {aboutValues.map((value) => {
        const Icon = icons[value.icon as keyof typeof icons]
        return (
          <StaggerItem key={value.title}>
            <div className="flex h-full gap-5 rounded-2xl border border-navy-900/8 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-navy-900/5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-crimson-100 text-crimson-500">
                <Icon size={22} strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-navy-900">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-700">
                  {value.description}
                </p>
              </div>
            </div>
          </StaggerItem>
        )
      })}
    </StaggerGroup>
  )
}
