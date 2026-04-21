# KSPLOITX — Developer Portfolio

> **THE SOVEREIGN MACHINE** — Dark hacker-terminal aesthetic portfolio for Khushneet Singh

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?style=flat-square&logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-ff0055?style=flat-square&logo=framer)

---

## ✦ Overview

A premium developer portfolio built with a **dark hacker-terminal aesthetic** featuring:

- 🖥️ **Matrix rain** canvas animation on hero section
- ⌨️ **Interactive terminal overlay** with 9+ commands
- 📜 **Scroll-driven animations** — no page transitions, pure scroll reveals
- 🎯 **Zero border-radius** — sharp edges everywhere
- 🌐 **Responsive** — mobile-first, works on all viewports

## ✦ Tech Stack

| Layer       | Technology                     |
|-------------|-------------------------------|
| Framework   | Next.js 16 (App Router)       |
| Language    | TypeScript (strict mode)      |
| Styling     | Tailwind CSS v4               |
| Animations  | Framer Motion 12              |
| Icons       | Lucide React                  |
| Fonts       | Space Grotesk · Inter · Geist Mono |

## ✦ Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Global fonts, metadata, navbar
│   ├── page.tsx            # Assembles all sections
│   └── globals.css         # Design system, grid bg, scanlines
├── components/
│   ├── Navbar.tsx           # Transparent → blur navbar + terminal btn
│   ├── sections/
│   │   ├── Hero.tsx         # Full viewport hero with matrix rain
│   │   ├── Projects.tsx     # Sticky scroll card deck
│   │   ├── Skills.tsx       # Staggered typewriter skill grid
│   │   ├── About.tsx        # Timeline with alternating cards
│   │   └── Contact.tsx      # Copy-to-clipboard + social links
│   └── ui/
│       ├── Terminal.tsx      # Full-screen terminal overlay
│       ├── ProjectCard.tsx   # Project display card
│       ├── SkillBadge.tsx    # Individual skill badge
│       └── SectionWrapper.tsx # Scroll-reveal wrapper
├── data/
│   ├── projects.ts          # 3 real projects
│   ├── skills.ts            # 5 skill categories
│   └── about.ts             # Timeline items
└── types/
    └── index.ts             # TypeScript interfaces
```

## ✦ Terminal Commands

Open the terminal via the **TERMINAL_ACCESS** button in the navbar.

| Command | Description |
|---------|-------------|
| `help` | List all available commands |
| `whoami` | Operator identity & bio |
| `projects` | List deployed systems |
| `skills` | ASCII skill matrix |
| `contact` | Communication channels |
| `status` | Current system status |
| `clear` | Clear terminal output |
| `exit` / `quit` | Close terminal |
| `sudo hire khushneet` | 🥚 Easter egg |

## ✦ Getting Started

### Prerequisites

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x

### Installation

```bash
# Clone the repository
git clone https://github.com/KhushneetSingh/Portfolio-ksploitx.git
cd Portfolio-ksploitx

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

### Linting

```bash
npm run lint
```

## ✦ Design Tokens

| Token | Value |
|-------|-------|
| Background | `#131313` |
| Surface | `#1a1a1a` |
| Accent (Green) | `#00ff88` |
| Accent (Cyan) | `#00d4ff` |
| Muted | `#666666` |
| Grid Size | `24px` |
| Border Radius | `0px` (everywhere) |
| Cursor | `crosshair` |

## ✦ Deployment

This portfolio is optimized for deployment on **Vercel**:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

---

<p align="center">
  <code>© 2026 KSPLOITX // ALL_SYSTEMS_OPERATIONAL</code>
</p>
