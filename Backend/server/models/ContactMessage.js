import mongoose from 'mongoose'

const contactMessageSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    phone: { type: String, trim: true, default: '' },
    email: { type: String, required: true, trim: true, lowercase: true },
    message: { type: String, required: true, trim: true },
    status: { type: String, enum: ['new', 'read', 'closed'], default: 'new' },
  },
  { timestamps: true },
)

export const ContactMessage = mongoose.model('ContactMessage', contactMessageSchema)
