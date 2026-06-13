# ALDACODE — Portafolio y emprendimiento web

Página web de emprendimiento ALDACODE conconstruido con Netx.js, Typescript y Tailwindcss. 

## Características

- Seccion HERO con imagen de fondo y degrade.
- Navbar con enlaces a las diferentes secciones. Resposive para móvil o pantallas pequeñas con menú desplegable y botón hamburguesa.
- Scrollreveal para animaciones al cargar las diferentes secciones.
- Portafolio con 3 proyectos destacados y enlaces a dichos proyectos.
- Sección de contacto con formulario con validación y redireccionamiento a Whatsapp.

## Stack

- Next.js + Typescript
- Tailwind CSS 

## Estructura del proyecto
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── not-found.tsx
│   └── page.tsx
├── components/
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Portfolio.tsx
│   ├── ScrollReveal.tsx
│   └── Services.tsx
├── data/
│   ├── contact.ts
│   ├── nav.ts
│   ├── portfolio.ts
│   └── services.ts
├── hooks/
│   ├── useContactForm.ts
│   ├── useNavbar.ts
│   └── useScrollReveal.ts
└── types/
    └── index.ts

## Autor

Aldayr — [ALDACODE] (https://aldacode.vercel.app/)