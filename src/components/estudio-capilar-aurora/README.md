# ✨ Estudio Capilar Aurora - Landing Page

Una experiencia web de estilo **Editorial/Premium** diseñada para un estudio de belleza de alto nivel. Se prioriza la estética, la física del movimiento y la eliminación de la "frialdad digital".

## 🎨 Sistema de Diseño

### Tipografía (Scoped)
Estas fuentes están configuradas exclusivamente para este layout en `src/styles/aurora.css`:
- **Títulos:** `Tenor Sans` (Elegancia moderna, sin serifa).
- **Cuerpo:** `Manrope` (Geométrica, alta legibilidad).

### Paleta de Colores
- **Primary:** `Yellow-600` (Dorado/Ocre) - Usado en acentos y hover.
- **Backgrounds:** `White` / `Gray-950` (Dark Mode).
- **Text:** `Gray-900` / `White`.

## ⚡ Características Técnicas Clave

### 1. Glass Header Inteligente
El header (`Header.astro`) detecta el scroll mediante un atributo `data-scrolled`.
- **Top:** Transparente con texto blanco/gris.
- **Scrolled:** Fondo sólido (blanco/negro) con efecto *backdrop-blur*.
- **Mobile Menu:** Overlay completo con animación de entrada secuencial (staggered).

### 2. Textura "Anti-Digital"
Se utiliza una capa de **Ruido SVG (Noise)** en Base64 con `mix-blend-multiply` (light) y `overlay` (dark) para simular textura de papel y unificar las fotografías con el fondo.

### 3. Scroll de Inercia (Lenis)
Implementación de **Lenis Scroll** en el `AuroraLayout` para lograr una navegación suave y pesada, típica de sitios de moda (Awwwards style).

### 4. Animaciones "Reveal"
Uso de `IntersectionObserver` para animar elementos cuando entran en el viewport (fade up + delay en cascada).

### 5. Error 404 Camaleónico
La página de error global detecta si el usuario intentó acceder a una sub-ruta de `/aurora/` y muestra un diseño 404 personalizado con la estética de la marca, en lugar del error genérico.

## 📂 Archivos Críticos

- `src/layouts/AuroraLayout.astro`: Contiene el Preloader, Lenis script y carga de fuentes.
- `src/styles/aurora.css`: Configuración `@theme` de Tailwind v4.
- `src/components/estudio-capilar-aurora/`: Todos los componentes UI.

---
*Notas de desarrollo:*
El logo en el menú móvil cambia de color usando `group-data-[menu-open=true]` inyectado desde el script del Header.