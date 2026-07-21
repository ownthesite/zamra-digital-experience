import heroImg from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Zamra International Convention & Exhibition Centre at dusk"
        width={1920}
        height={1200}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/40 to-primary/85" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(10,22,40,0.5)_100%)]" />

      <div className="relative z-10 container-zamra min-h-[100svh] flex flex-col justify-end pt-32 pb-16 md:pb-24">
        <div className="max-w-3xl fade-up">
          <p className="eyebrow text-accent-light mb-6">
            <span className="rule bg-accent-light/70" />
            Kochi, Kerala
          </p>
          <h1 className="font-heading font-bold text-background text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05]">
            Kerala's destination
            <br />
            for extraordinary events.
          </h1>
          <p className="mt-6 max-w-xl text-background/85 text-lg leading-relaxed">
            Purpose-built convention and exhibition venues. Professional coordination.
            One address for weddings, conferences, exhibitions and celebrations of any scale.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#enquire"
              className="inline-flex items-center h-12 px-7 rounded-full bg-accent text-accent-foreground text-[15px] font-medium hover:bg-accent-hover transition-colors"
            >
              Book a Visit
            </a>
            <a
              href="#venues"
              className="inline-flex items-center h-12 px-7 rounded-full border border-background/40 text-background text-[15px] font-medium hover:bg-background/10 transition-colors"
            >
              Explore Venues
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
