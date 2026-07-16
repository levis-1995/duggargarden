import { Button } from "@/components/ui/button"
import { MapPin, Phone, MessageCircle } from "lucide-react"
import { siteConfig, buildWhatsAppLink } from "@/lib/site"

export function LocationContact() {
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    siteConfig.mapQuery,
  )}&output=embed`

  return (
    <section id="location" className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Find Us</p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold text-foreground md:text-4xl">
            Come stay with us
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Tucked away in Panchari, Duggar Den is your quiet base in the Jammu hills. Reach out any time — we
            love helping plan the perfect stay.
          </p>

          <div className="mt-8 flex flex-col gap-5">
            <a
              href={siteConfig.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-3.5 group hover:opacity-90 transition-opacity"
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                <MapPin className="size-5" />
              </div>
              <div>
                <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">Address</h3>
                <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                  {siteConfig.address.line1}
                  <br />
                  {siteConfig.address.line2}
                </p>
              </div>
            </a>

            <div className="flex gap-3.5">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Phone className="size-5" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">Phone</h3>
                <a
                  href={`tel:${siteConfig.whatsappNumber}`}
                  className="mt-0.5 block text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {siteConfig.phoneDisplay} (Inquiries)
                </a>
                <a
                  href={`tel:${siteConfig.bookingNumber}`}
                  className="mt-1 block text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {siteConfig.bookingPhoneDisplay} (Bookings)
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="gap-2">
              <a
                href={buildWhatsAppLink(
                  "Hi Duggar Den! I'd like to know more about staying with you.",
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="size-5" />
                Chat on WhatsApp
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2">
              <a
                href={siteConfig.mapLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="size-5" />
                Get Directions
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2">
              <a href="#book">
                <Phone className="size-5" />
                Book a Room
              </a>
            </Button>
          </div>
        </div>

        <div className="min-h-[340px] overflow-hidden rounded-2xl border border-border bg-secondary shadow-sm">
          <iframe
            title="Duggar Den location map"
            src={mapSrc}
            className="size-full"
            style={{ border: 0, minHeight: 340 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}
