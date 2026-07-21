import { SectionHeading } from "./SectionHeading";
import grand from "@/assets/venue-grand.jpg";
import conclave from "@/assets/venue-conclave.jpg";
import atrium from "@/assets/venue-atrium.jpg";
import pavilion from "@/assets/venue-pavilion.jpg";

const experiences = [
  {
    img: grand,
    title: "Grand Weddings & Receptions",
    description:
      "Transform our grand space into an opulent backdrop for your most cherished day. From ethereal floral arches to dramatic stage setups, we craft seamless, unforgettable wedding celebrations tailored precisely to your vision.",
    ideal: "Weddings · Royal Receptions · Sangeets · Banquets",
    highlights: [
      "Flexible architectural layouts with grand staging setups",
      "Dedicated bridal suites & VIP holding areas",
      "State-of-the-art ambient lighting & acoustics",
    ],
  },
  {
    img: conclave,
    title: "Corporate Events & Conferences",
    description:
      "Host high-impact keynotes, international summits, and executive AGMs in a refined setting engineered for clarity and productivity. Our flexible layout seamlessly transitions from plenary halls to breakout zones.",
    ideal: "Conferences · Corporate AGMs · Product Launches · Summits",
    highlights: [
      "Broadcast-grade AV integration & live streaming support",
      "Customizable seating configurations & stage designs",
      "Uninterrupted high-speed connectivity & power backup",
    ],
  },
  {
    img: atrium,
    title: "Exhibitions & Trade Shows",
    description:
      "Designed to accommodate large-scale expos and commercial trade shows with effortless guest flow and maximum visibility. Experience expansive floor space crafted for immersive, high-footfall experiences.",
    ideal: "Trade Fairs · Consumer Expos · Art & Auto Displays",
    highlights: [
      "Expansive floor space optimized for modular stall layouts",
      "Direct logistics loading access for rapid setup and teardown",
      "High-capacity climate control & ventilation throughout",
    ],
  },
  {
    img: pavilion,
    title: "Celebrations & Community Events",
    description:
      "Whether it’s a cultural extravaganza, award gala, or intimate family milestone, our venue transforms to evoke warmth, grand scale, and celebration in equal measure.",
    ideal: "Award Nights · Cultural Programs · Milestone Anniversaries · Galas",
    highlights: [
      "Versatile stage and seating arrangements for engaging performances",
      "Full-service catering execution zones & banquet support",
      "Generous, stress-free parking with managed valet services",
    ],
  },
];

export function Venues() {
  return (
    <section id="venues" className="py-24 md:py-32 bg-surface">
      <div className="container-zamra">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <SectionHeading
            eyebrow="Event Experiences"
            title={
              <>
                One Venue.
                <br />
                Endless Possibilities.
              </>
            }
            intro="As one of Kochi’s premier convention destinations, Zamra offers a masterfully designed, highly adaptable space that seamlessly evolves for events of every scale. Fully air-conditioned, backed by uninterrupted power, expansive parking, and dedicated event support, we bring your vision to life effortlessly."
          />
          <a
            href="#enquire"
            className="hidden md:inline-flex items-center text-sm font-medium text-primary border-b border-accent pb-1 hover:text-accent-hover transition-colors"
          >
            Plan your experience →
          </a>
        </div>

        <div className="mt-16 grid gap-10 md:gap-14">
          {experiences.map((exp, i) => (
            <article
              key={exp.title}
              className={`grid md:grid-cols-12 gap-6 md:gap-10 items-center ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="md:col-span-7 relative aspect-[16/10] overflow-hidden rounded-xl">
                <img
                  src={exp.img}
                  alt={exp.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="md:col-span-5">
                <p className="stat-num text-4xl md:text-5xl text-accent-hover/80">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-heading text-2xl md:text-3xl font-medium text-primary">
                  {exp.title}
                </h3>

                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                  {exp.description}
                </p>

                <div className="mt-4 text-sm text-muted-foreground">
                  <strong className="text-primary font-medium">Ideal for</strong> · {exp.ideal}
                </div>

                <ul className="mt-5 space-y-2">
                  {exp.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3 text-[15px] text-foreground">
                      <span className="mt-2 h-px w-4 bg-accent shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <a
                  href="#enquire"
                  className="mt-7 inline-flex items-center h-11 px-6 rounded-full border border-primary text-primary text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  Reserve for your event
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
