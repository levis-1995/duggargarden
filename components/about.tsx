import Image from "next/image"
import {
  Check,
  MapPin,
  HandHeart,
  BedDouble,
  UtensilsCrossed,
  Mountain,
  Camera,
  Footprints,
  Bird,
  Sunrise,
  Compass,
} from "lucide-react"

const reasons = [
  {
    icon: MapPin,
    title: "Prime Location in Duggar Village",
    desc: "Set in the scenic Panchari region of Udhampur, Duggar Den offers spectacular mountain views, fresh air, and a tranquil environment away from city noise — perfect for sunrise views, nature walks, and soaking in Dogra heritage.",
  },
  {
    icon: HandHeart,
    title: "Authentic Dogra Hospitality",
    desc: "Guests are welcomed like family. Our hosts share the warmth, traditions, and culture of the Dogra community, giving you a genuine local experience that hotels simply cannot provide.",
  },
  {
    icon: BedDouble,
    title: "Comfortable & Cozy Rooms",
    desc: "Thoughtfully designed for modern comfort while preserving traditional charm — clean rooms, comfortable bedding, private spaces, and stunning views of the surrounding hills.",
  },
  {
    icon: UtensilsCrossed,
    title: "Traditional Home-Cooked Food",
    desc: "Taste authentic Dogra cuisine prepared with fresh local ingredients — homemade meals that showcase the flavors and traditions of the Duggar region.",
  },
]

const natureActivities = [
  { icon: Footprints, label: "Nature walks" },
  { icon: Compass, label: "Village tours" },
  { icon: Camera, label: "Photography" },
  { icon: Bird, label: "Bird watching" },
  { icon: Mountain, label: "Trekking" },
  { icon: Sunrise, label: "Sunrise & sunset viewing" },
]

const travelers = [
  "Family vacations",
  "Couple getaways",
  "Workations",
  "Weekend retreats",
  "Adventure travelers",
  "Backpackers",
  "Spiritual travelers",
  "Photography enthusiasts",
]

const highlights = [
  "Authentic village experience",
  "Scenic mountain location",
  "Warm Dogra hospitality",
  "Clean and comfortable rooms",
  "Traditional homemade food",
  "Personalized guest experience",
  "Peaceful and safe environment",
  "Affordable accommodation",
]

export function About() {
  return (
    <section id="about" className="bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        {/* Intro */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">About Duggar Den</p>
            <h2 className="mt-3 text-balance font-serif text-3xl font-semibold text-foreground md:text-4xl">
              The best homestay in Duggar Village, Panchari, Udhampur
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Experience the beauty of the Himalayas, authentic Dogra hospitality, and peaceful village life at Duggar
              Den. Nestled amidst lush green mountains, pine forests, and breathtaking valley views, our homestay offers
              a perfect escape from crowded tourist destinations.
            </p>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Whether you are a solo traveler, family, couple, photographer, biker, trekker, or nature enthusiast,
              Duggar Den combines comfort, local culture, delicious traditional food, and unforgettable natural
              experiences — a unique chance to live the true spirit of rural Jammu and Kashmir.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-sm">
            <Image
              src="/images/hero-cabin.png"
              alt="Duggar Den homestay among the pine forests of Panchari"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Why choose us */}
        <div className="mt-20">
          <h3 className="text-balance font-serif text-2xl font-semibold text-foreground md:text-3xl">
            Why choose Duggar Den homestay?
          </h3>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {reasons.map((r) => (
              <div key={r.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <r.icon className="size-5" />
                </div>
                <h4 className="mt-4 font-serif text-lg font-semibold text-card-foreground">{r.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Nature lovers + Explore */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
            <h3 className="font-serif text-xl font-semibold text-card-foreground md:text-2xl">Perfect for nature lovers</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              The surrounding landscape opens up endless ways to slow down and explore.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {natureActivities.map((a) => (
                <li key={a.label} className="flex items-center gap-2.5 text-sm text-foreground">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <a.icon className="size-4" />
                  </span>
                  {a.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
            <h3 className="font-serif text-xl font-semibold text-card-foreground md:text-2xl">Explore Panchari & Udhampur</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Panchari is known for its scenic beauty, dense forests, mountain landscapes, and rich cultural heritage.
              Discover nearby viewpoints, local villages, temples, and trekking routes while experiencing the peaceful
              lifestyle of rural Jammu and Kashmir.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Duggar Den serves as the ideal base for discovering the hidden gems of Panchari and the greater Udhampur
              region.
            </p>
          </div>
        </div>

        {/* Ideal for every traveler */}
        <div className="mt-16">
          <h3 className="text-balance font-serif text-2xl font-semibold text-foreground md:text-3xl">
            An ideal stay for every traveler
          </h3>
          <ul className="mt-6 flex flex-wrap gap-2.5">
            {travelers.map((t) => (
              <li
                key={t}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* What makes us the best */}
        <div className="mt-16 rounded-2xl bg-primary p-6 text-primary-foreground md:p-10">
          <h3 className="text-balance font-serif text-2xl font-semibold md:text-3xl">
            What makes Duggar Den the best homestay in Panchari?
          </h3>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {highlights.map((h) => (
              <li key={h} className="flex items-center gap-3 text-sm md:text-base">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary-foreground/15">
                  <Check className="size-3.5" />
                </span>
                {h}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
