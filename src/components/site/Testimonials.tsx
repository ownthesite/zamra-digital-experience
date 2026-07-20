import { SectionHeading } from "./SectionHeading";

const quotes = [
  {
    q: "We hosted 1,400 guests at the Grand Hall for our wedding. Not a single detail slipped — the Zamra team simply handled it. Our families still talk about the evening.",
    n: "Aiswarya & Rohan",
    e: "Wedding",
  },
  {
    q: "Zamra ran our regional AGM for the third year in a row. Live streaming, translation, breakout rooms — everything worked, every time.",
    n: "Meera Nair",
    e: "Corporate AGM",
  },
  {
    q: "An exhibition of this scale usually means a hundred small headaches. At Zamra, it meant one point of contact and answers within minutes.",
    n: "Suresh Menon",
    e: "Trade Exhibition",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="container-zamra">
        <SectionHeading
          eyebrow="What Our Clients Say"
          title={<>Trusted for the events that matter most.</>}
        />

        <div className="mt-14 grid md:grid-cols-3 gap-6 md:gap-8">
          {quotes.map((t) => (
            <figure
              key={t.n}
              className="flex flex-col rounded-xl bg-background border border-border p-8"
            >
              <span className="font-heading text-accent text-5xl leading-none">"</span>
              <blockquote className="mt-4 text-foreground leading-relaxed flex-1">
                {t.q}
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-border">
                <div className="font-heading text-primary font-medium">{t.n}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest mt-1">
                  {t.e}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
