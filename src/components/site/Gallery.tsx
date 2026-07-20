import { SectionHeading } from "./SectionHeading";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import wedding from "@/assets/cat-wedding.jpg";
import celebration from "@/assets/cat-celebration.jpg";

const images = [
  { src: wedding, alt: "Wedding reception setup", span: "md:col-span-4 md:row-span-2" },
  { src: g2, alt: "Illuminated stage at a gala", span: "md:col-span-4" },
  { src: g1, alt: "Elegant tablescape", span: "md:col-span-4 md:row-span-2" },
  { src: g3, alt: "Aerial view of the Zamra campus", span: "md:col-span-4" },
  { src: g4, alt: "Grand entrance lobby", span: "md:col-span-4 md:row-span-2" },
  { src: celebration, alt: "Award ceremony configuration", span: "md:col-span-4" },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32">
      <div className="container-zamra">
        <SectionHeading
          eyebrow="Gallery"
          title={<>Moments from our floors.</>}
          intro="Real events, real spaces. A quiet look at what Zamra hosts on a typical week."
        />

        <div className="mt-14 grid grid-cols-2 md:grid-cols-12 gap-3 md:gap-4 md:auto-rows-[200px]">
          {images.map((im, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-lg group ${im.span} row-span-1`}
            >
              <img
                src={im.src}
                alt={im.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
