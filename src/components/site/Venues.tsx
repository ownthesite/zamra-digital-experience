import { SectionHeading } from "./SectionHeading";
import grand from "@/assets/venue-grand.jpg";
import conclave from "@/assets/venue-conclave.jpg";
import atrium from "@/assets/venue-atrium.jpg";
import pavilion from "@/assets/venue-pavilion.jpg";

const venues = [
  {
    img: grand,
    name: "The Grand Hall",
    capacity: "5,000 guests",
    ideal: "Weddings · Galas · Exhibitions",
    features: [
      "Column-free 40,000 sq ft floor",
      "Integrated stage & LED backdrop",
      "Green rooms & VIP holding areas",
    ],
  },
  {
    img: conclave,
    name: "The Conclave",
    capacity: "800 seats",
    ideal: "Conferences · AGMs · Keynotes",
    features: [
      "Tiered auditorium seating",
      "Broadcast-grade AV & live streaming",
      "Simultaneous translation booths",
    ],
  },
  {
    img: atrium,
    name: "The Atrium",
    capacity: "1,200 guests",
    ideal: "Exhibitions · Launches · Receptions",
    features: [
      "Double-height glass atrium",
      "Natural daylight & warm evening light",
      "Direct loading access",
    ],
  },
  {
    img: pavilion,
    name: "The Pavilion",
    capacity: "2,000 guests",
    ideal: "Weddings · Receptions · Celebrations",
    features: [
      "Covered outdoor lawn setting",
      "Landscaped gardens & water features",
      "Fully weatherproofed canopy",
    ],
  },
];

export function Venues() {
  return (
    <section id="venues" className="py-24 md:py-32 bg-surface">
      <div className="container-zamra">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <SectionHeading
            eyebrow="Explore Our Venues"
            title={<>Five venues.<br />One address.</>}
            intro="Each space is purpose-built and fully equipped. Configure it your way — our team handles the rest."
          />
          <a
            href="#enquire"
            className="hidden md:inline-flex items-center text-sm font-medium text-primary border-b border-accent pb-1 hover:text-accent-hover transition-colors"
          >
            Enquire about a venue →
          </a>
        </div>

        <div className="mt-16 grid gap-10 md:gap-14">
          {venues.map((v, i) => (
            <article
              key={v.name}
              className={`grid md:grid-cols-12 gap-6 md:gap-10 items-center ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="md:col-span-7 relative aspect-[16/10] overflow-hidden rounded-xl">
                <img
                  src={v.img}
                  alt={v.name}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="md:col-span-5">
                <p className="stat-num text-4xl md:text-5xl text-accent-hover/80">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-heading text-2xl md:text-3xl font-medium text-primary">
                  {v.name}
                </h3>
                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                  <span>
                    <strong className="text-primary font-medium">Capacity</strong> · {v.capacity}
                  </span>
                  <span>
                    <strong className="text-primary font-medium">Ideal for</strong> · {v.ideal}
                  </span>
                </div>
                <ul className="mt-5 space-y-2">
                  {v.features.map((f) => (
                    <li key={f} className="flex gap-3 text-[15px] text-foreground">
                      <span className="mt-2 h-px w-4 bg-accent shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#enquire"
                  className="mt-7 inline-flex items-center h-11 px-6 rounded-full border border-primary text-primary text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  Enquire about {v.name}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
