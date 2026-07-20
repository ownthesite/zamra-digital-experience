import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { TrustStrip } from "@/components/site/TrustStrip";
import { EventTypes } from "@/components/site/EventTypes";
import { Venues } from "@/components/site/Venues";
import { Experience } from "@/components/site/Experience";
import { Difference } from "@/components/site/Difference";
import { Transformations } from "@/components/site/Transformations";
import { Gallery } from "@/components/site/Gallery";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { Enquiry } from "@/components/site/Enquiry";
import { Footer } from "@/components/site/Footer";
import { StickyBar } from "@/components/site/StickyBar";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <TrustStrip />
        <EventTypes />
        <Venues />
        <Experience />
        <Difference />
        <Transformations />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Enquiry />
      </main>
      <Footer />
      <StickyBar />
    </div>
  );
}
