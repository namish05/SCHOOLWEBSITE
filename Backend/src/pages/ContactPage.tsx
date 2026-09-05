/import { Clock, MapPin, Phone } from 'lucide-react'
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
