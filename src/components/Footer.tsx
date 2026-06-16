import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/data/nav";
import { socialLinks } from "@/data/contact";

export default function Footer() {
    return (
        <footer className="bg-primary border-t border-border">
            <div className="max-w-[1180px] mx-auto px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">

                    {/* Brand */}
                    <div className="flex flex-col items-center md:items-start gap-3">
                        <Image
                            src="/img/aldacode_logo.svg"
                            alt="ALDACODE — Web Development"
                            width={280}
                            height={50}
                            className="h-10 w-auto object-contain"
                        />
                        <p className="text-sm text-muted text-center md:text-left leading-relaxed">
                            Tus proyectos, en el mundo digital.
                        </p>
                        {/* Redes sociales */}
                        <div className="flex items-center gap-3 mt-1">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.id}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent hover:bg-accent/20 hover:border-accent/40 transition-all duration-200"
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="w-4 h-4"
                                    >
                                        <path d={social.icon} />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Nav */}
                    <nav aria-label="Navegación footer">
                        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                            {navLinks.map(({ label, href }) => (
                                <li key={href}>
                                    <a
                                        href={href}
                                        className="text-sm text-muted hover:text-accent transition-colors duration-200"
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Copy */}
                    <p className="text-xs text-muted text-center md:text-right">
                        © {new Date().getFullYear()} ALDACODE.
                        <br className="hidden md:block" />
                        Todos los derechos reservados.
                    </p>

                </div>
            </div>
        </footer>
    );
}