import mongoose from 'mongoose'

const noticeSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  date: { type: String, default: () => new Date().toISOString().split('T')[0] },
  category: { type: String, default: 'General' },
  badge: { type: String, default: 'Notice' },
  content: { type: String, required: true },
  link: { type: String, default: '' },
  linkText: { type: String, default: '' },
  isUrgent: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
})

export const Notice = mongoose.models.Notice || mongoose.model('Notice', noticeSchema)
