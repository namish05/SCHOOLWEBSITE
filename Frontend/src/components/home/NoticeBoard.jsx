import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Bell,
  Calendar,
  ChevronRight,
  ExternalLink,
  FileText,
  Filter,
  Sparkles,
  X,
  PlusCircle,
  Megaphone,
} from 'lucide-react'
import { initialNotices } from '../../data/content'
import { SectionEyebrow } from '../ui/SectionEyebrow'
import { Reveal } from '../ui/Reveal'
import { Link } from '@tanstack/react-router'

export function NoticeBoard() {
  const [notices, setNotices] = useState(initialNotices)
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedNotice, setSelectedNotice] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // Try to load any notices from API and fallback to cached localStorage/initialNotices
    async function loadNotices() {
      try {
        setLoading(true)
        const baseUrl = import.meta.env.VITE_API_URL || 'https://schoolwebsite-423l.onrender.com'
        const res = await fetch(`${baseUrl}/api/notices`).catch(() => null)
        if (res && res.ok) {
          const apiNotices = await res.json()
          if (Array.isArray(apiNotices) && apiNotices.length > 0) {
            setNotices(apiNotices)
            localStorage.setItem('hw_cached_notices', JSON.stringify(apiNotices))
            return
          }
        }

        // Check local storage cache
        const local = localStorage.getItem('hw_cached_notices')
        if (local) {
          const parsed = JSON.parse(local)
          if (Array.isArray(parsed) && parsed.length > 0) {
            setNotices(parsed)
          }
        }
      } catch (err) {
        console.warn('Using default notices list:', err)
      } finally {
        setLoading(false)
      }
    }

    loadNotices()
  }, [])

  const categories = ['All', ...new Set(notices.map((n) => n.category || 'General'))]

  const filtered =
    activeCategory === 'All'
      ? notices
      : notices.filter((n) => (n.category || 'General') === activeCategory)

  return (
    <section id="notices" className="relative scroll-mt-20 bg-parchment-50 py-20 lg:py-24">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 h-96 w-96 -translate-y-1/2 rounded-full bg-gold-400/10 blur-3xl" />
        <div className="absolute top-1/3 right-0 h-96 w-96 rounded-full bg-crimson-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <div className="flex items-center gap-2">
              <SectionEyebrow tone="crimson">Announcements &amp; Circulars</SectionEyebrow>
              <span className="flex items-center gap-1.5 rounded-full border border-crimson-200 bg-crimson-50 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-crimson-700">
                <span className="h-2 w-2 rounded-full bg-crimson-500 animate-pulse" />
                Live Notice Board
              </span>
            </div>

            <Reveal delay={0.05}>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy-950 sm:text-4xl lg:text-5xl">
                School Notice Board
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-3 max-w-2xl text-base text-ink-700">
                Stay updated with official school announcements, examination schedules, holiday circulars,
                and event updates from Hillwoods Academy.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <Link
              to="/admin"
              className="inline-flex items-center gap-2 rounded-xl border border-navy-900/15 bg-white px-4 py-2.5 text-xs font-semibold text-navy-900 shadow-xs transition-all hover:border-gold-500 hover:bg-gold-50 hover:text-navy-950"
            >
              <Megaphone size={15} className="text-crimson-600" />
              <span>Staff / Admin: Post Notice</span>
            </Link>
          </Reveal>
        </div>

        {/* Filter Pills */}
        <div className="mt-10 flex flex-wrap items-center gap-2 border-b border-navy-900/10 pb-4">
          <div className="mr-2 flex items-center gap-1 text-xs font-mono uppercase tracking-wider text-ink-500">
            <Filter size={13} />
            <span>Filter:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-1.5 font-mono text-xs uppercase tracking-wider transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-navy-950 text-gold-300 shadow-md shadow-navy-950/20'
                  : 'bg-white border border-navy-900/10 text-ink-700 hover:border-gold-400 hover:text-navy-950'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Notice Cards Grid */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((notice, idx) => (
              <motion.article
                key={notice.id || notice._id || idx}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className={`group relative flex flex-col justify-between rounded-2xl border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  notice.isUrgent
                    ? 'border-crimson-400/50 ring-2 ring-crimson-400/15'
                    : 'border-navy-900/10 hover:border-gold-400/50'
                }`}
              >
                <div>
                  {/* Card Meta Row */}
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex items-center gap-1.5 rounded-md bg-parchment-100 px-2.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-navy-800">
                      <Calendar size={12} className="text-gold-600" />
                      {notice.date || 'Recent'}
                    </span>

                    <div className="flex items-center gap-1.5">
                      {notice.isUrgent && (
                        <span className="rounded-full bg-crimson-600 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-xs">
                          Important
                        </span>
                      )}
                      <span className="rounded-full border border-navy-900/10 bg-white px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-ink-600">
                        {notice.category || 'General'}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="mt-4 font-display text-lg font-bold leading-snug text-navy-950 transition-colors group-hover:text-crimson-600">
                    {notice.title}
                  </h3>

                  {/* Body Preview */}
                  <p className="mt-3 line-clamp-3 text-xs leading-relaxed text-ink-700">
                    {notice.content}
                  </p>
                </div>

                {/* Footer Link / Modal trigger */}
                <div className="mt-6 flex items-center justify-between border-t border-navy-900/6 pt-4">
                  <button
                    type="button"
                    onClick={() => setSelectedNotice(notice)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-crimson-600 hover:text-crimson-700 cursor-pointer"
                  >
                    <span>Read Details</span>
                    <ChevronRight size={14} />
                  </button>

                  {notice.link && (
                    <a
                      href={notice.link}
                      className="inline-flex items-center gap-1 text-xs font-medium text-ink-500 hover:text-navy-950"
                    >
                      <span>{notice.linkText || 'View Link'}</span>
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Modal for Full Notice Reading */}
        <AnimatePresence>
          {selectedNotice && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedNotice(null)}
              className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/80 p-4 backdrop-blur-sm"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 15 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 15 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-h-[88vh] w-full max-w-xl overflow-y-auto rounded-3xl border border-white/20 bg-white p-7 sm:p-9 shadow-2xl"
              >
                <button
                  type="button"
                  onClick={() => setSelectedNotice(null)}
                  className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full bg-parchment-100 text-ink-600 transition-colors hover:bg-crimson-50 hover:text-crimson-600"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>

                <div className="flex items-center gap-2">
                  <span className="rounded-md bg-parchment-100 px-3 py-1 font-mono text-xs font-semibold text-navy-900">
                    📅 {selectedNotice.date}
                  </span>
                  <span className="rounded-full bg-gold-100 px-2.5 py-0.5 font-mono text-xs font-semibold text-gold-800">
                    {selectedNotice.category}
                  </span>
                  {selectedNotice.isUrgent && (
                    <span className="rounded-full bg-crimson-600 px-2.5 py-0.5 text-xs font-bold text-white">
                      Important
                    </span>
                  )}
                </div>

                <h3 className="mt-4 font-display text-2xl font-bold text-navy-950">
                  {selectedNotice.title}
                </h3>

                <div className="mt-6 rounded-2xl bg-parchment-50 p-5 text-sm leading-relaxed text-ink-800 border border-navy-900/5">
                  <p className="whitespace-pre-line">{selectedNotice.content}</p>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-navy-900/10 pt-5">
                  {selectedNotice.link ? (
                    <a
                      href={selectedNotice.link}
                      className="inline-flex items-center gap-2 rounded-xl bg-crimson-600 px-4 py-2 text-xs font-semibold text-white shadow-xs hover:bg-crimson-700"
                    >
                      <span>{selectedNotice.linkText || 'Open Link / Details'}</span>
                      <ExternalLink size={14} />
                    </a>
                  ) : (
                    <span className="text-xs text-ink-500">Official Notice &middot; Hillwoods Academy</span>
                  )}

                  <button
                    type="button"
                    onClick={() => setSelectedNotice(null)}
                    className="rounded-xl border border-navy-900/15 px-4 py-2 text-xs font-semibold text-navy-900 hover:bg-parchment-100"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
