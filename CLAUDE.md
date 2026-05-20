# CLAUDE.md — Security-Portfolio

## Project Overview

Personal portfolio for **Obianwu Michael**, an aspiring security software engineer. Single-page, client-side site inspired by [santifer.io](https://santifer.io/). No backend, no API routes, no database. All content lives in component files.

## Tech Stack

- **Framework:** Next.js 15 (App Router), React 19, TypeScript 5 (strict)
- **Styling:** Tailwind CSS 3.4 with CSS variables (HSL), `class`-based dark mode via `next-themes`
- **UI:** Lucide React icons, custom card/badge primitives (no shadcn dependency)
- **Animations:** Framer Motion (scroll-triggered fade/blur, staggered grids)
- **Fonts:** Geist Sans (body) + Geist Mono (mono/accents) via `geist/font`
- **Path alias:** `@/*` -> project root

## Commands

```bash
npm install              # install dependencies
npm run dev              # dev server at http://localhost:3000
npm run build            # production build (must pass cleanly)
npm run start            # serve production build
npm run lint             # ESLint via next lint
```

## Directory Structure

```
app/
  layout.tsx                          # ThemeProvider, fonts, Navigation, Footer
  page.tsx                            # Composes all section components
  globals.css                         # CSS variables for light & dark themes

components/
  navigation.tsx                      # Fixed top nav, anchor links, theme toggle, mobile menu
  footer.tsx                          # Social links + nav links + copyright
  theme-provider.tsx                  # next-themes wrapper
  theme-toggle.tsx                    # Sun/Moon button
  hero-section.tsx                    # Avatar, name, headline, CTAs, socials
  about-section.tsx                   # Bio + "currently learning" aside
  certifications-section.tsx          # Card grid; status badges (Earned/In Progress/Studying)
  projects-section.tsx                # Card grid; tech badges; GitHub links
  tech-stack-section.tsx              # Icon grid grouped by category; uses cdn.simpleicons.org

lib/
  utils.ts                            # cn() — clsx + tailwind-merge

public/
  avatar.svg                          # Placeholder avatar (OM initials, gradient bg)
```

## Coding Conventions

### Naming
- **Files:** kebab-case (`hero-section.tsx`, `tech-stack-section.tsx`)
- **Exports:** PascalCase named exports (`export function HeroSection()`)
- **Suffixes:** `-section.tsx` for homepage sections

### Components
- All section/interactive components use `"use client"`
- Functional components only; no class components
- Named exports for reusable components; default export only for `page.tsx`

### Styling
- Always use `cn()` from `@/lib/utils` for conditional classes
- Tailwind semantic tokens: `bg-background`, `text-foreground`, `bg-card`, `text-muted-foreground`, `border-border`, `text-accent`
- Mobile-first responsive (`sm:`, `md:`, `lg:`)
- Section wrapper convention:
  ```tsx
  <section id="..." className="flex min-h-screen items-center justify-center px-4 py-20 md:px-6">
    <div className="mx-auto w-full max-w-5xl">...</div>
  </section>
  ```
- Section headings follow the pattern: small mono kicker (`01 — About`) -> bold h2 -> short divider bar -> optional subtitle

### Animations (Framer Motion)
- Scroll-triggered: `useInView(ref, { once: true, margin: "-100px" })`
- Entry: `initial={{ opacity: 0, y: 16 }}` -> `animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}`
- Heading blur-in: also animate `filter: "blur(8px)" -> "blur(0px)"`
- Card stagger: `delay: 0.1 + i * 0.08`

### Tech Stack Icons
- Source: `https://cdn.simpleicons.org/{slug}/{hex-color}` (no leading `#`)
- Use `next/image` with `unoptimized` (remote pattern already whitelisted in `next.config.mjs`)
- `TechIcon` (in `tech-stack-section.tsx`) provides fallback initials on `onError`

## Adding a New Project

Edit [components/projects-section.tsx](components/projects-section.tsx) and append to the `projects` array:
```ts
{
  title: "MyTool",
  tagline: "One-line description",
  description: "Longer paragraph about what it does and what you learned.",
  tech: ["Python", "asyncio"],
  github: "https://github.com/obianwumichael/mytool",
  icon: SomeLucideIcon,
}
```

## Adding a New Certification

Edit [components/certifications-section.tsx](components/certifications-section.tsx) and append to the `certifications` array. `status` must be one of: `"Earned" | "In Progress" | "Studying"`.

## Adding a Tech to the Stack

Edit [components/tech-stack-section.tsx](components/tech-stack-section.tsx). Add to the appropriate group's `items`:
```ts
{ name: "Rust", logo: "https://cdn.simpleicons.org/rust/000000" }
```
Find the simpleicons slug at https://simpleicons.org/.

## Adding a New Homepage Section

1. Create `components/{name}-section.tsx` with `"use client"`, `useRef`, `useInView`, `motion`
2. Use the section wrapper convention above; pick an `id` for the anchor link
3. Import and render in [app/page.tsx](app/page.tsx)
4. Add a nav item in [components/navigation.tsx](components/navigation.tsx) `navItems` array
5. Optionally add to [components/footer.tsx](components/footer.tsx) `navLinks` array

## Theme System

- `class`-based dark mode (Tailwind config); flipped by `next-themes` writing `class="dark"` on `<html>`
- All colors driven by CSS variables in [app/globals.css](app/globals.css) (HSL triplets without `hsl()`)
- Default theme is `light` with `enableSystem`; toggle preserves user choice
- Accent color is a green (`hsl(142 71% 45%)` light / `hsl(142 76% 47%)` dark) — subtle nod to the security/terminal aesthetic without going full hacker meme

## Known Limitations

- All content is placeholder/dummy — projects link to GitHub URLs that don't exist yet
- Contact CTA is a plain `mailto:` — no form or backend
- Social links use placeholder usernames (`obianwumichael`); update before publishing
- No tests installed
- No SEO meta beyond title/description; no Open Graph image
- No analytics
