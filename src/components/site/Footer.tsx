export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-background/10">
      <div className="container-zamra py-16 grid gap-10 lg:grid-cols-12">
        {/* Brand */}
        <div className="lg:col-span-5">
          <div className="font-heading text-2xl font-semibold text-background tracking-tight">
            ZAMRA
          </div>

          <p className="text-xs tracking-[0.25em] uppercase text-background/60 mt-1">
            International Convention & Exhibition Centre
          </p>

          <p className="mt-6 max-w-sm text-background/70 leading-relaxed">
            One of Kochi's premier destinations for weddings, exhibitions,
            conferences, corporate events, cultural programs, and unforgettable
            celebrations.
          </p>
        </div>

        {/* Quick Links */}
        <FooterCol
          title="Quick Links"
          items={[
            ["Home", "#home"],
            ["About", "#about"],
            ["Events", "#events"],
            ["Gallery", "#gallery"],
            ["Contact", "#contact"],
          ]}
        />

        {/* Services */}
        <FooterCol
          title="Events"
          items={[
            ["Weddings", "#events"],
            ["Corporate Events", "#events"],
            ["Exhibitions", "#events"],
            ["Conferences", "#events"],
            ["Celebrations", "#events"],
          ]}
        />

        {/* Contact */}
        <FooterCol
          title="Contact"
          items={[
            ["+91 XXXXX XXXXX", "tel:+91XXXXXXXXXX"],
            ["info@zamrainternational.com", "mailto:info@zamrainternational.com"],
            ["Kalamassery, Kochi", "#location"],
            ["Get Directions", "https://maps.app.goo.gl/HKdwEAUqQ6ZaRGuc7"],
          ]}
        />
      </div>

      <div className="border-t border-background/10">
        <div className="container-zamra py-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between text-xs text-background/50">
          <p>
            © {new Date().getFullYear()} Zamra International Convention &
            Exhibition Centre. All rights reserved.
          </p>

          <p>Kalamassery • Kochi • Kerala • India</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: [string, string][];
}) {
  return (
    <div className="lg:col-span-2">
      <h3 className="text-xs uppercase tracking-[0.2em] text-background/50 mb-4">
        {title}
      </h3>

      <ul className="space-y-3">
        {items.map(([label, href]) => (
          <li key={label}>
            <a
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-[15px] text-background/80 hover:text-accent-light transition-colors"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
