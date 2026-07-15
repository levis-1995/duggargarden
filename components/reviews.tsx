"use client"

import { useState, useEffect, useRef } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export interface DbReview {
  id: string
  rating: number
  fullName: string
  location: string
  reviewText: string
  photoUrl: string | null
  createdAt: string | Date
}

interface ReviewsProps {
  initialDbReviews?: DbReview[]
}

const staticReviews = [
  {
    name: "Aarav & Meera",
    from: "Delhi",
    text: "The most peaceful getaway we've had. Waking up to the pine forest and that first cup of kahwa from the cafe — pure magic. The hosts treated us like family.",
    rating: 5,
  },
  {
    name: "Sana Qureshi",
    from: "Srinagar",
    text: "Cozy rooms, warm food, and the bonfire night was unforgettable. Duggar Den genuinely feels like a home in the mountains. We'll be back!",
    rating: 5,
  },
  {
    name: "Rohit Sharma",
    from: "Chandigarh",
    text: "Spotless rooms with the best valley views. Booking over WhatsApp was so quick and easy. Perfect spot to disconnect and recharge.",
    rating: 5,
  },
]

export function Reviews({ initialDbReviews = [] }: ReviewsProps) {
  const [submittedReviews, setSubmittedReviews] = useState<any[]>([])
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    try {
      const stored = localStorage.getItem("duggar_den_reviews")
      if (stored) {
        // Filter out the test reviews from local storage
        const reviews = JSON.parse(stored)
        if (Array.isArray(reviews)) {
          const filtered = reviews.filter((r: any) => {
            const nameLower = (r.name || "").toLowerCase()
            return !nameLower.includes("test") && nameLower !== "duggar den fan"
          })
          if (filtered.length !== reviews.length) {
            localStorage.setItem("duggar_den_reviews", JSON.stringify(filtered))
          }
          setSubmittedReviews(filtered)
        } else {
          setSubmittedReviews([])
        }
      }
    } catch (err) {
      console.error("Failed to load reviews from localStorage:", err)
    }
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 370 // Card width (350px) + gap (20px)
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  // Format database reviews to match display structure
  const dbReviewsFormatted = initialDbReviews.map((r) => ({
    name: r.fullName,
    from: r.location,
    text: r.reviewText,
    rating: r.rating,
    image: r.photoUrl,
  }))

  // Filter out local storage reviews that are already present in the database to avoid duplicate display
  const uniqueLocalStorageReviews = submittedReviews.filter(
    (sr) => !dbReviewsFormatted.some((dr) => dr.name === sr.name && dr.text === sr.text)
  )

  const allReviews = [...dbReviewsFormatted, ...uniqueLocalStorageReviews, ...staticReviews]

  return (
    <section id="reviews" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <div className="flex items-end justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Guest Love</p>
            <h2 className="mt-3 text-balance font-serif text-3xl font-semibold md:text-4xl">
              Stays that guests keep coming back for
            </h2>
          </div>
          <div className="flex gap-2.5">
            <button
              onClick={() => scroll("left")}
              className="flex size-10 items-center justify-center rounded-full border border-background/20 bg-background/5 text-primary-foreground hover:bg-background hover:text-primary transition-all focus:outline-none cursor-pointer"
              aria-label="Scroll reviews left"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="flex size-10 items-center justify-center rounded-full border border-background/20 bg-background/5 text-primary-foreground hover:bg-background hover:text-primary transition-all focus:outline-none cursor-pointer"
              aria-label="Scroll reviews right"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="no-scrollbar mt-12 flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4"
        >
          {allReviews.map((r, index) => (
            <figure
              key={index}
              className="flex w-[350px] shrink-0 flex-col rounded-2xl bg-background/10 p-6 ring-1 ring-background/15 backdrop-blur-sm snap-start"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`size-4 ${
                      i < (r.rating || 5) ? "fill-accent text-accent" : "text-background/20"
                    }`}
                  />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-primary-foreground/90">
                “{r.text}”
              </blockquote>
              <figcaption className="mt-5 border-t border-background/15 pt-4 flex items-center">
                {r.image && (
                  <img
                    src={r.image}
                    alt={r.name}
                    className="mr-3 size-9 rounded-full object-cover ring-1 ring-background/20"
                  />
                )}
                <div className="flex flex-col leading-tight">
                  <span className="font-medium">{r.name}</span>
                  <span className="text-sm text-primary-foreground/70">{r.from}</span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-background/20 bg-transparent text-primary-foreground hover:bg-background hover:text-primary"
          >
            <a href="/review">Write a Review</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
