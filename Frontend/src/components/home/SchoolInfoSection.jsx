import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Award,
  BookOpen,
  Calendar,
  CheckCircle2,
  ChevronDown,
  Clock,
  Compass,
  GraduationCap,
  HeartHandshake,
  Layers,
  MapPin,
  Palette,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from 'lucide-react'
import {
  detailedOperatingHours,
  schoolFaqs,
  schoolInfoData,
  site,
} from '../../data/content'
import { SectionEyebrow } from '../ui/SectionEyebrow'
import { Reveal } from '../ui/Reveal'

export function SchoolInfoSection() {
  const [openFaq, setOpenFaq] = useState(0)
  const [activeTab, setActiveTab] = useState('overview')

  const tabs = [
    { id: 'overview', label: 'School Overview', icon: BookOpen },
    { id: 'curriculum', label: 'Curriculum & Subjects', icon: Compass },
    { id: 'levels', label: 'Levels of Schooling', icon: Layers },
    { id: 'admissions', label: 'Admission & Inclusivity', icon: HeartHandshake },
    { id: 'hours', label: 'Hours & Operations', icon: Clock },
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-parchment-50 via-white to-parchment-100/60 py-24">
      {/* Decorative background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-gold-400/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-crimson-500/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header with 4.6-star rating badge */}
        <div className="flex flex-col items-center text-center">
          <SectionEyebrow tone="crimson" align="center">
            {site.locality}, {site.city}
          </SectionEyebrow>

          <Reveal delay={0.05}>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-gold-50/70 px-4 py-1.5 shadow-sm">
              <div className="flex items-center text-gold-500">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={15}
                    className={i === 4 ? 'fill-gold-400/50 text-gold-500' : 'fill-gold-500 text-gold-500'}
                  />
                ))}
              </div>
              <span className="font-mono text-xs font-semibold text-navy-950">
                {schoolInfoData.rating} / 5.0 Rating
              </span>
              <span className="text-xs text-ink-500">&middot; Trusted in Deoria</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-tight text-navy-950 sm:text-5xl">
              Essential information &amp; academic standards at Hillwoods
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-4 max-w-2xl text-base text-ink-700 sm:text-lg">
              Everything you need to know about our CBSE curriculum, schooling levels, fair
              admission process, campus hours, and student-first environment.
            </p>
          </Reveal>
        </div>

        {/* Tabbed Interactive Information Cards */}
        <div className="mt-14">
          {/* Navigation Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 border-b border-navy-900/10 pb-4">
            {tabs.map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  type="button"
                  className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-navy-900 text-parchment-50 shadow-md shadow-navy-900/15'
                      : 'bg-white/80 text-ink-700 hover:bg-parchment-100 hover:text-navy-900 border border-navy-900/5'
                  }`}
                >
                  <Icon size={16} className={isActive ? 'text-gold-300' : 'text-ink-500'} />
                  {tab.label}
                </button>
              )
            })}
          </div>

          {/* Active Tab Panel */}
          <div className="mt-8">
            <AnimatePresence mode="wait">
              {activeTab === 'overview' && (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className="grid gap-8 rounded-3xl border border-navy-900/8 bg-white p-8 shadow-sm lg:grid-cols-3 lg:p-12"
                >
                  <div className="lg:col-span-2 space-y-6">
                    <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-crimson-500">
                      <Sparkles size={15} />
                      Institutional Overview
                    </div>
                    <h3 className="font-display text-2xl font-semibold text-navy-950 sm:text-3xl">
                      A leading center of educational excellence on {site.locality}
                    </h3>
                    <p className="text-base leading-relaxed text-ink-700 sm:text-lg">
                      {schoolInfoData.overview}
                    </p>
                    <div className="grid gap-4 sm:grid-cols-2 pt-4 border-t border-navy-900/8">
                      <div className="rounded-xl border border-navy-900/5 bg-parchment-50/70 p-4">
                        <div className="flex items-center gap-2.5 text-navy-900 font-semibold text-sm">
                          <CheckCircle2 size={17} className="text-gold-500" />
                          Comprehensive Education
                        </div>
                        <p className="mt-1.5 text-xs text-ink-600 leading-relaxed">
                          Holistic curriculum balancing intellectual rigor, creative arts, and physical education.
                        </p>
                      </div>
                      <div className="rounded-xl border border-navy-900/5 bg-parchment-50/70 p-4">
                        <div className="flex items-center gap-2.5 text-navy-900 font-semibold text-sm">
                          <ShieldCheck size={17} className="text-gold-500" />
                          Structured Governance
                        </div>
                        <p className="mt-1.5 text-xs text-ink-600 leading-relaxed">
                          Clear academic discipline and effective administrative management.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between rounded-2xl bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 p-7 text-parchment-50">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs uppercase tracking-widest text-gold-300">
                          Reputation
                        </span>
                        <div className="flex items-center gap-1 text-gold-400">
                          <Star size={14} className="fill-gold-400" />
                          <span className="font-mono text-xs font-semibold">{schoolInfoData.rating}</span>
                        </div>
                      </div>
                      <h4 className="mt-4 font-display text-xl font-semibold text-parchment-50">
                        Strong standing in {site.city}
                      </h4>
                      <p className="mt-2 text-xs leading-relaxed text-parchment-50/70">
                        Recognized by parents and students across {site.state} for dedicated educators,
                        individual care, and consistent academic outcomes.
                      </p>
                    </div>

                    <div className="mt-8 pt-6 border-t border-parchment-50/15 space-y-3">
                      <div className="flex items-center gap-3 text-xs text-parchment-50/80">
                        <MapPin size={16} className="text-gold-400 shrink-0" />
                        <span>{site.fullAddress}</span>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-parchment-50/80">
                        <Clock size={16} className="text-gold-400 shrink-0" />
                        <span>Mon &ndash; Sat: 7:00 AM &ndash; 3:00 PM</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'curriculum' && (
                <motion.div
                  key="curriculum"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className="rounded-3xl border border-navy-900/8 bg-white p-8 shadow-sm lg:p-12"
                >
                  <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-crimson-500">
                      <Compass size={15} />
                      Curriculum &amp; Medium of Instruction
                    </div>
                    <h3 className="mt-3 font-display text-2xl font-semibold text-navy-950 sm:text-3xl">
                      Well-rounded CBSE education designed for future success
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-ink-700 sm:text-lg">
                      {schoolInfoData.curriculum}
                    </p>
                  </div>

                  <div className="mt-10 grid gap-6 sm:grid-cols-3">
                    <div className="rounded-2xl border border-navy-900/8 bg-parchment-50/50 p-6">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-crimson-500/10 text-crimson-600">
                        <BookOpen size={22} />
                      </div>
                      <h4 className="mt-4 font-display text-lg font-semibold text-navy-900">
                        Core Academic Subjects
                      </h4>
                      <p className="mt-2 text-xs leading-relaxed text-ink-600">
                        In-depth conceptual learning in Mathematics, Sciences, Social Sciences,
                        and Languages with hands-on practice.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-navy-900/8 bg-parchment-50/50 p-6">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-500/10 text-gold-600">
                        <Palette size={22} />
                      </div>
                      <h4 className="mt-4 font-display text-lg font-semibold text-navy-900">
                        Visual &amp; Performing Arts
                      </h4>
                      <p className="mt-2 text-xs leading-relaxed text-ink-600">
                        Creative exploration across drawing, painting, classical and vocal music, drama,
                        and cultural expression.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-navy-900/8 bg-parchment-50/50 p-6">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900/10 text-navy-900">
                        <Award size={22} />
                      </div>
                      <h4 className="mt-4 font-display text-lg font-semibold text-navy-900">
                        Physical Education &amp; Sports
                      </h4>
                      <p className="mt-2 text-xs leading-relaxed text-ink-600">
                        Structured fitness regimens, team sports, sportsmanship, and inter-school athletic
                        competitions.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'levels' && (
                <motion.div
                  key="levels"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className="rounded-3xl border border-navy-900/8 bg-white p-8 shadow-sm lg:p-12"
                >
                  <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-crimson-500">
                      <Layers size={15} />
                      Level of Schooling at Hillwoods Academy
                    </div>
                    <h3 className="mt-3 font-display text-2xl font-semibold text-navy-950 sm:text-3xl">
                      Catering from early childhood through secondary education
                    </h3>
                    <p className="mt-3 text-base text-ink-700">
                      Our continuous learning framework ensures seamless transition between early childhood discovery,
                      primary grounding, and secondary academic mastery.
                    </p>
                  </div>

                  <div className="mt-8 grid gap-6 sm:grid-cols-2">
                    {schoolInfoData.levelsOfSchooling.map((lvl, index) => (
                      <div
                        key={lvl.title}
                        className="relative rounded-2xl border border-navy-900/8 bg-gradient-to-br from-white to-parchment-50/60 p-7 shadow-xs"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-xs uppercase tracking-wider text-crimson-500 font-semibold">
                            Stage 0{index + 1}
                          </span>
                          <span className="rounded-full bg-gold-400/15 px-3 py-1 font-mono text-[11px] font-semibold text-navy-900">
                            {lvl.range}
                          </span>
                        </div>
                        <h4 className="mt-4 font-display text-xl font-semibold text-navy-950">
                          {lvl.title}
                        </h4>
                        <p className="mt-3 text-sm leading-relaxed text-ink-700">
                          {lvl.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'admissions' && (
                <motion.div
                  key="admissions"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className="rounded-3xl border border-navy-900/8 bg-white p-8 shadow-sm lg:p-12"
                >
                  <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-crimson-500">
                      <HeartHandshake size={15} />
                      Admission Data &amp; Contact Guidance
                    </div>
                    <h3 className="mt-3 font-display text-2xl font-semibold text-navy-950 sm:text-3xl">
                      Fair, transparent selection with commitment to inclusivity
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-ink-700 sm:text-lg">
                      {schoolInfoData.admissions.description}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-ink-600">
                      {schoolInfoData.admissions.guidance}
                    </p>
                  </div>

                  <div className="mt-8 grid gap-4 sm:grid-cols-3">
                    <div className="rounded-xl border border-navy-900/8 bg-parchment-50 p-5">
                      <span className="font-mono text-xs uppercase text-gold-600 font-semibold">Inclusivity</span>
                      <h4 className="mt-2 font-display text-base font-semibold text-navy-900">
                        Welcoming Diverse Backgrounds
                      </h4>
                      <p className="mt-1 text-xs text-ink-600">
                        Committed to celebrating cultural diversity and equal opportunity for every applicant.
                      </p>
                    </div>
                    <div className="rounded-xl border border-navy-900/8 bg-parchment-50 p-5">
                      <span className="font-mono text-xs uppercase text-gold-600 font-semibold">Transparency</span>
                      <h4 className="mt-2 font-display text-base font-semibold text-navy-900">
                        Clear Fee &amp; Document Policy
                      </h4>
                      <p className="mt-1 text-xs text-ink-600">
                        Transparent fee schedule, required document lists, and straightforward enrollment steps.
                      </p>
                    </div>
                    <div className="rounded-xl border border-navy-900/8 bg-parchment-50 p-5">
                      <span className="font-mono text-xs uppercase text-gold-600 font-semibold">Assistance</span>
                      <h4 className="mt-2 font-display text-base font-semibold text-navy-900">
                        Admissions Helpdesk
                      </h4>
                      <p className="mt-1 text-xs text-ink-600">
                        Visit the CC Road campus office or contact us via official email and phone.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'hours' && (
                <motion.div
                  key="hours"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className="rounded-3xl border border-navy-900/8 bg-white p-8 shadow-sm lg:p-12"
                >
                  <div className="grid gap-8 lg:grid-cols-2">
                    <div>
                      <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-crimson-500">
                        <Clock size={15} />
                        Hours of Operation
                      </div>
                      <h3 className="mt-3 font-display text-2xl font-semibold text-navy-950 sm:text-3xl">
                        Regular school &amp; administrative schedule
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-ink-700">
                        Hillwoods Academy operates on a structured schedule that accommodates students&apos; varied
                        commitments while ensuring academic excellence and safety.
                      </p>

                      <div className="mt-6 rounded-2xl border border-navy-900/8 bg-parchment-50/70 p-6">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-400/20 text-gold-700">
                            <Clock size={20} />
                          </div>
                          <div>
                            <span className="text-xs uppercase font-mono tracking-wider text-ink-500">
                              Official Campus Hours
                            </span>
                            <div className="text-base font-semibold text-navy-950">
                              Monday – Saturday: 7:00 AM – 3:00 PM
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-navy-900/8 text-xs text-ink-600">
                          <strong>Sunday:</strong> Closed for regular classes and administrative visits.
                        </div>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-navy-900/8 bg-white p-6 shadow-xs">
                      <h4 className="font-display text-base font-semibold text-navy-900 mb-4">
                        Weekly Operating Timetable
                      </h4>
                      <ul className="divide-y divide-navy-900/8">
                        {detailedOperatingHours.map((item) => (
                          <li
                            key={item.day}
                            className="flex items-center justify-between py-2.5 text-sm"
                          >
                            <span className="font-medium text-navy-900">{item.day}</span>
                            <span
                              className={`font-mono text-xs font-semibold px-2.5 py-1 rounded-md ${
                                item.isOpen
                                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                                  : 'bg-rose-50 text-rose-700 border border-rose-200'
                              }`}
                            >
                              {item.hours}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Frequently Asked Questions (FAQ) Section */}
        <div className="mt-20 pt-16 border-t border-navy-900/10">
          <div className="flex flex-col items-center text-center">
            <SectionEyebrow tone="gold" align="center">
              Questions &amp; Answers
            </SectionEyebrow>
            <h3 className="mt-3 font-display text-3xl font-semibold text-navy-950 sm:text-4xl">
              Frequently Asked Questions
            </h3>
            <p className="mt-3 max-w-xl text-sm text-ink-700">
              Clear answers to the most common queries regarding Hillwoods Academy, operating hours,
              admissions, and curriculum.
            </p>
          </div>

          <div className="mt-12 mx-auto max-w-3xl space-y-4">
            {schoolFaqs.map((faq, index) => {
              const isOpen = openFaq === index
              return (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-navy-900/8 bg-white transition-all shadow-xs"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:text-crimson-600"
                    aria-expanded={isOpen}
                  >
                    <span className="flex items-center gap-3 font-display text-base font-semibold text-navy-950 sm:text-lg">
                      <span className="font-mono text-xs text-gold-500">0{index + 1}.</span>
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="shrink-0 text-ink-400"
                    >
                      <ChevronDown size={20} />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden border-t border-navy-900/6 px-6 pb-6 pt-4 text-sm leading-relaxed text-ink-700"
                      >
                        <p>{faq.answer}</p>
                        {faq.schedule && (
                          <div className="mt-4 rounded-xl border border-navy-900/6 bg-parchment-50 p-4">
                            <span className="text-xs font-mono uppercase tracking-wider text-navy-900 font-semibold block mb-2">
                              Operating Schedule:
                            </span>
                            <div className="grid grid-cols-2 gap-2 text-xs sm:grid-cols-4">
                              {faq.schedule.map((slot) => (
                                <div key={slot.day} className="rounded-lg bg-white p-2 border border-navy-900/5">
                                  <div className="font-semibold text-navy-900">{slot.day}</div>
                                  <div className="text-ink-600 mt-0.5">{slot.hours}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
