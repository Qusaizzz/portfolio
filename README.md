# Qussai Khaddour — local design portfolio

Next.js App Router, React, TypeScript, Tailwind CSS 4, Framer Motion, and a custom Canvas 2D particle network. Vercel Web Analytics is integrated for production deployments. Typography uses locally hosted DM Sans (variable font), with its OFL license in src/app/fonts. Homepage simplifications are styled in src/app/home-refinement.css.

## Visitor statistics

In the Vercel project dashboard, open Analytics and enable Web Analytics before deploying. The root layout includes `@vercel/analytics/next` only when `VERCEL_ENV` is `production`, excluding local and preview visits. After deployment, view visitors, page views, top pages, referral sources, countries, and devices in the private Vercel dashboard. The integration uses cookie-free aggregate analytics. Dashboard activation and live data collection must be verified after deployment.

## Run locally

```powershell
cd C:\Users\qusai\design_portfolio
npm install
npm run dev
```

Open http://localhost:3001. The server binds to loopback only. Stop with Ctrl+C. If a background server is already running, stop its listening process before restarting on the same port.

```powershell
npm run build
npm run typecheck
```

## Edit content

- `src/data/projects.ts`: all six project names, introductions, metadata, visual styles, optional image paths, expertise, and contact URLs. Replace `null` contact URLs with `mailto:your-address` and your real profile URLs. Until configured, links lead to an honest local contact placeholder.
- `src/components/home.tsx`: hero and About copy, asymmetric Work grid.
- `src/components/case-study.tsx`: reusable editorial case-study sections. Placeholder copy is intentionally not a claim about completed work or results.
- `src/app/work/[slug]/page.tsx`: project routes, generated from the data. Add an entry to the data array to create another route; add a grid class in CSS if a custom placement is desired.
- `src/components/project-visual.tsx`: CSS artwork placeholders. Put real imagery in `public/images/` and set `image: '/images/filename.jpg'` in project data. Next Image handles sizing and lazy loading.
- `src/app/globals.css`: spacing, typography, palette, responsive layout, and placeholder artwork; Tailwind utilities are also available.
- `src/components/particle-network.tsx`: deterministic network, subtle pointer movement, mobile point reduction, capped pixel ratio, pause when hidden/offscreen, and reduced-motion support.
- `src/components/motion.tsx`: reusable viewport reveals and route entry transitions; respects reduced motion.
- `src/app/resume/page.tsx`: resume placeholder. Add `public/resume.pdf` and change the Resume link in `src/components/navigation.tsx` to `/resume.pdf` when ready.
- Portrait: replace the placeholder inside `About` with your own image.

## Routes

`/`, `/work/grohe`, `/work/flying-lab`, `/work/project-3`, `/work/xr`, `/work/project-4`, `/work/thesis`, `/resume`, `/contact`.

All artwork is editable local CSS geometry, not actual project imagery. Project years, tools, roles, and outcomes not provided by the brief remain explicitly unfilled. Social links and resume do not use invented personal details.
