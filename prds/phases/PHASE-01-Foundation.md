# PHASE 1: Foundation & Design System

## Quick Reference

**Timeline**: 2-3 semanas
**Complexity**: 🟢 Medium
**Dependencies**: None (foundational phase)
**Key Deliverables**:
- Responsive Bento Grid system
- Complete design token system
- Dark/light theme switching
- Base component library
- Accessibility baseline (WCAG 2.1 AA)

---

## 🎯 Objectives & Success Criteria

| Objective | Success Metric | Target |
|-----------|----------------|--------|
| **Responsive Grid** | Adapts fluidly across breakpoints | 320px - 1920px+ |
| **Design System** | Complete token system | All tokens documented |
| **Theme Switching** | No layout shift or performance impact | CLS < 0.1 |
| **Accessibility** | WCAG 2.1 AA baseline | Lighthouse ≥ 90 |
| **Performance** | CSS bundle optimized | < 50 KB gzipped |
| **Browser Support** | Cross-browser compatibility | Last 2 versions |

---

## 📖 Overview

Esta fase establece la infraestructura técnica completa del portfolio: sistema de diseño con tokens reutilizables, grid responsive Bento, theming dark/light, y arquitectura de componentes escalable. Es la base sobre la que se construirán todas las fases posteriores.

**Critical Path**: Esta fase debe completarse al 100% antes de iniciar Phase 2, ya que todos los componentes de contenido dependen del design system y grid establecidos aquí.

---

## 🏗️ Implementation Guide

### Step 1: Setup Project Structure & Design Tokens

**Objective**: Crear la estructura de archivos y sistema de design tokens

**Technical Reference**:
→ [Design Tokens - Full Specification](../01-TECHNICAL-REFERENCE.md#design-system)
→ [Design Tokens - Copy-Paste CSS](../quick-references/design-tokens.md)

**File Structure**:
```
src/
├── styles/
│   ├── tokens/
│   │   ├── colors.css       # Color palette + theme vars
│   │   ├── typography.css   # Font families, sizes, weights
│   │   ├── spacing.css      # Spacing scale (8px base)
│   │   └── shadows.css      # Box shadows + effects
│   ├── base/
│   │   ├── reset.css        # CSS reset
│   │   └── typography.css   # Base typography styles
│   └── main.css             # Import all CSS files
├── js/
│   └── main.js
└── index.html
```

**Implementation**:

1. **Create design tokens CSS files** using specs from technical reference:

```css
/* styles/tokens/colors.css */
/* 📎 Copy from: quick-references/design-tokens.md */

:root {
  /* Primary Brand Colors */
  --color-navy: #0A192F;
  --color-cyan: #64FFDA;
  --color-white: #FFFFFF;
  /* ... (rest of color tokens) */
}

[data-theme="light"] {
  --color-bg-primary: var(--color-bg-primary-light);
  /* ... (theme overrides) */
}
```

2. **Import all token files** in main.css:

```css
/* styles/main.css */
@import 'tokens/colors.css';
@import 'tokens/typography.css';
@import 'tokens/spacing.css';
@import 'tokens/shadows.css';
@import 'base/reset.css';
@import 'base/typography.css';
```

**Validation**:
- [ ] All design tokens accessible via CSS variables
- [ ] Theme switching updates all semantic tokens
- [ ] No hardcoded values in component styles

---

### Step 2: Implement Bento Grid System

**Objective**: Crear el sistema de grid responsive para el layout del portfolio

**Technical Reference**:
→ [Bento Grid System](../01-TECHNICAL-REFERENCE.md#bento-grid-system)

**Components Needed**:
→ [Card (Base Component)](../03-COMPONENT-LIBRARY.md#1-card-base-component)

**Implementation**:

```css
/* styles/components/grid.css */

.portfolio-grid {
  display: grid;
  gap: var(--grid-gap);
  max-width: var(--grid-max-width);
  margin: 0 auto;
  padding: var(--grid-padding-mobile);

  /* Mobile: 1 column */
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .portfolio-grid {
    /* Tablet: 2 columns */
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .portfolio-grid {
    /* Desktop: 4 columns for flexibility */
    grid-template-columns: repeat(4, 1fr);
    padding: var(--grid-padding-desktop);
  }
}

/* Card size variants using grid-column/grid-row */
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

/* Mobile: All cards full width */
@media (max-width: 767px) {
  .card--small,
  .card--medium,
  .card--large,
  .card--xl {
    grid-column: span 1;
  }
}
```

**Testing**:
- [ ] Grid adapts correctly at: 320px, 768px, 1024px, 1280px, 1920px
- [ ] Cards flow naturally without gaps
- [ ] No horizontal scroll at any breakpoint

---

### Step 3: Build Base Component Library

**Objective**: Implementar los componentes base reutilizables

**Components to Implement**:
→ [Card Component](../03-COMPONENT-LIBRARY.md#1-card-base-component)
→ [Button Component](../03-COMPONENT-LIBRARY.md#9-button-component)
→ [Theme Toggle](../03-COMPONENT-LIBRARY.md#10-theme-toggle)
→ [Skip Links](../03-COMPONENT-LIBRARY.md#11-skip-links)

**Implementation Order**:

1. **Card Component** (Foundation for all content)
   - Implement base `.card` class with all states
   - Create size variants (small, medium, large, xl)
   - Add hover, focus, active states
   - → Full spec: [03-COMPONENT-LIBRARY.md#1-card-base-component](../03-COMPONENT-LIBRARY.md#1-card-base-component)

2. **Button Component** (Used across all phases)
   - Primary, secondary, tertiary variants
   - All interactive states
   - Keyboard accessibility
   - → Full spec: [03-COMPONENT-LIBRARY.md#9-button-component](../03-COMPONENT-LIBRARY.md#9-button-component)

3. **Theme Toggle** (Critical for UX)
   - Dark/light mode switch with icon animation
   - LocalStorage persistence
   - Respects `prefers-color-scheme`
   - → Full spec: [03-COMPONENT-LIBRARY.md#10-theme-toggle](../03-COMPONENT-LIBRARY.md#10-theme-toggle)

4. **Skip Links** (Accessibility requirement)
   - Keyboard-only visible navigation
   - WCAG 2.1 Criterion 2.4.1 compliance
   - → Full spec: [03-COMPONENT-LIBRARY.md#11-skip-links](../03-COMPONENT-LIBRARY.md#11-skip-links)

**Notes**:
- Use design tokens exclusively (no hardcoded values)
- Follow accessibility requirements from component library
- Implement all required ARIA attributes

---

### Step 4: Theme System Implementation

**Objective**: Implementar sistema de theming dark/light con persistencia

**Technical Reference**:
→ [Theme Toggle Component](../03-COMPONENT-LIBRARY.md#10-theme-toggle)

**Implementation**:

```javascript
// js/components/theme-toggle.js

class ThemeManager {
  constructor() {
    this.storageKey = 'portfolio-theme';
    this.toggle = document.getElementById('theme-toggle');
    this.currentTheme = this.getStoredTheme() || this.getPreferredTheme();

    this.init();
  }

  init() {
    this.setTheme(this.currentTheme, false);
    this.toggle?.addEventListener('click', () => this.handleToggle());

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (e) => {
        if (!this.getStoredTheme()) {
          this.setTheme(e.matches ? 'dark' : 'light');
        }
      });
  }

  setTheme(theme, store = true) {
    this.currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);

    if (this.toggle) {
      this.toggle.setAttribute('aria-pressed', theme === 'light');
      this.toggle.setAttribute('data-theme', theme);
    }

    if (store) {
      localStorage.setItem(this.storageKey, theme);
    }
  }

  handleToggle() {
    const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
    this.setTheme(newTheme);
  }

  getStoredTheme() {
    return localStorage.getItem(this.storageKey);
  }

  getPreferredTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }
}

// Initialize
const themeManager = new ThemeManager();
```

**Requirements**:
- [ ] Theme persists across sessions
- [ ] Respects user's `prefers-color-scheme` on first visit
- [ ] No FOUC (Flash of Unstyled Content)
- [ ] Theme switch has smooth transition
- [ ] No layout shift when switching themes (CLS < 0.1)

---

### Step 5: Accessibility Foundation

**Objective**: Establecer baseline de accesibilidad WCAG 2.1 AA

**Accessibility Reference**:
→ [Complete Accessibility Checklist](../quick-references/accessibility-checklist.md)

**Critical Requirements**:

1. **Semantic HTML Structure**:
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Alejandro de la Fuente - Portfolio</title>
</head>
<body>
  <!-- Skip Links (FIRST element) -->
  <div class="skip-links">
    <a href="#main-content" class="skip-link">Saltar al contenido principal</a>
  </div>

  <header role="banner">
    <nav aria-label="Main navigation">...</nav>
  </header>

  <main id="main-content" role="main" tabindex="-1">
    <!-- Content -->
  </main>

  <footer role="contentinfo">...</footer>
</body>
</html>
```

2. **Focus Indicators** (Apply globally):
```css
/* base/accessibility.css */

*:focus-visible {
  outline: 2px solid var(--color-cyan);
  outline-offset: 4px;
}

/* Never remove focus outlines */
*:focus {
  /* ❌ outline: none; - NEVER do this */
}
```

3. **Contrast Ratios** (Verify all combinations):
   - Navy + White: 15.3:1 ✅ (AAA)
   - Navy + Cyan: 8.9:1 ✅ (AA)
   - Navy + Gray Light: 7.2:1 ✅ (AA)
   - → Full matrix: [accessibility-checklist.md#color--contrast](../quick-references/accessibility-checklist.md#color--contrast)

4. **Keyboard Navigation**:
   - Tab order follows visual flow
   - All interactive elements focuseable
   - Skip links functional
   - No keyboard traps

**Validation Tools**:
- [ ] Lighthouse Accessibility = 100
- [ ] axe DevTools = 0 violations
- [ ] WAVE = 0 errors
- [ ] Manual keyboard navigation test
- [ ] Screen reader test (NVDA/VoiceOver)

---

## 🧪 Testing Checklist

### Functional Testing

→ [Complete Testing Checklist Template](../templates/testing-checklist.md)

- [ ] Grid system responsive at all breakpoints
- [ ] Theme toggle works without layout shift
- [ ] All design tokens render correctly
- [ ] Card hover effects smooth (60fps)
- [ ] Buttons have all required states
- [ ] Skip links navigate correctly

### Cross-Browser Testing

→ [Browser Compatibility Matrix](../quick-references/browser-compatibility.md)

- [ ] Chrome (Latest)
- [ ] Firefox (Latest)
- [ ] Safari (Latest - macOS & iOS)
- [ ] Edge (Latest)

### Accessibility Testing

→ [Accessibility Checklist](../quick-references/accessibility-checklist.md)

- [ ] Lighthouse Accessibility ≥ 90
- [ ] axe DevTools: 0 violations
- [ ] WAVE: 0 errors
- [ ] Keyboard navigation: All functions accessible
- [ ] Screen reader: Content announced correctly
- [ ] Color contrast: All ratios ≥ 4.5:1 (text) or 3:1 (UI)

### Performance Testing

→ [Performance Budgets](../quick-references/performance-budgets.md)

| Metric | Target | Validation |
|--------|--------|------------|
| **FCP** | < 1.5s | [ ] |
| **LCP** | < 2.5s | [ ] |
| **CLS** | < 0.1 | [ ] |
| **CSS Bundle** | < 50 KB (gzipped) | [ ] |

---

## 📦 Deliverables

### Code Assets

- ✅ Complete design token system (colors, typography, spacing, shadows)
- ✅ Responsive Bento Grid CSS
- ✅ Base component library (Card, Button, Theme Toggle, Skip Links)
- ✅ Theme management JavaScript
- ✅ Accessibility utilities (focus styles, skip links)

### Documentation

- ✅ Design token reference → [01-TECHNICAL-REFERENCE.md](../01-TECHNICAL-REFERENCE.md)
- ✅ Component usage guide → [03-COMPONENT-LIBRARY.md](../03-COMPONENT-LIBRARY.md)
- ✅ Browser support matrix → [browser-compatibility.md](../quick-references/browser-compatibility.md)
- ✅ Accessibility baseline → [accessibility-checklist.md](../quick-references/accessibility-checklist.md)

---

## 🚀 Definition of Done

### Technical Criteria

- [ ] **Responsive Grid**: Tested at 320px, 768px, 1024px, 1280px, 1920px
- [ ] **Design Tokens**: All tokens implemented and documented
- [ ] **Theme Switching**: Dark/light mode functional, no CLS
- [ ] **Components**: Card, Button, Theme Toggle, Skip Links implemented
- [ ] **Accessibility**: WCAG 2.1 AA baseline, Lighthouse ≥ 90
- [ ] **Browser Support**: Chrome, Firefox, Safari, Edge (last 2 versions)

### Quality Gates

- [ ] **Lighthouse Scores**:
  - Performance: > 90
  - Accessibility: ≥ 90 (target 100)
  - Best Practices: > 90
  - SEO: 100
- [ ] **Validation**:
  - W3C CSS Validator: 0 errors
  - W3C HTML Validator: 0 errors
- [ ] **Performance**:
  - CSS bundle < 50 KB gzipped
  - FCP < 1.5s
  - LCP < 2.5s
  - CLS < 0.1
- [ ] **Code Review**: Approved by technical lead
- [ ] **Documentation**: Complete and reviewed

### Handoff Requirements

**Assets for Phase 2** (Core Content):
- ✅ Working Bento Grid ready for content cards
- ✅ Design tokens available for content styling
- ✅ Base Card component for content sections
- ✅ Button component for CTAs
- ✅ Theme system integrated
- ✅ Accessibility foundation established
- ✅ Performance baseline met

**Blocking Issues**:
- ⚠️ Phase 2 CANNOT start until:
  - Grid system is fully responsive
  - Design tokens are complete
  - Base components are functional
  - Accessibility baseline is established

---

## 🔗 Referencias

### Core Documentation
→ [Project Overview](../00-PROJECT-OVERVIEW.md)
→ [Technical Reference](../01-TECHNICAL-REFERENCE.md)
→ [Component Library](../03-COMPONENT-LIBRARY.md)

### Quick References
→ [Design Tokens](../quick-references/design-tokens.md)
→ [Accessibility Checklist](../quick-references/accessibility-checklist.md)
→ [Performance Budgets](../quick-references/performance-budgets.md)
→ [Browser Compatibility](../quick-references/browser-compatibility.md)

### Next Phase
→ [Phase 2: Core Content Implementation](PHASE-02-Core-Content.md)

---

**Phase Owner**: Frontend Developer
**Stakeholders**: Product Owner, UX Designer
**Created**: 20 Enero 2025
**Last Updated**: 20 Enero 2025
**Status**: Ready for Implementation
