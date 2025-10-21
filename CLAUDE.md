# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Modern professional portfolio website for Alejandro de la Fuente, Technical Leader Specialist at NTT DATA. Features a responsive Bento Grid design showcasing AI expertise, ReactJS proficiency, and technical leadership experience.

**Key Context**: This is a greenfield project following a systematic PRD-based implementation approach with 6 development phases.

## Project Structure

```
portfolio/
├── general-plan.md          # Complete project specification (371 lines)
├── prds/                    # Phase-based implementation documents
│   ├── README.md           # Project guide and implementation strategy (v2.0)
│   ├── 00-PROJECT-OVERVIEW.md
│   ├── 01-TECHNICAL-REFERENCE.md     # Design system (SSOT)
│   ├── 02-CONTENT-SPECIFICATIONS.md  # Structured content
│   ├── 03-COMPONENT-LIBRARY.md       # 12 core components
│   ├── phases/
│   │   ├── PHASE-01-Foundation.md
│   │   ├── PHASE-02-Core-Content.md
│   │   ├── PHASE-03-Advanced-Features.md
│   │   ├── PHASE-04-Animations.md
│   │   ├── PHASE-05-Performance.md
│   │   └── PHASE-06-Polish.md
│   ├── quick-references/
│   │   ├── design-tokens.md          # Copy-paste CSS tokens
│   │   ├── accessibility-checklist.md
│   │   ├── performance-budgets.md
│   │   └── browser-compatibility.md
│   └── templates/
└── src/                     # Feature-based architecture (see below)
```

## Implementation Architecture

### Technology Stack
- **Frontend**: React 18+ with TypeScript
- **Styling**: CSS Modules + CSS Custom Properties (design tokens)
- **Build Tool**: Vite
- **Animations**: CSS Animations + Intersection Observer API
- **Typography**: Inter (body text) + JetBrains Mono (code)
- **Color Palette**: Navy (#0A192F) + Cyan (#64FFDA) + light variants
- **Testing**: Vitest + Testing Library

### Phase Dependencies
```
Phase 1 (Foundation) → Phase 2 (Core Content) → Phase 3 (Complex Features)
                    ↘ Phase 4 (Animations) ↗
                      Phase 5 (Performance) → Phase 6 (Polish)
```

### Bento Grid Layout
- **Responsive**: 1 column (mobile) → 2 columns (tablet) → 4 columns (desktop)
- **Card Sizes**: small (1x1), medium (2x1), large (2x2), xl (3x2)
- **Gap**: 1.5rem between cards
- **Key Sections**: Hero (3x2), About Me (2x2), Experience Timeline (3x2), Projects (3x3)

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

### Implementation Order
1. **Always start with PRD-01** for foundation setup
2. **Read general-plan.md** for complete specifications
3. **Follow phase dependencies** - never skip Phase 1
4. **Validate quality gates** before proceeding to next phase
5. **Reference PRD README** for success criteria

### Code Standards
- **Semantic HTML5** with proper ARIA labels
- **Mobile-first CSS** with progressive enhancement
- **Modern JavaScript** (ES6+) with performance optimization
- **Accessibility-first** implementation from Phase 1
- **Component modularity** for maintainability

### File Organization - Feature-Based Architecture

```
src/
├── core/                        # Core del sistema (shared)
│   ├── design-system/          # Design tokens y sistema base
│   │   ├── tokens/
│   │   │   ├── colors.css      # Paleta + themes (dark/light)
│   │   │   ├── typography.css  # Fuentes, tamaños, pesos
│   │   │   ├── spacing.css     # Escala 8px base
│   │   │   ├── shadows.css     # Sombras y efectos
│   │   │   └── index.css       # Export maestro
│   │   ├── base/
│   │   │   ├── reset.css       # CSS reset
│   │   │   ├── typography.css  # Tipografía base
│   │   │   └── accessibility.css # Focus styles
│   │   └── index.css
│   │
│   ├── layout/                  # Componentes de layout compartidos
│   │   ├── BentoGrid/
│   │   │   ├── BentoGrid.tsx
│   │   │   ├── BentoGrid.css
│   │   │   └── index.ts
│   │   ├── Card/               # Card base component
│   │   │   ├── Card.tsx
│   │   │   ├── Card.css
│   │   │   ├── Card.types.ts
│   │   │   └── index.ts
│   │   └── SkipLinks/
│   │       ├── SkipLinks.tsx
│   │       ├── SkipLinks.css
│   │       └── index.ts
│   │
│   ├── ui/                      # Componentes UI compartidos
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.css
│   │   │   ├── Button.types.ts
│   │   │   └── index.ts
│   │   └── ThemeToggle/
│   │       ├── ThemeToggle.tsx
│   │       ├── ThemeToggle.css
│   │       ├── useTheme.ts
│   │       └── index.ts
│   │
│   └── utils/                   # Utilidades compartidas
│       ├── theme.ts
│       └── constants.ts
│
├── features/                    # Features del portfolio (Bento Cards)
│   ├── hero/                   # Hero Card (3x2) - Phase 2
│   │   ├── Hero.tsx
│   │   ├── Hero.css
│   │   ├── Hero.types.ts
│   │   └── index.ts
│   │
│   ├── about/                  # About Card (2x2) - Phase 2
│   │   ├── About.tsx
│   │   ├── About.css
│   │   └── index.ts
│   │
│   ├── experience/             # Experience Timeline (3x2) - Phase 3
│   │   ├── Experience.tsx
│   │   ├── Experience.css
│   │   ├── Timeline/           # Sub-componente
│   │   │   ├── Timeline.tsx
│   │   │   └── Timeline.css
│   │   └── index.ts
│   │
│   ├── projects/               # Projects Grid (3x3) - Phase 3
│   │   ├── Projects.tsx
│   │   ├── Projects.css
│   │   ├── ProjectCard/
│   │   │   ├── ProjectCard.tsx
│   │   │   └── ProjectCard.css
│   │   └── index.ts
│   │
│   ├── skills/                 # Skills Visualization (2x2) - Phase 3
│   │   ├── Skills.tsx
│   │   ├── Skills.css
│   │   └── index.ts
│   │
│   ├── contact/                # Contact Card (2x1) - Phase 2
│   │   ├── Contact.tsx
│   │   ├── Contact.css
│   │   └── index.ts
│   │
│   └── stats/                  # Stats Counter (1x1) - Phase 3
│       ├── Stats.tsx
│       ├── Stats.css
│       └── index.ts
│
├── hooks/                       # Hooks globales compartidos
│   ├── useIntersectionObserver.ts
│   ├── useMediaQuery.ts
│   └── useLocalStorage.ts
│
├── types/                       # Types globales
│   └── index.ts
│
├── App.tsx                      # App principal
├── main.tsx                     # Entry point
└── index.css                    # Import del design system
```

### Architecture Principles

1. **Feature Isolation**: Cada feature contiene todo lo necesario (componente, estilos, types, hooks)
2. **Core Compartido**: Design system, layout, UI components reutilizables
3. **Escalabilidad por Fases**:
   - Phase 1: `core/design-system` + `core/layout` + `core/ui`
   - Phase 2: `features/hero` + `features/about` + `features/contact`
   - Phase 3: `features/experience` + `features/projects` + `features/skills`
   - Phase 4: Agregar hooks de animación a cada feature
4. **Barrel Exports**: Cada módulo exporta a través de `index.ts` para imports limpios
5. **Co-location**: Todo relacionado a una feature vive junto

## Quality Validation

### Pre-deployment Checklist
- [ ] All PRD requirements implemented
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

## Working with PRD Documentation

### Documentation Hierarchy (SSOT - Single Source of Truth)

1. **Design Tokens**: `/prds/quick-references/design-tokens.md`
   - Copy-paste ready CSS variables
   - Use ALWAYS for colors, spacing, typography, shadows

2. **Technical Reference**: `/prds/01-TECHNICAL-REFERENCE.md`
   - Complete design system specification
   - Grid system details
   - Component technical specs

3. **Component Library**: `/prds/03-COMPONENT-LIBRARY.md`
   - 12 core components with complete specs
   - HTML anatomy, CSS styles, accessibility requirements
   - Use as blueprint for implementation

4. **Content Specifications**: `/prds/02-CONTENT-SPECIFICATIONS.md`
   - All portfolio content structured in JSON
   - Professional data, projects, skills, contact info

5. **Phase Documents**: `/prds/phases/PHASE-XX-*.md`
   - Step-by-step implementation guides
   - Success criteria and quality gates
   - Cross-references to other docs using `→` symbol

### Best Practices

- **Never hardcode values**: Always use design tokens from `quick-references/design-tokens.md`
- **Follow cross-references**: Use `→` links to navigate between docs
- **Copy-paste when available**: Design tokens and component specs are copy-paste ready
- **Validate against specs**: Each component has detailed specs in Component Library
- **Check quality gates**: Each phase has specific DoD (Definition of Done) criteria

### Quick Reference Navigation

```bash
# Design tokens (copy-paste CSS)
cat prds/quick-references/design-tokens.md

# Component specs (blueprint)
cat prds/03-COMPONENT-LIBRARY.md

# Current phase guide
cat prds/phases/PHASE-01-Foundation.md

# Accessibility checklist
cat prds/quick-references/accessibility-checklist.md
```