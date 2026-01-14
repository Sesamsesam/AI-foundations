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

## Landing the Plane (Session Completion)

**When ending a work session**, you MUST complete ALL steps below. Work is NOT complete until `git push` succeeds.

**MANDATORY WORKFLOW:**

1. **File issues for remaining work** - Create issues for anything that needs follow-up
2. **Run quality gates** (if code changed) - Tests, linters, builds
3. **Update issue status** - Close finished work, update in-progress items
4. **PUSH TO REMOTE** - This is MANDATORY:
   ```bash
   git pull --rebase
   bd sync
   git push
   git status  # MUST show "up to date with origin"
   ```
5. **Clean up** - Clear stashes, prune remote branches
6. **Verify** - All changes committed AND pushed
7. **Hand off** - Provide context for next session

**CRITICAL RULES:**
- Work is NOT complete until `git push` succeeds
- NEVER stop before pushing - that leaves work stranded locally
- NEVER say "ready to push when you are" - YOU must push
- If push fails, resolve and retry until it succeeds
