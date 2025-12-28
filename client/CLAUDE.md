# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Cover Air - франшизный проект UDMPAY для приема платежей по QR-кодам и NFC без терминала и кассового аппарата.

This is a React + TypeScript + Vite monorepo with:
- **Client**: React 19 frontend application (this directory)
- **Server**: Node.js/Express backend with Telegram integration (../server)

## Development Commands

### Client (Current Directory)

```bash
# Development server with HMR
npm run dev

# Type checking and production build
npm run build

# Lint code
npm run lint

# Preview production build
npm run preview
```

### Server (../server)

```bash
# Development server with auto-reload
npm run dev

# Build TypeScript
npm run build

# Production server
npm start
```

## Architecture: Feature-Sliced Design (FSD)

This project follows **Feature-Sliced Design** methodology with Russian architectural guidelines (see docs/architecture.md).

### Layer Hierarchy (Top to Bottom)

1. **app** - Application initialization, providers, routing
2. **pages** - Full page components (home, earn, agent, franchise, international)
3. **widgets** - Large self-contained UI blocks (not heavily used in this project)
4. **features** - Reusable user interactions and business features
5. **entities** - Business domain entities and their representations
6. **shared** - Framework foundation (UI kit, API clients, utilities)

### Key FSD Rules

- **Import rule**: Modules can only import from layers strictly below them
- **Slice isolation**: Slices on the same layer cannot know about each other (except via @x-notation for entity cross-references)
- **app and shared exceptions**: These layers don't have slices, only segments

### Current Structure

```
src/
├── App.tsx              # Root component with hash-based routing
├── main.tsx            # Application entry point
├── features/           # User interactions (hero, problem, solution, etc.)
│   ├── hero/
│   ├── problem/
│   ├── solution/
│   ├── how-it-works/
│   ├── connect-form/
│   └── ...
└── shared/
    ├── components/     # Shared UI components (Header, Footer)
    └── services/       # API clients and external integrations
        └── api.ts      # Form submission API
```

### Routing Implementation

The app uses **hash-based routing** without a router library:
- Pages are rendered conditionally based on `window.location.hash`
- Hash changes trigger page state updates
- Navigation: `#earn`, `#agent`, `#franchise`, `#international`, `#connect`
- The `#connect` hash scrolls to the ConnectForm on the home page

## API Integration

### Backend Communication

API base URL is configured via environment variable:
```typescript
const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';
```

### Form Submission

The ConnectForm submits to `/api/form/submit` which triggers Telegram notifications:
- Phone numbers are automatically formatted with +7 prefix
- Backend sends notifications via Telegraf bot
- Response includes success/error status and validation messages

## Component Patterns

### Feature Components
- Each feature is a self-contained module with index.ts barrel export
- Components follow PascalCase naming (Hero.tsx, Problem.tsx)
- CSS modules or scoped styles per component

### Public API Pattern
Features export through index.ts files:
```typescript
// features/hero/index.ts
export { Hero } from './Hero';
```

## Development Guidelines

### When Adding New Features

1. Create new slice in `src/features/` if it's reusable across pages
2. Add to appropriate page or create in `src/pages/` if page-specific
3. Import only from lower layers (shared for features, features for pages)
4. Use barrel exports (index.ts) for public APIs

### When Modifying Architecture

- Follow FSD layer import rules strictly
- Avoid creating "utils" or "helpers" folders - create focused libraries in shared/lib instead
- Document the purpose of new shared libraries in README
- Keep business logic in features, not shared

### Code Style

- TypeScript strict mode enabled
- ESLint configured for React + TypeScript
- Use functional components with hooks
- Avoid class components

## Environment Variables

Client uses Vite environment variables:
- `VITE_API_URL` - Backend API base URL (defaults to '/api')

Server uses dotenv:
- `TELEGRAM_BOT_TOKEN` - Bot token for notifications
- `TELEGRAM_CHAT_ID` - Target chat for form submissions

## Docker Support

Both client and server have Dockerfile configurations:
- Client: Nginx-based static file serving
- Server: Node.js runtime
- docker-compose.yml orchestrates both services

## Task Management

Use `bd` for tracking tasks (as specified in AGENTS.md).

## Session Completion Protocol

When ending work session:
1. Run quality gates (build, lint) if code changed
2. Commit all changes
3. **MANDATORY**: Push to remote
   ```bash
   git pull --rebase
   bd sync
   git push
   ```
4. Verify push succeeded with `git status`

Work is NOT complete until `git push` succeeds.
