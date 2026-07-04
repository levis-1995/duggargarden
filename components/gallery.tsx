import Image from "next/image"

const images = [
  { src: "/images/gallery-1.jpg", alt: "Scenic view of Duggar Den under a clear sky", span: "sm:col-span-2 sm:row-span-2" },
  { src: "/images/gallery-2.jpg", alt: "Relaxing outdoor seating area", span: "" },
  { src: "/images/gallery-3.jpg", alt: "Cozy indoor lounge area", span: "" },
  { src: "/images/gallery-4.jpg", alt: "Lush garden and pathway", span: "sm:col-span-2" },
  { src: "/images/gallery-5.jpg", alt: "Freshly brewed coffee at the cafe", span: "" },
  { src: "/images/gallery-6.png", alt: "Delicious local cuisines served", span: "" },
  { src: "/images/gallery-7.jpeg", alt: "Stunning valley sunset view", span: "sm:col-span-2" },
  { src: "/images/gallery-8.jpeg", alt: "Charming cabin exterior", span: "sm:col-span-2" },
  { src: "/images/galley-9.jpeg", alt: "Warm firepit evening experience", span: "sm:col-span-2" },
]


export function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Gallery</p>
        <h2 className="mt-3 text-balance font-serif text-3xl font-semibold text-foreground md:text-4xl">
          A little look around the Den
        </h2>
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          From sunrise on the deck to firelit nights — here&apos;s a glimpse of life at Duggar Den.
        </p>
      </div>

      <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-4 sm:grid-cols-4 sm:auto-rows-[200px]">
        {images.map((img) => (
          <div
            key={img.src + img.alt}
            className={`group relative min-h-0 overflow-hidden rounded-xl ${img.span}`}
          >
            <Image
              src={img.src || "/placeholder.svg"}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
