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
own machine. This starts the **frontend only** — see "Forms & where submissions go"
below to also run the backend so the forms actually save data.

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

## Forms & where submissions go

Both forms are now wired up to a real backend in `/server` (Node + Express +
MongoDB/Mongoose):

- **Admissions inquiry form** &rarr; `POST /api/inquiries` &rarr; saved to MongoDB
- **Contact form** &rarr; `POST /api/contact` &rarr; saved to MongoDB

### 1. Set up the backend

```bash
cd server
npm install
cp .env.example .env
```

Open `server/.env` and fill in:

- `MONGODB_URI` — a local MongoDB (`mongodb://127.0.0.1:27017/hillwoods-academy`) or a
  free [MongoDB Atlas](https://www.mongodb.com/atlas) connection string
- `ADMIN_KEY` — any password you choose, used to view submissions (see below)

Then start it:

```bash
npm run dev
```

You should see `Hillwoods Academy API running on http://localhost:4000`.

### 2. Run the frontend as usual

In a **separate terminal**, from the project root:

```bash
npm install
npm run dev
```

Vite is already configured to forward any `/api/*` request to `http://localhost:4000`,
so the forms just work — no code changes needed.

### 3. Where to see submissions

Open **`http://localhost:4000/admin.html`** in your browser, enter the `ADMIN_KEY` you
set in `server/.env`, and you'll see two tabs — Admissions Inquiries and Contact
Messages — listing every submission, newest first.

You can also hit the JSON endpoints directly (handy for Postman, or your own admin
dashboard later):

```
GET http://localhost:4000/api/inquiries?key=YOUR_ADMIN_KEY
GET http://localhost:4000/api/contact?key=YOUR_ADMIN_KEY
```

**Before this goes anywhere public:** `admin.html` is protected only by a single shared
password in `.env`, which is fine for local development but not real security. Swap it
for proper authenticated login (sessions, or a hosted auth provider) before deploying,
and put the whole `server/` folder on hosting with HTTPS (Render, Railway, Fly.io, etc.)
alongside a MongoDB Atlas database.

### Deploying later

- Frontend: `npm run build` produces static files in `dist/` — deploy to Netlify,
  Vercel, or any static host.
- Backend: deploy `server/` to Render/Railway/Fly.io, set the same environment
  variables there, and point the frontend's `/api` calls at that URL instead of
  `localhost:4000` (e.g. via an environment-based `VITE_API_URL` and updating the two
  `fetch()` calls in `InquiryForm.tsx` / `ContactForm.tsx`, or by proxying at your host).

## Tech notes

- **Tailwind v4** — theme tokens (colors, fonts) are defined in `src/index.css` via
  `@theme`, not a `tailwind.config.js` file.
- **Design tokens** — navy / crimson / gold palette pulled from the school crest, paired
  with Fraunces (display), IBM Plex Sans (body), and IBM Plex Mono (data/labels). The
  laurel-branch divider and notched card corners echo the crest throughout the site.
- Animations respect `prefers-reduced-motion`.
