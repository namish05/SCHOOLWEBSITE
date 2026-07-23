import mongoose from 'mongoose'

const inquirySchema = new mongoose.Schema(
  {
    studentName: { type: String, required: true, trim: true },
    parentName: { type: String, required: true, trim: true },
    grade: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    message: { type: String, trim: true, default: '' },
    status: { type: String, enum: ['new', 'contacted', 'closed'], default: 'new' },
  },
  { timestamps: true },
)

export const Inquiry = mongoose.model('Inquiry', inquirySchema)
