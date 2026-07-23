import { cn } from '../../lib/utils'

type LaurelProps = {
  flip?: boolean
  className?: string
}

// A stylised laurel branch, echoing the wreath on the school crest.
// Used in mirrored pairs as a section-eyebrow divider throughout the site.
export function Laurel({ flip = false, className }: LaurelProps) {
  return (
    <svg
      viewBox="0 0 60 24"
      className={cn('h-4 w-10', flip && 'scale-x-[-1]', className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M2 20C14 20 20 14 22 2"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      {[
        [6, 18, -20],
        [11, 15.5, -8],
        [15.5, 12.5, 4],
        [19, 9, 16],
        [21.5, 5.5, 30],
      ].map(([cx, cy, rot], i) => (
        <ellipse
          key={i}
          cx={cx}
          cy={cy}
          rx="4.2"
          ry="2.1"
          transform={`rotate(${rot} ${cx} ${cy})`}
          fill="currentColor"
          opacity={0.85 - i * 0.06}
        />
      ))}
    </svg>
  )
}
