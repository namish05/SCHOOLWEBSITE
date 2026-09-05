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

const allowedOrigins = [
  'http://localhost:3000',
  'https://hillwoodacademy.vercel.app',
  process.env.CLIENT_URL,
].filter(Boolean)

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps, curl, server-to-server)
      if (!origin) return callback(null, true)
      if (
        allowedOrigins.includes(origin) ||
        origin.endsWith('.vercel.app') ||
        origin.includes('localhost')
      ) {
        return callback(null, true)
      }
      return callback(null, true) // Allow open access for school inquiries or callback(new Error('Not allowed by CORS'))
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
  })
)
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
