# PRD 2: Core Content Implementation

**Project**: Alejandro de la Fuente Portfolio
**Phase**: 2 - Core Content
**Timeline**: 2-3 weeks
**Complexity**: 🟡 Medium-High
**Dependencies**: Phase 1 (Foundation & Design System)

---

## 📋 EXECUTIVE SUMMARY

Implement the primary content sections of the portfolio website using the established design system and Bento Grid layout. This phase focuses on creating the hero section, about content, AI leadership section, and contact information with semantic HTML structure and basic interactive animations.

## 🎯 OBJECTIVES

### Primary Goals
- ✅ Implement hero section with professional presentation
- ✅ Create engaging "About Me" content block
- ✅ Showcase AI Leadership role and responsibilities
- ✅ Establish contact and social media presence
- ✅ Ensure semantic HTML5 structure throughout
- ✅ Add foundational animations and interactions

### Success Metrics
- Content displays correctly across all device sizes
- Semantic HTML passes W3C validation
- Images optimized for web (WebP with fallbacks)
- Basic animations perform at 60fps
- Accessibility score maintains >90
- Content loading time <2 seconds

## 🏗️ TECHNICAL SPECIFICATIONS

### Content Sections Implementation

#### 1. Hero Section [Tarjeta XL - 3x2]

**Grid Placement**: `grid-column: span 3; grid-row: span 2;`

**Content Requirements**:
```html
<section class="hero-card card card--xl" aria-label="Introduction">
  <div class="hero-content">
    <div class="hero-image">
      <img src="images/alejandro-profile.webp"
           alt="Alejandro de la Fuente - Technical Leader Specialist"
           class="profile-image">
    </div>
    <div class="hero-text">
      <h1 class="hero-name">Alejandro de la Fuente</h1>
      <div class="hero-title" data-typing="true">
        Technical Leader Specialist | Experto en IA
      </div>
      <p class="hero-subtitle">
        Liderando la transformación digital con IA en NTT DATA
      </p>
      <div class="hero-location">
        <span class="location-icon">📍</span>
        <span>Jaén, Andalucía 🇪🇸</span>
      </div>
    </div>
    <div class="hero-actions">
      <button class="btn btn--primary" data-scroll-to="projects">
        Ver Proyectos
      </button>
      <a href="assets/cv-alejandro-fuente.pdf"
         class="btn btn--secondary"
         download>
        Descargar CV
      </a>
      <button class="btn btn--tertiary" data-scroll-to="contact">
        Contactar
      </button>
    </div>
  </div>
</section>
```

**Visual Elements**:
- Profile image: 120px circular with gradient border animation
- Typing effect implementation for title
- Gradient border rotation on profile image
- Hover effects on action buttons
- Responsive text scaling for mobile

#### 2. About Me Section [Tarjeta Large - 2x2]

**Grid Placement**: `grid-column: span 2; grid-row: span 2;`

**Content Requirements**:
```html
<section class="about-card card card--large" aria-label="About Me">
  <div class="about-header">
    <h2 class="section-title">Sobre Mí</h2>
    <div class="badge badge--available">
      🚀 Disponible para nuevos retos
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
        <span class="ai-icon">🤖</span>
        <span class="highlight-text">Especialista en IA</span>
      </div>
      <div class="highlight-item">
        <span class="counter" data-count="3">0</span>
        <span class="counter-suffix">+ años de experiencia</span>
      </div>
    </div>
  </div>
</section>
```

**Interactive Elements**:
- Badge hover highlighting
- Counter animation on scroll
- AI icon subtle pulsing effect
- Text content fade-in on scroll

#### 3. AI Leadership Section [Tarjeta Large - 2x2]

**Grid Placement**: `grid-column: span 2; grid-row: span 2;`

**Content Requirements**:
```html
<section class="ai-leadership-card card card--large" aria-label="AI Leadership">
  <div class="section-header">
    <h2 class="section-title">
      <span class="title-icon">🤖</span>
      Liderando Innovación en IA
    </h2>
  </div>

  <div class="leadership-content">
    <p class="leadership-intro">
      Como Technical Leader Specialist en NTT DATA, lidero:
    </p>

    <ul class="responsibilities-list">
      <li class="responsibility-item">
        <span class="check-icon">✓</span>
        <div class="responsibility-text">
          <strong>Desarrollo de soluciones transformadoras</strong> con microfrontends
          React para el ecosistema de tiendas Inditex (todas las tiendas de España)
        </div>
      </li>

      <li class="responsibility-item">
        <span class="check-icon">✓</span>
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
        <span class="check-icon">✓</span>
        <div class="responsibility-text">
          <strong>Procesos de selección técnica</strong> y validación de conocimientos
        </div>
      </li>

      <li class="responsibility-item">
        <span class="check-icon">✓</span>
        <div class="responsibility-text">
          <strong>Arquitectura de aplicaciones para iPad</strong> con orquestación
          de múltiples equipos de desarrollo
        </div>
      </li>
    </ul>

    <div class="certifications">
      <div class="certification-badge">
        Certificado GenAI Yellow Belt
      </div>
    </div>
  </div>
</section>
```

**Visual Elements**:
- Technology icons with pulse effects
- Slide-in animation from right
- Responsibility items with staggered entrance
- Certification badge highlighting

#### 4. Contact & Social Links [Tarjeta Medium - 2x1]

**Grid Placement**: `grid-column: span 2; grid-row: span 1;`

**Content Requirements**:
```html
<section class="contact-card card card--medium" aria-label="Contact Information">
  <div class="contact-header">
    <h2 class="section-title">¿Hablamos?</h2>
  </div>

  <div class="contact-content">
    <div class="contact-methods">
      <div class="contact-item">
        <span class="contact-icon">📧</span>
        <a href="mailto:llamamealex@gmail.com"
           class="contact-link"
           data-copy="llamamealex@gmail.com">
          llamamealex@gmail.com
        </a>
      </div>

      <div class="contact-item">
        <span class="contact-icon">💼</span>
        <a href="https://linkedin.com/in/alejandro-de-la-fuente"
           class="contact-link"
           target="_blank"
           rel="noopener noreferrer">
          linkedin.com/in/alejandro-de-la-fuente
        </a>
      </div>

      <div class="contact-item">
        <span class="contact-icon">💻</span>
        <a href="https://github.com/TellMeAlex"
           class="contact-link"
           target="_blank"
           rel="noopener noreferrer">
          github.com/TellMeAlex
        </a>
      </div>

      <div class="contact-item">
        <span class="contact-icon">📱</span>
        <span class="contact-link" data-copy="+34 629 20 26 39">
          +34 629 20 26 39
        </span>
      </div>
    </div>

    <div class="social-buttons">
      <a href="https://linkedin.com/in/alejandro-de-la-fuente"
         class="social-btn social-btn--linkedin"
         aria-label="LinkedIn Profile">
        <svg><!-- LinkedIn icon --></svg>
      </a>
      <a href="https://github.com/TellMeAlex"
         class="social-btn social-btn--github"
         aria-label="GitHub Profile">
        <svg><!-- GitHub icon --></svg>
      </a>
      <a href="mailto:llamamealex@gmail.com"
         class="social-btn social-btn--email"
         aria-label="Send Email">
        <svg><!-- Email icon --></svg>
      </a>
      <a href="https://wa.me/34629202639"
         class="social-btn social-btn--whatsapp"
         aria-label="WhatsApp Contact">
        <svg><!-- WhatsApp icon --></svg>
      </a>
    </div>
  </div>
</section>
```

**Interactive Features**:
- Copy to clipboard functionality for email and phone
- Ripple effect on social buttons
- Icon bounce animation on hover
- Visual feedback for copy actions

### Image Optimization Strategy

**Profile Image Requirements**:
- Primary format: WebP (120px × 120px)
- Fallback format: JPEG (120px × 120px)
- Retina support: 2x versions (240px × 240px)
- Alt text: "Alejandro de la Fuente - Technical Leader Specialist"
- Loading: eager (above fold)

**Implementation**:
```html
<picture>
  <source srcset="images/alejandro-profile-240.webp 2x,
                  images/alejandro-profile-120.webp 1x"
          type="image/webp">
  <img src="images/alejandro-profile-120.jpg"
       srcset="images/alejandro-profile-240.jpg 2x"
       alt="Alejandro de la Fuente - Technical Leader Specialist"
       class="profile-image"
       width="120"
       height="120">
</picture>
```

### Basic Animation Implementation

**CSS Animations**:
```css
/* Fade in animation */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Typing effect */
@keyframes typing {
  from { width: 0; }
  to { width: 100%; }
}

/* Profile border rotation */
@keyframes borderRotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Pulse effect */
@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}
```

**JavaScript Interactions**:
```javascript
// Typing effect
function initTypingEffect() {
  const typingElement = document.querySelector('[data-typing]');
  // Implementation for typing animation
}

// Copy to clipboard
function initCopyToClipboard() {
  const copyElements = document.querySelectorAll('[data-copy]');
  // Implementation for copy functionality with feedback
}

// Scroll to sections
function initScrollToSections() {
  const scrollButtons = document.querySelectorAll('[data-scroll-to]');
  // Implementation for smooth scroll navigation
}
```

## 📦 DELIVERABLES

### File Structure
```
src/
├── images/
│   ├── alejandro-profile-120.webp
│   ├── alejandro-profile-240.webp
│   ├── alejandro-profile-120.jpg
│   └── alejandro-profile-240.jpg
├── assets/
│   └── cv-alejandro-fuente.pdf
├── styles/components/
│   ├── hero.css
│   ├── about.css
│   ├── ai-leadership.css
│   ├── contact.css
│   └── badges.css
├── js/components/
│   ├── typing-effect.js
│   ├── copy-clipboard.js
│   ├── scroll-navigation.js
│   └── animations.js
└── index.html (updated with content)
```

### Content Assets
- Professional profile photo (optimized formats)
- CV/Resume PDF document
- Content copy (reviewed and approved)
- Social media profile links verification
- Contact information validation

## 🧪 TESTING & VALIDATION

### Content Testing
- [ ] All text content displays correctly across devices
- [ ] Profile image loads and displays properly
- [ ] PDF download works and file is accessible
- [ ] All external links open correctly (target="_blank")
- [ ] Contact information is accurate and functional

### Interaction Testing
- [ ] Typing effect animates smoothly
- [ ] Copy to clipboard functionality works
- [ ] Scroll navigation buttons function properly
- [ ] Social media buttons link to correct profiles
- [ ] Hover effects perform without jank

### Accessibility Testing
- [ ] All images have appropriate alt text
- [ ] Heading hierarchy is logical (h1 → h2)
- [ ] Focus indicators visible on all interactive elements
- [ ] Screen reader can navigate content logically
- [ ] Color contrast meets WCAG 2.1 AA standards

### Performance Validation
- [ ] Images optimized and properly sized
- [ ] CSS animations maintain 60fps
- [ ] Content loading time <2 seconds
- [ ] Cumulative Layout Shift <0.1
- [ ] Largest Contentful Paint <2.5s

## 🚀 DEFINITION OF DONE

### Functional Criteria
- ✅ Hero section displays with profile image and call-to-action buttons
- ✅ About section showcases professional background effectively
- ✅ AI Leadership section highlights current role and responsibilities
- ✅ Contact section provides multiple ways to connect
- ✅ All animations perform smoothly across devices
- ✅ Copy to clipboard functionality works for email and phone

### Quality Gates
- ✅ Content matches approved copy exactly
- ✅ All links verified and functional
- ✅ Images optimized for web delivery
- ✅ Accessibility score maintains >90
- ✅ Performance benchmarks met
- ✅ Cross-browser compatibility confirmed

### Content Validation
- [ ] Professional tone and accuracy verified
- [ ] Contact information tested and confirmed
- [ ] Social media profiles linked correctly
- [ ] CV/Resume document current and accessible
- [ ] All claims and achievements factually accurate

## 🔄 HANDOFF TO NEXT PHASE

### Completed Foundation
- Core content sections implemented and styled
- Basic animation system established
- Image optimization pipeline in place
- Contact and social media integration complete

### Ready for Enhancement
- Content structure prepared for advanced animations
- Semantic HTML foundation for complex interactions
- Performance baseline established for additional features
- Accessibility foundation ready for complex components

---

**Phase Owner**: Frontend Developer, Content Reviewer
**Stakeholder**: Product Owner, UX Designer, Alejandro de la Fuente
**Review Date**: [To be scheduled]
**Approval Required**: Content accuracy, technical implementation, design fidelity