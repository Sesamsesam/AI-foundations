# AGENTS.md

Guidance for AI agents working on this project.

## Global Rules

@docs/rules/AGENTS_CORE.md
@docs/rules/AGENTS_BRIDGE.md

---

## Project Overview

SamiHermes AI - Mobile-first website built with Astro.

## Build & Test

```bash
bun install      # Install dependencies
bun run dev      # Start development server
bun run build    # Build for production
```

## File Structure

```
src/
├── components/    # Astro/React components
├── layouts/       # Page layouts
├── pages/         # Routes
└── styles/        # CSS
```

## Development Rules

- Follow existing code patterns in `src/`
- Run lint and type check before committing
- Update documentation when changing architecture

## Documentation

- [Full Protocol Spec](docs/rules/30_The_Bridge_Protocol.md)