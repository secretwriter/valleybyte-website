# ValleyByte — Public Website

Practical technology internship platform, built with React + Vite + TypeScript + Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Build for production

```bash
npm run build
```

Output goes to `dist/`. Preview it locally with `npm run preview`.

## Project structure

- `src/components/` — reusable UI components
- `src/pages/` — route-level pages
- `src/data/` — programs, curriculum, and FAQ content
- `src/services/` — mock service layer (application, contact, certificate verification) — structured for easy API integration later
- `src/hooks/useSEO.ts` — per-page SEO meta tag hook

## Notes

- Contact details on the Contact page are placeholders — replace before launch.
- Certificate verification (`/verify-certificate`) uses mock data. Try `VB-QA-2026-000001`.
- The private intern portal and testing lab are separate applications, not included here. The navbar links out to `https://intern.valleybyte.com`.
