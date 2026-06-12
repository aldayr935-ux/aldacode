"use client";

import { useContactForm } from "@/hooks/useContactForm";
import { contactItems, SERVICE_OPTIONS } from "@/data/contact";
import { useState } from "react";

export default function Contact() {
    const { form, errors, status, handleChange, handleSubmit } = useContactForm();
    const [selectOpen, setSelectOpen] = useState(false);

    return (
        <section id="contacto" className="py-24 bg-secondary/20">
            <div className="max-w-[1180px] mx-auto px-8">

                {/* Header */}
                <div className="section__header text-center max-w-[640px] mx-auto mb-16">
                    <span className="inline-block text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-accent border border-accent px-3.5 py-1 rounded-sm mb-4">
                        Contáctanos
                    </span>
                    <h2
                        className="font-bold leading-[1.2] text-white mb-4"
                        style={{
                            fontFamily: "var(--font-playfair)",
                            fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                        }}
                    >
                        ¿Listo para empezar<br />
                        tu <em className="italic text-accent">proyecto</em>?
                    </h2>
                    <p className="text-muted leading-[1.75]">
                        Cuéntanos tu idea y te respondemos en menos de 24 horas.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* Info izquierda */}
                    <div className="contact__info flex flex-col gap-6 items-center lg:items-start">
                        {contactItems.map((item) => (
                            <div key={item.id} className="flex items-center gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#C9A84C"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="w-5 h-5"
                                    >
                                        <path d={item.icon} />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-xs text-muted tracking-widest uppercase mb-0.5">
                                        {item.label}
                                    </p>
                                    <p className="text-sm text-light font-medium">
                                        {item.value || "—"}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Formulario derecha */}
                    <form
                        className="contact__form flex flex-col gap-5"
                        onSubmit={handleSubmit}
                        noValidate
                    >
                        {/* Nombre + Email */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs text-muted tracking-wide uppercase">
                                    Nombre
                                </label>
                                <input
                                    type="text"
                                    name="nombre"
                                    value={form.nombre}
                                    onChange={handleChange}
                                    placeholder="Tu nombre completo"
                                    className={[
                                        "bg-secondary/40 border rounded-lg px-4 py-3 text-sm text-white placeholder:text-muted/50",
                                        "outline-none transition-colors duration-200",
                                        "focus:border-accent/60 focus:bg-secondary/60",
                                        errors.nombre ? "border-red-500/70" : "border-border",
                                    ].join(" ")}
                                />
                                {errors.nombre && (
                                    <span className="text-xs text-red-400">Este campo es requerido</span>
                                )}
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs text-muted tracking-wide uppercase">
                                    Correo electrónico
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="tu@correo.com"
                                    className={[
                                        "bg-secondary/40 border rounded-lg px-4 py-3 text-sm text-white placeholder:text-muted/50",
                                        "outline-none transition-colors duration-200",
                                        "focus:border-accent/60 focus:bg-secondary/60",
                                        errors.email ? "border-red-500/70" : "border-border",
                                    ].join(" ")}
                                />
                                {errors.email && (
                                    <span className="text-xs text-red-400">Ingresa un correo válido</span>
                                )}
                            </div>
                        </div>

                        {/* Servicio */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs text-muted tracking-wide uppercase">
                                Servicio de interés
                            </label>
                            <div className="relative">
                                <button
                                    type="button"
                                    onClick={() => setSelectOpen((prev) => !prev)}
                                    className="w-full bg-secondary/40 border border-border rounded-lg px-4 py-3 text-sm text-left transition-colors duration-200 focus:border-accent/60 focus:bg-secondary/60 outline-none flex items-center justify-between"
                                >
                                    <span className={form.servicio ? "text-white" : "text-muted/50"}>
                                        {form.servicio || "Selecciona un servicio"}
                                    </span>
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        className={[
                                            "w-4 h-4 text-muted transition-transform duration-300",
                                            selectOpen ? "rotate-180" : "",
                                        ].join(" ")}
                                    >
                                        <polyline points="6 9 12 15 18 9" />
                                    </svg>
                                </button>

                                {/* Dropdown */}
                                <div
                                    className={[
                                        "absolute top-full left-0 right-0 z-20 mt-1 bg-secondary border border-border rounded-lg overflow-hidden",
                                        "transition-all duration-300 origin-top",
                                        selectOpen
                                            ? "opacity-100 scale-y-100 pointer-events-auto"
                                            : "opacity-0 scale-y-0 pointer-events-none",
                                    ].join(" ")}
                                >
                                    {SERVICE_OPTIONS.map((opt) => (
                                        <button
                                            key={opt}
                                            type="button"
                                            onClick={() => {
                                                handleChange({
                                                    target: { name: "servicio", value: opt },
                                                } as React.ChangeEvent<HTMLSelectElement>);
                                                setSelectOpen(false);
                                            }}
                                            className={[
                                                "w-full text-left px-4 py-3 text-sm transition-colors duration-150",
                                                form.servicio === opt
                                                    ? "text-accent bg-accent/10"
                                                    : "text-light/80 hover:bg-white/5 hover:text-white",
                                            ].join(" ")}
                                        >
                                            {opt}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/* Mensaje */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs text-muted tracking-wide uppercase">
                                Mensaje
                            </label>
                            <textarea
                                name="mensaje"
                                value={form.mensaje}
                                onChange={handleChange}
                                placeholder="Cuéntanos sobre tu proyecto..."
                                rows={5}
                                className={[
                                    "bg-secondary/40 border rounded-lg px-4 py-3 text-sm text-white placeholder:text-muted/50",
                                    "outline-none transition-colors duration-200 resize-none",
                                    "focus:border-accent/60 focus:bg-secondary/60",
                                    errors.mensaje ? "border-red-500/70" : "border-border",
                                ].join(" ")}
                            />
                            {errors.mensaje && (
                                <span className="text-xs text-red-400">Este campo es requerido</span>
                            )}
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={status !== "idle"}
                            className={[
                                "w-full py-3.5 rounded-lg text-sm font-semibold tracking-wide transition-all duration-300",
                                status === "sending"
                                    ? "bg-accent/60 text-primary cursor-not-allowed"
                                    : status === "sent"
                                        ? "bg-green-500 text-white"
                                        : "bg-accent text-primary hover:opacity-90 hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(201,168,76,0.35)]",
                            ].join(" ")}
                        >
                            {status === "sending"
                                ? "Abriendo WhatsApp..."
                                : status === "sent"
                                    ? "¡Mensaje enviado! ✓"
                                    : "Enviar mensaje"}
                        </button>

                        <p className="text-xs text-muted text-center">
                            Te respondemos en menos de 24 horas hábiles.
                        </p>
                    </form>

                </div>
            </div>
        </section>
    );
}