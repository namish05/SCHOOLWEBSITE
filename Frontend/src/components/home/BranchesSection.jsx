import { MapPin, Phone, Mail, CheckCircle2, ArrowUpRight, School } from 'lucide-react'
import { schoolBranches } from '../../data/content'
import { SectionEyebrow } from '../ui/SectionEyebrow'
import { Reveal, StaggerGroup, StaggerItem } from '../ui/Reveal'
import { buttonClass } from '../ui/buttonStyles'
import { Link } from '@tanstack/react-router'

export function BranchesSection() {
  return (
    <section id="branches" className="relative scroll-mt-20 bg-parchment-100/60 py-24">
      {/* Decorative background subtle accent */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 right-10 h-96 w-96 rounded-full bg-gold-400/10 blur-3xl" />
        <div className="absolute -bottom-32 left-10 h-96 w-96 rounded-full bg-crimson-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center">
          <SectionEyebrow tone="crimson" align="center">
            School Network &amp; Campuses
          </SectionEyebrow>
          <Reveal delay={0.05}>
            <h2 className="mx-auto mt-3 max-w-2xl font-display text-4xl font-semibold text-navy-950 sm:text-5xl">
              Three Prominent Branches in Deoria
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ink-700 sm:text-lg">
              Hillwoods Academy extends quality English-medium education from Nursery to Class VIII
              across our primary and sister branches, empowering students across both urban and rural
              Deoria.
            </p>
          </Reveal>
        </div>

        {/* Branches Cards Grid */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {schoolBranches.map((branch, idx) => (
            <Reveal key={branch.id} delay={idx * 0.1} className="h-full">
              <div
                className={`relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border bg-white p-7 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl ${
                  branch.isMain
                    ? 'border-gold-400/60 ring-2 ring-gold-400/20'
                    : 'border-navy-900/10 hover:border-crimson-400/40'
                }`}
              >
                {/* Top Badge */}
                <div className="flex items-start justify-between gap-3">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider ${
                      branch.isMain
                        ? 'bg-gold-500/15 text-gold-700 border border-gold-400/40'
                        : branch.badge.includes('Newly')
                        ? 'bg-crimson-50 text-crimson-600 border border-crimson-200'
                        : 'bg-navy-900/10 text-navy-800 border border-navy-900/15'
                    }`}
                  >
                    <School size={12} />
                    {branch.badge}
                  </span>

                  <span className="font-mono text-xs font-semibold text-ink-400">
                    {branch.branchNumber}
                  </span>
                </div>

                {/* Branch Name & Locality */}
                <div className="mt-5">
                  <h3 className="font-display text-2xl font-bold text-navy-950">
                    {branch.name}
                  </h3>
                  <div className="mt-1 flex items-center gap-1.5 font-mono text-xs font-medium uppercase tracking-wider text-crimson-600">
                    <MapPin size={13} className="shrink-0" />
                    <span>{branch.locality}</span>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-ink-700">
                    {branch.description}
                  </p>
                </div>

                {/* Address Box */}
                <div className="mt-6 rounded-2xl border border-navy-900/6 bg-parchment-50/80 p-4 text-xs text-ink-800">
                  <div className="flex items-start gap-2.5">
                    <MapPin size={16} className="mt-0.5 shrink-0 text-gold-600" />
                    <div>
                      <span className="font-semibold text-navy-950">Address: </span>
                      <span>{branch.address}</span>
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mt-6 border-t border-navy-900/8 pt-5">
                  <h4 className="font-mono text-[11px] uppercase tracking-wider text-ink-500">
                    Key Features
                  </h4>
                  <ul className="mt-3 space-y-2 text-xs text-navy-900">
                    {branch.highlights.map((feat) => (
                      <li key={feat} className="flex items-center gap-2">
                        <CheckCircle2 size={14} className="shrink-0 text-emerald-600" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact & Actions */}
                <div className="mt-8 border-t border-navy-900/8 pt-5">
                  <h4 className="font-mono text-[11px] uppercase tracking-wider text-ink-500">
                    Contact &amp; Helplines
                  </h4>
                  <div className="mt-2.5 flex flex-wrap gap-2">
                    {branch.contactNumbers.map((c) => (
                      <a
                        key={c.phone}
                        href={`tel:${c.phone.replace(/[^0-9+]/g, '')}`}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-navy-900/10 bg-white px-2.5 py-1.5 font-mono text-xs font-semibold text-navy-900 shadow-xs transition-colors hover:border-gold-500 hover:bg-gold-500/10 hover:text-navy-950"
                      >
                        <Phone size={12} className="text-crimson-600" />
                        <span>{c.phone}</span>
                      </a>
                    ))}
                  </div>

                  {branch.email && (
                    <div className="mt-3">
                      <a
                        href={`mailto:${branch.email}`}
                        className="inline-flex items-center gap-1.5 text-xs text-ink-600 hover:text-crimson-600"
                      >
                        <Mail size={13} className="text-gold-600" />
                        <span>{branch.email}</span>
                      </a>
                    </div>
                  )}

                  <div className="mt-6 flex items-center gap-3">
                    <Link
                      to="/admissions"
                      className={buttonClass('primary', 'w-full justify-center text-xs py-2.5')}
                    >
                      Inquire for this Branch
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
