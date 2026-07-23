import { Router } from 'express'
import { Inquiry } from '../models/Inquiry.js'
import { requireAdminKey } from '../middleware/requireAdminKey.js'

export const inquiriesRouter = Router()

// POST /api/inquiries — submit a new admissions inquiry (public, used by the form)
inquiriesRouter.post('/', async (req, res) => {
  try {
    const { studentName, parentName, grade, phone, email, message } = req.body

    if (!studentName || !parentName || !grade || !phone || !email) {
      return res.status(400).json({ error: 'Please fill in all required fields.' })
    }

    const inquiry = await Inquiry.create({
      studentName,
      parentName,
      grade,
      phone,
      email,
      message,
    })

    res.status(201).json({ success: true, id: inquiry._id })
  } catch (err) {
    console.error('Failed to save inquiry:', err)
    res.status(500).json({ error: 'Something went wrong. Please try again.' })
  }
})

// GET /api/inquiries?key=... — list all inquiries, newest first (used by admin.html)
inquiriesRouter.get('/', requireAdminKey, async (req, res) => {
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 })
    res.json(inquiries)
  } catch (err) {
    console.error('Failed to fetch inquiries:', err)
    res.status(500).json({ error: 'Could not fetch inquiries.' })
  }
})

// PATCH /api/inquiries/:id — update status (e.g. mark as contacted/closed)
inquiriesRouter.patch('/:id', requireAdminKey, async (req, res) => {
  try {
    const { status } = req.body
    const inquiry = await Inquiry.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true },
    )
    if (!inquiry) return res.status(404).json({ error: 'Not found' })
    res.json(inquiry)
  } catch (err) {
    console.error('Failed to update inquiry:', err)
    res.status(500).json({ error: 'Could not update inquiry.' })
  }
})
