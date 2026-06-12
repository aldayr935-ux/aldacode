// ── Servicios ──────────────────────────────────────────
export interface Service {
  id: string;
  icon: string;
  icon2?: string;   // ← path secundario opcional
  title: string;
  desc: string;
  featured?: boolean;
  badge?: string;
}

// ── Portafolio ─────────────────────────────────────────
export interface PortfolioItem {
  id: string;
  tag: string;
  title: string;
  desc: string;
  href: string;
  imgClass: string;
  wide?: boolean;
}

// ── About features ─────────────────────────────────────
export interface Feature {
  id: string;
  label: string;
}

// ── Contacto ───────────────────────────────────────────
export interface ContactFormData {
  nombre: string;
  email: string;
  servicio: string;
  mensaje: string;
}

export interface ContactItem {
  id: string;
  label: string;
  value: string;
  icon: string;
}

// ── Nav ────────────────────────────────────────────────
export interface NavLink {
  label: string;
  href: string;
}
