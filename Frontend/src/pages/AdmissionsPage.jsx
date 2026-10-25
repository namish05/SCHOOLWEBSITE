import { CalendarDays, FileCheck2, ShieldCheck } from 'lucide-react'
import { useDocumentTitle } from '../lib/useDocumentTitle'
import { admissionDates, admissionDocuments, schoolInfoData, site } from '../data/content'
import { PageHeader } from '../components/ui/PageHeader'
import { SectionEyebrow } from '../components/ui/SectionEyebrow'
import { Reveal } from '../components/ui/Reveal'
import { ProcessSteps } from '../components/admissions/ProcessSteps'
import { InquiryForm } from '../components/admissions/InquiryForm'

export function AdmissionsPage() {
  useDocumentTitle(`Admissions | ${site.name}`)

  return (
    <>
      <PageHeader
        eyebrow="Join Hillwoods"
        title="Admissions"
        description="A structured, fair, and transparent process between an inquiry and your child's first day at Hillwoods Academy."
      />

      {/* Admission Philosophy & Guidance */}
      <section className="mx-auto max-w-7xl px-5 pt-12 pb-6 lg:px-8">
        <Reveal>
          <div className="rounded-3xl border border-gold-400/30 bg-gradient-to-br from-parchment-50 via-white to-parchment-100/60 p-8 sm:p-10 shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-crimson-600 font-semibold">
                  <ShieldCheck size={16} />
                  Fair &amp; Transparent Admissions
                </div>
                <h3 className="mt-2 font-display text-2xl font-semibold text-navy-950 sm:text-3xl">
                  Welcoming students of diverse backgrounds
                </h3>
                <p className="mt-3 text-base leading-relaxed text-ink-700">
                  {schoolInfoData.admissions.description}
                </p>
                <p className="mt-2 text-sm text-ink-600">
                  {schoolInfoData.admissions.guidance}
                </p>
              </div>
              <div className="shrink-0 rounded-2xl bg-navy-950 p-6 text-parchment-50">
                <span className="font-mono text-xs uppercase tracking-wider text-gold-300 block mb-2">
                  Admissions Office &amp; Campus
                </span>
                <p className="text-sm font-semibold">{site.fullAddress}</p>
                <p className="mt-2 text-xs text-parchment-50/70">
                  Campus Hours: Mon &ndash; Sat 7:00 AM &ndash; 3:00 PM (Closed Sunday)
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <SectionEyebrow>How It Works</SectionEyebrow>
        <Reveal delay={0.05}>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold text-navy-900 sm:text-5xl">
            The admissions process
          </h2>
        </Reveal>
        <div className="mt-14">
          <ProcessSteps />
        </div>
      </section>

      <section className="bg-parchment-100/60 py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:grid-cols-2 lg:px-8">
          <Reveal>
            <div className="h-full rounded-2xl border border-navy-900/8 bg-white p-8">
              <div className="flex items-center gap-3 text-crimson-500">
                <CalendarDays size={22} />
                <h3 className="font-display text-xl font-semibold text-navy-900">
                  Key Dates
                </h3>
              </div>
              <ul className="mt-6 divide-y divide-navy-900/8">
                {admissionDates.map((item) => (
                  <li key={item.label} className="flex items-center justify-between py-3">
                    <span className="text-sm text-ink-700">{item.label}</span>
                    <span className="font-mono text-sm font-medium text-navy-900">
                      {item.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-2xl border border-navy-900/8 bg-white p-8">
              <div className="flex items-center gap-3 text-crimson-500">
                <FileCheck2 size={22} />
                <h3 className="font-display text-xl font-semibold text-navy-900">
                  Documents Required
                </h3>
              </div>
              <ul className="mt-6 space-y-3">
                {admissionDocuments.map((doc) => (
                  <li key={doc} className="flex gap-3 text-sm text-ink-700">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                    {doc}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-24 lg:px-8">
        <SectionEyebrow align="center">Start Today</SectionEyebrow>
        <Reveal delay={0.05}>
          <h2 className="mx-auto mt-4 max-w-xl text-center font-display text-4xl font-semibold text-navy-900 sm:text-5xl">
            Send us an inquiry
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-4 max-w-md text-center text-ink-700">
            Fill in a few details and our admissions office will reach out to schedule
            your campus visit.
          </p>
        </Reveal>
        <div className="mt-12">
          <InquiryForm />
        </div>
      </section>
    </>
  )
}
