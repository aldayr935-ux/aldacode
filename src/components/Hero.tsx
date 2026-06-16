"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      bgRef.current?.classList.add("loaded");
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="inicio"
      className="relative w-full min-h-screen flex items-center overflow-hidden"
    >
      {/* Imagen de fondo */}
      <div
        ref={bgRef}
        className={[
          "absolute inset-0 bg-[url('/img/background.webp')]",
          "bg-cover bg-[center_right] bg-no-repeat",
          "scale-[1.04] transition-transform duration-[8000ms] ease-linear",
          "[&.loaded]:scale-100",
        ].join(" ")}
        aria-hidden="true"
      />

      {/* Overlay degradado izquierda → derecha */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, #0D1B2A 0%, #0D1B2Aee 32%, #0D1B2Acc 52%, #0D1B2A55 72%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* Contenido */}
      <div
        className="relative z-10 max-w-[580px] px-16 pt-[calc(var(--navbar-h)+2rem)]"
        style={{ animation: "fadeInUp 0.9s ease both" }}
      >
        <span className="inline-block text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-accent border border-accent px-3.5 py-1 rounded-sm mb-6">
          Agencia de Desarrollo Web
        </span>

        <h1
          className="font-bold leading-[1.15] text-white mb-5"
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(2.6rem, 5vw, 4rem)",
          }}
        >
          Tus proyectos,<br />
          en el mundo{" "}
          <em className="italic text-accent">digital</em>
        </h1>

        <p className="text-[1.05rem] font-light leading-[1.75] text-light mb-10 max-w-[460px]">
          En ALDACODE creemos en el poder de la web para impulsar tus proyectos.
          Creamos tu sitio web personalizado para tu negocio, blog personal,
          portafolio, tienda online o lo que imagines. Lleva tus ideas al
          siguiente nivel.
        </p>

        <div className="flex gap-4 flex-wrap">
          <a
            href="#portafolio"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById("portafolio");
              if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: "smooth" });
            }}
            className="inline-block text-[0.9rem] font-semibold tracking-wide px-8 py-3.5 rounded-lg bg-accent text-primary transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(201,168,76,0.35)]"
          >
            Ver nuestro trabajo
          </a>
          <a
            href="#contacto"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById("contacto");
              if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: "smooth" });
            }}
            className="inline-block text-[0.9rem] font-semibold tracking-wide px-8 py-3.5 rounded-lg bg-transparent text-light border border-light/35 transition-all duration-300 hover:border-accent hover:text-accent hover:-translate-y-0.5"
          >
            Contáctanos
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#servicios"
        onClick={(e) => {
          e.preventDefault();
          const el = document.getElementById("servicios");
          if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: "smooth" });
        }}
        aria-label="Ir a servicios"
        className="absolute bottom-10 right-12 z-10 flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity"
        style={{ animation: "fadeInUp 1.1s ease 0.6s both" }}
      >
        <span
          className="block w-2.5 h-2.5 rounded-full bg-accent"
          style={{ animation: "scrollBounce 1.6s ease infinite" }}
        />
      </a>
    </section>
  );
}