import { SectionHeading } from "./SectionHeading";
import wedding from "@/assets/cat-wedding.jpg";
import corporate from "@/assets/cat-corporate.jpg";
import conference from "@/assets/cat-conference.jpg";
import exhibition from "@/assets/cat-exhibition.jpg";
import reception from "@/assets/cat-reception.jpg";
import celebration from "@/assets/cat-celebration.jpg";

const categories = [
  { img: wedding, label: "Weddings", note: "Ceremonies, receptions & traditions" },
  { img: corporate, label: "Corporate", note: "AGMs, launches, team gatherings" },
  { img: conference, label: "Conferences", note: "Symposiums, seminars, keynotes" },
  { img: exhibition, label: "Exhibitions", note: "Trade shows, expos, showcases" },
  { img: reception, label: "Receptions", note: "Cocktails, socials, mixers" },
  { img: celebration, label: "Celebrations", note: "Galas, cultural events, awards" },
];

export function EventTypes() {
  return (
    <section id="events" className="py-24 md:py-32">
      <div className="container-zamra">
        <SectionHeading
          eyebrow="Any Occasion"
          title={<>Can Zamra host <em className="not-italic text-accent-hover">your</em> event?</>}
          intro="From intimate ceremonies to conferences of five thousand — every event we host is planned with the same care and precision."
        />

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((c) => (
            <a
              key={c.label}
              href="#venues"
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-lg bg-primary"
            >
              <img
                src={c.img}
                alt={c.label}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-85 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                <h3 className="font-heading text-background text-lg md:text-2xl font-medium">
                  {c.label}
                </h3>
                <p className="mt-1 text-background/75 text-xs md:text-sm">{c.note}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
