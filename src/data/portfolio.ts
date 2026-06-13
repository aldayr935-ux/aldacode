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
    id: "melodia",
    tag: "Tienda Online",
    title: "Melodía Music-Store",
    desc: "Sitio de e-commerce cpn catálogo completo, filtros por categorías, sistema de carrito de compras y de pagos online.",
    href: "https://melodia-music-store.vercel.app/",
    imgClass: "portfolio-img--2",
  },
  {
    id: "trackon",
    tag: "App Web",
    title: "TRACKON — Dashboard Logístico",
    desc: "Dashboard de operaciones para empresa de carga y logística. Incluye seguimiento de flota, envíos activos, análisis de rutas con Chart.js y un asistente IA integrado con la API de Claude para consultas en tiempo real.",
    href: "https://trackon-dashboard.vercel.app/",
    imgClass: "portfolio-img--3",
  },
];
