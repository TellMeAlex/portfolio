# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio for Alejandro de la Fuente (tellmealex.dev): a one-page, terminal-flavoured site — typing hero terminal, the 9 Código Sin Siesta decks, a filterable `git log` timeline with CV download, a Claude-powered `$ ask alex` chatbot and closing cards (proyectos / whoami / stack + contacto). Bilingual ES/EN.

The layout implements the "2a — Terminal + Cronología" direction from the Claude Design handoff (dark blueprint, Space Grotesk / Inter / JetBrains Mono, 24×2 eyebrow bars, 1180px artboard).

## Implementation Architecture

### Technology Stack

- **Frontend**: React 19 with TypeScript, Vite
- **Styling**: Vanilla CSS + design tokens (`src/core/design-system/tokens`), single dark theme
- **Fonts**: self-hosted via `@fontsource-variable/*` (CSP keeps `font-src 'self'`)
- **Content**: `src/content/portfolio.ts` — every string is a `{ es, en }` pair resolved with `t()` from `src/i18n`
- **Chatbot**: `server/ask.mjs` calls the Anthropic API (`claude-opus-5`) with `server/facts.mjs` as the only context; mounted on the Vite dev server and served in production by `server/index.mjs`
- **Runtime**: Docker → `node server/index.mjs` on port 80 (static files + `/api/ask`); `ANTHROPIC_API_KEY` injected by Dokploy, demo reply without it
- **Testing**: Vitest + Testing Library (`src/App.test.tsx`, `server/ask.test.mjs`)

### Working on the site

- Change copy/data in `src/content/portfolio.ts`; if it affects what the agent should know, mirror it in `server/facts.mjs`.
- Section ids used by nav + Alt+N shortcuts: `hero`, `charlas`, `cronologia`, `ask`, `sobre-mi`, `contacto`.
- The CV buttons point at `/cv.pdf` — the file lives in `public/`.
- Quality gates (CI): `npm run lint`, `npm run format:check`, `npm run type-check`, `npm run test:unit`, `npm run build`.

## Content Requirements

### Professional Information

- **Name**: Alejandro de la Fuente de la Rosa
- **Role**: Technical Leader Specialist at NTT DATA
- **Location**: Jaén, Andalucía, Spain
- **Experience**: 3+ years leading digital transformation
- **Specializations**: AI, ReactJS, Microfrontends, Technical Leadership

### Key Projects

1. **Inditex Store Management Platform** - Microfrontends architecture for all Spain stores
2. **RTVE Play CMS** - National broadcasting content management APIs
3. **HelloAuto Telemetry Dashboard** - IoT vehicle fleet monitoring

### Contact Information

- **Email**: llamamealex@gmail.com
- **LinkedIn**: linkedin.com/in/alejandro-de-la-fuente
- **GitHub**: github.com/TellMeAlex
- **Phone**: +34 629 20 26 39

## Performance Standards

### Required Metrics

- **Lighthouse Performance**: >90
- **Lighthouse Accessibility**: 100
- **WCAG 2.1 AA**: Full compliance
- **First Contentful Paint**: <1.5s
- **Largest Contentful Paint**: <2.5s
- **Mobile-first**: Touch-friendly responsive design

### Animation Standards

- **Entry**: Staggered fade-in (100ms between cards)
- **Scroll**: Intersection Observer threshold 0.2
- **Hover**: translateY(-8px) + shadow + glow effects
- **Transitions**: cubic-bezier(0.4, 0, 0.2, 1)

## Development Guidelines

### Code Standards

- **Semantic HTML5** with proper ARIA labels
- **Mobile-first CSS** with progressive enhancement
- **Modern JavaScript** (ES6+) with performance optimization
- **Accessibility-first** implementation from Phase 1
- **Component modularity** for maintainability

### File Organization

```
src/
├── content/portfolio.ts   # Copy + data (ES/EN)
├── i18n/                  # LanguageProvider, useLang
├── core/design-system/    # tokens/, base/, animations.css
├── core/layout/SkipLinks
├── core/ui/               # Eyebrow, TerminalWindow, ErrorBoundary
├── features/              # nav, hero (Terminal), talks, timeline (CvCard), ask (useAskAlex), about, footer
├── hooks/                 # useKeyboardNav, usePrefersReducedMotion, useIntersectionObserver
└── utils/                 # date, scroll, screenReader, text, performance
server/                    # index.mjs (prod server), ask.mjs (API handler), facts.mjs (agent context)
```

## Quality Validation

### Pre-deployment Checklist

- [ ] Design (2a) implemented faithfully
- [ ] Lighthouse scores meet targets
- [ ] Cross-browser compatibility tested
- [ ] Mobile responsiveness validated
- [ ] Accessibility compliance verified
- [ ] Contact information accuracy confirmed
- [ ] Professional content review completed

### Testing Requirements

- **Performance**: Core Web Vitals monitoring
- **Accessibility**: Screen reader testing + keyboard navigation
- **Responsiveness**: Multiple device sizes and orientations
- **Content**: Professional accuracy and currency validation
