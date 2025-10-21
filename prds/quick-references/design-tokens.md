# Design Tokens - Quick Reference

**Propósito**: CSS copy-paste ready con todos los design tokens del portfolio

**Última actualización**: 20 Enero 2025

---

## 🎨 Copy-Paste Ready CSS

```css
:root {
  /* ============================================
     COLOR PALETTE
     ============================================ */

  /* Primary Brand Colors */
  --color-navy: #0A192F;
  --color-cyan: #64FFDA;
  --color-white: #FFFFFF;

  /* Grayscale */
  --color-gray-light: #8892B0;
  --color-gray: #495670;
  --color-slate: #2E3A52;

  /* Semantic Colors - Dark Theme (Default) */
  --color-bg-primary: var(--color-navy);
  --color-bg-secondary: var(--color-slate);
  --color-text-primary: var(--color-white);
  --color-text-secondary: var(--color-gray-light);
  --color-accent: var(--color-cyan);

  /* Status Colors */
  --color-error: #FF6B6B;
  --color-success: #51CF66;
  --color-warning: #FFD93D;
  --color-info: #339AF0;

  /* Light Theme Colors */
  --color-bg-primary-light: #F8FAFC;
  --color-bg-secondary-light: #FFFFFF;
  --color-text-primary-light: #2D3748;
  --color-text-secondary-light: #4A5568;
  --color-accent-light: #00A3C4;


  /* ============================================
     TYPOGRAPHY
     ============================================ */

  /* Font Families */
  --font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', 'SF Mono', Monaco, Consolas, monospace;

  /* Type Scale (1.2 ratio - Major Third) */
  --text-xs: 0.75rem;      /* 12px */
  --text-sm: 0.875rem;     /* 14px */
  --text-base: 1rem;       /* 16px */
  --text-lg: 1.125rem;     /* 18px */
  --text-xl: 1.25rem;      /* 20px */
  --text-2xl: 1.5rem;      /* 24px */
  --text-3xl: 1.875rem;    /* 30px */
  --text-4xl: 2.25rem;     /* 36px */
  --text-5xl: 3rem;        /* 48px */
  --text-6xl: 3.75rem;     /* 60px */

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


  /* ============================================
     SPACING SCALE
     ============================================ */

  /* Base: 8px (0.5rem) */
  --space-1: 0.25rem;      /* 4px */
  --space-2: 0.5rem;       /* 8px */
  --space-3: 0.75rem;      /* 12px */
  --space-4: 1rem;         /* 16px */
  --space-5: 1.25rem;      /* 20px */
  --space-6: 1.5rem;       /* 24px */
  --space-8: 2rem;         /* 32px */
  --space-10: 2.5rem;      /* 40px */
  --space-12: 3rem;        /* 48px */
  --space-16: 4rem;        /* 64px */
  --space-20: 5rem;        /* 80px */
  --space-24: 6rem;        /* 96px */


  /* ============================================
     BORDER RADIUS
     ============================================ */

  --radius-sm: 0.375rem;   /* 6px */
  --radius-md: 0.5rem;     /* 8px */
  --radius-lg: 0.75rem;    /* 12px */
  --radius-xl: 1rem;       /* 16px */
  --radius-2xl: 1.5rem;    /* 24px */
  --radius-full: 9999px;   /* Circle/Pill */


  /* ============================================
     BOX SHADOWS
     ============================================ */

  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
               0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
               0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
               0 10px 10px -5px rgba(0, 0, 0, 0.04);
  --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  --shadow-glow: 0 0 20px rgba(100, 255, 218, 0.15);
  --shadow-glow-strong: 0 0 30px rgba(100, 255, 218, 0.3);


  /* ============================================
     Z-INDEX SCALE
     ============================================ */

  --z-base: 0;
  --z-dropdown: 100;
  --z-sticky: 200;
  --z-fixed: 300;
  --z-modal-backdrop: 400;
  --z-modal: 500;
  --z-popover: 600;
  --z-tooltip: 700;
  --z-notification: 800;
  --z-skip-link: 9999;


  /* ============================================
     TRANSITIONS
     ============================================ */

  --transition-fast: 150ms;
  --transition-base: 300ms;
  --transition-slow: 500ms;
  --transition-slower: 700ms;

  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);


  /* ============================================
     BENTO GRID
     ============================================ */

  --grid-gap: 1.5rem;      /* 24px */
  --grid-max-width: 1400px;
  --grid-padding-mobile: 2rem;
  --grid-padding-desktop: 4rem;


  /* ============================================
     BREAKPOINTS (For reference in media queries)
     ============================================ */

  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-2xl: 1536px;
}

/* ============================================
   LIGHT THEME OVERRIDES
   ============================================ */

[data-theme="light"] {
  --color-bg-primary: var(--color-bg-primary-light);
  --color-bg-secondary: var(--color-bg-secondary-light);
  --color-text-primary: var(--color-text-primary-light);
  --color-text-secondary: var(--color-text-secondary-light);
  --color-accent: var(--color-accent-light);

  /* Adjusted shadows for light theme */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.08);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.15),
               0 2px 4px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.15),
               0 4px 6px -2px rgba(0, 0, 0, 0.08);
  --shadow-glow: 0 0 20px rgba(0, 163, 196, 0.2);
}
```

---

## 📊 Tokens Organizados por Categoría

### Colors

| Token | Dark Theme | Light Theme | Usage |
|-------|------------|-------------|-------|
| `--color-bg-primary` | #0A192F (Navy) | #F8FAFC (Light Gray) | Page background |
| `--color-bg-secondary` | #2E3A52 (Slate) | #FFFFFF (White) | Card backgrounds |
| `--color-text-primary` | #FFFFFF (White) | #2D3748 (Dark Gray) | Headings, primary text |
| `--color-text-secondary` | #8892B0 (Gray Light) | #4A5568 (Medium Gray) | Body text, descriptions |
| `--color-accent` | #64FFDA (Cyan) | #00A3C4 (Dark Cyan) | Links, CTAs, highlights |
| `--color-error` | #FF6B6B | #FF6B6B | Error messages |
| `--color-success` | #51CF66 | #51CF66 | Success states |
| `--color-warning` | #FFD93D | #FFD93D | Warnings |

### Typography Scale

| Token | Size | Pixels | Usage |
|-------|------|--------|-------|
| `--text-xs` | 0.75rem | 12px | Small labels, captions |
| `--text-sm` | 0.875rem | 14px | Secondary text, buttons |
| `--text-base` | 1rem | 16px | Body text (default) |
| `--text-lg` | 1.125rem | 18px | Large body text |
| `--text-xl` | 1.25rem | 20px | Small headings |
| `--text-2xl` | 1.5rem | 24px | Section titles |
| `--text-3xl` | 1.875rem | 30px | Card titles |
| `--text-4xl` | 2.25rem | 36px | Large headings |
| `--text-5xl` | 3rem | 48px | Hero headings |
| `--text-6xl` | 3.75rem | 60px | Display headings |

### Spacing Scale

| Token | Size | Pixels | Usage |
|-------|------|--------|-------|
| `--space-1` | 0.25rem | 4px | Tight spacing |
| `--space-2` | 0.5rem | 8px | Small gaps |
| `--space-3` | 0.75rem | 12px | Compact spacing |
| `--space-4` | 1rem | 16px | Base spacing |
| `--space-6` | 1.5rem | 24px | Medium spacing |
| `--space-8` | 2rem | 32px | Large spacing |
| `--space-12` | 3rem | 48px | Section spacing |
| `--space-16` | 4rem | 64px | Large sections |
| `--space-20` | 5rem | 80px | Extra large spacing |

### Border Radius

| Token | Size | Pixels | Usage |
|-------|------|--------|-------|
| `--radius-sm` | 0.375rem | 6px | Small elements, tags |
| `--radius-md` | 0.5rem | 8px | Buttons, inputs |
| `--radius-lg` | 0.75rem | 12px | Cards (standard) |
| `--radius-xl` | 1rem | 16px | Large cards |
| `--radius-2xl` | 1.5rem | 24px | Hero sections |
| `--radius-full` | 9999px | ∞ | Circles, pills |

---

## 🎯 Common Usage Patterns

### Card Component

```css
.card {
  background: var(--color-bg-secondary);
  color: var(--color-text-primary);
  padding: var(--space-6);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  transition: all var(--transition-base) var(--ease-out);
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg), var(--shadow-glow);
}
```

### Button Component

```css
.btn-primary {
  background: var(--color-cyan);
  color: var(--color-navy);
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-md);
  font-size: var(--text-base);
  font-weight: var(--font-semibold);
  transition: all var(--transition-base) var(--ease-out);
}

.btn-primary:hover {
  background: var(--color-white);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(100, 255, 218, 0.4);
}
```

### Typography

```css
h1 {
  font-size: var(--text-5xl);
  font-weight: var(--font-bold);
  line-height: var(--leading-tight);
  color: var(--color-text-primary);
}

p {
  font-size: var(--text-base);
  line-height: var(--leading-relaxed);
  color: var(--color-text-secondary);
}

.code {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  background: rgba(100, 255, 218, 0.1);
  padding: var(--space-1) var(--space-2);
  border-radius: var(--radius-sm);
}
```

### Spacing Utilities

```css
.section {
  margin-bottom: var(--space-16);
}

.stack > * + * {
  margin-top: var(--space-4);
}

.grid {
  display: grid;
  gap: var(--grid-gap);
}
```

---

## 🔄 Animation Tokens

### Common Transitions

```css
/* Fast interactions */
.tooltip {
  transition: opacity var(--transition-fast) var(--ease-out);
}

/* Standard interactions */
.button, .link {
  transition: all var(--transition-base) var(--ease-in-out);
}

/* Slower, more dramatic */
.modal {
  transition: transform var(--transition-slow) var(--ease-out);
}

/* Bounce effect for playful interactions */
.notification {
  animation: bounce var(--transition-base) var(--ease-bounce);
}
```

---

## 📱 Responsive Usage

```css
/* Mobile First Approach */
.container {
  padding: var(--grid-padding-mobile);
}

@media (min-width: 768px) {
  .container {
    padding: var(--grid-padding-desktop);
  }
}

/* Typography scaling */
h1 {
  font-size: var(--text-3xl);
}

@media (min-width: 768px) {
  h1 {
    font-size: var(--text-5xl);
  }
}
```

---

## 💡 Best Practices

### DO ✅

```css
/* Use semantic tokens */
.card {
  background: var(--color-bg-secondary);
  color: var(--color-text-primary);
}

/* Use spacing scale */
.section {
  margin-bottom: var(--space-16);
  padding: var(--space-8);
}

/* Use transition tokens */
.interactive {
  transition: all var(--transition-base) var(--ease-out);
}
```

### DON'T ❌

```css
/* Don't use hardcoded colors */
.card {
  background: #2E3A52; /* ❌ */
  color: #FFFFFF; /* ❌ */
}

/* Don't use arbitrary spacing */
.section {
  margin-bottom: 65px; /* ❌ */
  padding: 37px; /* ❌ */
}

/* Don't use magic numbers */
.interactive {
  transition: all 0.247s cubic-bezier(0.3, 0.1, 0.8, 0.9); /* ❌ */
}
```

---

## 🔗 Referencias

→ **Full Specification**: [01-TECHNICAL-REFERENCE.md](../01-TECHNICAL-REFERENCE.md)
→ **Component Examples**: [03-COMPONENT-LIBRARY.md](../03-COMPONENT-LIBRARY.md)
→ **Browser Support**: [browser-compatibility.md](browser-compatibility.md)

---

**Última actualización**: 20 Enero 2025
**Versión**: 1.0
