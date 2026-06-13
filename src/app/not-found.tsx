import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
    return (
        <main className="relative min-h-screen bg-primary flex flex-col items-center justify-center px-6 py-12 text-center overflow-hidden">
            {/* Brillo decorativo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/[0.03] blur-3xl pointer-events-none" />

            {/* Logo */}
            <Link href="/">
                <Image
                    src="/img/aldacode_logo.svg"
                    alt="ALDACODE"
                    width={280}
                    height={50}
                    className="h-14 w-auto object-contain mb-16 opacity-80 hover:opacity-100 transition-opacity"
                />
            </Link>

            {/* 404 */}
            <h1
                className="font-bold text-accent leading-none mb-4"
                style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: "clamp(6rem, 15vw, 10rem)",
                }}
            >
                404
            </h1>

            <h2
                className="font-bold text-white mb-4"
                style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: "clamp(1.4rem, 3vw, 2rem)",
                }}
            >
                Página no encontrada
            </h2>

            <p className="text-muted text-sm leading-relaxed max-w-md mb-10">
                La página que buscas no existe o fue movida.
                Regresa al inicio y continúa explorando.
            </p>

            <Link
                href="/"
                className="inline-block text-[0.9rem] font-semibold tracking-wide px-8 py-3.5 rounded-lg bg-accent text-primary transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(201,168,76,0.35)]"
            >
                Volver al inicio
            </Link>

        </main>
    );
}