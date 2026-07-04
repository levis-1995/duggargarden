import Image from "next/image"
import { Coffee, Flame, Wifi, UtensilsCrossed, Mountain, Car } from "lucide-react"

const amenities = [
  { icon: Coffee, title: "In-house Cafe", desc: "Fresh coffee, local kahwa & snacks brewed all day." },
  { icon: Flame, title: "Bonfire Evenings", desc: "Gather around the fire under a sky full of stars." },
  { icon: UtensilsCrossed, title: "Home-cooked Meals", desc: "Hearty Dogra & Kashmiri dishes made with love." },
  { icon: Mountain, title: "Guided Trails", desc: "Walks and treks into the surrounding pine forest." },
  { icon: Wifi, title: "Free Wi-Fi", desc: "Stay connected, or happily disconnect — your call." },
  { icon: Car, title: "Easy Parking", desc: "Safe on-site parking for your vehicle." },
]

export function Amenities() {
  return (
    <section id="amenities" className="bg-secondary/50">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative order-last aspect-[4/5] overflow-hidden rounded-2xl lg:order-first">
            <Image src="/images/cafe.png" alt="The cafe at Duggar Den" fill className="object-cover" />
            <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-background/90 p-4 backdrop-blur-sm">
              <p className="font-serif text-lg font-semibold text-foreground">The Den Cafe</p>
              <p className="text-sm text-muted-foreground">Open 7am – 10pm · Coffee, kahwa & comfort food</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Cafe & Amenities</p>
            <h2 className="mt-3 text-balance font-serif text-3xl font-semibold text-foreground md:text-4xl">
              Everything you need to feel at home
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Sip something warm, settle by the fire, and let the mountains do the rest. Our little cafe and cozy
              comforts are what make a stay at Duggar Den special.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {amenities.map((a) => (
                <div key={a.title} className="flex gap-3.5">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <a.icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">{a.title}</h3>
                    <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
