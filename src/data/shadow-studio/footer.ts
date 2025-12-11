export interface FooterLink {
  name: string;
  href: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

export const links: FooterLink[] = [
  { name: "Inicio", href: "#hero" },
  { name: "Servicios", href: "#services" },
  { name: "Artistas", href: "#artists-section" },
  { name: "Galería", href: "#gallery" },
  { name: "Testimonios", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
  { name: "Contacto", href: "#contact" },
];

export const socials: SocialLink[] = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/eliasx.2/",
    icon: "instagram",
  },
  { name: "TikTok", href: "https://www.tiktok.com/@xliazzzx", icon: "tiktok" },
  {
    name: "WhatsApp",
    href: "https://wa.me/5491135726318?text=Hola!%20Quiero%20info%20sobre%20mi%20página%20web",
    icon: "whatsapp",
  },
];