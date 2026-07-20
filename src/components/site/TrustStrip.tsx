const items = [
  ["15+ Years", "of proven excellence"],
  ["2,500+ Events", "successfully delivered"],
  ["5 Venues", "purpose-built for any scale"],
  ["Award-Winning", "hospitality & infrastructure"],
];

export function TrustStrip() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="container-zamra py-8 md:py-10 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
        {items.map(([h, s]) => (
          <div key={h} className="flex flex-col">
            <span className="text-primary font-heading font-semibold text-lg md:text-xl leading-tight">
              {h}
            </span>
            <span className="mt-1 text-xs md:text-sm text-muted-foreground">{s}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
