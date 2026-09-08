import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const easeOut = [0.22, 1, 0.36, 1]

export const defaultVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
}

export const staggerItem = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: easeOut } },
}

/**
 * GSAP ScrollTrigger-powered reveal component with smooth easing and 3D depth.
 */
export function Reveal({ children, delay = 0, className = '', y = 28, duration = 0.8 }) {
  const elRef = useRef(null)

  useEffect(() => {
    const el = elRef.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: y,
          rotationX: 4,
          transformPerspective: 1000,
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: duration,
          delay: delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none reverse',
          },
        },
      )
    }, elRef)

    return () => ctx.revert()
  }, [delay, y, duration])

  return (
    <div ref={elRef} className={className}>
      {children}
    </div>
  )
}

/**
 * GSAP ScrollTrigger-powered staggered group component.
 */
export function StaggerGroup({ children, className = '', stagger = 0.12, y = 32 }) {
  const groupRef = useRef(null)

  useEffect(() => {
    const group = groupRef.current
    if (!group) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = gsap.context(() => {
      const items = group.querySelectorAll('.gsap-stagger-child')
      if (items.length > 0) {
        gsap.fromTo(
          items,
          {
            opacity: 0,
            y: y,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.75,
            stagger: stagger,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: group,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          },
        )
      }
    }, groupRef)

    return () => ctx.revert()
  }, [stagger, y])

  return (
    <div ref={groupRef} className={className}>
      {children}
    </div>
  )
}

/**
 * Stagger child item wrapper for StaggerGroup.
 */
export function StaggerItem({ children, className = '' }) {
  return (
    <div className={`gsap-stagger-child h-full ${className}`}>
      {children}
    </div>
  )
}

