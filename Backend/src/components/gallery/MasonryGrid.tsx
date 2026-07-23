import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { galleryCategories, galleryImages } from '../../data/content'
import { cn } from '../../lib/utils'

type Category = (typeof galleryCategories)[number]

const heightClass: Record<string, string> = {
  short: 'aspect-[4/3]',
  medium: 'aspect-[3/4]',
  tall: 'aspect-[2/3]',
}

export function MasonryGrid() {
  const [active, setActive] = useState<Category>('All')

  const filtered =
    active === 'All' ? galleryImages : galleryImages.filter((img) => img.category === active)

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        {galleryCategories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={cn(
              'rounded-full border px-5 py-2 font-mono text-xs uppercase tracking-[0.12em] transition-colors duration-200',
              active === category
                ? 'border-crimson-500 bg-crimson-500 text-parchment-50'
                : 'border-navy-900/15 text-navy-800 hover:border-crimson-400 hover:text-crimson-500',
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div layout className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
        <AnimatePresence>
          {filtered.map((image) => (
            <motion.figure
              key={image.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="group relative mb-4 break-inside-avoid overflow-hidden rounded-xl bg-navy-900"
            >
              <img
                src={`https://picsum.photos/seed/${image.seed}/800/${
                  image.h === 'tall' ? 1100 : image.h === 'short' ? 600 : 900
                }`}
                loading="lazy"
                alt={image.caption}
                className={cn(
                  'w-full object-cover transition-transform duration-500 group-hover:scale-105',
                  heightClass[image.h],
                )}
              />
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-navy-950/90 to-transparent px-4 py-4 text-sm text-parchment-50 transition-transform duration-300 group-hover:translate-y-0">
                {image.caption}
              </figcaption>
            </motion.figure>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
