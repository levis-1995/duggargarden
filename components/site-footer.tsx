import Image from "next/image"
import * as React from "react"
import { MapPin, Phone } from "lucide-react"
import { siteConfig } from "@/lib/site"

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

const navLinks = [
  { label: "Stays", href: "#rooms" },
  { label: "Cafe & Amenities", href: "#amenities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Find Us", href: "#location" },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/60">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/images/duggar-den-logo.jpg"
                alt="Duggar Den Home Stay logo"
                width={52}
                height={52}
                className="size-12 rounded-full object-cover ring-1 ring-border"
              />
              <span className="flex flex-col leading-none">
                <span className="font-serif text-lg font-semibold text-primary">{siteConfig.name}</span>
                <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  {siteConfig.tagline}
                </span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              A cozy home stay and cafe in the pine-clad hills of Panchari, Jammu and Kashmir.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Explore</h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Get in touch</h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>{siteConfig.address.full}</span>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.whatsappNumber}`}
                  className="flex items-center gap-2.5 transition-colors hover:text-primary"
                >
                  <Phone className="size-4 shrink-0 text-primary" />
                  {siteConfig.phoneDisplay} (Inquiries)
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.bookingNumber}`}
                  className="flex items-center gap-2.5 transition-colors hover:text-primary"
                >
                  <Phone className="size-4 shrink-0 text-primary" />
                  {siteConfig.bookingPhoneDisplay} (Bookings)
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 transition-colors hover:text-primary"
                >
                  <Instagram className="size-4 shrink-0 text-primary" />
                  {siteConfig.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.name}. {siteConfig.tagline}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
