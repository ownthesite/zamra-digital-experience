export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-background/10">
      <div className="container-zamra py-16 grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="font-heading text-2xl font-semibold text-background tracking-tight">
            ZAMRA
          </div>
          <p className="text-xs tracking-[0.25em] uppercase text-background/60 mt-1">
            International Convention & Exhibition Centre
          </p>
          <p className="mt-6 max-w-sm text-background/70 leading-relaxed">
            Kerala's premium destination for weddings, conferences, exhibitions
            and cultural celebrations of any scale.
          </p>
        </div>

        <FooterCol
          title="Venues"
          items={["The Grand Hall", "The Conclave", "The Atrium", "The Pavilion"]}
        />
        <FooterCol
          title="Explore"
          items={["Events", "Experience", "Gallery", "FAQ"]}
        />
        <FooterCol
          title="Contact"
          items={[
            "+91 484 123 4567",
            "hello@zamra.in",
            "WhatsApp",
            "NH-66, Kochi, Kerala",
          ]}
        />
      </div>

      <div className="border-t border-background/10">
        <div className="container-zamra py-6 flex flex-col md:flex-row gap-3 md:items-center md:justify-between text-xs text-background/50">
          <p>© {new Date().getFullYear()} Zamra International. All rights reserved.</p>
          <p>Kochi · Kerala · India</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="md:col-span-2 lg:col-span-2">
      <div className="text-xs uppercase tracking-[0.2em] text-background/50 mb-4">
        {title}
      </div>
      <ul className="space-y-2">
        {items.map((i) => (
          <li key={i}>
            <a href="#" className="text-background/85 hover:text-accent-light transition-colors text-[15px]">
              {i}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
