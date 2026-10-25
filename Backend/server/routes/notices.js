import express from 'express'
import { Notice } from '../models/Notice.js'

export const noticesRouter = express.Router()

// GET /api/notices - public list
noticesRouter.get('/', async (req, res) => {
  try {
    const list = await Notice.find({}).sort({ createdAt: -1, date: -1 }).limit(50)
    res.json(list)
  } catch (err) {
    console.error('Error fetching notices:', err)
    res.status(500).json({ error: 'Failed to fetch notices' })
  }
})

// POST /api/notices - admin only
noticesRouter.post('/', async (req, res) => {
  const adminKey = req.query.key || req.headers['x-admin-key']
  if (adminKey !== process.env.ADMIN_KEY) {
    return res.status(401).json({ error: 'Unauthorized: Invalid Admin Key' })
  }

  const { title, date, category, badge, content, link, linkText, isUrgent } = req.body
  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required' })
  }

  try {
    const notice = await Notice.create({
      title,
      date: date || new Date().toISOString().split('T')[0],
      category: category || 'General',
      badge: badge || 'Notice',
      content,
      link: link || '',
      linkText: linkText || '',
      isUrgent: Boolean(isUrgent),
    })
    res.status(201).json(notice)
  } catch (err) {
    console.error('Error creating notice:', err)
    res.status(500).json({ error: 'Failed to create notice' })
  }
})

// DELETE /api/notices/:id - admin only
noticesRouter.delete('/:id', async (req, res) => {
  const adminKey = req.query.key || req.headers['x-admin-key']
  if (adminKey !== process.env.ADMIN_KEY) {
    return res.status(401).json({ error: 'Unauthorized: Invalid Admin Key' })
  }

  try {
    await Notice.findByIdAndDelete(req.params.id)
    res.json({ success: true, message: 'Notice deleted successfully' })
  } catch (err) {
    console.error('Error deleting notice:', err)
    res.status(500).json({ error: 'Failed to delete notice' })
  }
})
