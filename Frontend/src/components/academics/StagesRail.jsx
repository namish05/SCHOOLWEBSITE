import { academicStages } from '../../data/content'
import { Reveal } from '../ui/Reveal'

export function StagesRail() {
  return (
    <div className="grid gap-5 lg:grid-cols-5">
      {academicStages.map((stage, i) => (
        <Reveal key={stage.stage} delay={i * 0.06}>
          <div className="h-full rounded-2xl border border-navy-900/8 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/50 hover:shadow-lg hover:shadow-navy-900/5">
            <span className="font-mono text-xs text-gold-600">0{i + 1}</span>
            <h3 className="mt-3 font-display text-lg font-semibold text-navy-900">
              {stage.stage}
            </h3>
            <p className="mt-1 font-mono text-xs uppercase tracking-[0.1em] text-crimson-500">
              {stage.grades}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-700">{stage.focus}</p>
          </div>
        </Reveal>
      ))}
    </div>
  )
}
