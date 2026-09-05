import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const BASE_URL = "https://aldacode.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "ALDACODE — Desarrollo Web Profesional en México",
    template: "%s | ALDACODE",
  },
  description:
    "Agencia de desarrollo web en México. Creamos sitios web, tiendas en línea y aplicaciones web a medida para empresas y emprendedores. Diseño profesional, SEO y soporte incluido.",
  keywords: [
    "desarrollo web México",
    "diseño web profesional",
    "agencia web México",
    "sitios web a medida",
    "tienda en línea México",
    "SEO México",
    "Next.js",
    "React",
    "ALDACODE",
  ],
  authors: [{ name: "Omar Aldayr García Hernández", url: BASE_URL }],
  creator: "ALDACODE",
  publisher: "ALDACODE",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: BASE_URL,
    siteName: "ALDACODE",
    title: "ALDACODE — Desarrollo Web Profesional en México",
    description:
      "Creamos sitios web, tiendas en línea y aplicaciones web a medida para empresas y emprendedores en México.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ALDACODE — Desarrollo Web Profesional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ALDACODE — Desarrollo Web Profesional en México",
    description:
      "Creamos sitios web, tiendas en línea y aplicaciones web a medida para empresas y emprendedores en México.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: BASE_URL,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icons/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/icon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/icons/apple-touch-icon.png", sizes: "180x180" },
    ],
    other: [
      { rel: "mask-icon", url: "/icons/safari-pinned-tab.svg", color: "#C9A84C" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}