# PHASE 2: Core Content Implementation

## Quick Reference

**Timeline**: 2-3 semanas
**Complexity**: 🟡 Medium-High
**Dependencies**: Phase 1 (Foundation & Design System) - BLOCKING
**Key Deliverables**:
- Hero section with professional presentation
- About Me content block
- AI Leadership showcase
- Contact information & social links
- Optimized images (WebP/AVIF)

---

## 🎯 Objectives & Success Criteria

| Objective | Success Metric | Target |
|-----------|----------------|--------|
| **Hero Section** | Professional presentation complete | All content + CTAs functional |
| **About Content** | Engaging personal brand | Counter animations + highlights |
| **AI Leadership** | Showcase expertise credibly | Responsibilities + certifications |
| **Contact Info** | Easy accessibility | All channels linked + working |
| **Semantic HTML** | W3C validation | 0 errors |
| **Performance** | Fast content loading | < 2s load time |
| **Accessibility** | Maintain baseline | Lighthouse ≥ 90 |

---

## 📖 Overview

Esta fase implementa las secciones principales de contenido del portfolio utilizando el design system y Bento Grid establecidos en Phase 1. Se enfoca en crear una presentación profesional clara con información personal, experiencia en IA, y canales de contacto.

**Critical Content**:
- Información personal y profesional actual
- Rol como Technical Leader Specialist en NTT DATA
- Especialización en IA y liderazgo técnico
- Contacto y presencia en redes sociales

**Note**: Todo el contenido debe extraerse de → [02-CONTENT-SPECIFICATIONS.md](../02-CONTENT-SPECIFICATIONS.md)

---

## 🏗️ Implementation Guide

### Step 1: Implement Hero Section

**Objective**: Crear la sección principal de presentación profesional

**Components Needed**:
→ [Hero Card Component](../03-COMPONENT-LIBRARY.md#2-hero-card)
→ [Button Component](../03-COMPONENT-LIBRARY.md#9-button-component)

**Content Source**:
→ [Información Personal](../02-CONTENT-SPECIFICATIONS.md#información-personal-canonical-data)

**Grid Placement**: XL Card (3x2)

**Implementation**:

```html
<section class="hero-card card card--xl" aria-label="Introduction">
  <div class="hero-content">
    <!-- Profile Image -->
    <div class="hero-image">
      <div class="profile-wrapper">
        <picture>
          <source srcset="images/alejandro-profile.avif" type="image/avif">
          <source srcset="images/alejandro-profile.webp" type="image/webp">
          <img src="images/alejandro-profile.jpg"
               alt="Alejandro de la Fuente - Technical Leader Specialist"
               class="profile-image"
               width="120"
               height="120"
               loading="eager">
        </picture>
        <div class="profile-border-animation"></div>
      </div>
    </div>

    <!-- Hero Text -->
    <div class="hero-text">
      <h1 class="hero-name">Alejandro de la Fuente</h1>

      <div class="hero-title" data-typing="true">
        <span class="typed-text">Technical Leader Specialist | Experto en IA</span>
        <span class="typing-cursor" aria-hidden="true">|</span>
      </div>

      <p class="hero-subtitle">
        Liderando la transformación digital con IA en NTT DATA
      </p>

      <div class="hero-location">
        <span class="location-icon" aria-hidden="true">📍</span>
        <span>Jaén, Andalucía <span aria-label="España">🇪🇸</span></span>
      </div>
    </div>

    <!-- CTAs -->
    <div class="hero-actions">
      <button class="btn btn--primary" data-scroll-to="projects">
        <span>Ver Proyectos</span>
        <span class="btn-icon" aria-hidden="true">→</span>
      </button>
      <a href="assets/cv-alejandro-fuente.pdf"
         class="btn btn--secondary"
         download
         aria-label="Descargar CV en formato PDF">
        <span class="btn-icon" aria-hidden="true">📄</span>
        <span>Descargar CV</span>
      </a>
      <button class="btn btn--tertiary" data-scroll-to="contact">
        <span>Contactar</span>
      </button>
    </div>
  </div>
</section>
```

**Styling Reference**:
→ Complete styles in: [Hero Card Component](../03-COMPONENT-LIBRARY.md#2-hero-card)

**Interactive Elements**:
- Profile border: Gradient animation (rotation 3s infinite)
- Typing effect: Cursor blink 1s step-end
- Buttons: Hover states from Button component

**Image Optimization**:
- Profile photo: 120x120px base size
- Formats: AVIF → WebP → JPG fallback
- Budget: < 100 KB total
- → Reference: [performance-budgets.md - Images](../quick-references/performance-budgets.md#images)

**Accessibility**:
- `<h1>` must be only one on page
- Emojis with `aria-label` or `aria-hidden="true"`
- Typing cursor decorative: `aria-hidden="true"`
- CTAs keyboard accessible

---

### Step 2: Implement About Me Section

**Objective**: Presentar background profesional y disponibilidad

**Components Needed**:
→ [About Card Component](../03-COMPONENT-LIBRARY.md#3-about-card)
→ [Stats Counter Component](../03-COMPONENT-LIBRARY.md#7-stats-counter)

**Content Source**:
→ [Información Personal - About](../02-CONTENT-SPECIFICATIONS.md#información-personal-canonical-data)

**Grid Placement**: Large Card (2x2)

**Implementation**:

```html
<section class="about-card card card--large" aria-label="About Me">
  <div class="about-header">
    <h2 class="section-title">Sobre Mí</h2>
    <div class="badge badge--available">
      <span class="badge-icon" aria-hidden="true">🚀</span>
      <span>Disponible para nuevos retos</span>
    </div>
  </div>

  <div class="about-content">
    <p class="about-text">
      Desarrollador web especializado en ReactJS con más de 3 años liderando
      proyectos de transformación digital en NTT DATA. Actualmente me desempeño
      como Technical Leader Specialist, liderando iniciativas de IA y automatización
      para clientes como Inditex, además de impartir talleres sobre tecnologías
      emergentes como GenAI, Copilot Agents y Dev Containers.
    </p>

    <p class="about-text">
      Mi enfoque combina desarrollo frontend de alto rendimiento con arquitecturas
      escalables (micro frontends) y un fuerte componente de liderazgo técnico,
      mentoría y evangelización tecnológica.
    </p>

    <div class="about-highlights">
      <div class="highlight-item">
        <span class="highlight-icon ai-pulse" aria-hidden="true">🤖</span>
        <span class="highlight-text">Especialista en IA</span>
      </div>
      <div class="highlight-item">
        <span class="highlight-value">
          <span class="counter" data-count="3" data-suffix="+">0</span>
        </span>
        <span class="highlight-label">años de experiencia</span>
      </div>
    </div>
  </div>
</section>
```

**Styling Reference**:
→ Complete styles in: [About Card Component](../03-COMPONENT-LIBRARY.md#3-about-card)

**Interactive Elements**:
- Badge: Hover highlighting with glow
- AI Icon: Subtle pulse animation (2s ease-in-out infinite)
- Counter: Animate from 0 to 3 on scroll (Intersection Observer)
  - → JavaScript: [Stats Counter](../03-COMPONENT-LIBRARY.md#7-stats-counter)

**Animation JavaScript**:
```javascript
// Counter animation on scroll
const aboutCard = document.querySelector('.about-card');
const counter = aboutCard.querySelector('.counter');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(counter);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

observer.observe(aboutCard);

// Function from Stats Counter component
// → Full implementation: 03-COMPONENT-LIBRARY.md#7-stats-counter
```

---

### Step 3: Implement AI Leadership Section

**Objective**: Mostrar rol de liderazgo y responsabilidades en IA

**Components Needed**:
→ [Card (Base Component)](../03-COMPONENT-LIBRARY.md#1-card-base-component)

**Content Source**:
→ [Experiencia Profesional - NTT DATA](../02-CONTENT-SPECIFICATIONS.md#experiencia-profesional)

**Grid Placement**: Large Card (2x2)

**Implementation**:

```html
<section class="ai-leadership-card card card--large" aria-label="AI Leadership">
  <div class="section-header">
    <h2 class="section-title">
      <span class="title-icon" aria-hidden="true">🤖</span>
      Liderando Innovación en IA
    </h2>
  </div>

  <div class="leadership-content">
    <p class="leadership-intro">
      Como Technical Leader Specialist en NTT DATA, lidero:
    </p>

    <ul class="responsibilities-list">
      <li class="responsibility-item">
        <span class="check-icon" aria-hidden="true">✓</span>
        <div class="responsibility-text">
          <strong>Desarrollo de soluciones transformadoras</strong> con microfrontends
          React para el ecosistema de tiendas Inditex (todas las tiendas de España)
        </div>
      </li>

      <li class="responsibility-item">
        <span class="check-icon" aria-hidden="true">✓</span>
        <div class="responsibility-text">
          <strong>Talleres de GenAI y herramientas de IA:</strong>
          <ul class="workshop-list">
            <li>"Sacarle partido a la IA: Instructions de Copilot y Agentes"</li>
            <li>"Dev Containers: estandarización de entornos"</li>
            <li>Novedades en React y arquitecturas modernas</li>
          </ul>
        </div>
      </li>

      <li class="responsibility-item">
        <span class="check-icon" aria-hidden="true">✓</span>
        <div class="responsibility-text">
          <strong>Procesos de selección técnica</strong> y validación de conocimientos
        </div>
      </li>

      <li class="responsibility-item">
        <span class="check-icon" aria-hidden="true">✓</span>
        <div class="responsibility-text">
          <strong>Arquitectura de aplicaciones para iPad</strong> con orquestación
          de múltiples equipos de desarrollo
        </div>
      </li>
    </ul>

    <div class="certifications">
      <span class="certification-badge">
        <span aria-hidden="true">🏅</span>
        Certificado GenAI Yellow Belt
      </span>
    </div>
  </div>
</section>
```

**Styling**:

```css
/* Additional styles for AI Leadership section */
.responsibilities-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.responsibility-item {
  display: flex;
  gap: var(--space-3);
  align-items: flex-start;
}

.check-icon {
  color: var(--color-cyan);
  font-weight: var(--font-bold);
  font-size: var(--text-lg);
  flex-shrink: 0;
}

.workshop-list {
  margin-top: var(--space-2);
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
}

.certification-badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-4);
  background: rgba(100, 255, 218, 0.1);
  border: 1px solid var(--color-cyan);
  border-radius: var(--radius-md);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: var(--color-cyan);
  margin-top: var(--space-6);
}
```

---

### Step 4: Implement Contact Section

**Objective**: Proporcionar canales de contacto accesibles

**Components Needed**:
→ [Contact Card Component](../03-COMPONENT-LIBRARY.md#8-contact-card)

**Content Source**:
→ [Información de Contacto](../02-CONTENT-SPECIFICATIONS.md#información-de-contacto)

**Grid Placement**: Medium Card (2x1)

**Implementation**:

```html
<section class="contact-card card card--medium" aria-label="Contact Information">
  <div class="contact-header">
    <h2 class="section-title">
      <span class="title-icon" aria-hidden="true">📬</span>
      Contacto
    </h2>
    <p class="contact-subtitle">¿Hablamos de tu próximo proyecto?</p>
  </div>

  <div class="contact-methods">
    <!-- Email -->
    <div class="contact-item">
      <a href="mailto:llamamealex@gmail.com"
         class="contact-link contact-link--email"
         aria-label="Enviar email a llamamealex@gmail.com">
        <span class="contact-icon" aria-hidden="true">✉️</span>
        <div class="contact-info">
          <span class="contact-label">Email</span>
          <span class="contact-value">llamamealex@gmail.com</span>
        </div>
      </a>
      <button class="copy-btn"
              data-copy="llamamealex@gmail.com"
              aria-label="Copiar email al portapapeles">
        <span class="copy-icon" aria-hidden="true">📋</span>
      </button>
    </div>

    <!-- Phone / WhatsApp -->
    <div class="contact-item">
      <a href="https://wa.me/34629202639"
         class="contact-link contact-link--phone"
         target="_blank"
         rel="noopener noreferrer">
        <span class="contact-icon" aria-hidden="true">📱</span>
        <div class="contact-info">
          <span class="contact-label">WhatsApp</span>
          <span class="contact-value">+34 629 20 26 39</span>
        </div>
        <span class="external-icon" aria-hidden="true">↗</span>
      </a>
    </div>

    <!-- LinkedIn -->
    <div class="contact-item">
      <a href="https://linkedin.com/in/alejandro-de-la-fuente"
         class="contact-link contact-link--linkedin"
         target="_blank"
         rel="noopener noreferrer">
        <span class="contact-icon" aria-hidden="true">💼</span>
        <div class="contact-info">
          <span class="contact-label">LinkedIn</span>
          <span class="contact-value">alejandro-de-la-fuente</span>
        </div>
        <span class="external-icon" aria-hidden="true">↗</span>
      </a>
    </div>

    <!-- GitHub -->
    <div class="contact-item">
      <a href="https://github.com/TellMeAlex"
         class="contact-link contact-link--github"
         target="_blank"
         rel="noopener noreferrer">
        <span class="contact-icon" aria-hidden="true">🐙</span>
        <div class="contact-info">
          <span class="contact-label">GitHub</span>
          <span class="contact-value">@TellMeAlex</span>
        </div>
        <span class="external-icon" aria-hidden="true">↗</span>
      </a>
    </div>
  </div>
</section>
```

**Styling Reference**:
→ Complete styles in: [Contact Card Component](../03-COMPONENT-LIBRARY.md#8-contact-card)

**JavaScript for Copy-to-Clipboard**:
→ Full implementation: [Contact Card - JavaScript](../03-COMPONENT-LIBRARY.md#8-contact-card)

```javascript
// Copy to clipboard functionality
document.querySelectorAll('.copy-btn').forEach(button => {
  button.addEventListener('click', async () => {
    const textToCopy = button.dataset.copy;

    try {
      await navigator.clipboard.writeText(textToCopy);
      button.classList.add('copied');
      button.setAttribute('aria-label', 'Copiado al portapapeles');

      setTimeout(() => {
        button.classList.remove('copied');
        button.setAttribute('aria-label', 'Copiar al portapapeles');
      }, 2000);
    } catch (err) {
      console.error('Error al copiar:', err);
    }
  });
});
```

---

### Step 5: Image Optimization

**Objective**: Optimizar todas las imágenes para performance web

**Performance Reference**:
→ [Image Optimization Strategy](../quick-references/performance-budgets.md#images)

**Required Images**:

1. **Profile Photo** (alejandro-profile)
   - Dimensions: 120x120px (base), 240x240px (2x retina)
   - Formats: AVIF, WebP, JPG
   - Budget: < 100 KB total
   - Loading: `loading="eager"` (above fold)

**Optimization Process**:

```bash
# Using ImageMagick or similar

# Generate AVIF (best compression)
magick alejandro-profile.jpg -resize 120x120 -quality 85 alejandro-profile.avif

# Generate WebP (fallback)
magick alejandro-profile.jpg -resize 120x120 -quality 85 alejandro-profile.webp

# Optimize JPG (final fallback)
magick alejandro-profile.jpg -resize 120x120 -quality 85 -strip alejandro-profile.jpg
```

**Verification**:
- [ ] All images < budget
- [ ] AVIF + WebP + JPG fallbacks present
- [ ] Width/height attributes prevent CLS
- [ ] Alt text descriptive and accurate

---

## 🧪 Testing Checklist

### Content Verification

- [ ] All content matches [02-CONTENT-SPECIFICATIONS.md](../02-CONTENT-SPECIFICATIONS.md)
- [ ] No typos or grammatical errors
- [ ] Professional tone consistent
- [ ] Contact information accurate and working
- [ ] All links functional (internal + external)

### Functional Testing

→ [Complete Testing Template](../templates/testing-checklist.md)

- [ ] Hero CTAs scroll to correct sections
- [ ] Download CV button works
- [ ] Counter animates on scroll
- [ ] Copy-to-clipboard functional
- [ ] All external links open in new tab with `rel="noopener noreferrer"`

### Responsive Testing

- [ ] Hero section: Mobile (320px), Tablet (768px), Desktop (1024px+)
- [ ] Text readable at all sizes
- [ ] Images scale appropriately
- [ ] CTAs accessible on mobile (≥ 44x44px)

### Accessibility Testing

→ [Accessibility Checklist](../quick-references/accessibility-checklist.md)

- [ ] Semantic HTML: `<h1>` only one per page
- [ ] Heading hierarchy logical (h1 → h2, no skips)
- [ ] All images have alt text
- [ ] All buttons keyboard accessible
- [ ] External links announce "opens in new window"
- [ ] Color contrast ≥ 4.5:1 for text
- [ ] Lighthouse Accessibility ≥ 90

### Performance Testing

→ [Performance Budgets](../quick-references/performance-budgets.md)

- [ ] Images optimized (AVIF/WebP + fallback)
- [ ] Content loads < 2s
- [ ] No layout shifts (CLS < 0.1)
- [ ] Animations 60fps
- [ ] Counter animation smooth

---

## 📦 Deliverables

### Content Sections

- ✅ Hero Section (XL 3x2) with profile + CTAs
- ✅ About Me Section (Large 2x2) with highlights + counter
- ✅ AI Leadership Section (Large 2x2) with responsibilities
- ✅ Contact Section (Medium 2x1) with all channels + copy-to-clipboard

### Assets

- ✅ Profile photo (AVIF, WebP, JPG @ 120x120 + 2x)
- ✅ CV PDF for download

### Code

- ✅ Semantic HTML5 structure
- ✅ Component styles using design tokens
- ✅ Counter animation JavaScript
- ✅ Copy-to-clipboard JavaScript
- ✅ Smooth scroll to section functionality

---

## 🚀 Definition of Done

### Technical Criteria

- [ ] **All Sections Implemented**: Hero, About, AI Leadership, Contact
- [ ] **Content Accurate**: Matches [02-CONTENT-SPECIFICATIONS.md](../02-CONTENT-SPECIFICATIONS.md)
- [ ] **Semantic HTML**: W3C validation 0 errors
- [ ] **Images Optimized**: All < budget, modern formats + fallbacks
- [ ] **Responsive**: Works 320px - 1920px+
- [ ] **Interactive**: Counter, copy-to-clipboard, scroll-to functional
- [ ] **Accessibility**: Lighthouse ≥ 90, WCAG 2.1 AA compliant

### Quality Gates

- [ ] **W3C Validation**: HTML 0 errors, CSS 0 errors
- [ ] **Lighthouse Scores**:
  - Performance: > 90
  - Accessibility: ≥ 90
  - Best Practices: > 90
  - SEO: 100
- [ ] **Load Time**: Content visible < 2s
- [ ] **Animations**: 60fps, respects `prefers-reduced-motion`
- [ ] **Cross-browser**: Chrome, Firefox, Safari, Edge tested

### Handoff Requirements

**Assets for Phase 3** (Experience Timeline & Portfolio):
- ✅ Content structure established
- ✅ Counter animation pattern reusable
- ✅ Contact section template for footer
- ✅ Image optimization workflow documented

**Dependencies Met**:
- ✅ Design system from Phase 1 used throughout
- ✅ Grid system accommodates all cards
- ✅ Theme switching works with new content
- ✅ No regressions in Phase 1 functionality

---

## 🔗 Referencias

### Core Documentation
→ [Project Overview](../00-PROJECT-OVERVIEW.md)
→ [Technical Reference](../01-TECHNICAL-REFERENCE.md)
→ [Content Specifications](../02-CONTENT-SPECIFICATIONS.md)
→ [Component Library](../03-COMPONENT-LIBRARY.md)

### Quick References
→ [Design Tokens](../quick-references/design-tokens.md)
→ [Accessibility Checklist](../quick-references/accessibility-checklist.md)
→ [Performance Budgets](../quick-references/performance-budgets.md)
→ [Browser Compatibility](../quick-references/browser-compatibility.md)

### Related Phases
→ [Phase 1: Foundation](PHASE-01-Foundation.md) - DEPENDENCY
→ [Phase 3: Advanced Features](PHASE-03-Advanced-Features.md) - NEXT

---

**Phase Owner**: Frontend Developer
**Stakeholders**: Content Manager, UX Designer
**Created**: 20 Enero 2025
**Last Updated**: 20 Enero 2025
**Status**: Ready for Implementation
