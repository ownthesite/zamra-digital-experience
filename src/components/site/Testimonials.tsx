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
        {/* Featured Video Review (Placeholder) */}
        <div className="mt-14 mb-12">
          <div className="overflow-hidden rounded-2xl border border-border bg-background">
            <div className="grid lg:grid-cols-2">
              {/* Video Placeholder */}
              <div className="relative aspect-video bg-surface flex items-center justify-center">
                {/* Replace this with an iframe when available */}
                <button
                  className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-background shadow-lg hover:scale-105 transition-transform"
                  aria-label="Play customer review"
                >
                  <svg className="h-8 w-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>

                <span className="absolute bottom-4 left-4 rounded-full bg-background/90 px-3 py-1 text-xs font-medium">
                  Video Review Coming Soon
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center p-8 md:p-10">
                <p className="text-xs uppercase tracking-[0.2em] text-accent-hover font-semibold">
                  Featured Client Story
                </p>

                <h3 className="mt-3 font-heading text-3xl text-primary">
                  See the Zamra Experience.
                </h3>

                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Soon you'll be able to watch real weddings, exhibitions, conferences, and client
                  experiences directly from YouTube and Instagram.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="#"
                    className="inline-flex h-11 items-center rounded-full border border-primary px-6 text-sm font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    Watch on YouTube
                  </a>

                  <a
                    href="#"
                    className="inline-flex h-11 items-center rounded-full border border-border px-6 text-sm font-medium hover:border-primary transition-colors"
                  >
                    View Instagram Reels
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6 md:gap-8">
          {quotes.map((t) => (
            <figure
              key={t.n}
              className="flex flex-col rounded-xl bg-background border border-border p-8"
            >
              <span className="font-heading text-accent text-5xl leading-none">"</span>
              <blockquote className="mt-4 text-foreground leading-relaxed flex-1">{t.q}</blockquote>
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
