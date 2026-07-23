import { useEffect, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { nav, site } from '../../data/content'
import { buttonClass } from '../ui/buttonStyles'
import { cn } from '../../lib/utils'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full backdrop-blur transition-all duration-300',
        scrolled
          ? 'bg-navy-950/95 py-2 shadow-lg shadow-navy-950/20'
          : 'bg-navy-950/70 py-3',
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src="/logo.png"
            alt={`${site.name} crest`}
            className="h-12 w-12 shrink-0 lg:h-14 lg:w-14"
          />
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-display text-lg font-semibold tracking-wide text-parchment-50">
              {site.name}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold-300">
              {site.tagline}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === '/' }}
              activeProps={{ className: 'text-gold-300' }}
              className="link-underline font-mono text-xs font-medium uppercase tracking-[0.15em] text-parchment-50/85 transition-colors hover:text-gold-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link to="/admissions" className={buttonClass('primary')}>
            Apply Now
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-parchment-50 lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-parchment-50/10 lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-5 py-4">
              {nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  activeOptions={{ exact: item.to === '/' }}
                  activeProps={{ className: 'text-gold-300' }}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 font-mono text-sm uppercase tracking-[0.15em] text-parchment-50/85 transition-colors hover:bg-parchment-50/5 hover:text-gold-300"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/admissions"
                onClick={() => setOpen(false)}
                className={buttonClass('primary', 'mt-3 w-full')}
              >
                Apply Now
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
