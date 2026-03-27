# Narrow Quoin to a DC Benchmarking-First Site

Implementation thesis: replace the mixed benchmarking/BEPS homepage and search IA with a benchmarking-first wedge, introduce the new canonical route set, and convert the old BEPS-focused URLs into bridge pages so the site stops splitting search signals.

## Tasks

- [DONE] Rewrite homepage content and metadata around DC energy benchmarking only.
- [DONE] Replace homepage nav, signal, and search module links so they point only to the new benchmarking-first routes.
- [DONE] Add canonical static pages for `/dc-benchmarking-deadlines-verification/` and `/dc-energy-benchmarking-guide/`.
- [DONE] Rewrite `/dc-energy-benchmarking/` to the new benchmarking-first brief.
- [DONE] Convert `/dc-beps-compliance/` and `/dc-energy-benchmarking-beps-guide/` into bridge pages with canonical/noindex behavior.
- [DONE] Update shared static-page navigation, sitemap, and Vite multi-page inputs to the new IA.
- [DONE] Verify with `npm run lint` and `npm run build`, and confirm all six route outputs are present in `dist/`.

## Files

- `index.html`
- `src/App.jsx`
- `src/content.js`
- `vite.config.js`
- `public/sitemap.xml`
- `dc-energy-benchmarking/index.html`
- `dc-benchmarking-deadlines-verification/index.html`
- `dc-energy-benchmarking-guide/index.html`
- `dc-beps-compliance/index.html`
- `dc-energy-benchmarking-beps-guide/index.html`

## Acceptance Criteria

- The homepage no longer markets Quoin as broad compliance software or promotes BEPS/penalty forecasting as co-equal promises.
- The homepage nav and three-card search module point only to `/dc-energy-benchmarking/`, `/dc-benchmarking-deadlines-verification/`, and `/dc-energy-benchmarking-guide/`.
- The canonical static pages expose visible semantic content, correct canonical tags, and page-specific JSON-LD without requiring JS.
- The legacy BEPS URLs publish as bridge pages with canonical/noindex behavior and a visible fallback path to the new guide.
- `public/sitemap.xml` lists only `/`, `/dc-energy-benchmarking/`, `/dc-benchmarking-deadlines-verification/`, and `/dc-energy-benchmarking-guide/`.
- `npm run lint` passes.
- `npm run build` passes.
