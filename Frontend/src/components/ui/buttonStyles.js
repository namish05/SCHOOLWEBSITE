import { cn } from '../../lib/utils'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 ease-out'

const variants = {
  primary:
    'bg-crimson-500 text-parchment-50 hover:bg-crimson-600 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-crimson-500/25 active:translate-y-0',
  'outline-light':
    'border border-parchment-50/40 text-parchment-50 hover:bg-parchment-50 hover:text-navy-900 hover:-translate-y-0.5',
  'outline-dark':
    'border border-navy-800/25 text-navy-800 hover:bg-navy-800 hover:text-parchment-50 hover:-translate-y-0.5',
  'ghost-dark': 'text-navy-800 hover:text-crimson-500',
  'ghost-light': 'text-parchment-50/90 hover:text-gold-300',
}

export function buttonClass(variant = 'primary', className) {
  return cn(base, variants[variant], className)
}
