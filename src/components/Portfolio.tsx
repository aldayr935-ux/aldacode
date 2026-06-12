import { portfolioItems } from "@/data/portfolio";

export default function Portfolio() {
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

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className={[
                "portfolio-card group relative rounded-2xl overflow-hidden border border-border",
                "transition-all duration-300 hover:-translate-y-1 hover:border-accent/40",
                "hover:shadow-[0_8px_40px_rgba(0,0,0,0.35)]",
                item.wide ? "md:col-span-2" : "",
              ].join(" ")}
            >
              {/* Imagen de fondo */}
              <div
                className={[
                  "w-full bg-secondary/60 bg-cover bg-center",
                  "transition-transform duration-500 group-hover:scale-[1.03]",
                  item.wide ? "h-64 md:h-80" : "h-52",
                  item.imgClass,
                ].join(" ")}
              />

              {/* Info */}
              <div className="p-6 bg-secondary/40 backdrop-blur-sm">
                <span className="inline-block text-[0.68rem] font-semibold tracking-[0.14em] uppercase text-accent border border-accent/50 px-2.5 py-0.5 rounded-sm mb-3">
                  {item.tag}
                </span>
                <h3
                  className="text-lg font-semibold text-white mb-2"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm text-muted leading-[1.75] mb-4">
                  {item.desc}
                </p>
                <a
                  href={item.href}
                  target={item.href !== "#" ? "_blank" : undefined}
                  rel={item.href !== "#" ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:gap-3 transition-all duration-200"
                >
                  Ver proyecto
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}