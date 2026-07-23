// Minimal shared-secret guard for the read/list endpoints (used by admin.html).
// This is NOT real authentication — it's a placeholder so the inbox isn't
// wide open by default. Replace with proper login/session auth before this
// site handles real families' data in production.
export function requireAdminKey(req, res, next) {
  const provided = req.query.key || req.headers['x-admin-key']

  if (!process.env.ADMIN_KEY) {
    return res.status(500).json({ error: 'Server is missing ADMIN_KEY in .env' })
  }

  if (provided !== process.env.ADMIN_KEY) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  next()
}
