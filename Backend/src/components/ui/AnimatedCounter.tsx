import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

type AnimatedCounterProps = {
  value: number
  suffix?: string
  duration?: number
  className?: string
}

function easeOutExpo(t: number) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
}

export function AnimatedCounter({
  value,
  suffix = '',
  duration = 1.8,
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!isInView) return

    let frame: number
    const start = performance.now()

    const tick = (now: number) => {
      const elapsed = (now - start) / 1000
      const progress = Math.min(elapsed / duration, 1)
      setDisplay(Math.round(value * easeOutExpo(progress)))
      if (progress < 1) {
        frame = requestAnimationFrame(tick)
      }
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [isInView, value, duration])

  return (
    <span ref={ref} className={className}>
      {display.toLocaleString('en-IN')}
      {suffix}
    </span>
  )
}
