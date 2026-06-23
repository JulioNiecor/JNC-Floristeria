# 🌿 Jardín Secreto - Floristería Artesanal

![Estado](https://img.shields.io/badge/Estado-Finalizado-success?style=for-the-badge)
![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TanStack](https://img.shields.io/badge/TanStack_Start-FF4154?style=for-the-badge&logo=reactquery&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

> ⚠️ **Aviso de Portfolio:** Este proyecto es un desarrollo visual de demostración (ficticio) creado exclusivamente para exhibir habilidades de frontend, diseño y arquitectura web. No opera como tienda comercial ni recopila datos reales.

Desarrollado por **Julio Niecor** | [👉 Visita mi Portfolio Principal](https://julioniecor.netlify.app/)

---

## 📖 Sobre el Proyecto

**Jardín Secreto** es una experiencia web inmersiva para una floristería artesanal ubicada en Ubrique, Cádiz. Diseñada con un enfoque de "Top Tier Agency", la aplicación prioriza una interfaz visual impresionante, animaciones coreografiadas fluidas y un rendimiento ultrarrápido sin sacrificar el SEO técnico.

### ✨ Características Principales

- **Experiencia Inmersiva:** Un _Loader_ inicial orquestado al milisegundo con la carga de tipografías y el componente Hero, garantizando cero parpadeos (FOUC). Las animaciones solo se reproducen en la primera visita o al recargar la página inicial.
- **Rendimiento Ultrarrápido:** Arquitectura basada en **Code Splitting** (Lazy loading y Suspense). El peso de los _chunks_ gzipeados de navegación interna oscila entre los 2 KB y 12 KB.
- **Clean Code & Arquitectura Modular:** Estricta separación entre Componentes UI "tontos", Secciones de negocio, y Componentes de Layout. Gestión del estado de navegación minimalista y nativo.
- **SEO Ready & Accesibilidad:** Generación automática de `sitemap.xml`, Rich Snippets con `JSON-LD` (LocalBusiness), soporte para preferencias de reducción de movimiento (`useReducedMotion`), y metadatos dinámicos gestionados en el SSR de TanStack.

## 🚀 Tecnologías

El proyecto se sustenta en el stack más moderno del ecosistema frontend:

- **Framework Core:** [React 19](https://react.dev/) + [TanStack Start](https://tanstack.com/start) (Server-Side Rendering).
- **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/) (usando el nuevo estándar de variables CSS OKLCH)
- **Animaciones:** [Framer Motion 12](https://www.framer.com/motion/)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
- **Validación:** [Zod](https://zod.dev/) + [React Hook Form](https://react-hook-form.com/)
- **Bundler:** [Vite](https://vitejs.dev/)

## 🛠️ Instalación y Uso Local

Asegúrate de tener instalado [Node.js](https://nodejs.org/) y el gestor de paquetes **pnpm**.

```bash
# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/portfolio-floristeria.git

# 2. Navegar al directorio
cd portfolio-floristeria

# 3. Instalar dependencias (con pnpm)
pnpm install

# 4. Iniciar servidor de desarrollo
pnpm run dev
```

Para simular el entorno de producción (con _code splitting_ y optimización máxima):
```bash
pnpm run build
pnpm run preview
```

## 🎨 Diseño y UI

El estilo se ha concebido alejándose de las plantillas genéricas. Utiliza una paleta terrosa y sofisticada (tonos verde bosque profundo y blanco crema roto) que complementa orgánicamente la fotografía botánica. Las microinteracciones aseguran que la web se sienta "viva" en todo momento.

---
*Hecho con dedicación y código limpio por JNC.*
