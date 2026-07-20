import { useEffect, useState } from "react";

const links = [
  { href: "#venues", label: "Venues" },
  { href: "#experience", label: "Experience" },
  { href: "#gallery", label: "Gallery" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-zamra flex h-16 md:h-20 items-center justify-between">
        <a href="#top" className="flex items-baseline gap-2 group">
          <span
            className={`font-heading text-xl md:text-[22px] font-semibold tracking-tight transition-colors ${
              scrolled ? "text-primary" : "text-background"
            }`}
          >
            ZAMRA
          </span>
          <span
            className={`hidden md:inline text-[10px] tracking-[0.25em] uppercase transition-colors ${
              scrolled ? "text-muted-foreground" : "text-background/70"
            }`}
          >
            Convention & Exhibition
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors ${
                scrolled
                  ? "text-foreground/80 hover:text-primary"
                  : "text-background/85 hover:text-background"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#enquire"
          className="hidden md:inline-flex items-center h-10 px-5 rounded-full bg-accent text-accent-foreground text-sm font-medium hover:bg-accent-hover transition-colors"
        >
          Book a Visit
        </a>

        <button
          type="button"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden inline-flex flex-col justify-center gap-1.5 w-10 h-10 items-center ${
            scrolled ? "text-primary" : "text-background"
          }`}
        >
          <span className="block h-px w-6 bg-current" />
          <span className="block h-px w-6 bg-current" />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container-zamra py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#enquire"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center h-11 rounded-full bg-accent text-accent-foreground text-sm font-medium"
            >
              Book a Visit
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
