import { Link } from '@tanstack/react-router'
import { Reveal } from './Reveal'
import { Laurel } from './Laurel'
import { buttonClass } from './buttonStyles'

export function CtaBand({ eyebrow, title, description, buttonLabel, buttonTo }) {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-24">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-crimson-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-5 text-center lg:px-8">
        <Reveal>
          <div className="flex items-center justify-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-gold-300">
            <Laurel />
            <span>{eyebrow}</span>
            <Laurel flip />
          </div>
          <h2 className="mt-5 font-display text-4xl font-semibold text-parchment-50 sm:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-parchment-50/70">{description}</p>
          <Link to={buttonTo} className={buttonClass('primary', 'mt-9')}>
            {buttonLabel}
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
