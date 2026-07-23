import { marqueeItems } from '../../data/content'
import { Marquee } from '../ui/Marquee'

export function HighlightsRibbon() {
  return (
    <div className="border-y border-navy-900/10 bg-navy-900 py-4 text-parchment-50/85">
      <Marquee items={marqueeItems} className="font-mono text-xs uppercase tracking-[0.2em]" />
    </div>
  )
}
