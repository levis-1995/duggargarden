import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Users, Mountain, Coffee, Wifi } from "lucide-react"

const rooms = [
  {
    name: "Deluxe Cabin Room",
    image: "/images/room-deluxe.png",
    price: "₹2,800",
    desc: "A snug wood-panelled room for two with a forest-facing window, plush bedding, and warm lamplight.",
    capacity: "2 Guests",
    features: ["Mountain view", "Cafe access", "Free Wi-Fi"],
  },
  {
    name: "Family Mountain Room",
    image: "/images/room-family.png",
    price: "₹4,200",
    desc: "Spacious room with two beds and a cozy window nook — perfect for families and small groups.",
    capacity: "4 Guests",
    features: ["Valley view", "Cafe access", "Free Wi-Fi"],
  },
]

const featureIcon: Record<string, typeof Mountain> = {
  "Mountain view": Mountain,
  "Valley view": Mountain,
  "Cafe access": Coffee,
  "Free Wi-Fi": Wifi,
}

export function Rooms() {
  return (
    <section id="rooms" className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Our Stays</p>
        <h2 className="mt-3 text-balance font-serif text-3xl font-semibold text-foreground md:text-4xl">
          Rooms made for slow mountain mornings
        </h2>
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          Every room is hand-finished in local wood and dressed in warm, natural textiles. Prices are per night,
          breakfast included.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {rooms.map((room) => (
          <article
            key={room.name}
            className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={room.image || "/placeholder.svg"}
                alt={room.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-background/90 px-3 py-1 text-sm font-semibold text-foreground backdrop-blur-sm">
                <Users className="size-3.5 text-primary" />
                {room.capacity}
              </span>
            </div>
            <div className="p-6">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-serif text-xl font-semibold text-card-foreground">{room.name}</h3>
                <p className="whitespace-nowrap font-serif text-lg font-semibold text-primary">
                  {room.price}
                  <span className="text-sm font-normal text-muted-foreground"> /night</span>
                </p>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{room.desc}</p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {room.features.map((f) => {
                  const Icon = featureIcon[f] ?? Mountain
                  return (
                    <li
                      key={f}
                      className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      <Icon className="size-3.5 text-primary" />
                      {f}
                    </li>
                  )
                })}
              </ul>

              <Button asChild variant="outline" className="mt-6 w-full">
                <a href="#book">Book this room</a>
              </Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
