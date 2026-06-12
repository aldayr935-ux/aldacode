"use client";

import Image from "next/image";
import { useNavbar } from "@/hooks/useNavbar";
import { navLinks } from "@/data/nav";

export default function Navbar() {
    const { navRef, scrolled, menuOpen, activeHref, toggleMenu, handleLinkClick } =
        useNavbar();

    return (
        <>
            <nav
                ref={navRef as React.RefObject<HTMLElement>}
                className={[
                    "fixed top-0 left-0 w-full z-50 transition-all duration-300",
                    scrolled
                        ? "bg-primary/95 backdrop-blur-sm shadow-lg border-b border-border py-4"
                        : "bg-transparent py-7",
                ].join(" ")}
                aria-label="Navegación principal"
            >
                <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

                    {/* Logo */}
                    <a
                        href="#inicio"
                        onClick={(e) => { e.preventDefault(); handleLinkClick("#inicio"); }}
                        className="flex items-center gap-3 group h-20"
                        aria-label="NETIKA — Inicio"
                    >
                        <Image
                            src="/img/netika_logo.svg"
                            alt="Logo NETIKA"
                            width={280}
                            height={50}
                            className="h-12 w-auto object-contain"
                            priority
                        />
                    </a>

                    {/* Links desktop */}
                    <ul className="hidden md:flex items-center gap-8" role="list">
                        {navLinks.map(({ label, href }) => (
                            <li key={href}>
                                <a
                                    href={href}
                                    onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                                        e.preventDefault()
                                        handleLinkClick(href)
                                    }}
                                    className={[
                                        "text-sm tracking-wide transition-colors duration-200 relative pb-0.5",
                                        "after:absolute after:bottom-0 after:left-0 after:h-px after:bg-accent",
                                        "after:transition-all after:duration-300",
                                        activeHref === href
                                            ? "text-accent after:w-full"
                                            : "text-light/80 hover:text-white after:w-0 hover:after:w-full",
                                    ].join(" ")}
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* CTA desktop */}
                    <a
                        href="#contacto"
                        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                            e.preventDefault()
                            handleLinkClick("#contacto")
                        }}
                        className="hidden md:inline-flex items-center gap-2 bg-accent hover:bg-accent-dim text-primary font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors duration-200"
                    >
                        Solicitar proyecto
                    </a>

                    {/* Hamburger */}
                    <button
                        onClick={toggleMenu}
                        aria-expanded={menuOpen}
                        aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
                        className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-lg hover:bg-white/10 transition-colors"
                    >
                        <span className={["block w-6 h-0.5 bg-white transition-all duration-300 origin-center", menuOpen ? "rotate-45 translate-y-2" : ""].join(" ")} />
                        <span className={["block w-6 h-0.5 bg-white transition-all duration-300", menuOpen ? "opacity-0 scale-x-0" : ""].join(" ")} />
                        <span className={["block w-6 h-0.5 bg-white transition-all duration-300 origin-center", menuOpen ? "-rotate-45 -translate-y-2" : ""].join(" ")} />
                    </button>
                </div>
            </nav>

            {/* Overlay móvil */}
            <div
                onClick={() => handleLinkClick("")}
                aria-hidden="true"
                className={[
                    "fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden",
                    menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
                ].join(" ")}
            />

            {/* Menú móvil */}
            <div
                role="dialog"
                aria-modal="true"
                aria-label="Menú de navegación"
                className={[
                    "fixed top-0 right-0 h-full w-72 z-50 flex flex-col",
                    "bg-secondary border-l border-border",
                    "transition-transform duration-300 ease-in-out md:hidden",
                    menuOpen ? "translate-x-0" : "translate-x-full",
                ].join(" ")}
            >
                <div className="flex items-center justify-between px-6 py-5 border-b border-border">
                    <span style={{ fontFamily: "var(--font-playfair)" }} className="font-bold text-lg tracking-widest">
                        <span className="text-white">NET</span>
                        <span className="text-accent">IKA</span>
                    </span>
                    <button
                        onClick={() => handleLinkClick("")}
                        aria-label="Cerrar menú"
                        className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                            <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <ul className="flex flex-col gap-1 px-4 py-6 flex-1" role="list">
                    {navLinks.map(({ label, href }) => (
                        <li key={href}>
                            <a
                                href={href}
                                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                                    e.preventDefault()
                                    handleLinkClick(href)
                                }}
                                className={[
                                    "block px-4 py-3 rounded-lg text-sm tracking-wide transition-colors duration-200",
                                    activeHref === href
                                        ? "bg-accent/10 text-accent font-semibold"
                                        : "text-light/80 hover:bg-white/5 hover:text-white",
                                ].join(" ")}
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="px-6 py-6 border-t border-border">
                    <a
                        href="#contacto"
                        onClick={(e) => {
                            e.preventDefault()
                            handleLinkClick("#contacto")
                        }}
                        className="block w-full text-center bg-accent hover:bg-accent-dim text-primary font-semibold text-sm px-5 py-3 rounded-lg transition-colors duration-200"
                    >
                        Solicitar proyecto
                    </a>
                </div>
            </div>
        </>
    )
}