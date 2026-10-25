import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react'
import { galleryCategories, galleryImages } from '../../data/content'
import { cn } from '../../lib/utils'

export function MasonryGrid() {
  const [active, setActive] = useState('All')
  const [selectedImage, setSelectedImage] = useState(null)

  const filtered =
    active === 'All' ? galleryImages : galleryImages.filter((img) => img.category === active)

  const openLightbox = (img) => setSelectedImage(img)
  const closeLightbox = () => setSelectedImage(null)

  const handleNext = () => {
    if (!selectedImage) return
    const currentIndex = filtered.findIndex((i) => i.id === selectedImage.id)
    const nextIndex = (currentIndex + 1) % filtered.length
    setSelectedImage(filtered[nextIndex])
  }

  const handlePrev = () => {
    if (!selectedImage) return
    const currentIndex = filtered.findIndex((i) => i.id === selectedImage.id)
    const prevIndex = (currentIndex - 1 + filtered.length) % filtered.length
    setSelectedImage(filtered[prevIndex])
  }

  return (
    <div>
      {/* Category Filter Pills */}
      <div className="flex flex-wrap justify-center gap-2">
        {galleryCategories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={cn(
              'rounded-full border px-5 py-2 font-mono text-xs uppercase tracking-[0.12em] transition-all duration-200 cursor-pointer',
              active === category
                ? 'border-crimson-500 bg-crimson-500 text-parchment-50 shadow-md shadow-crimson-500/20'
                : 'border-navy-900/15 bg-white text-navy-800 hover:border-crimson-400 hover:text-crimson-500',
            )}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid of school photos */}
      <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((image) => (
            <motion.figure
              key={image.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => openLightbox(image)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-navy-900/10 bg-navy-950 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy-900/10"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-navy-900 sm:aspect-[4/3]">
                <img
                  src={image.src || `https://picsum.photos/seed/${image.seed}/800/600`}
                  loading="lazy"
                  alt={image.title || image.caption}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-95" />

                {/* Category badge */}
                <span className="absolute top-3 left-3 rounded-full border border-white/20 bg-navy-950/70 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-gold-300 backdrop-blur-sm">
                  {image.category}
                </span>

                {/* Enlarge icon button */}
                <div className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-navy-900/60 text-white/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <Maximize2 size={14} />
                </div>
              </div>

              {/* Caption text */}
              <figcaption className="p-4 sm:p-5">
                <h3 className="font-display text-base font-semibold text-white">
                  {image.title || image.caption}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-parchment-50/75">
                  {image.caption}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/90 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[92vh] max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-navy-950 shadow-2xl"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={closeLightbox}
                className="absolute top-3 right-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-navy-900/80 text-white hover:bg-crimson-600 transition-colors"
                aria-label="Close"
              >
                <X size={20} />
              </button>

              {/* Prev / Next controls */}
              {filtered.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-navy-900/80 text-white hover:bg-gold-500 hover:text-navy-950 transition-colors"
                    aria-label="Previous"
                  >
                    <ChevronLeft size={22} />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-navy-900/80 text-white hover:bg-gold-500 hover:text-navy-950 transition-colors"
                    aria-label="Next"
                  >
                    <ChevronRight size={22} />
                  </button>
                </>
              )}

              {/* Main Image */}
              <div className="flex max-h-[70vh] items-center justify-center bg-black/40">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title || selectedImage.caption}
                  className="max-h-[70vh] w-auto max-w-full object-contain"
                />
              </div>

              {/* Caption and meta */}
              <div className="bg-navy-900/90 p-5 border-t border-white/10">
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full border border-gold-400/30 bg-gold-400/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-gold-300">
                    {selectedImage.category}
                  </span>
                  <span className="font-mono text-xs text-white/50">
                    {filtered.findIndex((i) => i.id === selectedImage.id) + 1} / {filtered.length}
                  </span>
                </div>
                <h3 className="mt-2 font-display text-lg font-semibold text-white">
                  {selectedImage.title}
                </h3>
                <p className="mt-1 text-sm text-parchment-50/80">{selectedImage.caption}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

