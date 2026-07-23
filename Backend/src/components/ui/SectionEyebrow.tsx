import { motion } from 'framer-motion'
import { Laurel } from './Laurel'
import { cn } from '../../lib/utils'

type SectionEyebrowProps = {
  children: React.ReactNode
  align?: 'left' | 'center'
  tone?: 'gold' | 'crimson' | 'parchment'
  className?: string
}

const toneClasses: Record<string, string> = {
  gold: 'text-gold-600',
  crimson: 'text-crimson-500',
  parchment: 'text-gold-300',
}

export function SectionEyebrow({
  children,
  align = 'left',
  tone = 'gold',
  className,
}: SectionEyebrowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className={cn(
        'flex items-center gap-3 font-mono text-xs font-medium uppercase tracking-[0.25em]',
        toneClasses[tone],
        align === 'center' && 'justify-center',
        className,
      )}
    >
      <Laurel />
      <span>{children}</span>
      <Laurel flip />
    </motion.div>
  )
}
