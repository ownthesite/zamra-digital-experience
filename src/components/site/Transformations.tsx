import { useState } from "react";
import { SectionHeading } from "./SectionHeading";
import empty from "@/assets/transform-empty.jpg";
import wedding from "@/assets/transform-wedding.jpg";
import corp from "@/assets/transform-corporate.jpg";
import exh from "@/assets/transform-exhibition.jpg";

const states = [
  { key: "empty", label: "Empty Hall", img: empty, desc: "The raw scale of The Grand Hall — 40,000 sq ft, column-free." },
  { key: "wedding", label: "Wedding", img: wedding, desc: "Dressed for 1,200 guests with floral installation and stage." },
  { key: "corporate", label: "Corporate", img: corp, desc: "Reset for a plenary with LED stage and theatre seating." },
  { key: "exhibition", label: "Exhibition", img: exh, desc: "Reconfigured into 120 booths with aisle carpeting and rigging." },
];

export function Transformations() {
  const [active, setActive] = useState(0);
  const s = states[active];

  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="container-zamra">
        <SectionHeading
          eyebrow="Venue Transformations"
          title={<>One venue. Many possibilities.</>}
          intro="The same room, reset for four completely different events. See how The Grand Hall adapts."
        />

        <div className="mt-12 flex flex-wrap gap-2 md:gap-3">
          {states.map((st, i) => (
            <button
              key={st.key}
              type="button"
              onClick={() => setActive(i)}
              className={`h-10 px-5 rounded-full text-sm font-medium border transition-colors ${
                i === active
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border-strong text-foreground hover:border-primary"
              }`}
            >
              {st.label}
            </button>
          ))}
        </div>

        <div className="mt-8 relative aspect-[16/9] overflow-hidden rounded-xl bg-primary">
          {states.map((st, i) => (
            <img
              key={st.key}
              src={st.img}
              alt={`${st.label} configuration`}
              loading="lazy"
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                i === active ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 bg-gradient-to-t from-primary/90 to-transparent">
            <p className="stat-num text-accent-light text-xs mb-2">
              STATE {String(active + 1).padStart(2, "0")} / {String(states.length).padStart(2, "0")}
            </p>
            <p className="text-background max-w-xl">{s.desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
