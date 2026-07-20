export function StickyBar() {
  return (
    <div className="md:hidden fixed inset-x-0 bottom-0 z-30 border-t border-border bg-background/95 backdrop-blur">
      <div className="flex">
        <a
          href="https://wa.me/914841234567"
          className="flex-1 h-14 flex items-center justify-center text-sm font-medium text-primary border-r border-border"
        >
          WhatsApp
        </a>
        <a
          href="#enquire"
          className="flex-1 h-14 flex items-center justify-center text-sm font-medium bg-accent text-accent-foreground"
        >
          Enquire Now
        </a>
      </div>
    </div>
  );
}
