"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check, ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react"

const staysImages = [
  {
    src: "/images/stays-1.jpg",
    alt: "Cozy wood-panelled bedroom interior",
    title: "Handcrafted Cabin Bedroom",
    desc: "Every corner is finished in locally sourced pine wood, featuring cozy linen bedding and soft ambient lighting.",
  },
  {
    src: "/images/stays-2.jpg",
    alt: "Sunlit bed next to a wide window",
    title: "Sun-drenched Reading Nook",
    desc: "Wake up to warm golden light pouring in from the large windows looking straight out to the pine forest.",
  },
  {
    src: "/images/stays-3.jpg",
    alt: "Homestay bedroom and window views",
    title: "Scenic Window Views",
    desc: "A wide panoramic window offering an uninterrupted look at the changing mist and colors of the Panchari hills.",
  },
  {
    src: "/images/stays-4.jpg",
    alt: "Spacious room with traditional rugs",
    title: "Traditional Dogra Touches",
    desc: "Dressed with warm hand-loomed textiles, combining modern orthopedic mattresses with authentic rustic character.",
  },
  {
    src: "/images/stays-5.jpg",
    alt: "Bed showing clean linen and wood frame",
    title: "Natural Wooden Bedframes",
    desc: "Designed for premium rest with clean linens, cozy quilts, and a peaceful environment.",
  },
  {
    src: "/images/stays-6.jpg",
    alt: "Cozy bedroom with wooden textures",
    title: "Rustic Forest Log Cabin Feel",
    desc: "Live the dream log cabin experience with high ceilings, warm wooden textures, and mountain serenity.",
  },
  {
    src: "/images/stays-7.jpg",
    alt: "Charming seating corner inside the room",
    title: "Quiet Writing Corner",
    desc: "A designated corner to journal, read a book, or set up your laptop for a workation with a view.",
  },
  {
    src: "/images/stays-8.jpg",
    alt: "Comfortable bedroom layout",
    title: "Spacious Bedroom Layout",
    desc: "Generous room layout giving you plenty of space to unpack, unwind, and make yourself at home.",
  },
  {
    src: "/images/stays-9.jpg",
    alt: "Cozy bedroom overview",
    title: "Your Private Sanctuary",
    desc: "A peaceful retreat away from city noise, designed specifically for slow, quiet mountain mornings.",
  },
]

const amenities = [
  "Cozy local pine-wood wall finishing",
  "Premium orthopedic mattresses & warm linens",
  "Attached modern bathroom with hot water",
  "Large bay windows with direct mountain views",
  "Dedicated desk/workspace for workations",
  "Access to our local cafe and library lounge",
]

export function Rooms() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? staysImages.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev === staysImages.length - 1 ? 0 : prev + 1))
  }

  useEffect(() => {
    if (!lightboxOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false)
      if (e.key === "ArrowLeft") handlePrev()
      if (e.key === "ArrowRight") handleNext()
    }

    window.addEventListener("keydown", handleKeyDown)
    document.body.style.overflow = "hidden"

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "unset"
    }
  }, [lightboxOpen])

  return (
    <section id="rooms" className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        {/* Left Column: Description & Info */}
        <div className="flex flex-col justify-center lg:col-span-5">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Our Stays</p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold text-foreground md:text-4xl">
            A cozy mountain home, not a hotel
          </h2>
          <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
            Duggar Den is a boutique homestay designed as a cohesive mountain retreat. Hand-built with local wood and dressed in warm, natural textiles, our spaces offer a peaceful sanctuary to slow down, breathe the clean pine-scented air, and enjoy authentic Dogra hospitality.
          </p>

          {/* Highlights List */}
          <div className="mt-8 space-y-3.5">
            {amenities.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary mt-0.5">
                  <Check className="size-3" />
                </span>
                <span className="text-sm text-foreground/90">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild className="w-full sm:w-auto">
              <a href="#book">Book Your Stay</a>
            </Button>
            <Button variant="outline" onClick={() => setLightboxOpen(true)} className="w-full sm:w-auto gap-2">
              <Maximize2 className="size-4" />
              View Full Gallery
            </Button>
          </div>
        </div>

        {/* Right Column: Interactive Gallery */}
        <div className="lg:col-span-7">
          <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border bg-muted shadow-sm">
            <Image
              src={staysImages[activeIndex].src}
              alt={staysImages[activeIndex].alt}
              fill
              priority
              className="object-cover transition-all duration-500 group-hover:scale-105"
            />
            {/* Dark overlay gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-80" />
            
            {/* Quick gallery navigation overlay */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 flex size-10 items-center justify-center rounded-full bg-background/85 text-foreground shadow-sm backdrop-blur-sm transition-all hover:bg-background hover:scale-105 cursor-pointer z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 flex size-10 items-center justify-center rounded-full bg-background/85 text-foreground shadow-sm backdrop-blur-sm transition-all hover:bg-background hover:scale-105 cursor-pointer z-10"
              aria-label="Next image"
            >
              <ChevronRight className="size-5" />
            </button>

            {/* Click to expand overlay */}
            <button
              onClick={() => setLightboxOpen(true)}
              className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 focus:opacity-100 cursor-pointer"
              aria-label="Expand image"
            >
              <div className="flex items-center gap-2 rounded-full bg-background/95 px-5 py-2 text-sm font-medium text-foreground shadow-md backdrop-blur-sm transition-transform duration-300 group-hover:scale-105">
                <Maximize2 className="size-4 text-primary" />
                Expand View
              </div>
            </button>

            {/* Text description overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white pointer-events-none">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/90">
                Homestay spaces ({activeIndex + 1} of 9)
              </p>
              <h3 className="mt-1 font-serif text-lg font-semibold md:text-xl">
                {staysImages[activeIndex].title}
              </h3>
              <p className="mt-1.5 text-xs text-white/85 line-clamp-2 md:text-sm">
                {staysImages[activeIndex].desc}
              </p>
            </div>
          </div>

          {/* Thumbnails grid */}
          <div className="mt-4 grid grid-cols-5 gap-2 sm:grid-cols-9">
            {staysImages.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`relative aspect-square w-full overflow-hidden rounded-lg border-2 transition-all hover:opacity-100 focus:outline-none cursor-pointer ${
                  activeIndex === idx
                    ? "border-primary opacity-100 ring-2 ring-primary/20 scale-95"
                    : "border-transparent opacity-60 hover:scale-95"
                }`}
                aria-label={`View image ${idx + 1}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 p-4 md:p-10 animate-fade-in">
          {/* Close button */}
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute right-6 top-6 z-50 flex size-12 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/20 hover:scale-105 focus:outline-none cursor-pointer"
            aria-label="Close gallery"
          >
            <X className="size-6" />
          </button>

          {/* Prev button */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 z-50 -translate-y-1/2 flex size-12 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/20 hover:scale-105 focus:outline-none cursor-pointer md:left-8"
            aria-label="Previous image"
          >
            <ChevronLeft className="size-6" />
          </button>

          {/* Next button */}
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 z-50 -translate-y-1/2 flex size-12 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/20 hover:scale-105 focus:outline-none cursor-pointer md:right-8"
            aria-label="Next image"
          >
            <ChevronRight className="size-6" />
          </button>

          {/* Image & Caption container */}
          <div className="relative flex h-full max-h-[85vh] w-full max-w-5xl flex-col items-center justify-center">
            <div className="relative h-full w-full flex-1">
              <Image
                src={staysImages[activeIndex].src}
                alt={staysImages[activeIndex].alt}
                fill
                priority
                className="object-contain"
              />
            </div>
            
            {/* Caption */}
            <div className="mt-6 text-center text-white max-w-2xl px-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                Homestay gallery ({activeIndex + 1} of 9)
              </p>
              <h3 className="mt-2 font-serif text-xl font-semibold md:text-2xl">
                {staysImages[activeIndex].title}
              </h3>
              <p className="mt-2 text-sm text-white/70">
                {staysImages[activeIndex].desc}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
