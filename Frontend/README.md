# Hillwoods Academy — Website

A 6-page animated marketing site for Hillwoods Academy (Deoria, Uttar Pradesh), built
with **React + TanStack Router + Vite + Tailwind CSS v4 + Framer Motion**.

## Pages

- **Home** — parallax hero, animated stat counters, highlights marquee, mission teaser,
  program cards, testimonials, CTA band
- **About** — mission/vision, values grid, founding-to-today timeline, leadership
- **Academics** — five learning stages, senior-secondary streams, facilities
- **Admissions** — 5-step process, key dates, required documents, inquiry form
- **Gallery** — filterable masonry grid
- **Contact** — contact details, office hours, message form, embedded map

## Getting started

This project was built in a sandboxed environment **without internet access**, so the
code has not been run through `npm install` / `npm run dev` yet. Do that first, on your
own machine:

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

To build for production:

```bash
npm run build
npm run preview
```

`src/routeTree.gen.ts` is generated automatically by the TanStack Router Vite plugin the
first time you run `dev` or `build` — you don't need to write it yourself, and it's
git-ignored.

If `npm install` or `npm run dev` throws an error, it's most likely a small dependency
version mismatch (several packages in `package.json` are pinned to `"latest"` since this
was built offline) — pin the offending package to the version it installed and it should
resolve. Happy to help fix anything that comes up.

## Content to customize before going live

Everything editorial lives in one file: **`src/data/content.ts`**. In particular, replace
these placeholders with real information:

- `site.fullAddress`, `site.phone`, `site.phoneAlt`, `site.email`, `site.admissionsEmail`
- `site.socials` (Facebook / Instagram / YouTube links)
- `heroStats` (student count, faculty count, board result %)
- `leadership` (principal/staff names & bios)
- `timeline` (real founding milestones)
- Gallery images — the gallery currently uses placeholder stock photography from
  [Lorem Picsum](https://picsum.photos/) as stand-ins. Swap `src/components/gallery/MasonryGrid.tsx`'s
  image sources for the school's real photos (add them to `/public` and update
  `galleryImages` in `content.ts`).

## Forms

Both `InquiryForm.tsx` (Admissions) and `ContactForm.tsx` (Contact) are fully working in
the browser — they validate input and show a success state — but currently **simulate**
submission with a timeout, since there's no backend yet. Each file has a comment marking
exactly where to add a real `fetch()` call.

## Adding the Node/Express + MongoDB backend

When you're ready to wire up real form submissions and admissions data, a clean shape
would be:

```
server/
  index.js            → Express app
  routes/inquiries.js → POST /api/inquiries, GET /api/inquiries (admin)
  models/Inquiry.js    → Mongoose schema (student name, parent name, grade, phone, email, message, createdAt)
```

Then in `InquiryForm.tsx` / `ContactForm.tsx`, replace the `window.setTimeout(...)`
simulation with:

```ts
const res = await fetch('/api/inquiries', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formValues),
})
if (!res.ok) throw new Error('Failed to submit')
setStatus('success')
```

During development, set Vite's `server.proxy` in `vite.config.ts` to forward `/api` to
your Express server (e.g. `http://localhost:4000`).

## Tech notes

- **Tailwind v4** — theme tokens (colors, fonts) are defined in `src/index.css` via
  `@theme`, not a `tailwind.config.js` file.
- **Design tokens** — navy / crimson / gold palette pulled from the school crest, paired
  with Fraunces (display), IBM Plex Sans (body), and IBM Plex Mono (data/labels). The
  laurel-branch divider and notched card corners echo the crest throughout the site.
- Animations respect `prefers-reduced-motion`.
