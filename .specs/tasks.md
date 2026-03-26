# Quoin Codespaces Setup

Setup thesis: make the repo cloud-workspace ready so it can be opened in GitHub Codespaces, bootstrapped automatically, and used as the primary execution environment instead of a local device.

Delivery plan:
- Add a dev container configuration for Node/Vite development.
- Forward the Vite dev port and install dependencies on first launch.
- Replace the placeholder README with repo-specific setup and a mobile-friendly GitHub-first workflow.

## Tasks

- [DONE] Add Codespaces/devcontainer support for this Vite app, including dependency bootstrap and forwarded ports.
- [DONE] Replace the generic README with project-specific setup, Codespaces usage, and a GitHub-first mobile workflow.
- [DONE] Verify with `npm run lint` and `npm run build`.

## Files

- `.devcontainer/devcontainer.json`
- `README.md`

## Acceptance Criteria

- Opening the repo in Codespaces installs dependencies and exposes the Vite dev server port cleanly.
- The README explains how to start, test, preview, and push from a cloud workspace.
- The README also explains the practical mobile workflow for using Codex with a GitHub-hosted workspace.
- `npm run lint` and `npm run build` pass.
