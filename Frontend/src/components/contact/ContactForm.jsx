import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, Loader2 } from 'lucide-react'
import { buttonClass } from '../ui/buttonStyles'

const inputClass =
  'w-full rounded-lg border border-navy-900/15 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-500/60 transition-colors focus:border-crimson-400 focus:outline-none'

export function ContactForm() {
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    const formData = new FormData(event.target)
    const payload = Object.fromEntries(formData.entries())

    try {
      const baseUrl = import.meta.env.VITE_API_URL || 'https://schoolwebsite-423l.onrender.com'
      const response = await fetch(baseUrl + '/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        const data = await response.json().catch(() => ({}))
        throw new Error(data.error || 'Something went wrong')
      }

      setStatus('success')
    } catch (err) {
      console.error('Error submitting contact form:', err)
      setErrorMessage(err.message || 'Failed to submit message. Please try again.')
      setStatus('idle')
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
      {errorMessage && (
        <div className="mb-6 rounded-lg bg-red-50 p-4 text-sm text-red-600 border border-red-200">
          {errorMessage}
        </div>
      )}
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
    </form>
  )
}
