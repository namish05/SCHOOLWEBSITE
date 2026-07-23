import { leadership } from '../../data/content'
import { StaggerGroup, StaggerItem } from '../ui/Reveal'

function initials(name: string) {
  return name
    .split(' ')
    .map((p) => p[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
}

export function Leadership() {
  return (
    <StaggerGroup className="grid gap-6 sm:grid-cols-3">
      {leadership.map((person) => (
        <StaggerItem key={person.name}>
          <div className="h-full rounded-2xl border border-navy-900/8 bg-white p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-navy-900/5">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-2 border-gold-400 bg-navy-950 font-display text-2xl font-semibold text-gold-300">
              {initials(person.name)}
            </div>
            <h3 className="mt-5 font-display text-lg font-semibold text-navy-900">
              {person.name}
            </h3>
            <p className="mt-1 font-mono text-xs uppercase tracking-[0.12em] text-crimson-500">
              {person.role}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-700">{person.bio}</p>
          </div>
        </StaggerItem>
      ))}
    </StaggerGroup>
  )
}
