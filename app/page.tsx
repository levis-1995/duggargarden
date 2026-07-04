import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Rooms } from "@/components/rooms"
import { Amenities } from "@/components/amenities"
import { Gallery } from "@/components/gallery"
import { Reviews } from "@/components/reviews"
import { LocationContact } from "@/components/location-contact"
import { ContactUs } from "@/components/contact-us"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="min-h-screen">
      <SiteHeader />
      <Hero />
      <Rooms />
      <Amenities />
      <Gallery />
      <Reviews />
      <LocationContact />
      <ContactUs />
      <SiteFooter />
    </main>
  )
}
