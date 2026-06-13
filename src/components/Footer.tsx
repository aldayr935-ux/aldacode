import Image from "next/image";
import { navLinks } from "@/data/nav";

export default function Footer() {
    return (
        <footer className="bg-primary border-t border-border">
            <div className="max-w-[1180px] mx-auto px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">

                    {/* Brand */}
                    <div className="flex flex-col items-center md:items-start gap-3">
                        <Image
                            src="/img/aldacode_logo.svg"
                            alt="aldacode — Web Development"
                            width={280}
                            height={50}
                            className="h-10 w-auto object-contain"
                        />
                        <p className="text-sm text-muted text-center md:text-left leading-relaxed">
                            Tus proyectos, en el mundo digital.
                        </p>
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