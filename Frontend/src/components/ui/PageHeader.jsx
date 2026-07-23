import { motion } from 'framer-motion'
import { Laurel } from './Laurel'

export function PageHeader({ eyebrow, title, description }) {
  return (
    <section className="crest-stripes relative overflow-hidden bg-navy-950 pb-20 pt-28 lg:pb-24 lg:pt-36">
      <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-gold-300"
        >
          <Laurel />
          <span>{eyebrow}</span>
          <Laurel flip />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-5 font-display text-5xl font-semibold text-parchment-50 sm:text-6xl"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-5 max-w-xl text-parchment-50/70"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  )
}
