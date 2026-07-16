import { Button } from "@/components/ui/button"
// 1. Added 'Instagram' and removed 'Calendar' and 'AtSign' since they are no longer used
import { Phone, MessageCircle, MapPin } from "lucide-react"
import { siteConfig, buildWhatsAppLink } from "@/lib/site"

function Instagram(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


export function ContactUs() {
  return (
    <section id="contact" className="border-t border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Contact Us</p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold text-foreground md:text-4xl">
            We&apos;re just a call away
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Have a question about your stay, the cafe, or directions? Give us a ring or message us — we&apos;re
            always happy to help.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <a
            href={`tel:${siteConfig.bookingNumber}`}
            className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 text-center transition-colors hover:border-primary/50 hover:bg-card/80"
          >
            {/* 2. Changed Calendar to Phone icon */}
            <span className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Phone className="size-6" />
            </span>
            <span className="text-sm font-medium text-foreground">Booking Contact</span>
            <span className="text-sm text-muted-foreground">{siteConfig.bookingPhoneDisplay}</span>
          </a>

          <a
            href={buildWhatsAppLink("Hi Duggar Den! I have a question about staying with you.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 text-center transition-colors hover:border-primary/50 hover:bg-card/80"
          >
            <span className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <MessageCircle className="size-6" />
            </span>
            <span className="text-sm font-medium text-foreground">WhatsApp</span>
            <span className="text-sm text-muted-foreground">{siteConfig.phoneDisplay}</span>
          </a>

          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 text-center transition-colors hover:border-primary/50 hover:bg-card/80"
          >
            {/* 3. Changed AtSign to Instagram icon */}
            <span className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Instagram className="size-6" />
            </span>
            <span className="text-sm font-medium text-foreground">Instagram</span>
            <span className="text-sm text-muted-foreground">{siteConfig.instagramHandle}</span>
          </a>

          <a
            href={siteConfig.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 text-center transition-colors hover:border-primary/50 hover:bg-card/80"
          >
            <span className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <MapPin className="size-6" />
            </span>
            <span className="text-sm font-medium text-foreground">Visit Us</span>
            <span className="text-sm text-muted-foreground">{siteConfig.address.line1}</span>
          </a>
        </div>

        <div className="mt-10 flex justify-center">
          <Button asChild size="lg" className="gap-2">
            <a href={`tel:${siteConfig.whatsappNumber}`}>
              <Phone className="size-5" />
              Call {siteConfig.phoneDisplay}
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
