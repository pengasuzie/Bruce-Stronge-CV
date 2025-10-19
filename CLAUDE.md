# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A professional CV website for Bruce Stronge built with Vite, React, TypeScript, Tailwind CSS, and shadcn-ui. The site is deployed to GitHub Pages at https://pengasuzie.github.io/Bruce-Stronge-CV/

## Common Commands

```bash
# Development
npm run dev              # Start dev server on http://localhost:8080
npm run build            # Production build
npm run build:dev        # Development build (for testing)
npm run preview          # Preview production build locally
npm run lint             # Run ESLint

# Git workflow
git add .
git commit -m "message"
git push                 # Triggers automatic GitHub Pages deployment
```

## Architecture

### Component Structure

The application follows a single-page CV layout with modular section components:

- **App.tsx**: Root component with React Router setup using `BrowserRouter` with `basename={import.meta.env.BASE_URL}` for GitHub Pages compatibility
- **pages/Index.tsx**: Main page that composes all CV sections in order
- **components/cv/**: Custom CV section components (Hero, About, Skills, Experience, Education, Impact, Contact)
- **components/ui/**: shadcn-ui components (automatically generated, avoid manual edits)

### Routing

Single-page application with minimal routing:
- `/` → Index page (main CV)
- `*` → NotFound (404 page)

All custom routes must be added ABOVE the catch-all `*` route in src/App.tsx:16-20.

### Styling System

- **Tailwind CSS** with custom configuration in `tailwind.config.ts`
- **CSS variables** for theme colors (defined in `src/index.css`)
- **Custom font families**:
  - `font-sans`: Inter (body text)
  - `font-display`: Playfair Display (headings)
- **Green gradient theme**: Hero section uses `gradient-hero` class with custom green gradient

### Path Handling for GitHub Pages

Critical for deployment:
- Vite config sets `base: "/Bruce-Stronge-CV/"` in production mode only
- React Router uses `basename={import.meta.env.BASE_URL}`
- Static assets (images in `/public`) must use `${import.meta.env.BASE_URL}filename.ext` pattern
- Example: `src={`${import.meta.env.BASE_URL}bruce-profile.jpg`}` in src/components/cv/Hero.tsx:41

### State Management

- **TanStack Query** for server state (QueryClient in App.tsx)
- **React Context** via shadcn-ui providers (TooltipProvider, Toaster)

## Deployment

Automatic deployment to GitHub Pages via `.github/workflows/deploy.yml`:
- Triggers on push to `main` branch
- Builds with Node.js 20
- Deploys `dist/` folder to GitHub Pages

## Development Notes

- Path alias `@` points to `./src` directory
- Dev server runs on port 8080 with IPv6 support
- Uses Vite's React SWC plugin for fast builds
- shadcn-ui components are configured in `components.json`
