import { useRef } from 'react'
import { Link } from '@tanstack/react-router'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { site } from '../../data/content'
import { buttonClass } from '../ui/buttonStyles'
import { Laurel } from '../ui/Laurel'

export function ParallaxHero() {
  const ref = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? ['0%', '0%'] : ['0%', '28%'],
  )
  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? ['0%', '0%'] : ['0%', '55%'],
  )
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section
      ref={ref}
      className="relative h-[94vh] min-h-[640px] w-full overflow-hidden bg-navy-950"
    >
      <motion.div style={{ y: imageY }} className="absolute inset-0 -top-[12%] h-[130%] w-full">
        <img
          src="/hero.jpg"
          alt="Hillwoods Academy campus building in Deoria"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/75 to-navy-950/35" />
        <div className="absolute inset-0 bg-navy-950/20" />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-5 lg:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-gold-300"
        >
          <Laurel />
          <span>
            {site.city}, {site.state} &middot; Est. {site.founded}
          </span>
          <Laurel flip />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-6 max-w-3xl font-display text-5xl font-semibold leading-[1.05] text-parchment-50 sm:text-6xl lg:text-7xl"
        >
          Dedicated to <span className="italic text-gold-300">excellence</span>, since{' '}
          {site.founded}.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-parchment-50/80"
        >
          {site.name} is a CBSE school in {site.city} where academic rigour meets real
          character-building — from a child's first day in Nursery to their last in Grade
          XII.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <Link to="/admissions" className={buttonClass('primary')}>
            Begin Admission
          </Link>
          <Link to="/about" className={buttonClass('outline-light')}>
            Discover Hillwoods
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        animate={prefersReducedMotion ? undefined : { y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-parchment-50/60"
        aria-hidden="true"
      >
        <ChevronDown size={26} />
      </motion.div>
    </section>
  )
}
