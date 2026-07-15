import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Rooms } from "@/components/rooms"
import { Amenities } from "@/components/amenities"
import { Gallery } from "@/components/gallery"
import { Reviews } from "@/components/reviews"
import { LocationContact } from "@/components/location-contact"
import { ContactUs } from "@/components/contact-us"
import { SiteFooter } from "@/components/site-footer"
import { db } from "@/lib/db"
export const dynamic = 'force-dynamic';
export default async function Page() {
  const dbReviews = await db.review.findMany({
    orderBy: {
      createdAt: "desc",
    },
  })

  // Serialize to plain JSON objects for Client component prop passing
  const serializedReviews = dbReviews.map((r) => ({
    id: r.id,
    rating: r.rating,
    fullName: r.fullName,
    location: r.location,
    reviewText: r.reviewText,
    photoUrl: r.photoUrl,
    createdAt: r.createdAt.toISOString(),
  }))

  return (
    <main className="min-h-screen">
      <SiteHeader />
      <Hero />
      <Rooms />
      <Amenities />
      <Gallery />
      <Reviews initialDbReviews={serializedReviews} />
      <LocationContact />
      <ContactUs />
      <SiteFooter />
    </main>
  )
}
