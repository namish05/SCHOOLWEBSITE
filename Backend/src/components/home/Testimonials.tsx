import { Quote } from 'lucide-react'
import { homeTestimonials } from '../../data/content'
import { Reveal, StaggerGroup, StaggerItem } from '../ui/Reveal'
import { SectionEyebrow } from '../ui/SectionEyebrow'

export function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <SectionEyebrow align="center">Voices From Hillwoods</SectionEyebrow>
      <Reveal delay={0.05}>
        <h2 className="mx-auto mt-4 max-w-2xl text-center font-display text-4xl font-semibold text-navy-900 sm:text-5xl">
          What our families say
        </h2>
      </Reveal>

      <StaggerGroup className="mt-14 grid gap-6 lg:grid-cols-3">
        {homeTestimonials.map((testimonial) => (
          <StaggerItem key={testimonial.name}>
            <div className="flex h-full flex-col rounded-2xl border border-navy-900/8 bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-navy-900/5">
              <Quote className="text-gold-500" size={26} strokeWidth={1.5} />
              <p className="mt-5 flex-1 text-[15px] leading-relaxed text-ink-700">
                "{testimonial.quote}"
              </p>
              <div className="mt-6 border-t border-navy-900/8 pt-4">
                <p className="font-display text-base font-semibold text-navy-900">
                  {testimonial.name}
                </p>
                <p className="font-mono text-xs uppercase tracking-[0.1em] text-ink-500">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  )
}
