import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Lock, Loader2, LogOut, MessageSquare, Users } from 'lucide-react'
import { buttonClass } from '../components/ui/buttonStyles'
import { useDocumentTitle } from '../lib/useDocumentTitle'
import { PageHeader } from '../components/ui/PageHeader'
import { Reveal } from '../components/ui/Reveal'

const inputClass =
  'w-full rounded-lg border border-navy-900/15 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-500/60 transition-colors focus:border-crimson-400 focus:outline-none'

export function AdminPage() {
  useDocumentTitle('Admin Dashboard | Hillwoods Academy')

  const [key, setKey] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [activeTab, setActiveTab] = useState('inquiries')
  const [data, setData] = useState([])
  const [status, setStatus] = useState('idle') // idle, loading, error
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    const savedKey = localStorage.getItem('hw_admin_key')
    if (savedKey) {
      setKey(savedKey)
      setIsAuthenticated(true)
    }
  }, [])

  useEffect(() => {
    if (isAuthenticated) {
      fetchData(activeTab, key)
    }
  }, [activeTab, isAuthenticated])

  const fetchData = async (tab, adminKey) => {
    setStatus('loading')
    setErrorMsg('')
    try {
      const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:4000'
      const endpoint = tab === 'inquiries' ? '/api/inquiries' : '/api/contact'
      const res = await fetch(`${baseUrl}${endpoint}?key=${encodeURIComponent(adminKey)}`)
      
      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body.error || `Request failed (${res.status})`)
      }
      
      const rows = await res.json()
      setData(rows)
      setStatus('idle')
    } catch (err) {
      setErrorMsg(err.message)
      setStatus('error')
      setData([])
      if (err.message.toLowerCase().includes('unauthorized') || err.message.toLowerCase().includes('invalid')) {
        handleLogout()
      }
    }
  }

  const handleLogin = (e) => {
    e.preventDefault()
    if (!key.trim()) return
    localStorage.setItem('hw_admin_key', key)
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    localStorage.removeItem('hw_admin_key')
    setIsAuthenticated(false)
    setKey('')
    setData([])
  }

  if (!isAuthenticated) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center px-5 py-20 bg-parchment-100">
        <Reveal>
          <div className="w-full max-w-md rounded-2xl border border-navy-900/8 bg-white p-8 shadow-xl shadow-navy-900/5">
            <div className="mb-8 flex flex-col items-center text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-crimson-50 text-crimson-500">
                <Lock size={28} strokeWidth={1.5} />
              </div>
              <h2 className="font-display text-2xl font-bold text-navy-900">Admin Access</h2>
              <p className="mt-2 text-sm text-ink-500">Enter your secure key to access the dashboard</p>
            </div>
            
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <input
                  type="password"
                  placeholder="Enter admin key..."
                  value={key}
                  onChange={(e) => setKey(e.target.value)}
                  className={inputClass}
                  required
                />
              </div>
              <button
                type="submit"
                className={buttonClass('primary', 'w-full')}
              >
                Unlock Dashboard
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-parchment-50">
      <PageHeader
        eyebrow="Dashboard"
        title="Admin Inbox"
        description="Manage admissions inquiries and contact messages securely."
      />

      <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <Reveal>
          <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div className="flex items-center gap-2 rounded-full border border-navy-900/10 bg-white p-1 shadow-sm">
              <button
                onClick={() => setActiveTab('inquiries')}
                className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-all ${
                  activeTab === 'inquiries'
                    ? 'bg-navy-900 text-white shadow-md'
                    : 'text-ink-600 hover:bg-navy-50'
                }`}
              >
                <Users size={16} />
                Admissions
              </button>
              <button
                onClick={() => setActiveTab('contact')}
                className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-all ${
                  activeTab === 'contact'
                    ? 'bg-navy-900 text-white shadow-md'
                    : 'text-ink-600 hover:bg-navy-50'
                }`}
              >
                <MessageSquare size={16} />
                Contact Messages
              </button>
            </div>
            
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-sm font-medium text-crimson-500 transition-colors hover:text-crimson-600 rounded-full bg-white px-4 py-2 border border-navy-900/10 shadow-sm hover:shadow"
            >
              <LogOut size={16} />
              Lock Dashboard
            </button>
          </div>

          <div className="rounded-2xl border border-navy-900/8 bg-white shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-navy-50 text-xs uppercase tracking-wider text-navy-900">
                  <tr>
                    <th className="px-6 py-4 font-semibold">Date</th>
                    {activeTab === 'inquiries' ? (
                      <>
                        <th className="px-6 py-4 font-semibold">Student</th>
                        <th className="px-6 py-4 font-semibold">Parent</th>
                        <th className="px-6 py-4 font-semibold">Grade</th>
                        <th className="px-6 py-4 font-semibold">Contact</th>
                        <th className="px-6 py-4 font-semibold">Status</th>
                      </>
                    ) : (
                      <>
                        <th className="px-6 py-4 font-semibold">Name</th>
                        <th className="px-6 py-4 font-semibold">Contact</th>
                        <th className="px-6 py-4 font-semibold">Message</th>
                      </>
                    )}
                  </tr>
                </thead>
                <tbody className="divide-y divide-navy-900/5">
                  <AnimatePresence mode="wait">
                    {status === 'loading' ? (
                      <motion.tr
                        key="loading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <td colSpan={10} className="px-6 py-12 text-center text-ink-500">
                          <div className="flex items-center justify-center gap-3">
                            <Loader2 className="animate-spin text-crimson-500" size={20} />
                            Loading messages...
                          </div>
                        </td>
                      </motion.tr>
                    ) : status === 'error' ? (
                      <motion.tr
                        key="error"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <td colSpan={10} className="px-6 py-12 text-center text-red-500 bg-red-50/50">
                          {errorMsg}
                        </td>
                      </motion.tr>
                    ) : data.length === 0 ? (
                      <motion.tr
                        key="empty"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <td colSpan={10} className="px-6 py-12 text-center text-ink-500">
                          <div className="flex flex-col items-center justify-center gap-2">
                            <MessageSquare className="text-ink-300" size={32} />
                            <p>No messages found.</p>
                          </div>
                        </td>
                      </motion.tr>
                    ) : (
                      data.map((row) => (
                        <motion.tr
                          key={row._id}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="group hover:bg-navy-50/50 transition-colors"
                        >
                          <td className="px-6 py-4 whitespace-nowrap text-ink-500">
                            {new Date(row.createdAt).toLocaleDateString(undefined, {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric',
                            })}
                            <div className="text-xs text-ink-400 mt-1">
                              {new Date(row.createdAt).toLocaleTimeString(undefined, {
                                hour: '2-digit',
                                minute: '2-digit',
                              })}
                            </div>
                          </td>
                          {activeTab === 'inquiries' ? (
                            <>
                              <td className="px-6 py-4 font-medium text-navy-900">{row.studentName}</td>
                              <td className="px-6 py-4 text-ink-700">{row.parentName}</td>
                              <td className="px-6 py-4">
                                <span className="inline-flex items-center rounded-md bg-gold-50 px-2.5 py-1 text-xs font-medium text-gold-700 ring-1 ring-inset ring-gold-600/20">
                                  {row.grade}
                                </span>
                              </td>
                              <td className="px-6 py-4 text-ink-600">
                                <div className="font-medium text-navy-900 mb-1">{row.email}</div>
                                <div className="text-xs">{row.phone}</div>
                              </td>
                              <td className="px-6 py-4">
                                <span className="inline-flex items-center rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                                  {row.status}
                                </span>
                              </td>
                            </>
                          ) : (
                            <>
                              <td className="px-6 py-4 font-medium text-navy-900">{row.name}</td>
                              <td className="px-6 py-4 text-ink-600">
                                <div className="font-medium text-navy-900 mb-1">{row.email}</div>
                                <div className="text-xs">{row.phone || '—'}</div>
                              </td>
                              <td className="px-6 py-4 text-ink-700 max-w-md">
                                <div className="rounded-lg bg-navy-50/50 p-3 text-sm leading-relaxed border border-navy-900/5">
                                  {row.message}
                                </div>
                              </td>
                            </>
                          )}
                        </motion.tr>
                      ))
                    )}
                  </AnimatePresence>
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  )
}
