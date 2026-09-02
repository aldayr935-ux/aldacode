"use client";

import { useState } from "react";
import GradientWaves from "./ui/GradientWaves";
import BlurText from "./ui/BlurText";

export default function Hero() {
  const [isTitleFinished, setIsTitleFinished] = useState(false);

  return (
    <section
      id="inicio"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Fondo animado */}
      <div className="inset-0 fixed">
        <GradientWaves
          horizonColor="#ffc527"
          waveColor="#ecd825"
          crestColor="#f0c91e"
          speed={0.3}
          amplitude={2.5}
          waveScale={0.6}
          waveRatio={0.9}
          swell={35}
          turbulence={20}
          tilt={1.11}
          zoom={1}
          height={5.5}
          fogDepth={15}
          detail="medium"
          brightness={1}
          opacity={1}
          mouseInteraction
          parallaxStrength={0.5}
          grain
          grainIntensity={0.05}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center px-6 max-w-4xl mx-auto pt-[calc(var(--navbar-h)+2rem)]">

        {/* Título en dos líneas con alineación opuesta */}
        <h1
          className="font-bold leading-[1.15] text-white mb-5 w-full max-w-2xl"
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(2.6rem, 5vw, 4rem)",
          }}
        >
          <div className="text-left">
            <BlurText
              text="Tus proyectos en el"
              delay={150}
              animateBy="words"
              direction="top"
            />
          </div>
          <div className="text-right">
            <BlurText
              text="mundo digital"
              delay={250}
              animateBy="words"
              direction="top"
              onAnimationComplete={() => setIsTitleFinished(true)}
            />
          </div>
        </h1>

        {/* Descripción y botones — siempre en el DOM, sin salto */}
        <div
          className="flex flex-col items-center w-full max-w-2xl transition-opacity duration-700"
          style={{ opacity: isTitleFinished ? 1 : 0 }}
        >
          <p className="text-[1.05rem] font-light leading-[1.75] text-light mt-10 mb-16 w-full">
            En ALDACODE creemos en el poder de la web para impulsar tus proyectos.
            Creamos tu sitio web personalizado para tu negocio, blog personal,
            portafolio, tienda online o lo que imagines. Lleva tus ideas al
            siguiente nivel.
          </p>

          {/* Botones del mismo ancho que el texto */}
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <a
              href="#portafolio"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("portafolio");
                if (el) window.scrollTo({ top: el.offsetTop - 60, behavior: "smooth" });
              }}
              className="flex-1 text-center text-[0.9rem] font-semibold tracking-wide px-8 py-3.5 rounded-lg bg-accent text-primary transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(201,168,76,0.35)]"
            >
              Ver nuestro trabajo
            </a>
            <a
              href="#contacto"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("contacto");
                if (el) window.scrollTo({ top: el.offsetTop - 60, behavior: "smooth" });
              }}
              className="flex-1 text-center text-[0.9rem] font-semibold tracking-wide px-8 py-3.5 rounded-lg bg-transparent text-light border border-light/35 transition-all duration-300 hover:border-accent hover:text-accent hover:-translate-y-0.5"
            >
              Contáctanos
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#servicios"
        onClick={(e) => {
          e.preventDefault();
          const el = document.getElementById("servicios");
          if (el) window.scrollTo({ top: el.offsetTop - 60, behavior: "smooth" });
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