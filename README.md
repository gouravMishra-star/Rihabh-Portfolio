# itsRishabh — Rishabh Mishra Portfolio

<div align="center">

![Portfolio Banner](./public/cinema/hero-cinema-bg.jpg)

### Motion Designer & AI Visual Artist (2D · 3D · AI)
*From pixels to possibilities—creating compelling motion through art, design, and AI.*

[![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![EmailJS](https://img.shields.io/badge/EmailJS-FF7A00?style=for-the-badge&logo=maildotru&logoColor=white)](https://www.emailjs.com/)

[**LinkedIn**](https://www.linkedin.com/in/rishabh-mishra-1b8b11226?utm_source=share_via&utm_content=profile&utm_medium=member_android) · [**Instagram (@nevodeeig)**](https://www.instagram.com/nevodeeig?lqvp=ZDNlZDc0MzIxNw==)

</div>

---

## Overview

Personal portfolio website for **Rishabh Mishra (`itsRishabh`)**, a Motion Designer and AI Visual Artist specializing in **2D/3D animation, VFX, SaaS explainers, product ads, 3D look development, and AI video production**.

### Highlights

- **Cinematic Dark Aesthetic**: Deep obsidian canvas (`#030408`) paired with ice-cyan/arctic-blue accents, subtle film grain, glassmorphism cards, and editorial typography (`Syne`, `Inter`, `JetBrains Mono`).
- **Selected Works & Project Details**: Category filtering across *Motion Design*, *Product Ads*, *SaaS Explainer*, *Educational*, *3D Look Development*, and *AI Video Production*, with dedicated `/project/[id]` pages and YouTube playback.
- **Smooth Motion & Interactions**: Lenis smooth scrolling, Framer Motion `LazyMotion` animations, magnetic buttons, and pointer-reactive spotlight effects.
- **EmailJS Contact Form**: Server-side `/api/send-email` route backed by the EmailJS REST API, with honeypot spam protection, input validation, and disposable-email filtering—keeping private keys off the client.

---

## Tech Stack

- **Framework**: Next.js 16 (App Router + Turbopack), React 19, TypeScript
- **Styling**: Tailwind CSS 4, Radix UI, Lucide Icons, Sonner Toasts
- **Animation & Scroll**: Framer Motion, Lenis
- **Contact / Email**: EmailJS REST API (server-side with Private Key)
- **Testing**: Vitest

---

## Getting Started

### Prerequisites

- Node.js 20+
- npm (or bun)

### 1. Clone the Repository

```bash
git clone https://github.com/gouravMishra-star/Rihabh-Portfolio.git
cd Rihabh-Portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Copy `.env.example` to `.env` and fill in your EmailJS credentials:

```bash
cp .env.example .env
```

```env
EMAILJS_SERVICE_ID=your_emailjs_service_id
EMAILJS_SERVICE_NAME=your_emailjs_service_name
EMAILJS_TEMPLATE_ID=your_emailjs_template_id
EMAILJS_PUBLIC_KEY=your_emailjs_public_key
EMAILJS_PRIVATE_KEY=your_emailjs_private_key
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

#### EmailJS Setup Notes
- Your EmailJS template should accept the variables: `{{name}}`, `{{email}}`, `{{project_type}}`, `{{timeline}}`, `{{message}}`, and `{{time}}`.
- In **EmailJS Dashboard → Account → Security**, enable:
  - **Allow EmailJS API for non-browser applications**
  - **Use Private Key**

### 4. Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Start Next.js development server with Turbopack |
| `npm run build` | Build production bundle |
| `npm run start` | Run the production server |
| `npm run lint` | Run ESLint |
| `npm test` | Run Vitest unit tests once |
| `npm run test:watch` | Run Vitest in watch mode |

---

## Adding New Projects

Edit `src/db/projects.ts` and add an entry to `allVideoProjects`:

```ts
{
  id: "youtube-video-id",
  video_title: "Project Title",
  video_description: "Brief overview of the work and visual direction.",
  tags: ["Motion Design", "3D Look Development"],
  cover_image: "youtube-video-id",
  publish_date: "2026-03-09",
  client_name: "Client Name",
  client_image: "",
  client_feedback: "",
  video_link: "https://www.youtube.com/watch?v=youtube-video-id",
  project_images: [],
  category: ["Motion Design", "Product Ads"],
  software_used: ["After Effects", "Blender", "Premiere Pro"],
}
```

Available categories are defined in `src/db/categories.ts`.

---

## Project Structure

```plaintext
Rihabh-Portfolio
├── public
│   ├── cinema/                 # Editorial & hero visuals
│   ├── companies/              # Client logos
│   ├── project-images/         # Project thumbnails/stills
│   ├── tools/                  # Software & tool icons
│   └── rishabh.jpg             # Portrait avatar
├── src
│   ├── app
│   │   ├── about/              # About page
│   │   ├── api/send-email/     # EmailJS API route + tests
│   │   ├── contact/            # Contact page & form
│   │   ├── project/[id]/       # Dynamic project detail pages
│   │   ├── skills/             # Skills & tools showcase
│   │   ├── layout.tsx          # Root layout & SEO metadata
│   │   └── page.tsx            # Homepage
│   ├── components
│   │   ├── portfolio/          # Home sections (About, Skills, Selected Works, Experience, Contact)
│   │   ├── cinema/             # Spotlight & visual effects
│   │   └── ui/                 # Shared UI primitives
│   ├── db
│   │   ├── categories.ts       # Work categories
│   │   ├── clients.ts          # Client list
│   │   ├── projects.ts         # Video projects data
│   │   └── skills.ts           # Skills & tools data
│   ├── lib/                    # Helpers & unit tests
│   └── types/                  # TypeScript definitions
├── .env.example
├── next.config.ts
├── package.json
└── vitest.config.ts
```

---

## Deployment (Vercel)

1. Import `gouravMishra-star/Rihabh-Portfolio` in [Vercel](https://vercel.com/).
2. Add the environment variables from `.env.example` in **Project Settings → Environment Variables**.
3. Deploy — pushes to `main` will automatically trigger new deployments.

---


