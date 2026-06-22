# 🚀 Portfolio — José David Ibargüen

> Portafolio profesional **Dark Tech** construido con Next.js 15, Tailwind CSS v4 y desplegable en Vercel con un solo comando.

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwindcss)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-000?logo=vercel)

---

## ✨ Features

- 🎨 **Dark Tech Premium** — Paleta cian eléctrico + naranja, glassmorphism, micro-animaciones
- 🌐 **i18n Español / Inglés** — Cambio dinámico sin recarga
- 💻 **Terminal Animado** — Efecto typewriter con syntax highlighting en el hero
- 📱 **Mobile-First Responsive** — Diseño adaptativo completo
- ⚡ **SEO Impecable** — Meta tags, Open Graph, Twitter Cards, schema
- 📬 **Formulario de Contacto** — API Route serverless con rate limiting y Nodemailer
- 💬 **WhatsApp + Email** — Botones flotantes con animación pulse
- 🎭 **Scroll Animations** — Reveal on scroll con Intersection Observer
- 🔒 **Seguridad** — Sanitización de inputs, rate limiting en API

---

## 🛠️ Tech Stack

| Categoría | Tecnología |
|-----------|-----------|
| Framework | Next.js 15 (App Router) |
| Styling | Tailwind CSS v4 |
| Language | JavaScript (React 19) |
| Fonts | Space Grotesk + Inter (via `next/font`) |
| Backend | Next.js API Routes (Serverless) |
| Email | Nodemailer (configurable) |
| Deploy | Vercel |

---

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── layout.js              # Root layout + SEO metadata
│   ├── page.js                # Página principal
│   ├── globals.css            # Design tokens + animaciones
│   └── api/contact/route.js   # API de contacto
├── components/
│   ├── Navbar.jsx             # Nav + glassmorphism + i18n toggle
│   ├── HeroSection.jsx        # Terminal animado + CTAs
│   ├── AboutSection.jsx       # Perfil profesional
│   ├── ExperienceTimeline.jsx # Timeline vertical animado
│   ├── TechStackGrid.jsx      # Grid de tecnologías con hover
│   ├── EducationSection.jsx   # Formación + idiomas
│   ├── ContactForm.jsx        # Formulario de contacto
│   ├── FloatingButtons.jsx    # WhatsApp + Email flotantes
│   ├── Footer.jsx             # Footer con social links
│   └── ScrollReveal.jsx       # Wrapper animación on-scroll
├── context/
│   └── LanguageContext.jsx    # i18n context (ES/EN)
├── i18n/
│   ├── es.json                # Traducciones español
│   └── en.json                # Traducciones inglés
└── hooks/
    └── useScrollReveal.js     # Hook Intersection Observer
```

---

## 🚀 Quick Start

### Requisitos previos
- Node.js 18+ instalado
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/JOELIHNOJR/portfolio-josedavid.git
cd portfolio-josedavid

# Instalar dependencias
npm install

# Iniciar en desarrollo
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000) en tu navegador.

### Build de producción

```bash
npm run build
npm start
```

---

## 📬 Configuración del Formulario de Contacto

El formulario de contacto funciona de dos maneras:

### Sin configuración (desarrollo)
Los mensajes se imprimen en la consola del servidor. Perfecto para desarrollo.

### Con Nodemailer (producción)
Configura las siguientes **variables de entorno** en tu panel de Vercel:

| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| `SMTP_HOST` | Servidor SMTP | `smtp.gmail.com` |
| `SMTP_PORT` | Puerto SMTP | `587` |
| `SMTP_USER` | Email SMTP | `tu-email@gmail.com` |
| `SMTP_PASS` | Password / App Password | `xxxx xxxx xxxx xxxx` |
| `CONTACT_EMAIL` | Email destino | `josedavidibar9@gmail.com` |

> **Tip:** Para Gmail, usa una [App Password](https://support.google.com/accounts/answer/185833) en vez de tu contraseña normal.

---

## 📄 CV Descargable

Para que el botón "Descargar CV" funcione, coloca tu archivo PDF en:

```
public/cv-jose-david.pdf
```

---

## 🌐 Deploy en Vercel

### Opción 1: Automático (recomendado)

1. Haz push del código a GitHub
2. Ve a [vercel.com](https://vercel.com)
3. Click "Import Project" → selecciona el repo
4. Vercel detecta Next.js automáticamente → Click "Deploy"
5. Configura las env vars para email en Settings → Environment Variables

### Opción 2: CLI

```bash
npm i -g vercel
vercel
```

---

## 🎨 Paleta de Colores

| Token | Color | Hex | Uso |
|-------|-------|-----|-----|
| `--bg-primary` | 🔵 Azul marino profundo | `#0A0F1E` | Fondo principal |
| `--accent-cyan` | 🔹 Cian eléctrico | `#00D4FF` | CTAs, enlaces, highlights |
| `--accent-orange` | 🟠 Naranja | `#FF6B35` | Badges, alertas, acentos |
| `--text-primary` | ⬜ Blanco azulado | `#E8EDF5` | Texto principal |
| `--surface-card` | 🔲 Gris oscuro | `#111827` | Tarjetas, superficies |
| `--surface-hover` | 🔳 Gris hover | `#1a2332` | Estado hover de tarjetas |

---

## 📋 Datos de Contacto

- **Email:** josedavidibar9@gmail.com
- **WhatsApp:** [+57 302 649 1362](https://wa.me/573026491362)
- **LinkedIn:** [José David Ibargüen](https://www.linkedin.com/in/jose-david-ibarguen-renteria-212734200)
- **GitHub:** [JOELIHNOJR](https://github.com/JOELIHNOJR)

---

## 📝 Licencia

Este proyecto es de uso personal. Todos los derechos reservados © 2026 José David Ibargüen Renteria.
