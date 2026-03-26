# Quoin Landing Page

Premium React/Vite landing page for Quoin, deployed on GitHub Pages at [https://www.quoin.green](https://www.quoin.green).

## Stack

- React 19
- Vite 8
- GSAP ScrollTrigger
- React Three Fiber / Drei
- GitHub Pages via GitHub Actions

## Local Commands

```bash
npm ci
npm run dev
npm run lint
npm run build
npm run preview
```

## Deployment

Pushes to `main` trigger [.github/workflows/deploy-pages.yml](.github/workflows/deploy-pages.yml), which:

1. installs dependencies with `npm ci`
2. builds the app with `npm run build`
3. deploys `dist/` to GitHub Pages

Production domain:

- [https://www.quoin.green](https://www.quoin.green)

## Codespaces Setup

This repo includes [.devcontainer/devcontainer.json](.devcontainer/devcontainer.json) so GitHub Codespaces can bootstrap automatically.

What it does:

- uses a Node 20 dev container
- runs `npm ci` after the Codespace is created
- forwards ports `5173` and `4173`
- opens `README.md` and `src/App.jsx` by default

### Start a Codespace

On GitHub:

1. Open the repo.
2. Click `Code`.
3. Open the `Codespaces` tab.
4. Click `Create codespace on main`.

Once the workspace opens:

```bash
npm run dev -- --host 0.0.0.0
```

GitHub will expose the forwarded dev URL automatically.

## Mobile-Friendly Workflow

If you want to manage the project from your phone without depending on your local laptop:

1. Keep the source of truth in GitHub.
2. Open a Codespace for this repo.
3. Run the app inside Codespaces.
4. Use that cloud workspace as the environment for edits, testing, and deploys.
5. Push changes to `main` to publish them live.

Practical flow:

1. Open the repo on GitHub from mobile.
2. Start or resume the Codespace.
3. Use the Codespace terminal/editor for file changes.
4. Run:

```bash
npm run lint
npm run build
git status
git add .
git commit -m "fix: your change"
git push origin HEAD:main
```

5. Wait for the GitHub Pages workflow to complete.

## Recommended Repo Routine

Use this order for every change:

1. Edit in Codespaces.
2. Run `npm run lint`.
3. Run `npm run build`.
4. Commit with a conventional message.
5. Push to `main`.
6. Verify the Pages deployment and production site.

## Notes

- The repo already supports cloud deployment. Codespaces is only for development and editing.
- `dist/` is generated during build and should not be edited manually.
- The dev server should be run with `--host 0.0.0.0` inside Codespaces so the forwarded preview works reliably.
