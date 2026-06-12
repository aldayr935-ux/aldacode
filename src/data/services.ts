import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "diseno-web",
    icon: "M3 3h18v14a2 2 0 01-2 2H5a2 2 0 01-2-2V3zm0 0h18M8 21h8M12 17v4",
    title: "Diseño Web",
    desc: "Interfaces únicas y memorables que reflejan la identidad de tu marca y capturan la atención al primer vistazo.",
    badge: "Popular",
  },
  {
    id: "desarrollo-medida",
    icon: "M16 18l6-6-6-6M8 6L2 12l6 6",
    title: "Desarrollo a Medida",
    desc: "Aplicaciones web robustas y escalables, construidas con las tecnologías más modernas del mercado.",
    featured: true,
  },
  {
    id: "ecommerce",
    icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
    title: "E-Commerce",
    desc: "Tiendas en línea optimizadas para vender, con pasarelas de pago, gestión de inventario y experiencia de compra fluida.",
  },
  {
    id: "seo",
    icon: "M12 2a10 10 0 100 20A10 10 0 0012 2zM2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z",
    title: "SEO & Performance",
    desc: "Optimización técnica para que tu sitio sea de los primeros en Google y cargue de manera rápida.",
  },
{
  id: "responsive",
  icon: "M17 2H7a2 2 0 00-2 2v16a2 2 0 002 2h10a2 2 0 002-2V4a2 2 0 00-2-2z",
  icon2: "M12 18h.01",
  title: "Diseño Responsive",
  desc: "Tu sitio perfectamente adaptado a cualquier dispositivo: móvil, tablet o escritorio, sin comprometer el diseño.",
},
  {
    id: "mantenimiento",
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    title: "Mantenimiento",
    desc: "Soporte continuo, actualizaciones y monitoreo para que tu sitio siempre esté al 100%.",
  },
];