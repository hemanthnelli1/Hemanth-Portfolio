# Nelli Hemanth — Portfolio

A React + Tailwind CSS v4 + Framer Motion portfolio, built with the same component language as ui.aceternity.com (hand-built equivalents, since their registry isn't installable outside their own CLI/site):

- **Floating Dock** — bottom nav with macOS-style mouse-proximity magnification
- **Hero** with your reference photo as a full-bleed background + an infinite moving tag marquee
- **Text Generate Effect** — words fade/blur in on scroll for the About heading
- **Tracing Beam** — a glowing scroll-progress line running down the About/Experience column
- **Bento Grid** — the Skills section
- **Timeline** — the Experience section
- **3D tilt project cards** (card-hover-effect style) — Projects section
- **Infinite Moving Cards** — Certifications marquee
- **Background Beams** — animated glow behind the Contact CTA
- **Sparkles** — canvas particle field accents

All copy (about, education, experience, projects, achievements, certifications, contact links) was pulled from your live site at hemanthnelliportfolio.vercel.app.

## Run locally

```bash
npm install
npm run dev
```

Open the printed localhost URL.

## Build for production

```bash
npm run build
npm run preview   # sanity-check the production build locally
```

The production build lands in `dist/`.

## Deploy

This is a plain Vite + React static build — deploys to Vercel, Netlify, GitHub Pages, or any static host with zero config. On Vercel: Framework preset "Vite", build command `npm run build`, output directory `dist`.

## Things to swap in before you ship

- `public/resume.pdf` is a placeholder — replace with your real resume.
- `src/data/content.js` — one file holds every piece of copy (profile, about, skills, experience, projects, achievements, certifications, contact links). Edit here to update anything on the site.
- `src/assets/5m.png` — the background photo you uploaded, resized/compressed for the web. Swap it for a different shot any time by replacing this file.

## Stack

React 19 · Vite · Tailwind CSS v4 · Framer Motion · lucide-react
