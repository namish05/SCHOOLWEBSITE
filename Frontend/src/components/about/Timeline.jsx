import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { timeline } from '../../data/content'
import { Reveal } from '../ui/Reveal'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export function Timeline() {
  const containerRef = useRef(null)
  const lineRef = useRef(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion || !lineRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0, transformOrigin: 'top center' },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
            end: 'bottom 85%',
            scrub: 0.6,
          },
        },
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="relative mx-auto max-w-3xl">
      {/* Background track */}
      <div className="absolute bottom-2 left-[27px] top-2 w-0.5 bg-navy-900/10 sm:left-[35px]" />
      {/* GSAP ScrollTrigger animated fill line */}
      <div
        ref={lineRef}
        className="absolute bottom-2 left-[27px] top-2 w-0.5 bg-gradient-to-b from-gold-500 via-crimson-500 to-gold-400 sm:left-[35px]"
      />

      <ol className="space-y-12">
        {timeline.map((item, i) => (
          <li key={`${item.year}-${item.title}`} className="relative pl-16 sm:pl-24">
            <Reveal delay={Math.min(i * 0.05, 0.3)}>
              <motion.div
                whileHover={{ scale: 1.1, rotate: 3 }}
                transition={{ type: 'spring', stiffness: 350, damping: 18 }}
                className="absolute left-0 top-0 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border-2 border-gold-500 bg-navy-950 font-mono text-[11px] font-semibold text-gold-300 shadow-md transition-shadow hover:shadow-gold-500/25 sm:h-[70px] sm:w-[70px] sm:text-sm"
              >
                {item.year}
              </motion.div>
              <div className="rounded-xl border border-navy-900/5 bg-white p-6 shadow-sm transition-all duration-300 hover:border-gold-400/40 hover:shadow-md">
                <h3 className="font-display text-xl font-semibold text-navy-900 sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-2 leading-relaxed text-ink-700">{item.description}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  )
}

