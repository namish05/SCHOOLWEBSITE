import { Router } from 'express'
import { ContactMessage } from '../models/ContactMessage.js'
import { requireAdminKey } from '../middleware/requireAdminKey.js'

export const contactRouter = Router()

// POST /api/contact — submit the general contact form (public)
contactRouter.post('/', async (req, res) => {
  try {
    const { name, phone, email, message } = req.body

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Please fill in all required fields.' })
    }

    const entry = await ContactMessage.create({ name, phone, email, message })
    res.status(201).json({ success: true, id: entry._id })
  } catch (err) {
    console.error('Failed to save contact message:', err)
    res.status(500).json({ error: 'Something went wrong. Please try again.' })
  }
})

// GET /api/contact?key=... — list all messages, newest first (used by admin.html)
contactRouter.get('/', requireAdminKey, async (req, res) => {
  try {
    const messages = await ContactMessage.find().sort({ createdAt: -1 })
    res.json(messages)
  } catch (err) {
    console.error('Failed to fetch messages:', err)
    res.status(500).json({ error: 'Could not fetch messages.' })
  }
})
