import type { ContactItem, Feature } from "@/types";

export const contactItems: ContactItem[] = [
  {
    id: "telefono",
    label: "Teléfono",
    value: "+52 55 7388 8094",
    icon: "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.5 10.7 19.79 19.79 0 01.44 2.11 2 2 0 012.41.07h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.06 6.06l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0121.95 15l-.03 1.92z",
  },
  {
    id: "correo",
    label: "Correo",
    value: "aldayr935@gmail.com",
    icon: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM22 6l-10 7L2 6",
  },
  {
    id: "ubicacion",
    label: "Ubicación",
    value: "México · Trabajo remoto",
    icon: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0zM12 10a3 3 0 100-6 3 3 0 000 6z",
  },
];

export const aboutFeatures: Feature[] = [
  { id: "f1", label: "Entregas puntuales garantizadas" },
  { id: "f2", label: "Diseño personalizado, sin plantillas" },
  { id: "f3", label: "Soporte post-lanzamiento incluido" },
  { id: "f4", label: "Código limpio y documentado" },
];

export const WHATSAPP_NUMBER = "525573888094";

export const SERVICE_OPTIONS = [
  "Diseño Web",
  "Desarrollo a Medida",
  "E-Commerce",
  "SEO & Performance",
  "Mantenimiento",
  "Otro",
];