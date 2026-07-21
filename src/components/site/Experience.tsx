import { SectionHeading } from "./SectionHeading";
import img from "@/assets/experience.jpg";

const phases = [
  {
    n: "01",
    t: "Understanding Your Vision",
    d: "Every successful event begins with a conversation. We take time to understand your goals, audience, style, timeline, and expectations to create an experience that reflects your vision.",
  },
  {
    n: "02",
    t: "Event Planning & Design",
    d: "Our team develops the event concept, venue layout, timelines, décor coordination, and guest experience, ensuring every detail works together seamlessly.",
  },
  {
    n: "03",
    t: "Venue & Technical Coordination",
    d: "From stage setup and seating arrangements to lighting, LED displays, audio-visual systems, and live streaming, we coordinate every technical requirement with precision.",
  },
  {
    n: "04",
    t: "Vendor & Logistics Management",
    d: "We manage catering, entertainment, transportation, guest flow, vendor scheduling, parking, and operational logistics to keep your event running effortlessly.",
  },
  {
    n: "05",
    t: "On-Site Event Execution",
    d: "Our experienced event managers oversee every stage of the event, coordinating vendors, managing schedules, handling last-minute requests, and ensuring everything proceeds flawlessly.",
  },
  {
    n: "06",
    t: "Event Wrap-Up",
    d: "After the event concludes, we coordinate dismantling, vendor closure, post-event reviews, and follow-up to ensure every detail is completed professionally.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="container-zamra">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
          <div className="md:col-span-5 md:sticky md:top-28">
            <SectionHeading
              eyebrow="The Zamra Event Solutions Experience"
              title={
                <>
                  Where Exceptional
                  <br />
                  Events Come Together.
                </>
              }
              intro="Booking Zamra means more than reserving a venue. It means partnering with an experienced event team dedicated to delivering seamless weddings, conferences, exhibitions, celebrations, and corporate events through meticulous planning and flawless execution."
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
                <h3 className="font-heading text-primary text-xl md:text-2xl font-medium">{p.t}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed max-w-md">{p.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
