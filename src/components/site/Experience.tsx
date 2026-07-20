import { SectionHeading } from "./SectionHeading";
import img from "@/assets/experience.jpg";

const phases = [
  { n: "01", t: "Initial Consultation", d: "We listen first. Your vision, guests, timing, and priorities shape every decision that follows." },
  { n: "02", t: "Venue Configuration", d: "Layout, seating, staging and lighting tailored to the specifics of your event." },
  { n: "03", t: "Technical Coordination", d: "AV, live streaming, presentation systems and lighting rigs managed end to end." },
  { n: "04", t: "Logistics Support", d: "Vendor access, catering flow, guest movement, parking and timing — coordinated by us." },
  { n: "05", t: "On-Site Management", d: "A dedicated coordinator on the floor for the full duration of your event." },
  { n: "06", t: "Post-Event", d: "Efficient teardown, feedback and follow-up so nothing is left unfinished." },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="container-zamra">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
          <div className="md:col-span-5 md:sticky md:top-28">
            <SectionHeading
              eyebrow="The Zamra Event Experience"
              title={<>Professional coordination, included with every booking.</>}
              intro="Zamra is a venue. When you book a Zamra venue, you also gain a coordination team that has run thousands of events. This service is exclusive to Zamra clients — it is not sold separately."
            />
            <div className="mt-8 rounded-xl overflow-hidden aspect-[4/3]">
              <img
                src={img}
                alt="A Zamra planning session"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <ol className="md:col-span-7 relative border-l border-border pl-8 md:pl-10 space-y-10">
            {phases.map((p) => (
              <li key={p.n} className="relative">
                <span className="absolute -left-[41px] md:-left-[49px] top-1 flex items-center justify-center h-8 w-8 rounded-full bg-background border border-border text-[11px] font-mono text-accent-hover">
                  {p.n}
                </span>
                <h3 className="font-heading text-primary text-xl md:text-2xl font-medium">
                  {p.t}
                </h3>
                <p className="mt-2 text-muted-foreground leading-relaxed max-w-md">{p.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
