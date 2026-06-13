import { aboutFeatures } from "@/data/contact";

export default function About() {
    return (
        <section id="nosotros" className="py-24 bg-primary">
            <div className="max-w-[1180px] mx-auto px-8">
                <div className="max-w-[720px] mx-auto">

                    {/* Contenido derecha */}
                        <div className="about__content order-first lg:order-last">
                        <span className="inline-block text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-accent border border-accent px-3.5 py-1 rounded-sm mb-5">
                            Quiénes somos
                        </span>

                        <h2
                            className="font-bold leading-[1.2] text-white mb-6"
                            style={{
                                fontFamily: "var(--font-playfair)",
                                fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                            }}
                        >
                            Apasionados por el<br />
                            <em className="italic text-accent">diseño y el código</em>
                        </h2>

                        <p className="text-muted leading-[1.75] mb-4">
                            ALDACODE fue creado por Omar Aldayr García, desarrollador
                            web y estudiante de Ingeniería en Sistemas Computacionales. Con la
                            misión de ayudar a emprendedores y PyMEs a tener presencia
                            profesional en internet, con la dedicación y calidad que cada
                            proyecto merece.
                        </p>
                        <p className="text-muted leading-[1.75] mb-8">
                            Trabajamos con startups, pymes y negocios independientes,
                            entregando proyectos a tiempo, con comunicación transparente y
                            resultados que superan expectativas.
                        </p>

                        {/* Features */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                            {aboutFeatures.map((feature) => (
                                <div key={feature.id} className="flex items-center gap-3">
                                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center">
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#C9A84C"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="w-3 h-3"
                                        >
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    </div>
                                    <span className="text-sm text-light/80">{feature.label}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <a
                        href="#contacto"
                        className="inline-block text-[0.9rem] font-semibold tracking-wide px-8 py-3.5 rounded-lg bg-accent text-primary transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(201,168,76,0.35)]"
            >
                        Trabajemos juntos
                    </a>
                </div>

            </div>
        </div>
    </section >
  );
}