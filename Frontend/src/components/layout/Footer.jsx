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
            <Link to="/" className="flex items-center gap-3">
              <img src="/logo.png" alt={`${site.name} crest`} className="h-14 w-14" />
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
            <div className="mt-6 flex items-center gap-4">
              <a
                href={site.socials.facebook}
                aria-label="Facebook"
                className="text-parchment-50/60 transition-colors hover:text-gold-300"
              >
                <Globe size={18} />
              </a>
              <a
                href={site.socials.instagram}
                aria-label="Instagram"
                className="text-parchment-50/60 transition-colors hover:text-gold-300"
              >
                <Globe size={18} />
              </a>
              <a
                href={site.socials.youtube}
                aria-label="YouTube"
                className="text-parchment-50/60 transition-colors hover:text-gold-300"
              >
                <Globe size={18} />
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
