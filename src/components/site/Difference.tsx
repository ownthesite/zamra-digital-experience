import { SectionHeading } from "./SectionHeading";

const items = [
  { t: "Professional Coordination", d: "Experienced planners who understand execution — not just theory." },
  { t: "Premium Ambience", d: "Architecture, lighting and detailing that elevate every guest's arrival." },
  { t: "Flexible Spaces", d: "Venues that reshape around your event, not the other way around." },
  { t: "Full Accessibility", d: "Step-free routes, accessible restrooms and mobility support throughout." },
  { t: "Genuine Hospitality", d: "A team that treats your guests with the same care as our own." },
  { t: "Attention to Detail", d: "Seating, cues, timing, transitions — considered and rehearsed." },
];

export function Difference() {
  return (
    <section className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="container-zamra">
        <div className="max-w-2xl">
          <p className="eyebrow text-accent-light mb-4">
            <span className="rule bg-accent-light/70" />
            The Zamra Difference
          </p>
          <h2 className="font-heading text-background font-semibold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.15]">
            More than a venue.
            <br />
            A standard of care.
          </h2>
          <p className="mt-5 text-background/75 text-lg leading-relaxed">
            Any hall can hold your guests. What separates Zamra is what happens around
            the space — the quiet, deliberate work that makes an event feel effortless.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {items.map((i, idx) => (
            <div key={i.t} className="border-t border-background/20 pt-6">
              <p className="stat-num text-accent-light text-sm">
                {String(idx + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-heading text-background text-xl md:text-2xl font-medium">
                {i.t}
              </h3>
              <p className="mt-2 text-background/70 leading-relaxed max-w-sm">{i.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
