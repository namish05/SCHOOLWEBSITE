import { useEffect, useRef } from 'react'
import { Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { aboutMission, site, yearsOfExcellence } from '../../data/content'
import { Reveal } from '../ui/Reveal'
import { SectionEyebrow } from '../ui/SectionEyebrow'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export function MissionTeaser() {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)
  const badgeRef = useRef(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      // Parallax scroll on campus image
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { yPercent: -10, scale: 1.12 },
          {
            yPercent: 10,
            scale: 1.02,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
          },
        )
      }

      // Badge pop-in animation on scroll
      if (badgeRef.current) {
        gsap.from(badgeRef.current, {
          scale: 0,
          rotation: -20,
          duration: 0.8,
          ease: 'back.out(1.8)',
          scrollTrigger: {
            trigger: badgeRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <div className="relative">
            <div className="shield-clip aspect-[4/5] w-full max-w-md overflow-hidden bg-navy-900 shadow-2xl">
              <img
                ref={imageRef}
                src="/hero.jpg"
                alt={`${site.name} campus`}
                className="h-full w-full object-cover"
              />
            </div>
            <div
              ref={badgeRef}
              className="absolute -bottom-6 -right-2 flex flex-col items-center justify-center rounded-full bg-crimson-500 px-6 py-6 text-center text-parchment-50 shadow-xl shadow-crimson-500/30 sm:right-6"
            >
              <span className="font-mono text-2xl font-semibold leading-none">
                {yearsOfExcellence}+
              </span>
              <span className="mt-1 text-[10px] uppercase tracking-[0.15em]">Years</span>
            </div>
          </div>
        </Reveal>

        <div>
          <SectionEyebrow>Our Purpose</SectionEyebrow>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-navy-900 sm:text-5xl">
              Excellence isn't a slogan on our crest — it's the standard we teach to.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg leading-relaxed text-ink-700">{aboutMission}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <motion.div whileHover={{ x: 6 }} transition={{ type: 'spring', stiffness: 400 }}>
              <Link
                to="/about"
                className="link-underline mt-7 inline-flex items-center gap-2 font-semibold text-crimson-500"
              >
                Read our full story &rarr;
              </Link>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

