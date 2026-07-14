"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"
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
  { label: "Home", href: "#top" },
  { label: "Stays", href: "#rooms" },
  { label: "Cafe & Amenities", href: "#amenities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Find Us", href: "#location" },
  { label: "Contact Us", href: "#contact" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <a href="#top" className="flex items-center gap-3">
          <Image
            src="/images/duggar-den-logo.jpg"
            alt="Duggar Den Home Stay logo"
            width={48}
            height={48}
            className="size-11 rounded-full object-cover ring-1 ring-border"
          />
          <span className="flex flex-col leading-none">
            <span className="font-serif text-lg font-semibold text-primary">{siteConfig.name}</span>
            <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              {siteConfig.tagline}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="outline" size="icon" className="hidden sm:inline-flex">
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Duggar Den on Instagram"
            >
              <Instagram className="size-5" />
            </a>
          </Button>
          <Button asChild className="hidden sm:inline-flex">
            <a href="#book">Book Now</a>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`tel:${siteConfig.whatsappNumber}`}
              className="flex items-center gap-2 rounded-md px-3 py-2.5 text-sm font-medium text-foreground/80"
            >
              <Phone className="size-4" /> {siteConfig.phoneDisplay}
            </a>
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-md px-3 py-2.5 text-sm font-medium text-foreground/80"
            >
              <Instagram className="size-4" /> {siteConfig.instagramHandle}
            </a>
            <Button asChild className="mt-2">
              <a href="#book" onClick={() => setOpen(false)}>
                Book Now
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
