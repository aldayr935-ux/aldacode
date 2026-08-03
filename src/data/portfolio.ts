import type { PortfolioItem } from "@/types";

export const portfolioItems: PortfolioItem[] = [
  {
    id: "samay",
    tag: "Landing Page",
    title: "Consultorio de nutrición SAMAY",
    desc: "Página principal para el consultorio SAMAY, con diseño minimalista, integración de formulario para contacto por WhatsApp, sección de ubicaciones con redirigimiento a Google Maps y SEO optimizado para llegar a nuevos pacientes.",
    href: "https://samaynutricion.com",
    imgClass: "portfolio-img--1",
    wide: true,
  },
  {
    id: "burg n' ribs",
    tag: "Landing + menú digital",
    title: "Burg N' Ribs",
    desc: "Sitio web para restaurante, integración de menú digital y QR, Formulario de reservación y enlace a Google maps.",
    href: "https://burgnribs.netlify.app",
    imgClass: "portfolio-img--2",
  },
  {
    id: "trackon",
    tag: "App Fullstack",
    title: "TRACKON — Dashboard Logístico",
    desc: "Dashboard de logística fullstack. React + TypeScript en el frontend, Node.js + Express + PostgreSQL en el backend. Autenticación JWT, API REST con 15+ endpoints, deploy en Railway + Vercel.",
    href: "https://trackon-dashboard.vercel.app/",
    imgClass: "portfolio-img--3",
  },
];
