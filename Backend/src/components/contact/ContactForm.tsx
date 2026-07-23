import { useState, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, Loader2 } from 'lucide-react'
import { buttonClass } from '../ui/buttonStyles'

type Status = 'idle' | 'submitting' | 'success' | 'error'

const inputClass =
  'w-full rounded-lg border border-navy-900/15 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-500/60 transition-colors focus:border-crimson-400 focus:outline-none'

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    const form = event.currentTarget
    const payload = Object.fromEntries(new FormData(form).entries())

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body.error || 'Something went wrong. Please try again.')
      }

      form.reset()
      setStatus('success')
    } catch (err) {
      setStatus('error')
      setErrorMessage(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again, or call us directly.',
      )
    }
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center rounded-2xl border border-gold-400/40 bg-white px-8 py-14 text-center"
      >
        <CheckCircle2 className="text-crimson-500" size={40} strokeWidth={1.5} />
        <h3 className="mt-4 font-display text-xl font-semibold text-navy-900">
          Message sent
        </h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-700">
          Thanks for writing in — we'll get back to you within 1-2 working days.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className={buttonClass('outline-dark', 'mt-6')}
        >
          Send another message
        </button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-navy-900/8 bg-white p-7 sm:p-9">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-ink-500">
            Full Name
          </label>
          <input required type="text" name="name" className={inputClass} placeholder="Your name" />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-ink-500">
            Phone Number
          </label>
          <input type="tel" name="phone" className={inputClass} placeholder="+91 90000 00000" />
        </div>
        <div className="sm:col-span-2">
          <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-ink-500">
            Email Address
          </label>
          <input required type="email" name="email" className={inputClass} placeholder="you@example.com" />
        </div>
        <div className="sm:col-span-2">
          <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-ink-500">
            Message
          </label>
          <textarea required name="message" rows={5} className={inputClass} placeholder="How can we help?" />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className={buttonClass('primary', 'mt-7 w-full disabled:opacity-70')}
      >
        <AnimatePresence mode="wait" initial={false}>
          {status === 'submitting' ? (
            <motion.span
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2"
            >
              <Loader2 className="animate-spin" size={16} /> Sending&hellip;
            </motion.span>
          ) : (
            <motion.span key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              Send Message
            </motion.span>
          )}
        </AnimatePresence>
      </button>
      {status === 'error' && (
        <p className="mt-3 text-center text-sm font-medium text-crimson-500">{errorMessage}</p>
      )}
    </form>
  )
}
