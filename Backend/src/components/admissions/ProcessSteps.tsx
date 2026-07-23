import { admissionSteps } from '../../data/content'
import { Reveal } from '../ui/Reveal'

export function ProcessSteps() {
  return (
    <div className="grid gap-5 lg:grid-cols-5">
      {admissionSteps.map((item, i) => (
        <Reveal key={item.step} delay={i * 0.06}>
          <div className="relative h-full rounded-2xl border border-navy-900/8 bg-white p-6">
            <span className="font-display text-4xl font-semibold text-gold-400/70">
              {item.step}
            </span>
            <h3 className="mt-3 font-display text-lg font-semibold text-navy-900">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-700">{item.description}</p>
            {i < admissionSteps.length - 1 && (
              <div
                aria-hidden="true"
                className="absolute right-[-11px] top-1/2 z-10 hidden h-px w-6 -translate-y-1/2 bg-navy-900/15 lg:block"
              />
            )}
          </div>
        </Reveal>
      ))}
    </div>
  )
}
