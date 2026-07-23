import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { connectDB } from './db.js'
import { inquiriesRouter } from './routes/inquiries.js'
import { contactRouter } from './routes/contact.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const app = express()
const PORT = process.env.PORT || 4000

app.use(cors({ origin: process.env.CLIENT_ORIGIN || 'http://localhost:3000' }))
app.use(express.json())

// Simple static admin inbox — visit http://localhost:4000/admin.html
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => res.send('Hillwoods Academy API is running! The main website is on http://localhost:3000'))
app.get('/api/health', (req, res) => res.json({ ok: true }))
app.use('/api/inquiries', inquiriesRouter)
app.use('/api/contact', contactRouter)

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Hillwoods Academy API running on http://localhost:${PORT}`)
      console.log(`Admin inbox at        http://localhost:${PORT}/admin.html`)
    })
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err.message)
    process.exit(1)
  })
