# Technical Reference - Ejemplo Práctico

> **Nota**: Este es un EJEMPLO de cómo quedaría el documento TECHNICAL-REFERENCE.md propuesto en la reestructuración. Muestra solo una porción para demostrar el concepto.

---

## 🎨 Design System

### Color Palette (Fuente única de verdad)

```css
:root {
  /* Primary Brand Colors */
  --color-navy: #0A192F;
  --color-cyan: #64FFDA;
  --color-white: #FFFFFF;

  /* Grayscale */
  --color-gray-light: #8892B0;
  --color-gray: #495670;
  --color-slate: #2E3A52;

  /* Semantic Colors - Dark Theme */
  --color-bg-primary: var(--color-navy);
  --color-bg-secondary: var(--color-slate);
  --color-text-primary: var(--color-white);
  --color-text-secondary: var(--color-gray-light);
  --color-accent: var(--color-cyan);
  --color-error: #FF6B6B;
  --color-success: #51CF66;
  --color-warning: #FFD93D;

  /* Semantic Colors - Light Theme */
  --color-bg-primary-light: #F8FAFC;
  --color-bg-secondary-light: #FFFFFF;
  --color-text-primary-light: #2D3748;
  --color-text-secondary-light: #4A5568;
  --color-accent-light: #00A3C4;
}

/* Light Theme Override */
[data-theme="light"] {
  --color-bg-primary: var(--color-bg-primary-light);
  --color-bg-secondary: var(--color-bg-secondary-light);
  --color-text-primary: var(--color-text-primary-light);
  --color-text-secondary: var(--color-text-secondary-light);
  --color-accent: var(--color-accent-light);
}
```

#### Contrast Ratios (WCAG AA Compliant)

| Color Combination | Ratio | WCAG AA | Usage |
|------------------|-------|---------|-------|
| Navy + White | 15.3:1 | ✅ AAA | Body text on dark backgrounds |
| Navy + Gray Light | 7.2:1 | ✅ AA | Secondary text on dark |
| Navy + Cyan | 8.9:1 | ✅ AA | Accent text/links on dark |
| Light BG + Text Primary | 12.6:1 | ✅ AAA | Body text on light backgrounds |
| Light BG + Text Secondary | 7.0:1 | ✅ AA | Secondary text on light |
| Navy + Error | 4.5:1 | ✅ AA | Error messages |
| Navy + Success | 5.2:1 | ✅ AA | Success messages |

---

### Typography System

```css
/* Font Families */
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
--font-mono: 'JetBrains Mono', 'Fira Code', 'SF Mono', Monaco, Consolas, monospace;

/* Type Scale (1.2 ratio - Major Third) */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
--text-5xl: 3rem;      /* 48px */
--text-6xl: 3.75rem;   /* 60px */

/* Line Heights */
--leading-tight: 1.25;
--leading-normal: 1.5;
--leading-relaxed: 1.75;
--leading-loose: 2;

/* Font Weights */
--font-light: 300;
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
--font-extrabold: 800;
```

#### Typography Usage Guide

| Element | Size | Weight | Line Height | Use Case |
|---------|------|--------|-------------|----------|
| h1 | text-5xl (48px) | bold (700) | tight (1.25) | Page title, Hero |
| h2 | text-4xl (36px) | semibold (600) | tight (1.25) | Section headings |
| h3 | text-2xl (24px) | semibold (600) | normal (1.5) | Card titles |
| h4 | text-xl (20px) | medium (500) | normal (1.5) | Subsection headings |
| body | text-base (16px) | normal (400) | relaxed (1.75) | Paragraph text |
| small | text-sm (14px) | normal (400) | normal (1.5) | Captions, metadata |
| code | text-sm (14px) | mono | normal (1.5) | Inline code |

---

### Spacing System (8px base)

```css
/* Spacing Scale */
--space-0: 0;
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
--space-32: 8rem;     /* 128px */
```

#### Spacing Usage Recommendations

| Scale | Common Use Cases |
|-------|-----------------|
| space-1 (4px) | Fine adjustments, icon spacing |
| space-2 (8px) | Tight spacing between related items |
| space-3 (12px) | Small gaps in compact UIs |
| space-4 (16px) | Default paragraph spacing |
| space-6 (24px) | Card internal padding, section spacing |
| space-8 (32px) | Between major UI sections |
| space-12 (48px) | Large section gaps |
| space-16+ | Hero sections, major page divisions |

---

### Border Radius & Shadows

```css
/* Border Radius */
--radius-none: 0;
--radius-sm: 0.375rem;   /* 6px */
--radius-md: 0.5rem;     /* 8px */
--radius-lg: 0.75rem;    /* 12px */
--radius-xl: 1rem;       /* 16px */
--radius-2xl: 1.5rem;    /* 24px */
--radius-full: 9999px;   /* Circular */

/* Box Shadows */
--shadow-none: none;
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
             0 2px 4px -1px rgba(0, 0, 0, 0.06);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
             0 4px 6px -2px rgba(0, 0, 0, 0.05);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
             0 10px 10px -5px rgba(0, 0, 0, 0.04);
--shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

/* Special Shadows */
--shadow-glow: 0 0 20px rgba(100, 255, 218, 0.15);
--shadow-glow-strong: 0 0 30px rgba(100, 255, 218, 0.3);
--shadow-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
```

---

## 📐 Grid System

### Bento Grid Layout

```css
/* Grid Container */
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-6); /* 24px */
  max-width: 1400px;
  margin: 0 auto;
  padding: var(--space-8);
}

/* Responsive Grid Columns */
@media (min-width: 768px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid-container {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1280px) {
  .grid-container {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

### Card Size Variants

| Variant | Grid Columns | Grid Rows | Base Width | Height | Usage |
|---------|--------------|-----------|------------|--------|-------|
| small | 1 | 1 | 300px | auto | Stats, quick info |
| medium | 2 | 1 | 620px | auto | Contact, certifications |
| large | 2 | 2 | 620px | 400px | About, Skills |
| xl | 3 | 2 | 940px | 400px | Hero, Timeline |
| full | 4 | 3+ | 100% | auto | Projects showcase |

```css
/* Card Grid Placement */
.card--small {
  grid-column: span 1;
  grid-row: span 1;
}

.card--medium {
  grid-column: span 2;
  grid-row: span 1;
}

.card--large {
  grid-column: span 2;
  grid-row: span 2;
}

.card--xl {
  grid-column: span 3;
  grid-row: span 2;
}

.card--full {
  grid-column: 1 / -1; /* Full width */
}
```

---

## ✨ Animation System

### Timing Functions

```css
/* Standard Easing */
--ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);

/* Special Easing */
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
--ease-elastic: cubic-bezier(0.175, 0.885, 0.32, 1.275);
```

### Duration Standards

```css
/* Animation Durations */
--duration-instant: 100ms;
--duration-fast: 200ms;
--duration-normal: 300ms;
--duration-slow: 500ms;
--duration-slower: 800ms;
--duration-slowest: 1200ms;
```

#### Duration Usage Guide

| Duration | Use Case | Example |
|----------|----------|---------|
| instant (100ms) | Micro-interactions | Button press feedback |
| fast (200ms) | Quick transitions | Tooltip show/hide |
| normal (300ms) | Standard interactions | Hover effects, focus |
| slow (500ms) | Attention-worthy | Modal open/close |
| slower (800ms) | Scroll animations | Fade in on scroll |
| slowest (1200ms) | Special effects | Timeline drawing |

### Animation Presets

```css
/* Fade Animations */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeOut {
  from { opacity: 1; }
  to { opacity: 0; }
}

/* Slide Animations */
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Scale Animations */
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Special Animations */
@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

@keyframes shimmer {
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
}
```

### Performance Optimization

```css
/* GPU Acceleration */
.animate-gpu {
  will-change: transform, opacity;
  backface-visibility: hidden;
  perspective: 1000px;
}

/* Reduced Motion Support (MANDATORY) */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 📱 Responsive Breakpoints

```css
/* Breakpoint Definitions */
--breakpoint-xs: 320px;   /* Small phones */
--breakpoint-sm: 640px;   /* Large phones */
--breakpoint-md: 768px;   /* Tablets */
--breakpoint-lg: 1024px;  /* Small laptops */
--breakpoint-xl: 1280px;  /* Desktops */
--breakpoint-2xl: 1536px; /* Large desktops */
```

### Media Query Presets

```css
/* Mobile First Approach */
@media (min-width: 640px) { /* sm */ }
@media (min-width: 768px) { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
@media (min-width: 1536px) { /* 2xl */ }

/* Device-Specific */
@media (hover: hover) and (pointer: fine) {
  /* Desktop with mouse */
}

@media (hover: none) and (pointer: coarse) {
  /* Touch devices */
}
```

---

## 🎯 Z-Index Scale

```css
/* Z-Index Layers */
--z-base: 0;
--z-dropdown: 1000;
--z-sticky: 1020;
--z-fixed: 1030;
--z-modal-backdrop: 1040;
--z-modal: 1050;
--z-popover: 1060;
--z-tooltip: 1070;
--z-notification: 1080;
--z-max: 9999;
```

---

## 📚 Uso en PRDs

Este documento es referenciado en:
- **PRD-01**: Design System base → Refs a todas las secciones
- **PRD-02**: Implementación de contenido → Refs a colors, typography, spacing
- **PRD-03**: Features avanzadas → Refs a grid system, animations
- **PRD-04**: Animaciones → Refs a animation system completo
- **PRD-05**: Performance → Refs a animation optimization
- **PRD-06**: Accesibilidad → Refs a contrast ratios, reduced motion

---

## 🔄 Historial de Cambios

| Versión | Fecha | Cambios |
|---------|-------|---------|
| 1.0 | 2025-01-20 | Documento inicial creado |

---

**Mantenido por**: Equipo de Frontend
**Última actualización**: 2025-01-20
**Próxima revisión**: Después de cada fase de desarrollo
