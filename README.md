# ValleyByte — Public Website

Production-ready public marketing site for ValleyByte, built with React, Vite, TypeScript, Tailwind CSS, React Router, Lucide icons, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:5173.

## Build for production

```bash
npm run build
npm run preview
```

## Notes

- Certificate verification (`/verify-certificate`) and the application/contact forms currently use mock/demo logic in `src/services/*` — see the comments in each file for how to wire up a real backend.
- Demo certificate IDs: `VB-QA-2026-000001` (valid) and `VB-QA-2026-000002` (revoked).
- Placeholder contact details (email/phone) and social links live in `src/pages/Contact.tsx` and `src/components/Footer.tsx` — replace before launch.
- The private intern portal (`intern.valleybyte.com`) and testing lab (`lab.valleybyte.com`) are intentionally **not** part of this codebase; only external links to them are included.
