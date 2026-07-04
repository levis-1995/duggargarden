import Image from "next/image"
import { MapPin, Star } from "lucide-react"
import { BookingForm } from "@/components/booking-form"
import { siteConfig } from "@/lib/site"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-cabin.png"
          alt="Duggar Den cabin among pine trees at sunset"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/45 to-background" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-20 md:px-6 lg:grid-cols-[1.1fr_minmax(0,460px)] lg:pb-24 lg:pt-28">
        <div className="max-w-xl text-primary-foreground">
          <span className="inline-flex items-center gap-2 rounded-full bg-background/15 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] backdrop-blur-sm ring-1 ring-background/25">
            <MapPin className="size-3.5" />
            Panchari, Jammu & Kashmir
          </span>

          <h1 className="mt-5 text-pretty font-serif text-4xl font-semibold leading-[1.05] md:text-6xl">
            A cozy mountain home among the pines
          </h1>

          <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-primary-foreground/90 md:text-lg">
            Welcome to {siteConfig.name} — where you {siteConfig.tagline.toLowerCase()}. Wake to misty Himalayan
            views, warm hospitality, and fresh brews from our little cafe.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-primary-foreground/90">
            <span className="inline-flex items-center gap-1.5">
              <Star className="size-4 fill-accent text-accent" />
              4.9 guest rating
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-accent" />
              In-house cafe
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-accent" />
              Mountain trails at the doorstep
            </span>
          </div>
        </div>

        <div id="book" className="rounded-2xl border border-border bg-card p-6 shadow-2xl shadow-primary/20 md:p-7">
          <div className="mb-5">
            <h2 className="font-serif text-2xl font-semibold text-card-foreground">Book your stay</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Send us your dates and we&apos;ll reply on WhatsApp within minutes.
            </p>
          </div>
          <BookingForm />
        </div>
      </div>
    </section>
  )
}
