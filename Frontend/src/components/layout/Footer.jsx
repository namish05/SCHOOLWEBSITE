import { Link } from '@tanstack/react-router'
import {
  Clock,
  Globe,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react'
import { nav, site } from '../../data/content'
import { Laurel } from '../ui/Laurel'

export function Footer() {
  return (
    <footer className="bg-navy-950 text-parchment-50/80">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="group flex items-center gap-3.5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white p-2 shadow-lg shadow-black/30 ring-2 ring-gold-400/40 transition-transform duration-200 group-hover:scale-105">
                <img src="/logo.png" alt={`${site.name} crest`} className="h-full w-full object-contain" />
              </div>
              <span>
                <span className="block font-display text-lg font-semibold text-parchment-50">
                  {site.name}
                </span>
                <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-gold-300">
                  {site.tagline}
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-parchment-50/60">
              A premier secondary school in {site.city}, {site.state}, educating students from Nursery
              to Class VIII across 3 prominent branches since {site.founded}.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {/* Instagram */}
              <a
                href={site.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Hillwoods Academy on Instagram"
                className="group flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white transition-all duration-300 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-rose-500 hover:to-purple-600 hover:shadow-lg hover:shadow-rose-500/25"
                title="Instagram: @hillwoodsacademy"
              >
                <svg className="h-5 w-5 fill-current transition-transform duration-200 group-hover:scale-110" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a
                href={site.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Hillwoods Academy on Facebook"
                className="group flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white transition-all duration-300 hover:bg-[#1877F2] hover:shadow-lg hover:shadow-[#1877F2]/30"
                title="Facebook: Hillwoods Academy Deoria"
              >
                <svg className="h-5 w-5 fill-current transition-transform duration-200 group-hover:scale-110" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href={site.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Hillwoods Academy on WhatsApp"
                className="group flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white transition-all duration-300 hover:bg-[#25D366] hover:shadow-lg hover:shadow-[#25D366]/30"
                title="WhatsApp: Chat with Hillwoods Academy"
              >
                <svg className="h-5 w-5 fill-current transition-transform duration-200 group-hover:scale-110" viewBox="0 0 24 24">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.33C9.33 7.33 9.03 7.41 8.78 7.68C8.53 7.95 7.85 8.59 7.85 9.89C7.85 11.19 8.8 12.44 8.93 12.62C9.06 12.8 10.76 15.43 13.37 16.55C14 16.82 14.49 16.98 14.88 17.11C15.5 17.31 16.07 17.28 16.52 17.21C17.02 17.14 18.06 16.58 18.28 15.97C18.5 15.35 18.5 14.82 18.43 14.71C18.36 14.6 18.19 14.54 17.92 14.41C17.65 14.28 16.37 13.65 16.14 13.56C15.91 13.47 15.74 13.43 15.57 13.69C15.4 13.95 14.92 14.54 14.77 14.71C14.63 14.88 14.48 14.9 14.21 14.77C13.94 14.64 13.09 14.36 12.07 13.45C11.28 12.75 10.74 11.88 10.6 11.62C10.45 11.36 10.58 11.22 10.72 11.08C10.84 10.96 11 10.75 11.13 10.59C11.26 10.43 11.31 10.32 11.4 10.14C11.49 9.96 11.44 9.81 11.37 9.68C11.3 9.55 10.72 8.12 10.47 7.54C10.24 6.97 10 7.05 9.83 7.04C9.67 7.03 9.53 7.03 9.53 7.33Z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-gold-300">
              Explore
            </h3>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.label}>
                  {item.to.includes('#') ? (
                    <a
                      href={item.to}
                      className="link-underline text-sm text-parchment-50/70 transition-colors hover:text-parchment-50"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      to={item.to}
                      className="link-underline text-sm text-parchment-50/70 transition-colors hover:text-parchment-50"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-gold-300">
              Our 3 Branches
            </h3>
            <ul className="mt-5 space-y-4 text-xs text-parchment-50/70">
              <li className="space-y-1 border-b border-white/5 pb-2">
                <span className="font-semibold text-white">Branch 1 (Main): C.C. Road (Uma Nagar)</span>
                <div className="flex items-center gap-2 text-gold-400">
                  <Phone size={13} />
                  <span>+91 77030 17100 / 17200</span>
                </div>
              </li>
              <li className="space-y-1 border-b border-white/5 pb-2">
                <span className="font-semibold text-white">Branch 2: Saket Nagar</span>
                <div className="flex items-center gap-2 text-gold-400">
                  <Phone size={13} />
                  <span>+91 77030 17200 / 8601007103</span>
                </div>
              </li>
              <li className="space-y-1">
                <span className="font-semibold text-white">Branch 3: M. S. Academy, Musaila Khurd</span>
                <div className="flex items-center gap-2 text-gold-400">
                  <Phone size={13} />
                  <span>+91 94530 17200</span>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-gold-300">
              Admissions
            </h3>
            <p className="mt-5 text-sm leading-relaxed text-parchment-50/70">
              Inquiries for the new session open every November. Start your child's
              journey with Hillwoods today.
            </p>
            <Link
              to="/admissions"
              className="link-underline mt-4 inline-block text-sm font-semibold text-gold-300"
            >
              Begin an inquiry &rarr;
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center gap-4 border-t border-parchment-50/10 pt-8 text-xs text-parchment-50/50 sm:flex-row sm:justify-between">
          <span>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </span>
          <span className="flex items-center gap-3 text-gold-400">
            <Laurel />
            <span className="font-mono uppercase tracking-[0.2em]">
              Est. {site.founded} &middot; {site.city}
            </span>
            <Laurel flip />
          </span>
        </div>
      </div>
    </footer>
  )
}
