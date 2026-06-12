import { services } from "@/data/services";

export default function Services() {
    return (
        <section id="servicios" className="py-24 bg-primary">
            <div className="max-w-[1180px] mx-auto px-8">

                {/* Header */}
                <div className="section__header text-center max-w-[640px] mx-auto mb-16">
                    <span className="inline-block text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-accent border border-accent px-3.5 py-1 rounded-sm mb-4">
                        Lo que hacemos
                    </span>
                    <h2
                        className="font-bold leading-[1.2] text-white mb-4"
                        style={{
                            fontFamily: "var(--font-playfair)",
                            fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                        }}
                    >
                        Servicios <em className="italic text-accent">premium</em>
                        <br />para tu negocio
                    </h2>
                    <p className="text-muted leading-[1.75]">
                        Soluciones digitales completas pensadas para impactar, convertir y escalar.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className={[
                                "service-card relative rounded-2xl p-8 overflow-hidden",
                                "transition-all duration-300",
                                "hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(0,0,0,0.28)]",
                                service.featured
                                    ? "bg-secondary border border-accent shadow-[0_0_0_1px_rgba(201,168,76,0.15),0_8px_40px_rgba(0,0,0,0.28)]"
                                    : "bg-secondary/25 border border-border hover:border-accent/40",
                            ].join(" ")}
                        >
                            {/* Brillo hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.06] to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                            {/* Icono */}
                            <div className={[
                                "w-12 h-12 rounded-xl flex items-center justify-center mb-6",
                                service.featured ? "bg-accent/20" : "bg-accent/10",
                            ].join(" ")}>
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#C9A84C"
                                    strokeWidth="1.5"
                                    className="w-6 h-6"
                                >
                                    <path d={service.icon} />
                                    {service.icon2 && <path d={service.icon2} />}
                                </svg>
                            </div>

                            {/* Título */}
                            <h3
                                className="text-lg font-semibold text-white mb-3"
                                style={{ fontFamily: "var(--font-playfair)" }}
                            >
                                {service.title}
                            </h3>

                            {/* Descripción */}
                            <p className="text-sm text-muted leading-[1.75]">
                                {service.desc}
                            </p>

                            {/* Badge Popular */}
                            {service.badge && (
                                <span className="absolute top-4 right-4 text-[0.65rem] font-bold tracking-widest uppercase text-primary bg-accent px-2.5 py-1 rounded-sm">
                                    {service.badge}
                                </span>
                            )}

                            {/* Línea dorada inferior (featured) */}
                            {service.featured && (
                                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent" />
                            )}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}