import { timeline } from '../../data/content'
import { Reveal } from '../ui/Reveal'

export function Timeline() {
  return (
    <div className="relative mx-auto max-w-3xl">
      <div className="absolute bottom-2 left-[27px] top-2 w-px bg-navy-900/15 sm:left-[35px]" />
      <ol className="space-y-12">
        {timeline.map((item, i) => (
          <li key={`${item.year}-${item.title}`} className="relative pl-16 sm:pl-24">
            <Reveal delay={Math.min(i * 0.05, 0.3)}>
              <div className="absolute left-0 top-0 flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold-500 bg-navy-950 font-mono text-[11px] font-semibold text-gold-300 sm:h-[70px] sm:w-[70px] sm:text-sm">
                {item.year}
              </div>
              <h3 className="font-display text-xl font-semibold text-navy-900 sm:text-2xl">
                {item.title}
              </h3>
              <p className="mt-2 leading-relaxed text-ink-700">{item.description}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  )
}
