# 🚀 Astro Landing Pages Collection

![Astro](https://img.shields.io/badge/astro-%232C2052.svg?style=for-the-badge&logo=astro&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)

Una colección curada de **Landing Pages de alto rendimiento**, diseñadas con arquitecturas modernas y optimizadas para la velocidad y la experiencia de usuario (UX).

Este repositorio opera como un **monorepo modular**. Cada ruta (ej. `/aurora`) representa una experiencia web completa, aislada e independiente, demostrando dominio sobre diferentes estilos de diseño (Editorial, SaaS, Minimalista) y técnicas avanzadas de frontend.

---

## 🌟 Landings Disponibles

| Proyecto               | Ruta      |      Estado       | Estilo & Características                                                                                                       |
| :--------------------- | :-------- | :---------------: | :----------------------------------------------------------------------------------------------------------------------------- |
| **Estudio Aurora**     | `/aurora` | 🟢 **Completada** | _Editorial, Lujo, Minimalista_. <br> Incluye: Scroll inercial (Lenis), Texturas SVG, Header Glassmorphism y Tipografía Scoped. |
| **[Nombre Landing 2]** | `/ruta-2` |   🔴 Pendiente    | _Tech, SaaS, Dark Mode_. <br> (Próximamente)                                                                                   |

---

## 🛠 Tech Stack & Herramientas

El proyecto utiliza las últimas tecnologías del ecosistema web para garantizar **100/100 en Lighthouse** y una DX (Developer Experience) superior.

### Core

- **[Astro 5.0](https://astro.build):** Framework base para una arquitectura de "Islas" y cero JS por defecto.
- **[Tailwind CSS v4](https://tailwindcss.com):** Motor de estilos con configuración _CSS-first_ y variables nativas.
- **TypeScript:** Tipado estático para componentes robustos y escalables.
- **JavaScript:** Uso de JavaScript puro para optimizar el rendimiento y la experiencia del usuario.

### UI & UX

- **[Lenis Scroll](https://lenis.darkroom.engineering):** Normalización del scroll para una experiencia inercial y fluida.
- **Client Router:** Navegación entre páginas tipo SPA (Single Page Application) nativa.
- **Google Fonts Optimized:** Carga de fuentes optimizada y sin _layout shift_.
- **Noise & Textures:** Uso de SVG Base64 y modos de fusión (`mix-blend-mode`) para acabados orgánicos.

---

## 📂 Arquitectura del Proyecto

El sistema de archivos está diseñado para la **escalabilidad**. Cada landing tiene sus propios componentes, layouts y estilos, evitando conflictos de CSS entre proyectos.

```bash
src/
├── components/
│   ├── estudio-capilar-aurora/
│   ├── [future-landing]/
│   └── generic/
├── layouts/
│   ├── AuroraLayout.astro
│   └── MainLayout.astro
├── pages/
│   ├── aurora.astro
│   ├── index.astro
│   └── 404.astro
└── styles/
    ├── aurora.css
    └── global.css

```

---

## 💡 Detalles de Implementación (Highlights)

🎨 Tailwind v4 Configuration

Este proyecto utiliza la nueva directiva @theme de Tailwind v4 para crear sistemas de diseño aislados (Scoped Design Systems).
CSS

```bash
/* Ejemplo: src/styles/aurora.css */
@theme {
  --font-aurora-title: "Tenor Sans", sans-serif;
  --color-aurora-primary: #ca8a04;
}
```

🧠 Error 404 Inteligente

El sistema incluye una página 404 lógica que detecta la URL del usuario. Si el error ocurre dentro de /aurora/, muestra un diseño de error acorde a la marca "Aurora". Si ocurre en la raíz, muestra un error genérico.

---

## Desarrollado con ❤️ y mucho café por Elias Dev
