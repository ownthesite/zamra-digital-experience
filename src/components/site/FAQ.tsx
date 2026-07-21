import { SectionHeading } from "./SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const faqs = [
  {
    q: "How do I book Zamra for my event?",
    a: "Simply submit an enquiry with your event details, preferred date, and expected guest count. Our team will contact you to discuss your requirements, confirm availability, and guide you through the booking process.",
  },
  {
    q: "What types of events can Zamra host?",
    a: "Zamra is designed to host weddings, receptions, exhibitions, conferences, corporate events, cultural programs, trade shows, family celebrations, and other large-scale gatherings.",
  },
  {
    q: "Can the venue be customised for different events?",
    a: "Yes. Our flexible event spaces can be configured to suit different layouts, seating arrangements, staging requirements, and event styles, ensuring every occasion is tailored to your needs.",
  },
  {
    q: "Is parking available for guests?",
    a: "Yes. Zamra offers spacious on-site parking to ensure convenient access for guests attending events of all sizes.",
  },
  {
    q: "Can we choose our own decorators and caterers?",
    a: "Yes. We work closely with your preferred vendors and coordinate schedules, access, and event logistics to ensure smooth execution.",
  },
  {
    q: "Do you provide event management support?",
    a: "Absolutely. Our experienced team assists with planning, venue coordination, technical arrangements, vendor management, logistics, and on-site event execution for a seamless experience.",
  },
  {
    q: "Is the venue fully air-conditioned?",
    a: "Yes. Zamra's event spaces are fully air-conditioned and supported by reliable power backup to ensure guest comfort throughout your event.",
  },
  {
    q: "Is Zamra wheelchair accessible?",
    a: "Yes. Our venue is designed to provide convenient access for all guests. If you have specific accessibility requirements, our team will be happy to assist.",
  },
  {
    q: "Where is Zamra International Convention & Exhibition Centre located?",
    a: "Zamra is located in Kalamassery, Kochi, with excellent connectivity to major roads, Cochin International Airport, railway stations, and key business districts.",
  },
  {
    q: "Can I visit the venue before booking?",
    a: "Certainly. We encourage prospective clients to schedule a venue visit to explore the facilities, discuss event requirements, and meet our event coordination team.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="container-zamra">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <SectionHeading
              eyebrow="FAQ"
              title={<>Answers before you ask.</>}
              intro="Ten of the questions we hear most often. Still curious? Message us — we'll respond."
            />
            <a
              href="#enquire"
              className="mt-6 inline-flex items-center text-sm font-medium text-primary border-b border-accent pb-1 hover:text-accent-hover transition-colors"
            >
              Ask a different question →
            </a>
          </div>
          <div className="md:col-span-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`i${i}`}
                  className="border-b border-border last:border-b-0"
                >
                  <AccordionTrigger className="text-left font-heading text-primary text-lg md:text-xl font-medium py-6 hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-[15px] leading-relaxed pb-6 max-w-2xl">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
