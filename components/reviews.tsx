import { Star } from "lucide-react"

const reviews = [
  {
    name: "Aarav & Meera",
    from: "Delhi",
    text: "The most peaceful getaway we've had. Waking up to the pine forest and that first cup of kahwa from the cafe — pure magic. The hosts treated us like family.",
  },
  {
    name: "Sana Qureshi",
    from: "Srinagar",
    text: "Cozy rooms, warm food, and the bonfire night was unforgettable. Duggar Den genuinely feels like a home in the mountains. We'll be back!",
  },
  {
    name: "Rohit Sharma",
    from: "Chandigarh",
    text: "Spotless rooms with the best valley views. Booking over WhatsApp was so quick and easy. Perfect spot to disconnect and recharge.",
  },
]

export function Reviews() {
  return (
    <section id="reviews" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Guest Love</p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold md:text-4xl">
            Stays that guests keep coming back for
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="flex flex-col rounded-2xl bg-background/10 p-6 ring-1 ring-background/15 backdrop-blur-sm"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-primary-foreground/90">
                “{r.text}”
              </blockquote>
              <figcaption className="mt-5 border-t border-background/15 pt-4">
                <span className="font-medium">{r.name}</span>
                <span className="block text-sm text-primary-foreground/70">{r.from}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
