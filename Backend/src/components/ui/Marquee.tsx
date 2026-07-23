import { cn } from '../../lib/utils'

type MarqueeProps = {
  items: string[]
  className?: string
  speed?: 'normal' | 'slow'
}

export function Marquee({ items, className, speed = 'normal' }: MarqueeProps) {
  const doubled = [...items, ...items]

  return (
    <div className={cn('overflow-hidden', className)}>
      <div
        className={cn(
          'flex w-max items-center',
          speed === 'slow' ? 'animate-marquee-slow' : 'animate-marquee',
        )}
      >
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center whitespace-nowrap px-6">
            <span>{item}</span>
            <span className="ml-6 text-gold-400" aria-hidden="true">
              &#9670;
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
