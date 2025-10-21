# PHASE 6: Final Polish & Accessibility Enhancement

## Quick Reference

**Timeline**: 1-2 semanas
**Complexity**: 🟢 Medium
**Dependencies**: Phase 1-5 (Complete Application Required) - BLOCKING
**Key Deliverables**:
- WCAG 2.1 AA compliance (Lighthouse 100)
- Advanced keyboard navigation system
- Screen reader optimization
- Loading states & skeleton screens
- Robust error handling
- Premium finishing touches

---

## 🎯 Objectives & Success Criteria

| Objective | Success Metric | Target |
|-----------|----------------|--------|
| **Accessibility** | WCAG 2.1 AA compliance | Lighthouse 100 |
| **Screen Reader** | Navigation success rate | 100% |
| **Keyboard Navigation** | All functionality accessible | Complete coverage |
| **Error Handling** | Graceful fallbacks | All scenarios covered |
| **Loading States** | Professional UX | Skeleton screens + smooth transitions |
| **Automated Testing** | Zero violations | axe-core + WAVE |
| **User Testing** | Positive feedback | Diverse user needs met |

---

## 📖 Overview

Esta fase final transforma el portfolio en un sitio web production-ready que excede estándares de accesibilidad y proporciona una experiencia de usuario excepcional para todos los usuarios. Se enfoca en WCAG 2.1 AA compliance, navegación avanzada por teclado, optimización para screen readers, manejo robusto de errores, y toques finales premium que demuestran atención al detalle y excelencia profesional.

**Critical Focus**:
- Accesibilidad universal (WCAG 2.1 AA)
- Professional polish y finishing touches
- Error handling comprehensivo
- Experiencia de carga optimizada
- Soporte para tecnologías asistivas

**Quality Standards**: Todo debe ser accessible, graceful, y professional-grade.

---

## 🏗️ Implementation Guide

### Step 1: Implement WCAG 2.1 AA Compliance

**Objective**: Asegurar compliance completo con WCAG 2.1 AA

**Accessibility Reference**:
→ [Complete Accessibility Checklist](../quick-references/accessibility-checklist.md)

**HTML Structure with Semantic Landmarks**:

```html
<!DOCTYPE html>
<html lang="es" dir="ltr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Alejandro de la Fuente - Technical Leader Specialist | Portfolio Profesional</title>
</head>

<body>
  <!-- Skip Links for Keyboard Navigation -->
  <div class="skip-links">
    <a href="#main-content" class="skip-link">
      Saltar al contenido principal
    </a>
    <a href="#navigation" class="skip-link">
      Saltar a la navegación
    </a>
    <a href="#contact" class="skip-link">
      Saltar al contacto
    </a>
  </div>

  <!-- Main Landmark -->
  <main id="main-content" role="main" tabindex="-1">
    <h1 class="sr-only">Portfolio de Alejandro de la Fuente</h1>

    <!-- Hero Section with Proper ARIA -->
    <section class="hero-card"
             aria-labelledby="hero-heading"
             role="banner">
      <div class="hero-content">
        <img src="images/alejandro-profile-120.webp"
             alt="Fotografía profesional de Alejandro de la Fuente, Technical Leader Specialist en NTT DATA"
             class="profile-image"
             width="120"
             height="120"
             role="img">

        <div class="hero-text">
          <h2 id="hero-heading" class="hero-name">
            Alejandro de la Fuente
          </h2>

          <div class="hero-title"
               aria-live="polite"
               aria-label="Título profesional con efecto de escritura">
            <span class="typing-text" role="text">
              Technical Leader Specialist | Experto en IA
            </span>
          </div>

          <p class="hero-subtitle">
            Liderando la transformación digital con IA en NTT DATA
          </p>

          <div class="hero-location" aria-label="Ubicación profesional">
            <span class="location-icon" aria-hidden="true">📍</span>
            <span>Jaén, Andalucía, España</span>
          </div>
        </div>

        <nav class="hero-actions" aria-label="Acciones principales">
          <button class="btn btn--primary"
                  data-scroll-to="projects"
                  aria-describedby="projects-desc">
            Ver Proyectos
          </button>
          <span id="projects-desc" class="sr-only">
            Navegar a la sección de proyectos destacados
          </span>

          <a href="assets/cv-alejandro-fuente.pdf"
             class="btn btn--secondary"
             download="CV-Alejandro-de-la-Fuente.pdf"
             aria-describedby="cv-desc">
            Descargar CV
          </a>
          <span id="cv-desc" class="sr-only">
            Descargar currículum vitae en formato PDF, 1.2MB
          </span>

          <button class="btn btn--tertiary"
                  data-scroll-to="contact"
                  aria-describedby="contact-desc">
            Contactar
          </button>
          <span id="contact-desc" class="sr-only">
            Navegar a la sección de información de contacto
          </span>
        </nav>
      </div>
    </section>
  </main>

  <!-- Footer with Contact Info -->
  <footer role="contentinfo" aria-label="Información de contacto y legal">
    <p>&copy; 2025 Alejandro de la Fuente. Todos los derechos reservados.</p>
  </footer>
</body>
</html>
```

**Accessibility CSS**:

```css
/* styles/accessibility/wcag-compliance.css */

/* Screen Reader Only Content */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* Skip Links */
.skip-links {
  position: relative;
  z-index: 9999;
}

.skip-link {
  position: absolute;
  top: -40px;
  left: 8px;
  background: var(--color-cyan);
  color: var(--color-navy);
  padding: 12px 24px;
  text-decoration: none;
  font-weight: 600;
  border-radius: var(--radius-md);
  transition: top 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--shadow-lg);
}

.skip-link:focus {
  top: 8px;
  outline: 3px solid var(--color-cyan);
  outline-offset: 4px;
}

/* Focus Indicators */
*:focus-visible {
  outline: 3px solid var(--color-cyan);
  outline-offset: 2px;
}

/* Enhanced focus for interactive elements */
button:focus-visible,
a:focus-visible,
input:focus-visible,
textarea:focus-visible,
select:focus-visible {
  outline: 3px solid var(--color-cyan);
  outline-offset: 2px;
  box-shadow: 0 0 0 6px rgba(100, 255, 218, 0.2);
}

/* High Contrast Mode Support */
@media (prefers-contrast: high) {
  .card {
    border: 2px solid currentColor;
  }

  .btn {
    border: 3px solid currentColor;
  }
}

/* Ensure sufficient contrast ratios (WCAG AA) */
:root {
  /* Navy + White: 15.3:1 (AAA) */
  --color-text-primary: #FFFFFF;
  /* Navy + Gray Light: 7.2:1 (AA) */
  --color-text-secondary: #CDD7ED;
  /* Navy + Cyan: 8.9:1 (AA) */
  --color-cyan: #64FFDA;
}

[data-theme="light"] {
  /* Light + Dark Text: 12.6:1 (AAA) */
  --color-text-primary: #2D3748;
  /* Light + Medium Gray: 7.0:1 (AA) */
  --color-text-secondary: #4A5568;
  /* Light + Cyan Dark: 4.5:1 (AA) */
  --color-cyan: #00A3C4;
}
```

**Validation**:
- [ ] All interactive elements have visible focus indicators
- [ ] Skip links work and are visible on focus
- [ ] Color contrast ratios ≥ 4.5:1 for text, ≥ 3:1 for UI
- [ ] All images have descriptive alt text
- [ ] Semantic HTML structure with proper landmarks
- [ ] ARIA labels where needed, not overused

---

### Step 2: Implement Advanced Keyboard Navigation

**Objective**: Crear sistema comprehensivo de navegación por teclado

**Implementation**:

```javascript
// js/accessibility/keyboard-navigation.js

class KeyboardNavigationManager {
  constructor() {
    this.focusableSelector = [
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
      '[contenteditable="true"]'
    ].join(', ');

    this.focusableElements = [];
    this.currentFocusIndex = -1;
    this.isKeyboardUser = false;

    this.init();
  }

  init() {
    this.updateFocusableElements();
    this.bindEvents();
    this.detectInputMethod();
  }

  updateFocusableElements() {
    this.focusableElements = Array.from(
      document.querySelectorAll(this.focusableSelector)
    ).filter(el => this.isVisible(el) && this.isEnabled(el));
  }

  isVisible(element) {
    const style = window.getComputedStyle(element);
    return (
      style.display !== 'none' &&
      style.visibility !== 'hidden' &&
      parseFloat(style.opacity) > 0 &&
      element.offsetParent !== null
    );
  }

  isEnabled(element) {
    return !element.hasAttribute('disabled') && !element.getAttribute('aria-disabled');
  }

  bindEvents() {
    document.addEventListener('keydown', this.handleKeyDown.bind(this));
    document.addEventListener('focusin', this.handleFocusIn.bind(this));

    // Update focusable elements when DOM changes
    const observer = new MutationObserver(() => {
      this.updateFocusableElements();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['disabled', 'tabindex', 'aria-hidden', 'aria-disabled']
    });
  }

  handleKeyDown(event) {
    const { key, shiftKey, altKey, ctrlKey, metaKey } = event;

    // Escape key handling
    if (key === 'Escape') {
      this.handleEscape(event);
      return;
    }

    // Home/End navigation (Ctrl+Home, Ctrl+End)
    if (ctrlKey && key === 'Home') {
      event.preventDefault();
      this.focusFirst();
      return;
    }

    if (ctrlKey && key === 'End') {
      event.preventDefault();
      this.focusLast();
      return;
    }

    // Keyboard shortcuts (Alt + Number)
    if (altKey && !ctrlKey && !metaKey && !shiftKey) {
      this.handleShortcut(key, event);
    }
  }

  handleShortcut(key, event) {
    const shortcuts = {
      '1': 'hero',
      '2': 'about',
      '3': 'timeline',
      '4': 'projects',
      '5': 'skills',
      '6': 'contact'
    };

    const sectionId = shortcuts[key];
    if (sectionId) {
      event.preventDefault();
      this.navigateToSection(sectionId);
      this.announceToScreenReader(`Navegando a la sección ${sectionId}`);
    }
  }

  handleEscape(event) {
    // Close any open modals or overlays
    const openModal = document.querySelector('.modal.open, .overlay.open, [role="dialog"][aria-hidden="false"]');

    if (openModal) {
      event.preventDefault();
      this.closeModal(openModal);
      return;
    }

    // Return focus to main content
    const mainContent = document.getElementById('main-content');
    if (mainContent && document.activeElement !== mainContent) {
      event.preventDefault();
      mainContent.focus();
      this.announceToScreenReader('Regresando al contenido principal');
    }
  }

  closeModal(modal) {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');

    // Return focus to trigger element
    const trigger = modal.dataset.trigger;
    if (trigger) {
      const triggerElement = document.getElementById(trigger);
      if (triggerElement) {
        triggerElement.focus();
      }
    }
  }

  navigateToSection(sectionId) {
    const section = document.getElementById(sectionId) ||
                   document.querySelector(`[data-section="${sectionId}"]`);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });

      // Set tabindex to make section focusable
      if (!section.hasAttribute('tabindex')) {
        section.setAttribute('tabindex', '-1');
      }

      section.focus();
    }
  }

  focusFirst() {
    if (this.focusableElements.length > 0) {
      this.focusableElements[0].focus();
      this.announceToScreenReader('Navegando al primer elemento enfocable');
    }
  }

  focusLast() {
    const lastIndex = this.focusableElements.length - 1;
    if (lastIndex >= 0) {
      this.focusableElements[lastIndex].focus();
      this.announceToScreenReader('Navegando al último elemento enfocable');
    }
  }

  handleFocusIn(event) {
    const currentIndex = this.focusableElements.indexOf(event.target);
    if (currentIndex !== -1) {
      this.currentFocusIndex = currentIndex;
    }
  }

  detectInputMethod() {
    // Detect mouse users
    document.addEventListener('mousedown', () => {
      this.isKeyboardUser = false;
      document.body.classList.add('mouse-user');
      document.body.classList.remove('keyboard-user');
    });

    // Detect keyboard users
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        this.isKeyboardUser = true;
        document.body.classList.add('keyboard-user');
        document.body.classList.remove('mouse-user');
      }
    });
  }

  announceToScreenReader(message, priority = 'polite') {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', priority);
    announcement.setAttribute('aria-atomic', 'true');
    announcement.classList.add('sr-only');
    announcement.textContent = message;

    document.body.appendChild(announcement);

    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  window.keyboardNav = new KeyboardNavigationManager();
});

export default KeyboardNavigationManager;
```

**CSS for Focus Management**:

```css
/* Hide focus outline for mouse users */
.mouse-user *:focus {
  outline: none;
  box-shadow: none;
}

/* Show enhanced focus for keyboard users */
.keyboard-user *:focus-visible {
  outline: 3px solid var(--color-cyan);
  outline-offset: 2px;
  box-shadow: 0 0 0 6px rgba(100, 255, 218, 0.2);
}
```

---

### Step 3: Optimize for Screen Readers

**Objective**: Asegurar navegación perfecta con screen readers

**Enhanced Screen Reader Support**:

```html
<!-- Timeline with Screen Reader Navigation -->
<section class="timeline-card"
         aria-labelledby="timeline-heading"
         role="region">
  <h2 id="timeline-heading">Experiencia Laboral</h2>

  <div class="timeline-container"
       role="list"
       aria-label="Línea temporal de experiencia profesional con 2 empresas">

    <!-- Timeline line is decorative -->
    <div class="timeline-line" aria-hidden="true"></div>

    <article class="timeline-item"
             role="listitem"
             aria-labelledby="ntt-data-heading"
             aria-describedby="ntt-data-desc">

      <!-- Decorative marker -->
      <div class="timeline-marker" aria-hidden="true">
        <div class="timeline-dot"></div>
        <time class="timeline-date" datetime="2022/2025">
          2022 - Presente
        </time>
      </div>

      <div class="timeline-content">
        <header class="company-header">
          <h3 id="ntt-data-heading" class="company-name">
            NTT DATA
          </h3>
          <div class="company-location">Madrid, España</div>
        </header>

        <div id="ntt-data-desc">
          <p class="company-summary">
            Empresa multinacional de servicios de TI donde lidero proyectos
            de transformación digital e innovación con inteligencia artificial
            desde junio de 2022 hasta la actualidad.
          </p>

          <div class="positions"
               role="list"
               aria-label="5 posiciones en NTT DATA">

            <div class="position-item" role="listitem">
              <h4 class="position-title">Technical Leader Specialist</h4>
              <time class="position-period"
                    datetime="2025-07/P">
                Julio 2025 - Presente (6 meses)
              </time>

              <ul class="position-achievements"
                  aria-label="3 logros principales">
                <li>Liderazgo en iniciativas de IA y talleres técnicos</li>
                <li>Procesos de selección y validación técnica</li>
                <li>Arquitectura microfrontends para Inditex</li>
              </ul>

              <div class="position-skills"
                   role="list"
                   aria-label="Tecnologías utilizadas en esta posición">
                <span class="skill-tag" role="listitem">Leadership</span>
                <span class="skill-tag" role="listitem">GenAI</span>
                <span class="skill-tag" role="listitem">Microfrontends</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  </div>
</section>

<!-- Projects with Tab Navigation -->
<section class="projects-card"
         aria-labelledby="projects-heading"
         role="region">
  <header class="projects-header">
    <h2 id="projects-heading">Proyectos Destacados</h2>

    <div class="projects-filter"
         role="tablist"
         aria-label="Filtros de categorías de proyectos">
      <button class="filter-btn filter-btn--active"
              role="tab"
              aria-selected="true"
              aria-controls="projects-panel"
              id="tab-all"
              data-filter="all">
        Todos
      </button>
      <button class="filter-btn"
              role="tab"
              aria-selected="false"
              aria-controls="projects-panel"
              id="tab-enterprise"
              data-filter="enterprise">
        Empresariales
      </button>
      <button class="filter-btn"
              role="tab"
              aria-selected="false"
              aria-controls="projects-panel"
              id="tab-web"
              data-filter="web">
        Web Apps
      </button>
    </div>
  </header>

  <div class="projects-grid"
       id="projects-panel"
       role="tabpanel"
       aria-labelledby="tab-all">

    <article class="project-item"
             aria-labelledby="inditex-title"
             aria-describedby="inditex-desc">

      <div class="project-image">
        <img src="images/projects/inditex-400.webp"
             alt="Captura de pantalla de la plataforma de gestión de tiendas Inditex mostrando dashboard principal con métricas de rendimiento y gestión de empleados"
             loading="lazy"
             width="600"
             height="400">

        <!-- Status overlay is decorative -->
        <div class="project-overlay" aria-hidden="true">
          <div class="project-status">
            <span class="status-indicator status-indicator--live"></span>
            <span class="status-text">En Producción</span>
          </div>
        </div>
      </div>

      <div class="project-content">
        <header class="project-header">
          <h3 id="inditex-title" class="project-title">
            Plataforma Inditex Store Management
          </h3>

          <div class="project-tags"
               role="list"
               aria-label="Etiquetas del proyecto">
            <span class="project-tag" role="listitem">Empresarial</span>
            <span class="project-tag" role="listitem">Confidencial</span>
          </div>
        </header>

        <div id="inditex-desc">
          <p class="project-description">
            Arquitectura microfrontends para gestión integral de tiendas.
            Primera plataforma RRHH publicada globalmente en el grupo Inditex,
            cubriendo el 100% de las tiendas en España.
          </p>

          <div class="project-tech"
               role="list"
               aria-label="4 tecnologías utilizadas">
            <span class="tech-tag" role="listitem">React</span>
            <span class="tech-tag" role="listitem">Microfrontends</span>
            <span class="tech-tag" role="listitem">RTK Query</span>
            <span class="tech-tag" role="listitem">Azure</span>
          </div>

          <div class="project-impact" aria-label="Impacto del proyecto">
            <div class="impact-metric">
              <span class="impact-number">100%</span>
              <span class="impact-label">de tiendas en España</span>
            </div>
            <div class="impact-metric">
              <span class="impact-number">5</span>
              <span class="impact-label">países activos</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  </div>
</section>
```

**Screen Reader Announcements**:

```javascript
// js/accessibility/screen-reader.js

class ScreenReaderAnnouncer {
  constructor() {
    this.liveRegion = null;
    this.init();
  }

  init() {
    this.createLiveRegion();
  }

  createLiveRegion() {
    this.liveRegion = document.createElement('div');
    this.liveRegion.setAttribute('aria-live', 'polite');
    this.liveRegion.setAttribute('aria-atomic', 'true');
    this.liveRegion.classList.add('sr-only');
    document.body.appendChild(this.liveRegion);
  }

  announce(message, priority = 'polite') {
    if (!this.liveRegion) {
      this.createLiveRegion();
    }

    // Update priority if needed
    this.liveRegion.setAttribute('aria-live', priority);

    // Clear and set new message
    this.liveRegion.textContent = '';

    setTimeout(() => {
      this.liveRegion.textContent = message;
    }, 100);
  }

  announceNavigation(sectionName) {
    this.announce(`Navegando a la sección ${sectionName}`);
  }

  announceFilterChange(filterName, count) {
    this.announce(`Mostrando ${count} proyectos en la categoría ${filterName}`);
  }

  announceLoadingComplete(sectionName) {
    this.announce(`Sección ${sectionName} cargada completamente`);
  }

  announceError(errorMessage) {
    this.announce(errorMessage, 'assertive');
  }
}

// Initialize and export
const screenReader = new ScreenReaderAnnouncer();
export default screenReader;
```

---

### Step 4: Implement Loading States & Skeleton Screens

**Objective**: Crear experiencia profesional de carga

**Skeleton Screen CSS**:

```css
/* styles/components/skeleton-screens.css */

.skeleton {
  background: linear-gradient(
    90deg,
    var(--color-bg-secondary) 25%,
    var(--color-slate-light) 50%,
    var(--color-bg-secondary) 75%
  );
  background-size: 200% 100%;
  animation: skeleton-loading 1.5s ease-in-out infinite;
  border-radius: var(--radius-sm);
}

@keyframes skeleton-loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

/* Card skeleton */
.card-skeleton {
  padding: var(--space-6);
  margin-bottom: var(--space-4);
}

.skeleton-header {
  height: 24px;
  width: 70%;
  margin-bottom: var(--space-4);
}

.skeleton-text {
  height: 16px;
  margin-bottom: var(--space-2);
}

.skeleton-text:nth-child(odd) {
  width: 95%;
}

.skeleton-text:nth-child(even) {
  width: 80%;
}

.skeleton-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-bottom: var(--space-4);
}

/* Timeline skeleton */
.timeline-skeleton .skeleton-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: var(--space-4);
}

.timeline-skeleton .skeleton-item {
  display: flex;
  align-items: center;
  margin-bottom: var(--space-4);
}

/* Project skeleton */
.project-skeleton .skeleton-image {
  height: 200px;
  width: 100%;
  margin-bottom: var(--space-4);
}

/* Reduced motion: No animation */
@media (prefers-reduced-motion: reduce) {
  .skeleton {
    animation: none;
    background: var(--color-bg-secondary);
  }
}
```

**Loading State Manager**:

```javascript
// js/components/loading-manager.js

class LoadingStateManager {
  constructor() {
    this.loadingElements = new Map();
    this.init();
  }

  init() {
    this.showInitialLoading();
  }

  showInitialLoading() {
    const sections = [
      { id: 'hero', delay: 300 },
      { id: 'about', delay: 500 },
      { id: 'timeline', delay: 700 },
      { id: 'projects', delay: 900 },
      { id: 'skills', delay: 1100 },
      { id: 'contact', delay: 1300 }
    ];

    sections.forEach(({ id }) => {
      this.showSkeleton(id);
    });

    // Simulate progressive loading
    sections.forEach(({ id, delay }) => {
      setTimeout(() => {
        this.showContent(id);
      }, delay);
    });
  }

  showSkeleton(sectionId) {
    const section = document.querySelector(`[data-section="${sectionId}"]`);
    if (!section) return;

    const skeleton = this.createSkeleton(sectionId);
    section.appendChild(skeleton);
    this.loadingElements.set(sectionId, skeleton);
  }

  createSkeleton(type) {
    const skeleton = document.createElement('div');
    skeleton.className = `${type}-skeleton`;
    skeleton.setAttribute('aria-label', 'Contenido cargando');
    skeleton.setAttribute('aria-busy', 'true');

    // Create skeleton structure based on type
    skeleton.innerHTML = this.getSkeletonHTML(type);

    return skeleton;
  }

  getSkeletonHTML(type) {
    const templates = {
      hero: `
        <div class="card-skeleton">
          <div class="skeleton skeleton-avatar"></div>
          <div class="skeleton skeleton-header"></div>
          <div class="skeleton skeleton-text"></div>
          <div class="skeleton skeleton-text"></div>
        </div>
      `,
      timeline: `
        <div class="timeline-skeleton">
          ${Array(3).fill(0).map(() => `
            <div class="skeleton-item">
              <div class="skeleton skeleton-dot"></div>
              <div class="skeleton skeleton-text" style="width: 60%"></div>
            </div>
          `).join('')}
        </div>
      `,
      projects: `
        <div class="projects-skeleton">
          ${Array(3).fill(0).map(() => `
            <div class="project-skeleton">
              <div class="skeleton skeleton-image"></div>
              <div class="skeleton skeleton-header"></div>
              <div class="skeleton skeleton-text"></div>
            </div>
          `).join('')}
        </div>
      `
    };

    return templates[type] || `
      <div class="card-skeleton">
        <div class="skeleton skeleton-header"></div>
        <div class="skeleton skeleton-text"></div>
        <div class="skeleton skeleton-text"></div>
      </div>
    `;
  }

  showContent(sectionId) {
    const skeleton = this.loadingElements.get(sectionId);
    const section = document.querySelector(`[data-section="${sectionId}"]`);

    if (skeleton && section) {
      // Fade out skeleton
      skeleton.style.transition = 'opacity 0.3s ease-out';
      skeleton.style.opacity = '0';

      setTimeout(() => {
        skeleton.remove();
        this.loadingElements.delete(sectionId);

        // Show actual content
        const content = section.querySelector('.actual-content');
        if (content) {
          content.style.opacity = '0';
          content.style.display = 'block';

          requestAnimationFrame(() => {
            content.style.transition = 'opacity 0.5s ease-in';
            content.style.opacity = '1';
          });

          // Update aria-busy
          section.setAttribute('aria-busy', 'false');
        }
      }, 300);
    }
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  window.loadingManager = new LoadingStateManager();
});

export default LoadingStateManager;
```

---

### Step 5: Implement Error Handling & Fallbacks

**Objective**: Manejar errores gracefully con fallbacks robustos

**Error Handler Implementation**:

```javascript
// js/utils/error-handler.js

class ErrorHandler {
  constructor() {
    this.errors = [];
    this.init();
  }

  init() {
    this.setupGlobalErrorHandling();
    this.setupImageFallbacks();
    this.setupNetworkErrorHandling();
  }

  setupGlobalErrorHandling() {
    // JavaScript errors
    window.addEventListener('error', (event) => {
      this.logError({
        type: 'javascript',
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        error: event.error
      });

      // Prevent default error UI
      event.preventDefault();
    });

    // Unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      this.logError({
        type: 'promise',
        message: event.reason?.message || 'Unhandled promise rejection',
        reason: event.reason
      });

      event.preventDefault();
    });
  }

  setupImageFallbacks() {
    document.addEventListener('error', (event) => {
      if (event.target.tagName === 'IMG') {
        this.handleImageError(event.target);
      }
    }, true);
  }

  handleImageError(img) {
    // Prevent infinite loop
    if (img.dataset.fallbackAttempted) {
      this.showImagePlaceholder(img);
      return;
    }

    img.dataset.fallbackAttempted = 'true';

    // Try alternative formats
    const src = img.src;
    const baseName = src.replace(/\.(avif|webp|jpg|jpeg|png)$/i, '');

    const fallbacks = [
      `${baseName}.jpg`,
      `${baseName}.png`,
      '/images/placeholder-image.svg'
    ];

    this.tryImageFallbacks(img, fallbacks, 0);
  }

  tryImageFallbacks(img, fallbacks, index) {
    if (index >= fallbacks.length) {
      this.showImagePlaceholder(img);
      return;
    }

    const testImg = new Image();
    testImg.onload = () => {
      img.src = fallbacks[index];
    };

    testImg.onerror = () => {
      this.tryImageFallbacks(img, fallbacks, index + 1);
    };

    testImg.src = fallbacks[index];
  }

  showImagePlaceholder(img) {
    const placeholder = document.createElement('div');
    placeholder.className = 'image-placeholder';
    placeholder.setAttribute('role', 'img');
    placeholder.setAttribute('aria-label', img.alt || 'Imagen no disponible');

    placeholder.innerHTML = `
      <div class="placeholder-content">
        <span class="placeholder-icon" aria-hidden="true">📷</span>
        <span class="placeholder-text">Imagen no disponible</span>
      </div>
    `;

    img.parentNode.replaceChild(placeholder, img);
  }

  setupNetworkErrorHandling() {
    window.addEventListener('online', () => {
      this.handleNetworkRestore();
    });

    window.addEventListener('offline', () => {
      this.handleNetworkLoss();
    });

    // Check initial status
    if (!navigator.onLine) {
      this.handleNetworkLoss();
    }
  }

  handleNetworkLoss() {
    this.showNotification(
      'Sin conexión a internet. Algunos elementos pueden no estar disponibles.',
      'warning'
    );
  }

  handleNetworkRestore() {
    this.showNotification(
      'Conexión restaurada.',
      'success'
    );
  }

  showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.setAttribute('role', 'alert');
    notification.setAttribute('aria-live', type === 'error' ? 'assertive' : 'polite');

    notification.innerHTML = `
      <div class="notification-content">
        <span class="notification-icon" aria-hidden="true">
          ${type === 'error' ? '⚠️' : type === 'warning' ? '⚡' : '✓'}
        </span>
        <span class="notification-message">${message}</span>
        <button class="notification-close" aria-label="Cerrar notificación">×</button>
      </div>
    `;

    document.body.appendChild(notification);

    // Auto-dismiss
    setTimeout(() => {
      notification.remove();
    }, 5000);

    // Manual dismiss
    notification.querySelector('.notification-close').addEventListener('click', () => {
      notification.remove();
    });
  }

  logError(errorInfo) {
    this.errors.push({
      ...errorInfo,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href
    });

    // Send to analytics in production
    if (typeof gtag !== 'undefined') {
      gtag('event', 'exception', {
        description: errorInfo.message,
        fatal: false
      });
    }

    console.warn('Error logged:', errorInfo);
  }
}

// Initialize
window.errorHandler = new ErrorHandler();

export default ErrorHandler;
```

**Error Styles**:

```css
/* styles/components/notifications.css */

.notification {
  position: fixed;
  top: 20px;
  right: 20px;
  max-width: 400px;
  padding: var(--space-4);
  background: var(--color-bg-primary);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-xl);
  z-index: 10000;
  animation: slideIn 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.notification--warning {
  border-left: 4px solid #FFA500;
}

.notification--error {
  border-left: 4px solid #FF6B6B;
}

.notification--success {
  border-left: 4px solid #51CF66;
}

.notification-content {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.notification-close {
  margin-left: auto;
  background: none;
  border: none;
  color: var(--color-text-secondary);
  font-size: var(--text-xl);
  cursor: pointer;
  padding: 0;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}

.image-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  background: var(--color-bg-secondary);
  border-radius: var(--radius-md);
}

.placeholder-content {
  text-align: center;
  color: var(--color-text-secondary);
}

.placeholder-icon {
  font-size: var(--text-3xl);
  display: block;
  margin-bottom: var(--space-2);
}
```

---

## 🧪 Testing Checklist

### Accessibility Testing

→ [Complete Accessibility Checklist](../quick-references/accessibility-checklist.md)

- [ ] **Lighthouse Accessibility**: Score 100
- [ ] **axe-core**: 0 violations
- [ ] **WAVE**: 0 errors, 0 contrast errors
- [ ] **Keyboard Navigation**: All functionality accessible
- [ ] **Screen Readers**: Tested with NVDA, JAWS, VoiceOver
- [ ] **Color Contrast**: All ratios ≥ 4.5:1 (text), ≥ 3:1 (UI)
- [ ] **Focus Indicators**: Visible on all interactive elements
- [ ] **Skip Links**: Functional and visible on focus
- [ ] **Semantic HTML**: Proper landmarks and hierarchy
- [ ] **ARIA**: Used appropriately, not overused

### User Experience Testing

- [ ] Loading states smooth and professional
- [ ] Error handling works gracefully
- [ ] Keyboard shortcuts functional (Alt+1-6)
- [ ] Tab order logical and intuitive
- [ ] No keyboard traps
- [ ] Reduced motion preferences respected
- [ ] High contrast mode supported
- [ ] Zoom functionality (up to 200%)

### Cross-Platform Validation

- [ ] Chrome: Accessibility features working
- [ ] Firefox: Screen reader compatible
- [ ] Safari: VoiceOver integration
- [ ] Edge: All features functional
- [ ] Mobile: Touch accessibility maintained

---

## 📦 Deliverables

### Accessibility Features

- ✅ Skip links implementation
- ✅ ARIA labels and descriptions
- ✅ Semantic HTML structure
- ✅ Keyboard navigation system
- ✅ Screen reader optimizations
- ✅ Focus management
- ✅ Color contrast compliance

### Professional Polish

- ✅ Skeleton loading screens
- ✅ Error handling system
- ✅ Network status detection
- ✅ Image fallbacks
- ✅ Graceful degradation
- ✅ User notifications

### Documentation

- ✅ Accessibility compliance report
- ✅ Keyboard shortcuts reference
- ✅ Testing procedures documented
- ✅ Screen reader navigation guide

---

## 🚀 Definition of Done

### Technical Criteria

- [ ] **WCAG 2.1 AA Compliance**: Verified and documented
- [ ] **Lighthouse Accessibility**: Score 100
- [ ] **Keyboard Navigation**: All functionality accessible
- [ ] **Screen Readers**: Optimized for NVDA, JAWS, VoiceOver
- [ ] **Error Handling**: Comprehensive fallbacks implemented
- [ ] **Loading States**: Professional skeleton screens
- [ ] **Automated Testing**: 0 violations (axe-core + WAVE)

### Quality Gates

- [ ] **Manual Testing**: Screen reader navigation successful
- [ ] **Keyboard Testing**: No traps, logical tab order
- [ ] **Color Contrast**: All elements ≥ WCAG AA
- [ ] **Focus Management**: Visible indicators, proper order
- [ ] **Error States**: Graceful handling, user notifications
- [ ] **Performance**: Accessibility features don't degrade performance

### Production Readiness

- [ ] All user scenarios tested
- [ ] Documentation complete
- [ ] Error logging operational
- [ ] Cross-platform verified
- [ ] Final polish applied
- [ ] **Ready for Launch** 🚀

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

### All Previous Phases
→ [Phase 1: Foundation](PHASE-01-Foundation.md)
→ [Phase 2: Core Content](PHASE-02-Core-Content.md)
→ [Phase 3: Advanced Features](PHASE-03-Advanced-Features.md)
→ [Phase 4: Animations](PHASE-04-Animations.md)
→ [Phase 5: Performance & SEO](PHASE-05-Performance.md)

---

**Phase Owner**: Frontend Developer, Accessibility Specialist
**Stakeholders**: Product Owner, UX Designer, QA Engineer
**Created**: 21 Enero 2025
**Last Updated**: 21 Enero 2025
**Status**: Ready for Implementation

**Final Note**: Esta es la última fase del proyecto. Al completarla, el portfolio estará 100% production-ready con excelencia profesional en todos los aspectos. 🎉
