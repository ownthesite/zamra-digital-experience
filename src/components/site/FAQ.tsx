import { SectionHeading } from "./SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "How do I book a venue at Zamra?", a: "Submit an enquiry with your event type, date and expected guest count. Our team will respond within one working day to schedule a venue visit and confirm availability." },
  { q: "What is the booking process and timeline?", a: "After your site visit, we issue a proposal with the venue, configuration and coordination scope. A signed agreement and a booking deposit secure the date." },
  { q: "Is there sufficient parking for large events?", a: "Yes. Our campus includes over 1,000 dedicated on-site parking spaces with attendants for peak-hour flow." },
  { q: "Can we use our own decorators and caterers?", a: "Absolutely. We work with your preferred vendors and coordinate their access, timing and setup with our on-site team." },
  { q: "What is the maximum capacity of your venues?", a: "The Grand Hall accommodates up to 5,000 guests. Every venue can be configured for smaller, more intimate events as well." },
  { q: "Is the venue wheelchair accessible?", a: "Every public space at Zamra is step-free with accessible restrooms and dedicated parking. Please let us know of specific requirements in advance." },
  { q: "Where is Zamra located?", a: "Zamra is located in Kochi, Kerala, with easy connectivity from Cochin International Airport, Ernakulam Junction, and the NH-66 corridor." },
  { q: "Do you provide event coordination support?", a: "Yes — professional coordination is included with every venue booking. This is the Zamra Event Experience, exclusive to our venue clients." },
  { q: "How far in advance should I book?", a: "For weddings and large events we recommend booking 6–12 months in advance. Corporate events and smaller conferences can often be accommodated with 4–8 weeks' notice." },
  { q: "Can I schedule a venue visit before booking?", a: "Yes, and we recommend it. Site visits are by appointment and take around 45 minutes." },
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
