'use client';

import { portfolioItems } from "@/data/portfolio";
import AccordionGallery from "@/components/ui/AccordionGallery";
import type { AccordionGalleryItem } from "@/components/ui/AccordionGallery";

export default function Portfolio() {
  const galleryItems: AccordionGalleryItem[] = portfolioItems.map((item) => ({
    image: item.image,
    label: item.label,
    link: item.href !== "#" ? item.href : undefined,
    alt: item.title,
  }));

  return (
    <section id="portafolio" className="py-24 bg-secondary/20">
      <div className="max-w-[1180px] mx-auto px-8">

        {/* Header */}
        <div className="section__header text-center max-w-[640px] mx-auto mb-16">
          <span className="inline-block text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-accent border border-accent px-3.5 py-1 rounded-sm mb-4">
            Nuestro trabajo
          </span>
          <h2
            className="font-bold leading-[1.2] text-white mb-4"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
            }}
          >
            Proyectos que<br />
            <em className="italic text-accent">hablan por sí solos</em>
          </h2>
          <p className="text-muted leading-[1.75]">
            Una selección de los proyectos más representativos que hemos construido.
          </p>
        </div>

        {/* Galería accordion */}
        <AccordionGallery
          items={galleryItems}
          defaultIndex={0}
          expandRatio={0.52}
          trigger="hover"
          accentColor="#C9A84C"
          overlayColor="#0D1B2A"
          textColor="#F0F4F8"
          grayscale
          showLabels
          duration={0.6}
          ease="power3.out"
          parallax={0.5}
          tilt={8}
          stagger={0.06}
          height={500}
          gap={10}
          radius={16}
          orientation="horizontal"
        />

      </div>
    </section>
  );
}