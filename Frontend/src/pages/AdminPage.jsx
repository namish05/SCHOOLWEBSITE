import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Lock,
  Loader2,
  LogOut,
  MessageSquare,
  Users,
  Bell,
  PlusCircle,
  Trash2,
  ExternalLink,
  CheckCircle2,
} from 'lucide-react'
import { buttonClass } from '../components/ui/buttonStyles'
import { useDocumentTitle } from '../lib/useDocumentTitle'
import { PageHeader } from '../components/ui/PageHeader'
import { Reveal } from '../components/ui/Reveal'
import { initialNotices } from '../data/content'

const inputClass =
  'w-full rounded-lg border border-navy-900/15 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-500/60 transition-colors focus:border-crimson-400 focus:outline-none'

export function AdminPage() {
  useDocumentTitle('Admin Dashboard | Hillwoods Academy')

  const [key, setKey] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [activeTab, setActiveTab] = useState('inquiries')
  const [data, setData] = useState([])
  const [notices, setNotices] = useState([])
  const [status, setStatus] = useState('idle') // idle, loading, error
  const [errorMsg, setErrorMsg] = useState('')
  const [noticeFormSuccess, setNoticeFormSuccess] = useState('')

  // Notice form state
  const [newNotice, setNewNotice] = useState({
    title: '',
    category: 'Admissions',
    badge: 'Important',
    date: new Date().toISOString().split('T')[0],
    content: '',
    link: '',
    linkText: '',
    isUrgent: false,
  })

  useEffect(() => {
    const savedKey = localStorage.getItem('hw_admin_key')
    if (savedKey) {
      setKey(savedKey)
      setIsAuthenticated(true)
    }
  }, [])

  useEffect(() => {
    if (isAuthenticated) {
      if (activeTab === 'notices') {
        fetchNotices(key)
      } else {
        fetchData(activeTab, key)
      }
    }
  }, [activeTab, isAuthenticated])

  const fetchNotices = async (adminKey) => {
    setStatus('loading')
    setErrorMsg('')
    try {
      const baseUrl = import.meta.env.VITE_API_URL || 'https://schoolwebsite-423l.onrender.com'
      const res = await fetch(`${baseUrl}/api/notices`).catch(() => null)
      if (res && res.ok) {
        const list = await res.json()
        if (Array.isArray(list) && list.length > 0) {
          setNotices(list)
          localStorage.setItem('hw_cached_notices', JSON.stringify(list))
          setStatus('idle')
          return
        }
      }

      // Fallback to cached or initial notices
      const local = localStorage.getItem('hw_cached_notices')
      const cached = local ? JSON.parse(local) : initialNotices
      setNotices(cached)
      setStatus('idle')
    } catch (err) {
      console.warn('Error fetching notices:', err)
      const local = localStorage.getItem('hw_cached_notices')
      setNotices(local ? JSON.parse(local) : initialNotices)
      setStatus('idle')
    }
  }

  const handleCreateNotice = async (e) => {
    e.preventDefault()
    if (!newNotice.title || !newNotice.content) return

    setStatus('loading')
    setNoticeFormSuccess('')
    setErrorMsg('')

    const noticeItem = {
      ...newNotice,
      id: `notice-${Date.now()}`,
      createdAt: new Date().toISOString(),
    }

    try {
      const baseUrl = import.meta.env.VITE_API_URL || 'https://schoolwebsite-423l.onrender.com'
      await fetch(`${baseUrl}/api/notices?key=${encodeURIComponent(key)}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-key': key,
        },
        body: JSON.stringify(newNotice),
      }).catch(() => null)

      const updated = [noticeItem, ...notices]
      setNotices(updated)
      localStorage.setItem('hw_cached_notices', JSON.stringify(updated))
      setNoticeFormSuccess('Notice published successfully!')

      // Reset form
      setNewNotice({
        title: '',
        category: 'Admissions',
        badge: 'Important',
        date: new Date().toISOString().split('T')[0],
        content: '',
        link: '',
        linkText: '',
        isUrgent: false,
      })
      setStatus('idle')
    } catch (err) {
      setErrorMsg('Failed to publish notice. Saved locally.')
      const updated = [noticeItem, ...notices]
      setNotices(updated)
      localStorage.setItem('hw_cached_notices', JSON.stringify(updated))
      setStatus('idle')
    }
  }

  const handleDeleteNotice = async (id) => {
    if (!window.confirm('Are you sure you want to delete this notice?')) return
    try {
      const baseUrl = import.meta.env.VITE_API_URL || 'https://schoolwebsite-423l.onrender.com'
      await fetch(`${baseUrl}/api/notices/${id}?key=${encodeURIComponent(key)}`, {
        method: 'DELETE',
        headers: { 'x-admin-key': key },
      }).catch(() => null)

      const updated = notices.filter((n) => (n._id || n.id) !== id)
      setNotices(updated)
      localStorage.setItem('hw_cached_notices', JSON.stringify(updated))
    } catch (err) {
      console.error('Delete notice error:', err)
    }
  }

  const fetchData = async (tab, adminKey) => {
    setStatus('loading')
    setErrorMsg('')
    try {
      const baseUrl = import.meta.env.VITE_API_URL || 'https://schoolwebsite-423l.onrender.com'
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
            <div className="flex flex-wrap items-center gap-2 rounded-full border border-navy-900/10 bg-white p-1 shadow-sm">
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
              <button
                onClick={() => setActiveTab('notices')}
                className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-all ${
                  activeTab === 'notices'
                    ? 'bg-navy-900 text-white shadow-md'
                    : 'text-ink-600 hover:bg-navy-50'
                }`}
              >
                <Bell size={16} />
                Notice Board ({notices.length})
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

          {activeTab === 'notices' ? (
            <div className="space-y-8">
              {/* Notice Upload Form */}
              <div className="rounded-3xl border border-gold-400/30 bg-white p-7 sm:p-9 shadow-md">
                <div className="flex items-center justify-between border-b border-navy-900/8 pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-400/20 text-gold-700">
                      <PlusCircle size={22} />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-navy-950">
                        Upload / Publish New Notice
                      </h3>
                      <p className="text-xs text-ink-500">
                        Notice will instantly appear on the website's live Notice Board
                      </p>
                    </div>
                  </div>
                </div>

                {noticeFormSuccess && (
                  <div className="mt-4 flex items-center gap-2 rounded-xl bg-emerald-50 p-4 text-sm font-medium text-emerald-800 border border-emerald-200">
                    <CheckCircle2 size={18} className="text-emerald-600" />
                    <span>{noticeFormSuccess}</span>
                  </div>
                )}

                <form onSubmit={handleCreateNotice} className="mt-6 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-ink-600">
                        Notice Title *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Annual Sports Meet 2025 Schedule"
                        value={newNotice.title}
                        onChange={(e) => setNewNotice({ ...newNotice, title: e.target.value })}
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-ink-600">
                        Category
                      </label>
                      <select
                        value={newNotice.category}
                        onChange={(e) => setNewNotice({ ...newNotice, category: e.target.value })}
                        className={inputClass}
                      >
                        <option value="Admissions">Admissions</option>
                        <option value="Academics">Academics</option>
                        <option value="Examination">Examination</option>
                        <option value="Sports">Sports</option>
                        <option value="Events">Events &amp; Celebrations</option>
                        <option value="Holiday">Holiday</option>
                        <option value="General">General Notice</option>
                      </select>
                    </div>

                    <div>
                      <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-ink-600">
                        Date
                      </label>
                      <input
                        type="date"
                        value={newNotice.date}
                        onChange={(e) => setNewNotice({ ...newNotice, date: e.target.value })}
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-ink-600">
                        Badge Label
                      </label>
                      <select
                        value={newNotice.badge}
                        onChange={(e) => setNewNotice({ ...newNotice, badge: e.target.value })}
                        className={inputClass}
                      >
                        <option value="Important">Important</option>
                        <option value="New">New</option>
                        <option value="Circular">Circular</option>
                        <option value="Urgent">Urgent</option>
                        <option value="Notice">Notice</option>
                      </select>
                    </div>

                    <div className="flex items-center pt-6">
                      <label className="inline-flex items-center gap-2.5 cursor-pointer text-sm font-semibold text-navy-950">
                        <input
                          type="checkbox"
                          checked={newNotice.isUrgent}
                          onChange={(e) => setNewNotice({ ...newNotice, isUrgent: e.target.checked })}
                          className="h-4 w-4 rounded text-crimson-600 focus:ring-crimson-500"
                        />
                        <span>Highlight as Urgent / Red Badge</span>
                      </label>
                    </div>

                    <div className="sm:col-span-2">
                      <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-ink-600">
                        Notice Details / Circular Content *
                      </label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Write the complete announcement, timings, guidelines or notice details..."
                        value={newNotice.content}
                        onChange={(e) => setNewNotice({ ...newNotice, content: e.target.value })}
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-ink-600">
                        Optional Link / Action URL
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. /admissions, /gallery, or https://..."
                        value={newNotice.link}
                        onChange={(e) => setNewNotice({ ...newNotice, link: e.target.value })}
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-ink-600">
                        Link Button Text
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. View Details / Apply Now"
                        value={newNotice.linkText}
                        onChange={(e) => setNewNotice({ ...newNotice, linkText: e.target.value })}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className={buttonClass('primary', 'mt-4 px-8 py-3')}
                  >
                    {status === 'loading' ? (
                      <span className="flex items-center gap-2">
                        <Loader2 className="animate-spin" size={16} /> Publishing...
                      </span>
                    ) : (
                      'Publish Notice'
                    )}
                  </button>
                </form>
              </div>

              {/* Published Notices List */}
              <div className="rounded-3xl border border-navy-900/8 bg-white p-7 sm:p-9 shadow-sm">
                <div className="flex items-center justify-between border-b border-navy-900/8 pb-4">
                  <h3 className="font-display text-xl font-bold text-navy-950">
                    Active Published Notices ({notices.length})
                  </h3>
                  <span className="text-xs text-ink-500">Live on homepage</span>
                </div>

                <div className="mt-6 divide-y divide-navy-900/8">
                  {notices.map((n) => (
                    <div
                      key={n._id || n.id}
                      className="flex flex-col gap-4 py-5 sm:flex-row sm:items-start sm:justify-between"
                    >
                      <div className="max-w-3xl">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-semibold text-gold-700 bg-gold-50 px-2 py-0.5 rounded">
                            {n.date}
                          </span>
                          <span className="rounded-full border border-navy-900/10 px-2.5 py-0.5 text-xs text-ink-600">
                            {n.category}
                          </span>
                          {n.isUrgent && (
                            <span className="rounded-full bg-crimson-600 px-2 py-0.5 text-[10px] font-bold text-white">
                              Urgent
                            </span>
                          )}
                        </div>
                        <h4 className="mt-2 text-base font-bold text-navy-950">{n.title}</h4>
                        <p className="mt-1 text-xs leading-relaxed text-ink-700 whitespace-pre-line">
                          {n.content}
                        </p>
                        {n.link && (
                          <div className="mt-2 text-xs text-crimson-600 font-medium">
                            Link: {n.link} ({n.linkText || 'Details'})
                          </div>
                        )}
                      </div>

                      <button
                        type="button"
                        onClick={() => handleDeleteNotice(n._id || n.id)}
                        className="inline-flex shrink-0 items-center gap-1.5 rounded-xl border border-red-200 bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-600 hover:bg-red-100 transition-colors"
                      >
                        <Trash2 size={14} />
                        Delete
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
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
          )}

          <div className="mt-10 border-t border-navy-900/10 pt-6 text-center font-mono text-xs text-ink-500">
            <span>Admin Portal &middot; Developed by </span>
            <span className="font-semibold text-navy-950">Er. Namish Srivastava</span>
            <span> &middot; </span>
            <a href="mailto:snamish44@gmail.com" className="text-crimson-600 hover:underline">
              snamish44@gmail.com
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  )
}
