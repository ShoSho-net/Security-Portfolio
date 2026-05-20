# Obianwu Micheal Ifeatu — Cybersecurity Portfolio

Personal portfolio website for **Obianwu Micheal Ifeatu**, a Theatre Arts student at the University of Ibadan building a foundation in cybersecurity. The site introduces who he is, the certifications he's working toward, his early hands-on projects, and the tools he's learning.

**Live site:** https://shosho-net.github.io/Security-Portfolio/

## Tech Stack

- **Framework:** Next.js 15 (App Router) with static export
- **Language:** TypeScript, React 19
- **Styling:** Tailwind CSS with light/dark theming via `next-themes`
- **Animation:** Framer Motion
- **Icons:** Lucide React

## Getting Started

```bash
npm install
npm run dev      # development server at http://localhost:3000
```

## Build

```bash
npm run build    # generates the static site in ./out
```

## Deployment

The site is hosted on GitHub Pages and served from the `gh-pages` branch. To build and publish the latest changes:

```bash
npm run deploy
```

## Editing Content

All content lives in the `components/*-section.tsx` files. See [CLAUDE.md](CLAUDE.md) for conventions and instructions on adding projects, certifications, sections, and tech.
