import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "";
  return (
    <div className={`max-w-2xl ${alignCls}`}>
      {eyebrow && (
        <p className="eyebrow mb-4">
          {align === "left" && <span className="rule bg-accent-hover/70" />}
          {eyebrow}
        </p>
      )}
      <h2 className="font-heading font-semibold text-primary text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.15]">
        {title}
      </h2>
      {intro && (
        <p className="mt-5 text-base md:text-[17px] text-muted-foreground leading-relaxed">
          {intro}
        </p>
      )}
    </div>
  );
}
