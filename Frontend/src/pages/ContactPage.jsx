import { Clock, MapPin, Phone } from 'lucide-react'
import { useDocumentTitle } from '../lib/useDocumentTitle'
import { contactDepartments, officeHours, site } from '../data/content'
import { PageHeader } from '../components/ui/PageHeader'
import { Reveal } from '../components/ui/Reveal'
import { ContactForm } from '../components/contact/ContactForm'

export function ContactPage() {
  useDocumentTitle(`Contact | ${site.name}`)

  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    site.mapEmbedQuery,
  )}&output=embed`

  return (
    <>
      <PageHeader
        eyebrow="Get In Touch"
        title="Contact Us"
        description={`We're based in ${site.city}, ${site.state} — reach out any time, or drop by during office hours.`}
      />

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Reveal>
              <div className="rounded-2xl border border-navy-900/8 bg-white p-7">
                <div className="flex items-center gap-3 text-crimson-500">
                  <MapPin size={20} />
                  <h3 className="font-display text-lg font-semibold text-navy-900">
                    Visit Campus
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink-700">
                  {site.fullAddress}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="mt-6 rounded-2xl border border-navy-900/8 bg-white p-7">
                <div className="flex items-center gap-3 text-crimson-500">
                  <Phone size={20} />
                  <h3 className="font-display text-lg font-semibold text-navy-900">
                    Call or Email
                  </h3>
                </div>
                <ul className="mt-4 space-y-3">
                  {contactDepartments.map((item) => (
                    <li key={item.label} className="flex items-center justify-between text-sm">
                      <span className="text-ink-500">{item.label}</span>
                      <span className="font-medium text-navy-900">{item.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-6 rounded-2xl border border-navy-900/8 bg-white p-7">
                <div className="flex items-center gap-3 text-crimson-500">
                  <Clock size={20} />
                  <h3 className="font-display text-lg font-semibold text-navy-900">
                    Office Hours
                  </h3>
                </div>
                <ul className="mt-4 space-y-3">
                  {officeHours.map((item) => (
                    <li key={item.day} className="flex items-center justify-between text-sm">
                      <span className="text-ink-500">{item.day}</span>
                      <span className="font-medium text-navy-900">{item.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-3">
            <Reveal>
              <ContactForm />
            </Reveal>
          </div>
        </div>

        {/* 3 School Branches Directory */}
        <div className="mt-16 border-t border-navy-900/8 pt-16">
          <h3 className="text-center font-display text-2xl font-semibold text-navy-900 sm:text-3xl">
            Our 3 School Branches
          </h3>
          <p className="mx-auto mt-2 max-w-xl text-center text-sm text-ink-600">
            Reach out directly to the campus branch nearest to your family.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-gold-400/50 bg-white p-6 shadow-sm">
              <span className="rounded-full bg-gold-500/10 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-gold-700">
                Branch 1 (Main Campus)
              </span>
              <h4 className="mt-3 font-display text-lg font-semibold text-navy-950">
                Hillwoods Academy
              </h4>
              <p className="mt-1 text-xs text-crimson-600 font-medium">C.C. Road, Uma Nagar, Deoria</p>
              <p className="mt-2 text-xs text-ink-600">Classes: Nursery to Class VIII</p>
              <div className="mt-4 border-t border-navy-900/6 pt-3 text-xs">
                <span className="font-medium text-navy-900">Phone: </span>
                <div className="mt-1 flex flex-col gap-1 text-gold-700">
                  <a href="tel:+917703017100" className="hover:underline">+91 77030 17100</a>
                  <a href="tel:+917703017200" className="hover:underline">+91 77030 17200</a>
                  <a href="tel:+917703017300" className="hover:underline">+91 77030 17300</a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-navy-900/8 bg-white p-6 shadow-sm">
              <span className="rounded-full bg-crimson-50 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-crimson-600">
                Branch 2 (Newly Opened)
              </span>
              <h4 className="mt-3 font-display text-lg font-semibold text-navy-950">
                Hillwoods Academy
              </h4>
              <p className="mt-1 text-xs text-crimson-600 font-medium">Saket Nagar, Deoria</p>
              <p className="mt-2 text-xs text-ink-600">Classes: Pre-Primary &amp; Primary</p>
              <div className="mt-4 border-t border-navy-900/6 pt-3 text-xs">
                <span className="font-medium text-navy-900">Phone: </span>
                <div className="mt-1 flex flex-col gap-1 text-gold-700">
                  <a href="tel:+917703017200" className="hover:underline">+91 77030 17200</a>
                  <a href="tel:8601007103" className="hover:underline">+91 86010 07103</a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-navy-900/8 bg-white p-6 shadow-sm">
              <span className="rounded-full bg-navy-900/10 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-navy-800">
                Branch 3 (CBSE Sister Campus)
              </span>
              <h4 className="mt-3 font-display text-lg font-semibold text-navy-950">
                M. S. Academy
              </h4>
              <p className="mt-1 text-xs text-crimson-600 font-medium">Musaila Khurd, Deoria</p>
              <p className="mt-2 text-xs text-ink-600">CBSE-based English-Medium</p>
              <div className="mt-4 border-t border-navy-900/6 pt-3 text-xs">
                <span className="font-medium text-navy-900">Contact: </span>
                <div className="mt-1 flex flex-col gap-1 text-gold-700">
                  <a href="tel:+919453017200" className="hover:underline">+91 94530 17200</a>
                  <a href="mailto:msacademy200@gmail.com" className="hover:underline text-navy-700">msacademy200@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Reveal delay={0.1} className="mt-14">
          <div className="overflow-hidden rounded-2xl border border-navy-900/8">
            <iframe
              title={`${site.name} location map`}
              src={mapSrc}
              className="h-[380px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </section>
    </>
  )
}
