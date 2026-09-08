import { useEffect, useRef, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Compass,
  FlaskConical,
  GraduationCap,
  Sparkles,
  Sprout,
} from 'lucide-react'
import { homePrograms } from '../../data/content'
import { SectionEyebrow } from '../ui/SectionEyebrow'

// Register GSAP ScrollTrigger plugin safely
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const icons = { Sprout, BookOpen, FlaskConical, GraduationCap }

// Enriched stage metadata for Hillwoods Academy educational journey
const stageDetails = [
  {
    step: '01',
    ageRange: 'Ages 3 – 5',
    accentColor: 'from-amber-500/20 via-gold-500/10 to-transparent',
    borderColor: 'group-hover:border-gold-400',
    badgeBg: 'bg-gold-50 text-gold-700 border-gold-200',
    highlights: ['Montessori & Play-Way', 'Phonics & Speech', 'Creative Expression'],
  },
  {
    step: '02',
    ageRange: 'Ages 6 – 10',
    accentColor: 'from-crimson-500/20 via-rose-500/10 to-transparent',
    borderColor: 'group-hover:border-crimson-400',
    badgeBg: 'bg-crimson-50 text-crimson-700 border-crimson-200',
    highlights: ['Foundational STEM', 'Bilingual Literacy', 'Sports & Fine Arts'],
  },
  {
    step: '03',
    ageRange: 'Ages 11 – 13',
    accentColor: 'from-blue-600/20 via-indigo-500/10 to-transparent',
    borderColor: 'group-hover:border-blue-400',
    badgeBg: 'bg-blue-50 text-blue-700 border-blue-200',
    highlights: ['Coding & Robotics', 'Applied Science Labs', 'House Competitions'],
  },
  {
    step: '04',
    ageRange: 'Ages 14 – 18',
    accentColor: 'from-emerald-600/20 via-teal-500/10 to-transparent',
    borderColor: 'group-hover:border-emerald-400',
    badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    highlights: ['Science, Commerce & Arts', 'Board Mentorship', 'Career Guidance'],
  },
]

export function ProgramsGrid() {
  const containerRef = useRef(null)
  const headerRef = useRef(null)
  const timelineBarRef = useRef(null)
  const cardsRef = useRef([])
  const [activeStage, setActiveStage] = useState(0)

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      // 1. Header reveal sequence
      gsap.from(headerRef.current.children, {
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
        y: 36,
        opacity: 0,
        stagger: 0.15,
        duration: 0.9,
        ease: 'power3.out',
      })

      // 2. Journey timeline progress line driven by scroll
      if (timelineBarRef.current) {
        gsap.fromTo(
          timelineBarRef.current,
          { scaleX: 0, transformOrigin: 'left center' },
          {
            scaleX: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 70%',
              end: 'bottom 80%',
              scrub: 0.8,
            },
          },
        )
      }

      // 3. Staggered 3D reveal for program cards
      const cardElements = cardsRef.current.filter(Boolean)
      if (cardElements.length > 0) {
        gsap.fromTo(
          cardElements,
          {
            opacity: 0,
            y: 60,
            scale: 0.94,
            rotationX: 8,
            transformPerspective: 1200,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotationX: 0,
            duration: 0.9,
            stagger: 0.14,
            ease: 'back.out(1.2)',
            scrollTrigger: {
              trigger: cardElements[0],
              start: 'top 82%',
              toggleActions: 'play none none reverse',
            },
          },
        )
      }

      // 4. Subtle background parallax movement
      gsap.to('.bg-parallax-glow', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.2,
        },
        y: 70,
        opacity: 0.6,
        ease: 'none',
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-gradient-to-b from-parchment-100/70 via-white to-parchment-100/50 py-28"
    >
      {/* GSAP Ambient Parallax Glow */}
      <div
        className="bg-parallax-glow pointer-events-none absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-gold-400/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="bg-parallax-glow pointer-events-none absolute bottom-0 right-10 h-80 w-80 rounded-full bg-crimson-500/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Section Header */}
        <div ref={headerRef} className="max-w-3xl">
          <div className="flex items-center gap-2.5">
            <SectionEyebrow>The Academic Journey</SectionEyebrow>
            <span className="inline-flex items-center gap-1 rounded-full border border-gold-400/30 bg-gold-100/50 px-2.5 py-0.5 font-mono text-[11px] font-medium tracking-wider text-gold-700">
              <Sparkles size={12} className="text-gold-500" />
              NURSERY TO GRADE XII
            </span>
          </div>

          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-navy-900 sm:text-5xl lg:text-5xl">
            Four unified stages, <span className="italic text-crimson-600">one continuous path</span>.
          </h2>

          <p className="mt-4 text-base leading-relaxed text-ink-700 sm:text-lg">
            Every chapter at Hillwoods Academy builds seamlessly upon the last. We guide
            children from playful initial wonders into confident, intellectually rigorous, and
            socially conscious young adults.
          </p>
        </div>

        {/* GSAP Scroll-driven Timeline Connector (Desktop) */}
        <div className="relative mt-16 hidden lg:block">
          <div className="absolute top-1/2 left-0 h-0.5 w-full -translate-y-1/2 bg-navy-900/10" />
          <div
            ref={timelineBarRef}
            className="absolute top-1/2 left-0 h-0.5 w-full -translate-y-1/2 bg-gradient-to-r from-gold-500 via-crimson-500 to-gold-400"
          />

          <div className="relative flex justify-between">
            {homePrograms.map((prog, idx) => {
              const detail = stageDetails[idx]
              const isSelected = activeStage === idx
              return (
                <button
                  key={prog.title}
                  type="button"
                  onClick={() => setActiveStage(idx)}
                  className="group flex flex-col items-center focus:outline-none"
                >
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 font-mono text-xs font-semibold transition-all duration-300 ${
                      isSelected
                        ? 'border-gold-500 bg-navy-900 text-gold-300 shadow-md shadow-gold-500/20'
                        : 'border-navy-900/15 bg-white text-ink-700 group-hover:border-gold-500/60 group-hover:text-navy-900'
                    }`}
                  >
                    {detail.step}
                  </motion.div>
                  <span className="mt-2.5 font-mono text-[11px] font-medium uppercase tracking-wider text-ink-500 transition-colors group-hover:text-navy-900">
                    {prog.range}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* The Programs Grid with Framer Motion hover & GSAP scroll reveal */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
          {homePrograms.map((program, index) => {
            const Icon = icons[program.icon]
            const detail = stageDetails[index]
            const isActive = activeStage === index

            return (
              <div
                key={program.title}
                ref={(el) => (cardsRef.current[index] = el)}
                className="h-full"
                onMouseEnter={() => setActiveStage(index)}
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                  className={`notch-corner group relative flex h-full flex-col justify-between overflow-hidden border bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-navy-900/8 ${
                    isActive
                      ? 'border-gold-500/80 ring-1 ring-gold-400/40'
                      : 'border-navy-900/10 hover:border-gold-400/60'
                  }`}
                >
                  {/* Subtle Card Header Gradient Glow */}
                  <div
                    className={`absolute inset-x-0 top-0 h-28 bg-gradient-to-b ${detail.accentColor} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                  />

                  <div>
                    {/* Top row: Icon + Stage Indicator */}
                    <div className="relative flex items-center justify-between">
                      <motion.div
                        whileHover={{ rotate: 8, scale: 1.1 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                        className="flex h-12 w-12 items-center justify-center rounded-lg bg-parchment-100/80 text-crimson-600 transition-colors group-hover:bg-navy-900 group-hover:text-gold-300"
                      >
                        <Icon size={24} strokeWidth={2} />
                      </motion.div>

                      <div className="flex items-center gap-2">
                        <span
                          className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider ${detail.badgeBg}`}
                        >
                          {detail.ageRange}
                        </span>
                        <span className="font-mono text-xs font-semibold text-navy-900/40">
                          {detail.step}
                        </span>
                      </div>
                    </div>

                    {/* Stage Range & Title */}
                    <p className="mt-5 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-gold-600">
                      {program.range}
                    </p>

                    <h3 className="mt-1.5 font-display text-2xl font-semibold text-navy-900 transition-colors group-hover:text-crimson-600">
                      {program.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-ink-700">
                      {program.description}
                    </p>

                    {/* Key Curriculum Focus Highlights */}
                    <div className="mt-5 space-y-2 border-t border-navy-900/5 pt-4">
                      <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-ink-500">
                        Focus Areas
                      </p>
                      <ul className="space-y-1.5">
                        {detail.highlights.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-2 text-xs text-ink-700"
                          >
                            <CheckCircle2
                              size={13}
                              className="shrink-0 text-gold-600 transition-colors group-hover:text-crimson-500"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Action Link */}
                  <div className="mt-7 border-t border-navy-900/5 pt-4">
                    <Link
                      to="/academics"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide text-navy-900 transition-colors group-hover:text-crimson-600"
                    >
                      <span>Explore Curriculum</span>
                      <motion.span
                        animate={{ x: isActive ? 4 : 0 }}
                        transition={{ repeat: isActive ? Infinity : 0, repeatType: 'reverse', duration: 0.6 }}
                      >
                        <ArrowRight size={14} />
                      </motion.span>
                    </Link>
                  </div>
                </motion.div>
              </div>
            )
          })}
        </div>

        {/* Interactive Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 flex flex-col items-center justify-between gap-4 rounded-xl border border-gold-400/25 bg-navy-950 px-6 py-5 text-parchment-50 shadow-lg sm:flex-row sm:px-8"
        >
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-400/15 text-gold-300">
              <Compass size={20} />
            </div>
            <div>
              <p className="text-sm font-medium text-parchment-50">
                Unsure which program is right for your child’s enrollment age?
              </p>
              <p className="text-xs text-parchment-50/70">
                Our admissions counselors are available Monday through Saturday.
              </p>
            </div>
          </div>

          <Link
            to="/admissions"
            className="shrink-0 rounded-full border border-gold-400/40 bg-gold-500 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-navy-950 transition-all hover:bg-gold-400 hover:shadow-md"
          >
            Admissions Guide
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

