# Component Library - Catálogo de Componentes Reutilizables

**Versión**: 1.0
**Última actualización**: 20 Enero 2025
**Propósito**: Biblioteca de componentes UI con especificaciones técnicas completas para implementación del portfolio

---

## 📚 Índice de Componentes

1. [Card (Base Component)](#1-card-base-component)
2. [Hero Card](#2-hero-card)
3. [About Card](#3-about-card)
4. [Timeline Component](#4-timeline-component)
5. [Project Card](#5-project-card)
6. [Skills Visualization](#6-skills-visualization)
7. [Stats Counter](#7-stats-counter)
8. [Contact Card](#8-contact-card)
9. [Button Component](#9-button-component)
10. [Theme Toggle](#10-theme-toggle)
11. [Skip Links](#11-skip-links)
12. [Loading Skeleton](#12-loading-skeleton)

---

## 1. Card (Base Component)

**Metadata**
- **Variantes**: Small (1x1), Medium (2x1), Large (2x2), XL (3x2)
- **Complexity**: 🟢 Low
- **Usado en Fases**: Phase 1, Phase 2, Phase 3, Phase 4, Phase 5, Phase 6

El Card es el componente fundacional del Bento Grid. Todos los demás componentes de contenido heredan de esta base.

### Anatomía

```html
<!-- Base Card Structure -->
<article class="card card--[size]" role="article">
  <div class="card-header">
    <h2 class="card-title">Card Title</h2>
    <div class="card-actions">
      <!-- Optional actions -->
    </div>
  </div>
  <div class="card-body">
    <!-- Card content -->
  </div>
  <div class="card-footer">
    <!-- Optional footer -->
  </div>
</article>
```

### Estilos Base

```css
/* Base Card Styles */
.card {
  /* Layout */
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;

  /* Spacing */
  padding: var(--space-6);

  /* Visual */
  background: var(--color-bg-secondary);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);

  /* Transitions */
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Size Variants */
.card--small {
  grid-column: span 1;
  grid-row: span 1;
  min-height: 300px;
}

.card--medium {
  grid-column: span 2;
  grid-row: span 1;
  min-height: 300px;
}

.card--large {
  grid-column: span 2;
  grid-row: span 2;
  min-height: 400px;
}

.card--xl {
  grid-column: span 3;
  grid-row: span 2;
  min-height: 400px;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .card--small,
  .card--medium,
  .card--large,
  .card--xl {
    grid-column: span 1;
    min-height: auto;
  }
}

/* Card Header */
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-4);
}

.card-title {
  font-size: var(--text-xl);
  font-weight: var(--font-semibold);
  color: var(--color-text-primary);
  margin: 0;
}

/* Card Body */
.card-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

/* Card Footer */
.card-footer {
  margin-top: var(--space-6);
  padding-top: var(--space-4);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}
```

### Estados

- **Default**: Background secundario, sombra media, sin transformación
- **Hover**: Eleva 8px (`translateY(-8px)`), sombra grande + glow, escala 1.02
- **Focus**: Border cyan con outline para teclado, mantiene hover state
- **Active**: Escala 0.98, sombra reducida durante click
- **Loading**: Skeleton animation con shimmer effect
- **Error**: Border rojo, icono de error en header

```css
/* Hover State */
.card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg), var(--shadow-glow);
}

/* Focus State */
.card:focus-within {
  outline: 2px solid var(--color-cyan);
  outline-offset: 4px;
}

/* Active State */
.card:active {
  transform: translateY(-4px) scale(0.98);
}

/* Loading State */
.card--loading .card-body {
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
}

/* Error State */
.card--error {
  border: 2px solid var(--color-error);
}
```

### Accessibility

- **ARIA Role**: `article` para contenido independiente, `region` con `aria-label` para secciones temáticas
- **Keyboard Support**:
  - `Tab`: Navega entre cards focuseables
  - `Enter/Space`: Activa card si es clickeable
  - `Escape`: Cierra modal si card está expandido
- **Screen Reader**: Anuncia título del card, estado (loading/error), y acciones disponibles
- **Contrast Compliance**:
  - Texto sobre background: 15.3:1 (AAA)
  - Texto secundario: 7.2:1 (AA)
  - Borders y dividers: 3:1 mínimo

### Ejemplos de Uso

#### Ejemplo 1: Card Simple con Contenido de Texto

```html
<article class="card card--small">
  <div class="card-header">
    <h2 class="card-title">Quick Stat</h2>
  </div>
  <div class="card-body">
    <p class="stat-value">150+</p>
    <p class="stat-label">Proyectos Completados</p>
  </div>
</article>
```

#### Ejemplo 2: Card Interactivo con CTA

```html
<article class="card card--medium" tabindex="0">
  <div class="card-header">
    <h2 class="card-title">Últimos Artículos</h2>
    <a href="/blog" class="card-action">Ver todos →</a>
  </div>
  <div class="card-body">
    <ul class="article-list">
      <li>Artículo 1</li>
      <li>Artículo 2</li>
    </ul>
  </div>
</article>
```

#### Ejemplo 3: Card con Estado de Carga

```html
<article class="card card--large card--loading" aria-busy="true">
  <div class="card-header">
    <div class="skeleton skeleton--title"></div>
  </div>
  <div class="card-body">
    <div class="skeleton skeleton--text"></div>
    <div class="skeleton skeleton--text"></div>
  </div>
</article>
```

### Referencias

→ **Technical Reference**: [01-TECHNICAL-REFERENCE.md - Design Tokens](01-TECHNICAL-REFERENCE.md#design-system)
→ **Technical Reference**: [01-TECHNICAL-REFERENCE.md - Bento Grid System](01-TECHNICAL-REFERENCE.md#bento-grid-system)
→ **PRDs**: Phase 1 (Foundation), Phase 2 (Core Content), Phase 3 (Advanced Features)

---

## 2. Hero Card

**Metadata**
- **Variantes**: Standard (con imagen), Text-only (sin imagen)
- **Complexity**: 🟡 Medium
- **Usado en Fases**: Phase 2 (Core Content), Phase 4 (Animations)

El Hero Card es la tarjeta principal de presentación. Contiene la imagen de perfil, información profesional, y CTAs principales.

### Anatomía

```html
<section class="hero-card card card--xl" aria-label="Introduction">
  <div class="hero-content">
    <!-- Profile Image Section -->
    <div class="hero-image">
      <div class="profile-wrapper">
        <img src="images/alejandro-profile.webp"
             alt="Alejandro de la Fuente - Technical Leader Specialist"
             class="profile-image"
             width="120"
             height="120"
             loading="eager">
        <div class="profile-border-animation"></div>
      </div>
    </div>

    <!-- Text Content Section -->
    <div class="hero-text">
      <h1 class="hero-name">
        Alejandro de la Fuente
      </h1>

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

    <!-- Action Buttons Section -->
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

### Estilos Base

```css
/* Hero Card Layout */
.hero-card {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: var(--space-8);
  background: linear-gradient(
    135deg,
    var(--color-bg-secondary) 0%,
    var(--color-slate) 100%
  );
}

.hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-6);
  max-width: 700px;
}

/* Profile Image */
.profile-wrapper {
  position: relative;
  width: 120px;
  height: 120px;
}

.profile-image {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  position: relative;
  z-index: 2;
  border: 4px solid var(--color-bg-secondary);
}

.profile-border-animation {
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  background: linear-gradient(
    45deg,
    var(--color-cyan),
    var(--color-accent),
    var(--color-cyan)
  );
  background-size: 200% 200%;
  animation: gradient-rotate 3s ease infinite;
  z-index: 1;
}

@keyframes gradient-rotate {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

/* Hero Text */
.hero-name {
  font-size: var(--text-5xl);
  font-weight: var(--font-bold);
  color: var(--color-text-primary);
  margin: 0;
  line-height: var(--leading-tight);
}

.hero-title {
  font-size: var(--text-2xl);
  font-weight: var(--font-medium);
  color: var(--color-cyan);
  font-family: var(--font-mono);
  margin: var(--space-2) 0;
}

.typing-cursor {
  display: inline-block;
  width: 2px;
  margin-left: 4px;
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.hero-subtitle {
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
  margin: var(--space-2) 0;
  line-height: var(--leading-relaxed);
}

.hero-location {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-base);
  color: var(--color-text-secondary);
  margin-top: var(--space-2);
}

/* Hero Actions */
.hero-actions {
  display: flex;
  gap: var(--space-4);
  margin-top: var(--space-4);
  flex-wrap: wrap;
  justify-content: center;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-name {
    font-size: var(--text-3xl);
  }

  .hero-title {
    font-size: var(--text-lg);
  }

  .hero-actions {
    flex-direction: column;
    width: 100%;
  }

  .hero-actions .btn {
    width: 100%;
  }
}
```

### Estados

- **Default**: Profile image con gradient border animado, texto estático
- **Hover (Profile)**: Escala 1.05, gradient acelera rotación
- **Hover (Buttons)**: Ver [Button Component](#9-button-component)
- **Focus**: Outline cyan en elementos interactivos
- **Typing Animation**: Efecto de escritura en hero-title al cargar página

```css
/* Profile Hover State */
.profile-wrapper:hover .profile-image {
  transform: scale(1.05);
  transition: transform 0.3s ease;
}

.profile-wrapper:hover .profile-border-animation {
  animation-duration: 1.5s;
}
```

### Accessibility

- **ARIA Role**: `banner` como sección principal de la página
- **Keyboard Support**:
  - `Tab`: Navega entre botones de acción
  - `Enter/Space`: Activa scroll o descarga según botón
- **Screen Reader**:
  - Anuncia "Sección principal: Alejandro de la Fuente, Technical Leader Specialist"
  - Emojis tienen `aria-label` descriptivo
  - Cursor de typing tiene `aria-hidden="true"`
- **Contrast Compliance**:
  - Hero name sobre background: 15.3:1 (AAA)
  - Hero title (cyan): 8.9:1 (AA)

### Ejemplos de Uso

#### Ejemplo 1: Hero Completo (Usado en Homepage)

```html
<!-- Ver sección Anatomía para código completo -->
<!-- Integrado con datos de 02-CONTENT-SPECIFICATIONS.md -->
```

#### Ejemplo 2: Hero Simplificado (Sin Imagen)

```html
<section class="hero-card card card--xl hero-card--text-only">
  <div class="hero-content">
    <h1 class="hero-name">Alejandro de la Fuente</h1>
    <div class="hero-title">Technical Leader Specialist</div>
    <div class="hero-actions">
      <button class="btn btn--primary">Ver Proyectos</button>
    </div>
  </div>
</section>
```

### Referencias

→ **Content Data**: [02-CONTENT-SPECIFICATIONS.md - Información Personal](02-CONTENT-SPECIFICATIONS.md#información-personal-canonical-data)
→ **Technical Reference**: [01-TECHNICAL-REFERENCE.md - Typography](01-TECHNICAL-REFERENCE.md#typography-system)
→ **Related Components**: [Button Component](#9-button-component)
→ **PRDs**: Phase 2 (Core Content Implementation), Phase 4 (Animations)

---

## 3. About Card

**Metadata**
- **Variantes**: Standard, Compact (sin highlights)
- **Complexity**: 🟡 Medium
- **Usado en Fases**: Phase 2 (Core Content), Phase 4 (Animations)

Card de "Sobre Mí" que presenta el background profesional, especialización, y disponibilidad.

### Anatomía

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

### Estilos Base

```css
/* About Card Layout */
.about-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

/* About Header */
.about-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--space-4);
  flex-wrap: wrap;
}

.section-title {
  font-size: var(--text-3xl);
  font-weight: var(--font-bold);
  color: var(--color-text-primary);
  margin: 0;
}

/* Badge Styles */
.badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-md);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  transition: all 0.3s ease;
}

.badge--available {
  background: rgba(100, 255, 218, 0.1);
  color: var(--color-cyan);
  border: 1px solid var(--color-cyan);
}

.badge--available:hover {
  background: rgba(100, 255, 218, 0.2);
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(100, 255, 218, 0.2);
}

/* About Content */
.about-content {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.about-text {
  font-size: var(--text-base);
  line-height: var(--leading-relaxed);
  color: var(--color-text-secondary);
  margin: 0;
}

/* About Highlights */
.about-highlights {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--space-6);
  margin-top: var(--space-4);
}

.highlight-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: var(--space-4);
  border-radius: var(--radius-md);
  background: rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
}

.highlight-item:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-4px);
}

.highlight-icon {
  font-size: var(--text-4xl);
  margin-bottom: var(--space-2);
}

/* AI Icon Pulse Animation */
.ai-pulse {
  animation: ai-pulse 2s ease-in-out infinite;
}

@keyframes ai-pulse {
  0%, 100% {
    transform: scale(1);
    filter: brightness(1);
  }
  50% {
    transform: scale(1.1);
    filter: brightness(1.2);
  }
}

.highlight-value {
  font-size: var(--text-4xl);
  font-weight: var(--font-bold);
  color: var(--color-cyan);
  line-height: 1;
  margin-bottom: var(--space-2);
}

.highlight-text,
.highlight-label {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  font-weight: var(--font-medium);
}
```

### Estados

- **Default**: Texto estático, badge con border cyan, highlights visibles
- **Hover (Badge)**: Eleva 2px, background más intenso, glow effect
- **Hover (Highlights)**: Eleva 4px, background más claro
- **Scroll Animation**: Fade-in al entrar en viewport (Intersection Observer)
- **Counter Animation**: Cuenta desde 0 hasta valor final cuando entra en viewport

```css
/* Scroll Animation States */
.about-card[data-animated="false"] {
  opacity: 0;
  transform: translateY(20px);
}

.about-card[data-animated="true"] {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
```

### Accessibility

- **ARIA Role**: `region` con `aria-label="About Me"`
- **Keyboard Support**:
  - `Tab`: Badge es focuseable si contiene enlace
  - Highlights no son interactivos (solo visuales)
- **Screen Reader**:
  - Anuncia "Sección Sobre Mí"
  - Lee badge: "Disponible para nuevos retos"
  - Counter anuncia valor final (no animación): "3 plus años de experiencia"
- **Contrast Compliance**:
  - About text: 7.2:1 (AA)
  - Badge text: 8.9:1 (AA)
  - Highlight values: 8.9:1 (AA)

### Ejemplos de Uso

#### Ejemplo 1: About Card Completo

```html
<!-- Ver sección Anatomía para código completo -->
```

#### Ejemplo 2: About Card Compacto (Sin Highlights)

```html
<section class="about-card card card--medium">
  <div class="about-header">
    <h2 class="section-title">Sobre Mí</h2>
  </div>
  <div class="about-content">
    <p class="about-text">
      Desarrollador web especializado en ReactJS con más de 3 años...
    </p>
  </div>
</section>
```

### Referencias

→ **Content Data**: [02-CONTENT-SPECIFICATIONS.md - Información Personal](02-CONTENT-SPECIFICATIONS.md#información-personal-canonical-data)
→ **Related Components**: [Stats Counter](#7-stats-counter) (para counter animation)
→ **Technical Reference**: [01-TECHNICAL-REFERENCE.md - Animation System](01-TECHNICAL-REFERENCE.md#animation-system)
→ **PRDs**: Phase 2 (Core Content), Phase 4 (Animations)

---

## 4. Timeline Component

**Metadata**
- **Variantes**: Vertical (default), Horizontal (experimental)
- **Complexity**: 🔴 High
- **Usado en Fases**: Phase 3 (Experience Timeline), Phase 4 (Animations)

Componente de línea de tiempo vertical para mostrar experiencia profesional con entradas expandibles.

### Anatomía

```html
<section class="timeline-card card card--xl" aria-label="Professional Experience">
  <div class="timeline-header">
    <h2 class="section-title">
      <span class="title-icon" aria-hidden="true">💼</span>
      Experiencia Profesional
    </h2>
  </div>

  <div class="timeline">
    <!-- Timeline Item -->
    <article class="timeline-item" data-expanded="false">
      <div class="timeline-marker">
        <div class="marker-dot"></div>
        <div class="marker-line"></div>
      </div>

      <div class="timeline-content">
        <button class="timeline-toggle" aria-expanded="false" aria-controls="experience-1">
          <div class="timeline-header-content">
            <h3 class="timeline-title">Technical Leader Specialist</h3>
            <span class="timeline-company">NTT DATA</span>
          </div>
          <div class="timeline-meta">
            <time datetime="2025-07">Jul 2025</time>
            <span aria-hidden="true">→</span>
            <span>Presente</span>
            <span class="timeline-duration">(6 meses)</span>
          </div>
          <span class="expand-icon" aria-hidden="true">+</span>
        </button>

        <div id="experience-1" class="timeline-details" hidden>
          <p class="timeline-description">
            Liderazgo de iniciativas de IA y automatización para clientes enterprise.
            Impartición de talleres sobre GenAI, Copilot Agents y Dev Containers.
          </p>
          <ul class="timeline-achievements">
            <li>🎯 Liderazgo de equipo de 8 desarrolladores en proyecto Inditex</li>
            <li>🤖 Implementación de soluciones GenAI aumentando productividad 40%</li>
            <li>📚 Formación de 50+ desarrolladores en tecnologías emergentes</li>
          </ul>
          <div class="timeline-tags">
            <span class="tag">IA</span>
            <span class="tag">Leadership</span>
            <span class="tag">GenAI</span>
          </div>
        </div>
      </div>
    </article>

    <!-- Más Timeline Items... -->
    <article class="timeline-item" data-expanded="false">
      <div class="timeline-marker">
        <div class="marker-dot"></div>
        <div class="marker-line"></div>
      </div>
      <div class="timeline-content">
        <button class="timeline-toggle" aria-expanded="false" aria-controls="experience-2">
          <div class="timeline-header-content">
            <h3 class="timeline-title">Desarrollador Full Stack</h3>
            <span class="timeline-company">HelloAuto</span>
          </div>
          <div class="timeline-meta">
            <time datetime="2021-02">Feb 2021</time>
            <span aria-hidden="true">→</span>
            <time datetime="2022-06">Jun 2022</time>
            <span class="timeline-duration">(1 año 4 meses)</span>
          </div>
          <span class="expand-icon" aria-hidden="true">+</span>
        </button>
        <div id="experience-2" class="timeline-details" hidden>
          <!-- Detalles... -->
        </div>
      </div>
    </article>
  </div>
</section>
```

### Estilos Base

```css
/* Timeline Container */
.timeline-card {
  padding: var(--space-8);
}

.timeline {
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
  margin-top: var(--space-6);
}

/* Timeline Item */
.timeline-item {
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: var(--space-6);
  position: relative;
}

/* Timeline Marker */
.timeline-marker {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.marker-dot {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--color-cyan);
  border: 3px solid var(--color-bg-secondary);
  box-shadow: 0 0 0 2px var(--color-cyan);
  position: relative;
  z-index: 2;
  transition: all 0.3s ease;
}

.timeline-item:hover .marker-dot {
  transform: scale(1.3);
  box-shadow: 0 0 0 4px rgba(100, 255, 218, 0.3);
}

.marker-line {
  width: 2px;
  flex: 1;
  background: linear-gradient(
    to bottom,
    var(--color-cyan) 0%,
    rgba(100, 255, 218, 0.3) 100%
  );
  margin-top: var(--space-2);
}

.timeline-item:last-child .marker-line {
  display: none;
}

/* Timeline Content */
.timeline-content {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.timeline-toggle {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding: var(--space-4);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-md);
  cursor: pointer;
  text-align: left;
  transition: all 0.3s ease;
  position: relative;
}

.timeline-toggle:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: var(--color-cyan);
  transform: translateX(4px);
}

.timeline-toggle:focus {
  outline: 2px solid var(--color-cyan);
  outline-offset: 2px;
}

.timeline-header-content {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.timeline-title {
  font-size: var(--text-lg);
  font-weight: var(--font-semibold);
  color: var(--color-text-primary);
  margin: 0;
}

.timeline-company {
  font-size: var(--text-base);
  color: var(--color-cyan);
  font-weight: var(--font-medium);
}

.timeline-meta {
  display: flex;
  gap: var(--space-2);
  align-items: center;
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  flex-wrap: wrap;
}

.timeline-duration {
  opacity: 0.7;
}

.expand-icon {
  position: absolute;
  top: var(--space-4);
  right: var(--space-4);
  font-size: var(--text-2xl);
  color: var(--color-cyan);
  transition: transform 0.3s ease;
}

.timeline-toggle[aria-expanded="true"] .expand-icon {
  transform: rotate(45deg);
}

/* Timeline Details (Expandible) */
.timeline-details {
  padding: var(--space-4);
  background: rgba(255, 255, 255, 0.03);
  border-left: 3px solid var(--color-cyan);
  border-radius: var(--radius-sm);
  animation: slideDown 0.3s ease;
}

.timeline-details[hidden] {
  display: none;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.timeline-description {
  font-size: var(--text-base);
  line-height: var(--leading-relaxed);
  color: var(--color-text-secondary);
  margin: 0 0 var(--space-4);
}

.timeline-achievements {
  list-style: none;
  padding: 0;
  margin: 0 0 var(--space-4);
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.timeline-achievements li {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  padding-left: var(--space-6);
  position: relative;
}

.timeline-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.tag {
  display: inline-block;
  padding: var(--space-1) var(--space-3);
  background: rgba(100, 255, 218, 0.1);
  color: var(--color-cyan);
  border-radius: var(--radius-sm);
  font-size: var(--text-xs);
  font-weight: var(--font-medium);
}

/* Responsive */
@media (max-width: 768px) {
  .timeline-item {
    grid-template-columns: 30px 1fr;
    gap: var(--space-4);
  }

  .marker-dot {
    width: 12px;
    height: 12px;
  }
}
```

### Estados

- **Default**: Items colapsados, solo header visible
- **Expanded**: Details visibles con animación slideDown
- **Hover**: Item se ilumina, border cyan, traslada derecha 4px
- **Focus**: Outline cyan en timeline-toggle
- **Scroll Animation**: Markers aparecen secuencialmente con stagger (100ms entre cada uno)

```css
/* Estado Expandido */
.timeline-item[data-expanded="true"] .timeline-toggle {
  background: rgba(100, 255, 218, 0.05);
  border-color: var(--color-cyan);
}
```

### Accessibility

- **ARIA Role**: Timeline usa `feed` role, cada item es `article`
- **Keyboard Support**:
  - `Tab`: Navega entre botones de timeline
  - `Enter/Space`: Expande/colapsa detalles
  - `↑/↓`: Navega entre timeline items (opcional)
- **Screen Reader**:
  - Anuncia: "Technical Leader Specialist en NTT DATA, Julio 2025 a Presente"
  - Estado: "Expandido" o "Colapsado"
  - Achievements anunciados como lista
- **Contrast Compliance**:
  - Timeline title: 15.3:1 (AAA)
  - Company name (cyan): 8.9:1 (AA)
  - Meta info: 7.2:1 (AA)

### Ejemplos de Uso

#### Ejemplo 1: Timeline Completo (Ver Anatomía)

```html
<!-- Ver sección Anatomía -->
```

#### JavaScript para Funcionalidad de Expansión

```javascript
// Timeline Toggle Functionality
document.querySelectorAll('.timeline-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true';
    const details = button.nextElementSibling;
    const item = button.closest('.timeline-item');

    button.setAttribute('aria-expanded', !expanded);
    details.hidden = expanded;
    item.dataset.expanded = !expanded;
  });
});

// Scroll Animation with Stagger
const observerOptions = {
  threshold: 0.2,
  rootMargin: '0px 0px -100px 0px'
};

const timelineObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateX(0)';
      }, index * 100);
    }
  });
}, observerOptions);

document.querySelectorAll('.timeline-item').forEach(item => {
  item.style.opacity = '0';
  item.style.transform = 'translateX(-20px)';
  item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  timelineObserver.observe(item);
});
```

### Referencias

→ **Content Data**: [02-CONTENT-SPECIFICATIONS.md - Experiencia Profesional](02-CONTENT-SPECIFICATIONS.md#experiencia-profesional)
→ **Technical Reference**: [01-TECHNICAL-REFERENCE.md - Animation System](01-TECHNICAL-REFERENCE.md#animation-system)
→ **PRDs**: Phase 3 (Experience Timeline & Portfolio), Phase 4 (Animations)

---

## 5. Project Card

**Metadata**
- **Variantes**: Grid (con imagen), List (sin imagen), Featured (con video)
- **Complexity**: 🟡 Medium-High
- **Usado en Fases**: Phase 3 (Portfolio), Phase 4 (Animations)

Card de proyecto con imagen destacada, overlay con información técnica, y modal expandible.

### Anatomía

```html
<article class="project-card card card--large" data-project-id="inditex">
  <div class="project-image-wrapper">
    <img src="images/projects/inditex-platform.webp"
         alt="Inditex Store Management Platform Dashboard"
         class="project-image"
         loading="lazy"
         width="600"
         height="400">
    <div class="project-overlay">
      <div class="overlay-content">
        <span class="project-category">Enterprise Platform</span>
        <h3 class="project-title">Inditex Store Management Platform</h3>
        <p class="project-summary">
          Arquitectura de microfrontends para gestión de todas las tiendas
          de Inditex en España y 5 países adicionales.
        </p>
        <div class="project-stats">
          <div class="stat-item">
            <span class="stat-value">100%</span>
            <span class="stat-label">tiendas España</span>
          </div>
          <div class="stat-item">
            <span class="stat-value">5</span>
            <span class="stat-label">países</span>
          </div>
        </div>
      </div>
      <button class="project-cta" aria-label="Ver detalles del proyecto Inditex">
        <span>Ver Proyecto</span>
        <span class="cta-icon" aria-hidden="true">→</span>
      </button>
    </div>
  </div>

  <div class="project-footer">
    <div class="project-tech-stack">
      <span class="tech-tag tech-tag--react">React</span>
      <span class="tech-tag tech-tag--typescript">TypeScript</span>
      <span class="tech-tag tech-tag--azure">Azure</span>
      <span class="tech-tag tech-tag--rtk">RTK Query</span>
    </div>
    <time class="project-date" datetime="2023">2023 - Presente</time>
  </div>
</article>
```

### Estilos Base

```css
/* Project Card Layout */
.project-card {
  display: flex;
  flex-direction: column;
  padding: 0;
  overflow: hidden;
  cursor: pointer;
}

/* Project Image */
.project-image-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: var(--color-slate);
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.project-card:hover .project-image {
  transform: scale(1.1);
}

/* Project Overlay */
.project-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(10, 25, 47, 0.95) 0%,
    rgba(10, 25, 47, 0.7) 50%,
    transparent 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: var(--space-6);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.overlay-content {
  transform: translateY(20px);
  transition: transform 0.4s ease;
}

.project-card:hover .overlay-content {
  transform: translateY(0);
}

.project-category {
  display: inline-block;
  font-size: var(--text-xs);
  font-weight: var(--font-semibold);
  color: var(--color-cyan);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: var(--space-2);
}

.project-title {
  font-size: var(--text-2xl);
  font-weight: var(--font-bold);
  color: var(--color-white);
  margin: 0 0 var(--space-3);
  line-height: var(--leading-tight);
}

.project-summary {
  font-size: var(--text-sm);
  line-height: var(--leading-relaxed);
  color: var(--color-gray-light);
  margin: 0 0 var(--space-4);
}

/* Project Stats */
.project-stats {
  display: flex;
  gap: var(--space-6);
  margin-bottom: var(--space-4);
}

.stat-item {
  display: flex;
  flex-direction: column;
}

.stat-value {
  font-size: var(--text-2xl);
  font-weight: var(--font-bold);
  color: var(--color-cyan);
  line-height: 1;
}

.stat-label {
  font-size: var(--text-xs);
  color: var(--color-gray-light);
  margin-top: var(--space-1);
}

/* Project CTA */
.project-cta {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-6);
  background: var(--color-cyan);
  color: var(--color-navy);
  border: none;
  border-radius: var(--radius-md);
  font-size: var(--text-sm);
  font-weight: var(--font-semibold);
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: flex-start;
}

.project-cta:hover {
  background: var(--color-white);
  transform: translateX(4px);
  box-shadow: 0 4px 12px rgba(100, 255, 218, 0.4);
}

.cta-icon {
  transition: transform 0.3s ease;
}

.project-cta:hover .cta-icon {
  transform: translateX(4px);
}

/* Project Footer */
.project-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-4) var(--space-6);
  background: rgba(255, 255, 255, 0.03);
  gap: var(--space-4);
  flex-wrap: wrap;
}

/* Tech Stack Tags */
.project-tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.tech-tag {
  padding: var(--space-1) var(--space-3);
  background: rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-sm);
  font-size: var(--text-xs);
  font-weight: var(--font-medium);
  color: var(--color-text-secondary);
  border: 1px solid transparent;
  transition: all 0.3s ease;
}

.tech-tag:hover {
  background: rgba(100, 255, 218, 0.1);
  border-color: var(--color-cyan);
  color: var(--color-cyan);
}

/* Tech-specific colors */
.tech-tag--react { border-color: #61DAFB; }
.tech-tag--typescript { border-color: #3178C6; }
.tech-tag--azure { border-color: #0078D4; }
.tech-tag--node { border-color: #339933; }

.project-date {
  font-size: var(--text-xs);
  color: var(--color-text-secondary);
  font-style: italic;
}

/* Responsive */
@media (max-width: 768px) {
  .project-overlay {
    opacity: 1;
    background: linear-gradient(
      to top,
      rgba(10, 25, 47, 0.98) 0%,
      rgba(10, 25, 47, 0.85) 50%,
      rgba(10, 25, 47, 0.4) 100%
    );
  }

  .overlay-content {
    transform: translateY(0);
  }

  .project-title {
    font-size: var(--text-xl);
  }
}
```

### Estados

- **Default**: Imagen visible, overlay oculto
- **Hover**: Imagen scale(1.1), overlay fade-in, content slide-up
- **Focus**: Outline cyan en card, overlay visible
- **Active/Clicked**: Abre modal con detalles completos del proyecto
- **Loading**: Skeleton con shimmer mientras carga imagen

### Accessibility

- **ARIA Role**: `article` con `aria-label` descriptivo
- **Keyboard Support**:
  - `Tab`: Foca el card completo
  - `Enter/Space`: Abre modal de proyecto
  - `Esc`: Cierra modal (si está abierto)
- **Screen Reader**:
  - Anuncia: "Proyecto: Inditex Store Management Platform"
  - Lee categoría, resumen, stats, y tech stack
  - CTA: "Ver detalles del proyecto"
- **Contrast Compliance**:
  - Title sobre overlay: 18.5:1 (AAA)
  - Summary text: 7.2:1 (AA)
  - CTA (cyan sobre navy): 8.9:1 (AA)

### Ejemplos de Uso

#### Ejemplo 1: Project Card en Grid

```html
<!-- Ver sección Anatomía -->
```

#### Ejemplo 2: Featured Project (con Video Background)

```html
<article class="project-card project-card--featured card card--xl">
  <div class="project-image-wrapper">
    <video class="project-video" autoplay muted loop playsinline>
      <source src="videos/rtve-demo.webm" type="video/webm">
      <source src="videos/rtve-demo.mp4" type="video/mp4">
    </video>
    <div class="project-overlay">
      <!-- Contenido overlay -->
    </div>
  </div>
  <div class="project-footer">
    <!-- Tech stack y fecha -->
  </div>
</article>
```

### Referencias

→ **Content Data**: [02-CONTENT-SPECIFICATIONS.md - Proyectos Destacados](02-CONTENT-SPECIFICATIONS.md#proyectos-destacados)
→ **Technical Reference**: [01-TECHNICAL-REFERENCE.md - Animation System](01-TECHNICAL-REFERENCE.md#animation-system)
→ **PRDs**: Phase 3 (Experience Timeline & Portfolio), Phase 4 (Animations)

---

## 6. Skills Visualization

**Metadata**
- **Variantes**: Progress Bars, Circular Progress, Icon Grid
- **Complexity**: 🟡 Medium
- **Usado en Fases**: Phase 3 (Skills), Phase 4 (Animations)

Visualización de habilidades técnicas con barras de progreso animadas y categorización.

### Anatomía

```html
<section class="skills-card card card--large" aria-label="Technical Skills">
  <div class="skills-header">
    <h2 class="section-title">
      <span class="title-icon" aria-hidden="true">🛠️</span>
      Habilidades Técnicas
    </h2>
  </div>

  <div class="skills-content">
    <!-- Frontend Skills Category -->
    <div class="skill-category">
      <h3 class="category-title">Frontend Development</h3>
      <div class="skills-list">
        <div class="skill-item">
          <div class="skill-header">
            <span class="skill-name">React & Redux Toolkit</span>
            <span class="skill-level" aria-label="Nivel: Experto">Experto</span>
          </div>
          <div class="skill-bar-wrapper">
            <div class="skill-bar" data-progress="95" style="--progress: 95%">
              <div class="skill-bar-fill"></div>
            </div>
          </div>
        </div>

        <div class="skill-item">
          <div class="skill-header">
            <span class="skill-name">TypeScript</span>
            <span class="skill-level">Avanzado</span>
          </div>
          <div class="skill-bar-wrapper">
            <div class="skill-bar" data-progress="90" style="--progress: 90%">
              <div class="skill-bar-fill"></div>
            </div>
          </div>
        </div>

        <div class="skill-item">
          <div class="skill-header">
            <span class="skill-name">Microfrontends</span>
            <span class="skill-level">Avanzado</span>
          </div>
          <div class="skill-bar-wrapper">
            <div class="skill-bar" data-progress="85" style="--progress: 85%">
              <div class="skill-bar-fill"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- AI & Automation Category -->
    <div class="skill-category">
      <h3 class="category-title">
        <span aria-hidden="true">🤖</span> IA & Automatización
      </h3>
      <div class="skills-list">
        <div class="skill-item">
          <div class="skill-header">
            <span class="skill-name">GenAI & LangChain</span>
            <span class="skill-level">Avanzado</span>
          </div>
          <div class="skill-bar-wrapper">
            <div class="skill-bar" data-progress="88" style="--progress: 88%">
              <div class="skill-bar-fill"></div>
            </div>
          </div>
        </div>

        <div class="skill-item">
          <div class="skill-header">
            <span class="skill-name">GitHub Copilot & Agents</span>
            <span class="skill-level">Experto</span>
          </div>
          <div class="skill-bar-wrapper">
            <div class="skill-bar" data-progress="92" style="--progress: 92%">
              <div class="skill-bar-fill"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Backend & Cloud Category -->
    <div class="skill-category">
      <h3 class="category-title">Backend & Cloud</h3>
      <div class="skills-list">
        <div class="skill-item">
          <div class="skill-header">
            <span class="skill-name">Node.js & Express</span>
            <span class="skill-level">Avanzado</span>
          </div>
          <div class="skill-bar-wrapper">
            <div class="skill-bar" data-progress="87" style="--progress: 87%">
              <div class="skill-bar-fill"></div>
            </div>
          </div>
        </div>

        <div class="skill-item">
          <div class="skill-header">
            <span class="skill-name">Azure & Cloud Services</span>
            <span class="skill-level">Avanzado</span>
          </div>
          <div class="skill-bar-wrapper">
            <div class="skill-bar" data-progress="83" style="--progress: 83%">
              <div class="skill-bar-fill"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

### Estilos Base

```css
/* Skills Card Layout */
.skills-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.skills-content {
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
}

/* Skill Category */
.skill-category {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.category-title {
  font-size: var(--text-lg);
  font-weight: var(--font-semibold);
  color: var(--color-cyan);
  margin: 0;
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

/* Skills List */
.skills-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

/* Skill Item */
.skill-item {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.skill-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.skill-name {
  font-size: var(--text-base);
  font-weight: var(--font-medium);
  color: var(--color-text-primary);
}

.skill-level {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  font-weight: var(--font-medium);
}

/* Skill Bar */
.skill-bar-wrapper {
  position: relative;
  width: 100%;
}

.skill-bar {
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-md);
  overflow: hidden;
  position: relative;
}

.skill-bar-fill {
  height: 100%;
  width: var(--progress, 0%);
  background: linear-gradient(
    90deg,
    var(--color-cyan) 0%,
    var(--color-accent) 100%
  );
  border-radius: var(--radius-md);
  position: relative;
  transform-origin: left;
  animation: fillBar 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

@keyframes fillBar {
  from {
    width: 0%;
    opacity: 0.5;
  }
  to {
    width: var(--progress);
    opacity: 1;
  }
}

/* Skill Bar Glow Effect */
.skill-bar-fill::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 40px;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.4) 100%
  );
  animation: shimmer 2s ease-in-out infinite;
}

@keyframes shimmer {
  0%, 100% { opacity: 0; }
  50% { opacity: 1; }
}

/* Hover State */
.skill-item:hover .skill-bar-fill {
  filter: brightness(1.2);
  box-shadow: 0 0 12px rgba(100, 255, 218, 0.5);
}

.skill-item:hover .skill-name {
  color: var(--color-cyan);
}

/* Responsive */
@media (max-width: 768px) {
  .skill-header {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-1);
  }
}
```

### Estados

- **Default**: Barras al 0%, sin animación
- **In Viewport**: Animación fillBar hasta valor final (Intersection Observer)
- **Hover**: Brightness 1.2, glow effect, nombre cambia a cyan
- **Focus**: Outline cyan cuando se navega con teclado
- **Completed Animation**: Shimmer continuo en el edge de la barra

### Accessibility

- **ARIA Role**: `region` con `aria-label="Technical Skills"`
- **Keyboard Support**:
  - Skills no son interactivos (solo visuales)
  - Navegable con `Tab` si se añaden tooltips
- **Screen Reader**:
  - Anuncia: "React y Redux Toolkit, Nivel: Experto, 95 por ciento"
  - Usa `aria-label` en skill-level para contexto
  - Categorías son headings (`h3`) para navegación
- **Contrast Compliance**:
  - Skill names: 15.3:1 (AAA)
  - Skill levels: 7.2:1 (AA)
  - Skill bars: visuales, no dependen solo del color

### Ejemplos de Uso

#### Ejemplo 1: Skills con Progress Bars (Ver Anatomía)

```html
<!-- Ver sección Anatomía -->
```

#### JavaScript para Animación al Scroll

```javascript
// Skills Animation on Scroll
const skillsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const skillBars = entry.target.querySelectorAll('.skill-bar-fill');
      skillBars.forEach((bar, index) => {
        setTimeout(() => {
          bar.style.animation = 'fillBar 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards';
        }, index * 100);
      });
      skillsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

const skillsCard = document.querySelector('.skills-card');
if (skillsCard) {
  skillsObserver.observe(skillsCard);
}
```

### Referencias

→ **Content Data**: [02-CONTENT-SPECIFICATIONS.md - Habilidades Técnicas](02-CONTENT-SPECIFICATIONS.md#habilidades-técnicas)
→ **Technical Reference**: [01-TECHNICAL-REFERENCE.md - Animation System](01-TECHNICAL-REFERENCE.md#animation-system)
→ **PRDs**: Phase 3 (Skills Section), Phase 4 (Animations)

---

## 7. Stats Counter

**Metadata**
- **Variantes**: Numeric, Percentage, Duration
- **Complexity**: 🟢 Low-Medium
- **Usado en Fases**: Phase 2 (Core Content), Phase 4 (Animations)

Contador animado para estadísticas numéricas que cuenta desde 0 hasta el valor final.

### Anatomía

```html
<div class="stats-counter card card--medium">
  <div class="counter-wrapper">
    <div class="counter-icon" aria-hidden="true">🎯</div>
    <div class="counter-content">
      <div class="counter-value">
        <span class="counter"
              data-count="150"
              data-suffix="+"
              data-duration="2000">0</span>
      </div>
      <div class="counter-label">Proyectos Completados</div>
    </div>
  </div>
</div>

<!-- Ejemplo con Porcentaje -->
<div class="stats-counter card card--small">
  <div class="counter-wrapper">
    <div class="counter-icon" aria-hidden="true">📈</div>
    <div class="counter-content">
      <div class="counter-value">
        <span class="counter"
              data-count="40"
              data-suffix="%"
              data-duration="1500">0</span>
      </div>
      <div class="counter-label">Mejora en Productividad</div>
    </div>
  </div>
</div>

<!-- Ejemplo con Años de Experiencia -->
<div class="stats-counter card card--small">
  <div class="counter-wrapper">
    <div class="counter-icon" aria-hidden="true">⏱️</div>
    <div class="counter-content">
      <div class="counter-value">
        <span class="counter"
              data-count="3"
              data-suffix="+"
              data-duration="1000">0</span>
      </div>
      <div class="counter-label">Años de Experiencia</div>
    </div>
  </div>
</div>
```

### Estilos Base

```css
/* Stats Counter Layout */
.stats-counter {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: var(--space-6);
  background: linear-gradient(
    135deg,
    rgba(100, 255, 218, 0.05) 0%,
    rgba(100, 255, 218, 0.01) 100%
  );
  border: 1px solid rgba(100, 255, 218, 0.2);
}

.counter-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
}

/* Counter Icon */
.counter-icon {
  font-size: var(--text-5xl);
  filter: grayscale(0.3);
  transition: all 0.3s ease;
}

.stats-counter:hover .counter-icon {
  filter: grayscale(0);
  transform: scale(1.1) rotate(5deg);
}

/* Counter Content */
.counter-content {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.counter-value {
  font-size: var(--text-5xl);
  font-weight: var(--font-extrabold);
  color: var(--color-cyan);
  line-height: 1;
  font-family: var(--font-mono);
}

.counter {
  display: inline-block;
  min-width: 2ch;
  text-align: center;
}

.counter-label {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  font-weight: var(--font-medium);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Hover State */
.stats-counter:hover {
  border-color: var(--color-cyan);
  background: linear-gradient(
    135deg,
    rgba(100, 255, 218, 0.1) 0%,
    rgba(100, 255, 218, 0.02) 100%
  );
  transform: translateY(-4px);
}

/* Small Variant */
.stats-counter.card--small .counter-value {
  font-size: var(--text-4xl);
}

.stats-counter.card--small .counter-icon {
  font-size: var(--text-4xl);
}
```

### Estados

- **Default**: Counter muestra "0", icono grayscale
- **Animating**: Cuenta desde 0 hasta valor final cuando entra en viewport
- **Completed**: Muestra valor final con sufijo (+, %, etc.)
- **Hover**: Border cyan, background más intenso, icono escala y rota

### Accessibility

- **ARIA Role**: Decorativo, parte de card padre
- **Keyboard Support**: No interactivo
- **Screen Reader**:
  - Anuncia valor final directamente: "150 plus proyectos completados"
  - No anuncia la animación de conteo
  - Usa `aria-label` en counter para contexto completo
- **Contrast Compliance**:
  - Counter value (cyan): 8.9:1 (AA)
  - Counter label: 7.2:1 (AA)

### JavaScript para Animación

```javascript
// Counter Animation Function
function animateCounter(element) {
  const target = parseInt(element.dataset.count);
  const suffix = element.dataset.suffix || '';
  const duration = parseInt(element.dataset.duration) || 2000;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Easing function (easeOutExpo)
    const easeProgress = progress === 1
      ? 1
      : 1 - Math.pow(2, -10 * progress);

    const current = Math.floor(easeProgress * target);
    element.textContent = current + suffix;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      element.textContent = target + suffix;
      // Update aria-label with final value
      element.setAttribute('aria-label', `${target}${suffix} ${element.dataset.label || ''}`);
    }
  }

  requestAnimationFrame(update);
}

// Trigger animation on scroll into view
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counter = entry.target;
      animateCounter(counter);
      counterObserver.unobserve(counter);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.counter').forEach(counter => {
  counterObserver.observe(counter);
});
```

### Ejemplos de Uso

```html
<!-- Ver sección Anatomía para ejemplos completos -->
```

### Referencias

→ **Technical Reference**: [01-TECHNICAL-REFERENCE.md - Animation System](01-TECHNICAL-REFERENCE.md#animation-system)
→ **Related Components**: [About Card](#3-about-card) (usa counter para años de experiencia)
→ **PRDs**: Phase 2 (Core Content), Phase 4 (Animations)

---

## 8. Contact Card

**Metadata**
- **Variantes**: Compact (solo iconos), Full (con labels)
- **Complexity**: 🟢 Low
- **Usado en Fases**: Phase 2 (Core Content), Phase 6 (Polish)

Card de contacto con enlaces sociales, email, teléfono, y funcionalidad copy-to-clipboard.

### Anatomía

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
      <a href="tel:+34629202639"
         class="contact-link contact-link--phone">
        <span class="contact-icon" aria-hidden="true">📱</span>
        <div class="contact-info">
          <span class="contact-label">Teléfono / WhatsApp</span>
          <span class="contact-value">+34 629 20 26 39</span>
        </div>
      </a>
      <button class="copy-btn"
              data-copy="+34629202639"
              aria-label="Copiar teléfono al portapapeles">
        <span class="copy-icon" aria-hidden="true">📋</span>
      </button>
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

### Estilos Base

```css
/* Contact Card Layout */
.contact-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.contact-header {
  text-align: center;
}

.contact-subtitle {
  font-size: var(--text-base);
  color: var(--color-text-secondary);
  margin: var(--space-2) 0 0;
}

/* Contact Methods */
.contact-methods {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

/* Contact Item */
.contact-item {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

/* Contact Link */
.contact-link {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4);
  flex: 1;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-md);
  text-decoration: none;
  color: var(--color-text-primary);
  transition: all 0.3s ease;
  position: relative;
}

.contact-link:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: var(--color-cyan);
  transform: translateX(4px);
  box-shadow: 0 0 20px rgba(100, 255, 218, 0.2);
}

.contact-link:focus {
  outline: 2px solid var(--color-cyan);
  outline-offset: 2px;
}

/* Contact Icon */
.contact-icon {
  font-size: var(--text-2xl);
  flex-shrink: 0;
}

/* Contact Info */
.contact-info {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  flex: 1;
}

.contact-label {
  font-size: var(--text-xs);
  color: var(--color-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: var(--font-medium);
}

.contact-value {
  font-size: var(--text-sm);
  color: var(--color-text-primary);
  font-weight: var(--font-medium);
}

.contact-link:hover .contact-value {
  color: var(--color-cyan);
}

/* External Icon */
.external-icon {
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
  margin-left: auto;
  transition: transform 0.3s ease;
}

.contact-link:hover .external-icon {
  transform: translate(4px, -4px);
  color: var(--color-cyan);
}

/* Copy Button */
.copy-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  padding: 0;
  background: rgba(100, 255, 218, 0.1);
  border: 1px solid var(--color-cyan);
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.copy-btn:hover {
  background: rgba(100, 255, 218, 0.2);
  transform: scale(1.1);
}

.copy-btn:active {
  transform: scale(0.95);
}

.copy-btn.copied {
  background: var(--color-success);
  border-color: var(--color-success);
}

.copy-icon {
  font-size: var(--text-lg);
  transition: transform 0.3s ease;
}

.copy-btn.copied .copy-icon::before {
  content: '✓';
}

/* Specific Link Colors */
.contact-link--email:hover {
  border-color: #EA4335;
}

.contact-link--phone:hover {
  border-color: #25D366;
}

.contact-link--linkedin:hover {
  border-color: #0A66C2;
}

.contact-link--github:hover {
  border-color: #333;
}

/* Responsive */
@media (max-width: 768px) {
  .contact-info {
    font-size: var(--text-xs);
  }

  .contact-value {
    font-size: var(--text-xs);
  }
}
```

### Estados

- **Default**: Links con background sutil, borders semi-transparentes
- **Hover**: Border color específico por plataforma, translateX(4px), glow
- **Focus**: Outline cyan para navegación por teclado
- **Copy Success**: Botón verde con checkmark por 2 segundos
- **Active (Click)**: Scale 0.95 en copy button

### JavaScript para Copy-to-Clipboard

```javascript
// Copy to Clipboard Functionality
document.querySelectorAll('.copy-btn').forEach(button => {
  button.addEventListener('click', async () => {
    const textToCopy = button.dataset.copy;

    try {
      await navigator.clipboard.writeText(textToCopy);

      // Visual feedback
      button.classList.add('copied');
      button.setAttribute('aria-label', 'Copiado al portapapeles');

      setTimeout(() => {
        button.classList.remove('copied');
        button.setAttribute('aria-label', 'Copiar al portapapeles');
      }, 2000);

    } catch (err) {
      console.error('Error al copiar:', err);
      // Fallback visual feedback
      button.textContent = 'Error';
      setTimeout(() => {
        button.innerHTML = '<span class="copy-icon" aria-hidden="true">📋</span>';
      }, 2000);
    }
  });
});
```

### Accessibility

- **ARIA Role**: `region` con `aria-label="Contact Information"`
- **Keyboard Support**:
  - `Tab`: Navega entre links y copy buttons
  - `Enter/Space`: Activa link o copy button
  - `Shift+Tab`: Navegación inversa
- **Screen Reader**:
  - Anuncia: "Email: llamamealex@gmail.com, enlace"
  - Copy button: "Copiar email al portapapeles, botón"
  - Links externos: "abre en nueva ventana"
- **Contrast Compliance**:
  - Contact values: 15.3:1 (AAA)
  - Labels: 7.2:1 (AA)
  - Copy button: 8.9:1 (AA)

### Ejemplos de Uso

```html
<!-- Ver sección Anatomía -->
```

### Referencias

→ **Content Data**: [02-CONTENT-SPECIFICATIONS.md - Información de Contacto](02-CONTENT-SPECIFICATIONS.md#información-de-contacto)
→ **Technical Reference**: [01-TECHNICAL-REFERENCE.md - Color Palette](01-TECHNICAL-REFERENCE.md#color-palette)
→ **PRDs**: Phase 2 (Core Content), Phase 6 (Final Polish)

---

## 9. Button Component

**Metadata**
- **Variantes**: Primary, Secondary, Tertiary, Ghost, Icon-only
- **Complexity**: 🟢 Low
- **Usado en Fases**: Phase 1 (Foundation), Phase 2 (Core Content), todas las demás fases

Componente de botón base con múltiples variantes y estados.

### Anatomía

```html
<!-- Primary Button -->
<button class="btn btn--primary">
  <span class="btn-text">Ver Proyectos</span>
  <span class="btn-icon" aria-hidden="true">→</span>
</button>

<!-- Secondary Button -->
<button class="btn btn--secondary">
  <span class="btn-icon" aria-hidden="true">📄</span>
  <span class="btn-text">Descargar CV</span>
</button>

<!-- Tertiary Button -->
<button class="btn btn--tertiary">
  <span class="btn-text">Contactar</span>
</button>

<!-- Ghost Button -->
<button class="btn btn--ghost">
  <span class="btn-text">Leer Más</span>
</button>

<!-- Icon-only Button -->
<button class="btn btn--icon" aria-label="Cerrar modal">
  <span aria-hidden="true">✕</span>
</button>

<!-- Loading State -->
<button class="btn btn--primary btn--loading" disabled>
  <span class="btn-spinner" aria-hidden="true"></span>
  <span class="btn-text">Cargando...</span>
</button>

<!-- Disabled State -->
<button class="btn btn--primary" disabled>
  <span class="btn-text">No Disponible</span>
</button>

<!-- Link as Button -->
<a href="/projects" class="btn btn--primary" role="button">
  <span class="btn-text">Ver Proyectos</span>
</a>
```

### Estilos Base

```css
/* Base Button Styles */
.btn {
  /* Layout */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);

  /* Spacing */
  padding: var(--space-3) var(--space-6);

  /* Typography */
  font-size: var(--text-base);
  font-weight: var(--font-semibold);
  font-family: var(--font-primary);
  line-height: 1;
  text-decoration: none;

  /* Visual */
  border: 2px solid transparent;
  border-radius: var(--radius-md);
  cursor: pointer;
  white-space: nowrap;

  /* Transitions */
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  /* Reset */
  background: none;
  outline: none;
}

/* Primary Button */
.btn--primary {
  background: var(--color-cyan);
  color: var(--color-navy);
  border-color: var(--color-cyan);
}

.btn--primary:hover {
  background: var(--color-white);
  border-color: var(--color-white);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(100, 255, 218, 0.4);
}

.btn--primary:active {
  transform: translateY(0);
}

/* Secondary Button */
.btn--secondary {
  background: transparent;
  color: var(--color-cyan);
  border-color: var(--color-cyan);
}

.btn--secondary:hover {
  background: rgba(100, 255, 218, 0.1);
  transform: translateY(-2px);
  box-shadow: 0 0 20px rgba(100, 255, 218, 0.3);
}

/* Tertiary Button */
.btn--tertiary {
  background: rgba(255, 255, 255, 0.05);
  color: var(--color-text-primary);
  border-color: rgba(255, 255, 255, 0.1);
}

.btn--tertiary:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

/* Ghost Button */
.btn--ghost {
  background: transparent;
  color: var(--color-text-primary);
  border-color: transparent;
  padding: var(--space-2) var(--space-4);
}

.btn--ghost:hover {
  color: var(--color-cyan);
  background: rgba(100, 255, 218, 0.05);
}

/* Icon-only Button */
.btn--icon {
  width: 44px;
  height: 44px;
  padding: 0;
  border-radius: 50%;
  font-size: var(--text-xl);
}

/* Size Variants */
.btn--small {
  padding: var(--space-2) var(--space-4);
  font-size: var(--text-sm);
}

.btn--large {
  padding: var(--space-4) var(--space-8);
  font-size: var(--text-lg);
}

/* Focus State (Keyboard Navigation) */
.btn:focus-visible {
  outline: 2px solid var(--color-cyan);
  outline-offset: 4px;
}

/* Disabled State */
.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none !important;
  box-shadow: none !important;
}

.btn:disabled:hover {
  background: var(--color-cyan);
  border-color: var(--color-cyan);
}

/* Loading State */
.btn--loading {
  position: relative;
  color: transparent;
  pointer-events: none;
}

.btn-spinner {
  position: absolute;
  width: 20px;
  height: 20px;
  border: 2px solid var(--color-navy);
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Button Icon */
.btn-icon {
  font-size: 1.2em;
  transition: transform 0.3s ease;
}

.btn:hover .btn-icon {
  transform: translateX(4px);
}

/* Button Text */
.btn-text {
  display: inline-block;
}

/* Full Width Variant */
.btn--full {
  width: 100%;
}
```

### Estados

- **Default**: Background según variante, sin elevación
- **Hover**: Eleva 2px, brillo aumentado, box-shadow, icono se mueve
- **Focus**: Outline cyan de 2px con offset de 4px
- **Active/Pressed**: Vuelve a Y=0, ligeramente más oscuro
- **Loading**: Spinner rotando, texto invisible, no interactivo
- **Disabled**: Opacidad 50%, cursor not-allowed, sin interactividad

### Accessibility

- **ARIA Role**: `button` (implícito en `<button>`, explícito en `<a>`)
- **Keyboard Support**:
  - `Tab`: Foca el botón
  - `Enter/Space`: Activa el botón
  - `Esc`: Cancela acción si es aplicable (ej: cerrar modal)
- **Screen Reader**:
  - Anuncia texto del botón
  - Iconos tienen `aria-hidden="true"`
  - Estados disabled/loading anunciados
  - `aria-label` para icon-only buttons
- **Contrast Compliance**:
  - Primary (cyan sobre navy): 8.9:1 (AA)
  - Secondary (cyan border): 3.5:1 (AA para UI components)
  - Text en todos los botones: mínimo 4.5:1

### Ejemplos de Uso

#### Ejemplo 1: CTA Group (usado en Hero)

```html
<div class="btn-group">
  <button class="btn btn--primary">
    <span class="btn-text">Ver Proyectos</span>
    <span class="btn-icon" aria-hidden="true">→</span>
  </button>
  <a href="/cv.pdf" class="btn btn--secondary" download>
    <span class="btn-icon" aria-hidden="true">📄</span>
    <span class="btn-text">Descargar CV</span>
  </a>
  <button class="btn btn--tertiary">
    <span class="btn-text">Contactar</span>
  </button>
</div>

<style>
.btn-group {
  display: flex;
  gap: var(--space-4);
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .btn-group {
    flex-direction: column;
  }

  .btn-group .btn {
    width: 100%;
  }
}
</style>
```

#### Ejemplo 2: Form Submit con Loading

```javascript
const submitButton = document.querySelector('#submit-btn');

submitButton.addEventListener('click', async () => {
  submitButton.classList.add('btn--loading');
  submitButton.disabled = true;

  try {
    await sendFormData();
    submitButton.classList.remove('btn--loading');
    submitButton.textContent = '✓ Enviado';
  } catch (error) {
    submitButton.classList.remove('btn--loading');
    submitButton.disabled = false;
  }
});
```

### Referencias

→ **Technical Reference**: [01-TECHNICAL-REFERENCE.md - Color Palette](01-TECHNICAL-REFERENCE.md#color-palette)
→ **Technical Reference**: [01-TECHNICAL-REFERENCE.md - Typography](01-TECHNICAL-REFERENCE.md#typography-system)
→ **Used in Components**: [Hero Card](#2-hero-card), [Project Card](#5-project-card), [Timeline](#4-timeline-component)
→ **PRDs**: Todas las fases (componente fundamental)

---

## 10. Theme Toggle

**Metadata**
- **Variantes**: Switch, Button, Icon-only
- **Complexity**: 🟡 Medium
- **Usado en Fases**: Phase 1 (Foundation), Phase 6 (Polish)

Toggle para cambiar entre tema oscuro y claro con persistencia en localStorage.

### Anatomía

```html
<!-- Theme Toggle Switch -->
<div class="theme-toggle-wrapper">
  <button class="theme-toggle"
          id="theme-toggle"
          aria-label="Cambiar tema"
          aria-pressed="false"
          data-theme="dark">
    <span class="toggle-track">
      <span class="toggle-icon toggle-icon--sun" aria-hidden="true">☀️</span>
      <span class="toggle-icon toggle-icon--moon" aria-hidden="true">🌙</span>
      <span class="toggle-thumb"></span>
    </span>
    <span class="toggle-label" id="theme-label">Tema Oscuro</span>
  </button>
</div>
```

### Estilos Base

```css
/* Theme Toggle Wrapper */
.theme-toggle-wrapper {
  position: fixed;
  top: var(--space-6);
  right: var(--space-6);
  z-index: 1000;
}

/* Theme Toggle Button */
.theme-toggle {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-2) var(--space-4);
  background: var(--color-bg-secondary);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-lg);
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-md);
}

.theme-toggle:hover {
  border-color: var(--color-cyan);
  box-shadow: var(--shadow-lg), 0 0 20px rgba(100, 255, 218, 0.2);
  transform: translateY(-2px);
}

.theme-toggle:focus-visible {
  outline: 2px solid var(--color-cyan);
  outline-offset: 2px;
}

/* Toggle Track */
.toggle-track {
  position: relative;
  width: 60px;
  height: 30px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--space-2);
  transition: background 0.3s ease;
}

.theme-toggle:hover .toggle-track {
  background: rgba(255, 255, 255, 0.15);
}

/* Toggle Icons */
.toggle-icon {
  font-size: var(--text-sm);
  z-index: 1;
  transition: opacity 0.3s ease;
}

.toggle-icon--sun {
  opacity: 0.5;
}

.toggle-icon--moon {
  opacity: 1;
}

/* Light theme adjustments */
[data-theme="light"] .toggle-icon--sun {
  opacity: 1;
}

[data-theme="light"] .toggle-icon--moon {
  opacity: 0.5;
}

/* Toggle Thumb */
.toggle-thumb {
  position: absolute;
  width: 24px;
  height: 24px;
  background: var(--color-cyan);
  border-radius: 50%;
  left: 3px;
  top: 3px;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.theme-toggle[aria-pressed="true"] .toggle-thumb {
  transform: translateX(30px);
}

/* Toggle Label */
.toggle-label {
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: var(--color-text-primary);
  white-space: nowrap;
}

/* Responsive - Hide label on mobile */
@media (max-width: 768px) {
  .toggle-label {
    display: none;
  }

  .theme-toggle {
    padding: var(--space-2);
  }
}
```

### JavaScript para Funcionalidad

```javascript
// Theme Toggle Functionality
class ThemeManager {
  constructor() {
    this.toggle = document.getElementById('theme-toggle');
    this.label = document.getElementById('theme-label');
    this.currentTheme = this.getStoredTheme() || this.getPreferredTheme();

    this.init();
  }

  init() {
    // Set initial theme
    this.setTheme(this.currentTheme, false);

    // Add event listener
    this.toggle.addEventListener('click', () => this.handleToggle());

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!this.getStoredTheme()) {
        this.setTheme(e.matches ? 'dark' : 'light');
      }
    });
  }

  handleToggle() {
    const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
    this.setTheme(newTheme);
  }

  setTheme(theme, store = true) {
    this.currentTheme = theme;

    // Update DOM
    document.documentElement.setAttribute('data-theme', theme);
    this.toggle.setAttribute('data-theme', theme);
    this.toggle.setAttribute('aria-pressed', theme === 'light');
    this.toggle.setAttribute('aria-label', `Cambiar a tema ${theme === 'dark' ? 'claro' : 'oscuro'}`);

    // Update label
    this.label.textContent = theme === 'dark' ? 'Tema Oscuro' : 'Tema Claro';

    // Store preference
    if (store) {
      localStorage.setItem('theme', theme);
    }

    // Dispatch event for other components
    window.dispatchEvent(new CustomEvent('themechange', { detail: { theme } }));
  }

  getStoredTheme() {
    return localStorage.getItem('theme');
  }

  getPreferredTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
}

// Initialize theme manager
const themeManager = new ThemeManager();
```

### Estados

- **Default (Dark)**: Thumb a la izquierda, moon icon activo
- **Light Theme**: Thumb a la derecha, sun icon activo
- **Hover**: Border cyan, elevación, glow effect
- **Focus**: Outline cyan para navegación por teclado
- **Transitioning**: Thumb se desliza suavemente, theme change con fade

### Accessibility

- **ARIA Role**: `button` con `aria-pressed` para estado toggle
- **Keyboard Support**:
  - `Tab`: Foca el toggle
  - `Enter/Space`: Cambia el tema
- **Screen Reader**:
  - Anuncia estado actual: "Cambiar a tema claro, botón presionado"
  - Actualiza label dinámicamente
- **Respect User Preferences**:
  - Detecta `prefers-color-scheme`
  - Respeta `prefers-reduced-motion` (sin animaciones complejas)
  - Persiste elección en localStorage

### Ejemplos de Uso

#### Ejemplo 1: Theme Toggle en Navbar

```html
<nav class="navbar">
  <div class="navbar-brand">Portfolio</div>
  <div class="navbar-actions">
    <!-- Theme Toggle -->
    <div class="theme-toggle-wrapper">
      <!-- Ver Anatomía -->
    </div>
  </div>
</nav>
```

#### Ejemplo 2: Listen to Theme Changes

```javascript
// React to theme changes in other components
window.addEventListener('themechange', (e) => {
  console.log(`Theme changed to: ${e.detail.theme}`);

  // Update chart colors, reload images, etc.
  updateComponentsForTheme(e.detail.theme);
});
```

### Referencias

→ **Technical Reference**: [01-TECHNICAL-REFERENCE.md - Color Palette](01-TECHNICAL-REFERENCE.md#color-palette)
→ **Technical Reference**: [01-TECHNICAL-REFERENCE.md - Dark/Light Theme Tokens](01-TECHNICAL-REFERENCE.md#design-system)
→ **PRDs**: Phase 1 (Foundation), Phase 6 (Polish & Accessibility)

---

## 11. Skip Links

**Metadata**
- **Variantes**: Simple (1 link), Full (múltiples links)
- **Complexity**: 🟢 Low
- **Usado en Fases**: Phase 1 (Foundation), Phase 6 (Accessibility)

Enlaces de salto para navegación por teclado, visibles solo al recibir foco.

### Anatomía

```html
<!-- Skip Links (primero en el DOM, después de <body>) -->
<div class="skip-links">
  <a href="#main-content" class="skip-link">
    Saltar al contenido principal
  </a>
  <a href="#navigation" class="skip-link">
    Saltar a navegación
  </a>
  <a href="#projects" class="skip-link">
    Saltar a proyectos
  </a>
  <a href="#contact" class="skip-link">
    Saltar a contacto
  </a>
</div>

<!-- Elementos de destino deben tener IDs correspondientes -->
<main id="main-content" tabindex="-1">
  <!-- Contenido principal -->
</main>

<nav id="navigation">
  <!-- Navegación -->
</nav>

<section id="projects">
  <!-- Proyectos -->
</section>

<section id="contact">
  <!-- Contacto -->
</section>
```

### Estilos Base

```css
/* Skip Links Container */
.skip-links {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

/* Skip Link */
.skip-link {
  /* Positioning */
  position: absolute;
  top: -100px;
  left: var(--space-4);

  /* Styling */
  padding: var(--space-3) var(--space-6);
  background: var(--color-cyan);
  color: var(--color-navy);
  font-size: var(--text-base);
  font-weight: var(--font-semibold);
  text-decoration: none;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);

  /* Transitions */
  transition: top 0.3s ease;

  /* Ensure it's on top */
  z-index: 10000;
}

/* Show on Focus */
.skip-link:focus {
  top: var(--space-4);
  outline: 3px solid var(--color-navy);
  outline-offset: 2px;
}

/* Multiple Skip Links Positioning */
.skip-link:nth-child(2):focus {
  top: calc(var(--space-4) + 50px);
}

.skip-link:nth-child(3):focus {
  top: calc(var(--space-4) + 100px);
}

.skip-link:nth-child(4):focus {
  top: calc(var(--space-4) + 150px);
}

/* Hover State (cuando está visible) */
.skip-link:focus:hover {
  background: var(--color-white);
  transform: translateX(4px);
}
```

### JavaScript para Smooth Scroll y Focus Management

```javascript
// Skip Links Functionality
document.querySelectorAll('.skip-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      // Smooth scroll to target
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

      // Set focus on target
      // tabindex="-1" permite foco programático sin afectar tab order
      targetElement.focus();

      // Optional: Highlight target briefly
      targetElement.style.outline = '3px solid var(--color-cyan)';
      targetElement.style.outlineOffset = '4px';

      setTimeout(() => {
        targetElement.style.outline = '';
        targetElement.style.outlineOffset = '';
      }, 2000);
    }
  });
});
```

### Estados

- **Default**: Invisible, posicionado fuera de la pantalla (-100px top)
- **Focus**: Visible en top de la página, outline navy
- **Hover (cuando está focusado)**: Background white, translateX(4px)
- **Active**: Scrollea suavemente a la sección destino

### Accessibility

- **ARIA Role**: Implícito (`<a>`)
- **Keyboard Support**:
  - `Tab` desde inicio de página: Foca el primer skip link
  - `Tab` continuo: Navega entre skip links
  - `Enter`: Activa el salto a la sección
- **Screen Reader**:
  - Anuncia: "Saltar al contenido principal, enlace"
  - Debe ser el primer elemento focuseable en la página
- **WCAG Compliance**:
  - Cumple WCAG 2.1 Criterion 2.4.1 (Bypass Blocks) - Nivel A
  - Texto descriptivo y claro
  - Contraste 8.9:1 (AA)

### Ejemplos de Uso

#### Ejemplo 1: Skip Links Básico (Mínimo Requerido)

```html
<div class="skip-links">
  <a href="#main-content" class="skip-link">
    Saltar al contenido principal
  </a>
</div>

<main id="main-content" tabindex="-1">
  <!-- Contenido -->
</main>
```

#### Ejemplo 2: Skip Links Completo (Ver Anatomía)

```html
<!-- Ver sección Anatomía para implementación completa -->
```

### Testing Checklist

- [ ] Skip link es el primer elemento focuseable al presionar Tab
- [ ] Skip link se muestra visualmente al recibir foco
- [ ] Al activar skip link, scroll funciona correctamente
- [ ] Foco se mueve al elemento destino
- [ ] Elemento destino tiene `tabindex="-1"` para foco programático
- [ ] Contraste de skip link cumple WCAG AA
- [ ] Screen reader anuncia el link correctamente

### Referencias

→ **Technical Reference**: [01-TECHNICAL-REFERENCE.md - Z-Index Scale](01-TECHNICAL-REFERENCE.md#z-index-scale)
→ **Quick Reference**: [Accessibility Checklist](quick-references/accessibility-checklist.md)
→ **PRDs**: Phase 1 (Foundation), Phase 6 (Accessibility)

---

## 12. Loading Skeleton

**Metadata**
- **Variantes**: Text, Card, Image, Custom
- **Complexity**: 🟢 Low
- **Usado en Fases**: Phase 2 (Core Content), Phase 5 (Performance)

Placeholder animado que muestra el layout mientras el contenido real está cargando.

### Anatomía

```html
<!-- Text Skeleton -->
<div class="skeleton skeleton--text" aria-hidden="true"></div>
<div class="skeleton skeleton--text skeleton--text-short" aria-hidden="true"></div>

<!-- Heading Skeleton -->
<div class="skeleton skeleton--heading" aria-hidden="true"></div>

<!-- Image/Avatar Skeleton -->
<div class="skeleton skeleton--image" aria-hidden="true"></div>
<div class="skeleton skeleton--avatar" aria-hidden="true"></div>

<!-- Card Skeleton -->
<div class="card card--loading" aria-busy="true" aria-label="Cargando contenido">
  <div class="skeleton skeleton--heading"></div>
  <div class="skeleton skeleton--text"></div>
  <div class="skeleton skeleton--text"></div>
  <div class="skeleton skeleton--text skeleton--text-short"></div>
</div>

<!-- Project Card Skeleton -->
<article class="project-card card card--large card--loading" aria-busy="true">
  <div class="skeleton skeleton--image" style="aspect-ratio: 16/10;"></div>
  <div class="skeleton-content" style="padding: var(--space-4);">
    <div class="skeleton skeleton--heading"></div>
    <div class="skeleton skeleton--text"></div>
    <div class="skeleton skeleton--text skeleton--text-short"></div>
  </div>
</article>

<!-- Timeline Item Skeleton -->
<div class="timeline-item timeline-item--loading" aria-busy="true">
  <div class="timeline-marker">
    <div class="skeleton skeleton--circle"></div>
  </div>
  <div class="timeline-content">
    <div class="skeleton skeleton--heading"></div>
    <div class="skeleton skeleton--text"></div>
    <div class="skeleton skeleton--text skeleton--text-short"></div>
  </div>
</div>
```

### Estilos Base

```css
/* Base Skeleton Styles */
.skeleton {
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(255, 255, 255, 0.1) 50%,
    rgba(255, 255, 255, 0.05) 100%
  );
  background-size: 200% 100%;
  animation: shimmer 2s ease-in-out infinite;
  border-radius: var(--radius-sm);
  pointer-events: none;
}

/* Shimmer Animation */
@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

/* Respect Reduced Motion */
@media (prefers-reduced-motion: reduce) {
  .skeleton {
    animation: pulse 2s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 0.6; }
    50% { opacity: 1; }
  }
}

/* Text Skeleton */
.skeleton--text {
  height: 1em;
  width: 100%;
  margin: var(--space-2) 0;
}

.skeleton--text-short {
  width: 70%;
}

.skeleton--text-medium {
  width: 85%;
}

/* Heading Skeleton */
.skeleton--heading {
  height: 1.5em;
  width: 60%;
  margin: var(--space-3) 0;
  border-radius: var(--radius-md);
}

/* Image Skeleton */
.skeleton--image {
  width: 100%;
  height: 200px;
  border-radius: var(--radius-md);
}

/* Avatar Skeleton */
.skeleton--avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
}

/* Circle Skeleton (for markers, icons) */
.skeleton--circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

/* Card Loading State */
.card--loading {
  pointer-events: none;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

/* Skeleton Content Wrapper */
.skeleton-content {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  flex: 1;
}

/* Light Theme Adjustments */
[data-theme="light"] .skeleton {
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.05) 0%,
    rgba(0, 0, 0, 0.1) 50%,
    rgba(0, 0, 0, 0.05) 100%
  );
  background-size: 200% 100%;
}
```

### Estados

- **Loading**: Shimmer animation continua
- **Reduced Motion**: Pulse animation en lugar de shimmer
- **Loaded**: Skeleton se reemplaza con contenido real (fade-in)

### JavaScript para Transición a Contenido Real

```javascript
// Skeleton to Content Transition
class SkeletonLoader {
  constructor(skeletonElement, contentElement) {
    this.skeleton = skeletonElement;
    this.content = contentElement;
    this.content.style.opacity = '0';
  }

  async load(dataFetchFunction) {
    try {
      const data = await dataFetchFunction();
      this.showContent();
      return data;
    } catch (error) {
      this.showError();
      throw error;
    }
  }

  showContent() {
    // Fade out skeleton
    this.skeleton.style.transition = 'opacity 0.3s ease';
    this.skeleton.style.opacity = '0';

    setTimeout(() => {
      // Remove skeleton
      this.skeleton.remove();

      // Fade in content
      this.content.style.transition = 'opacity 0.5s ease';
      this.content.style.opacity = '1';

      // Remove aria-busy
      this.content.removeAttribute('aria-busy');
    }, 300);
  }

  showError() {
    this.skeleton.innerHTML = '<div class="error-message">Error al cargar contenido</div>';
    this.skeleton.classList.add('skeleton--error');
  }
}

// Usage Example
const projectSkeleton = document.querySelector('.project-card--loading');
const projectContent = document.querySelector('.project-card--content');

const loader = new SkeletonLoader(projectSkeleton, projectContent);

loader.load(async () => {
  const response = await fetch('/api/projects/1');
  const data = await response.json();

  // Populate content with data
  projectContent.innerHTML = renderProject(data);

  return data;
});
```

### Accessibility

- **ARIA Attributes**:
  - `aria-busy="true"` en el contenedor mientras carga
  - `aria-hidden="true"` en skeletons individuales
  - `aria-label="Cargando contenido"` en contenedor
- **Keyboard Support**: No interactivo
- **Screen Reader**:
  - Anuncia "Cargando contenido" al inicio
  - Anuncia contenido real cuando termina de cargar
  - No anuncia cada skeleton individual
- **Reduced Motion**: Usa pulse en lugar de shimmer para usuarios con preferencia de movimiento reducido

### Ejemplos de Uso

#### Ejemplo 1: Project Grid con Skeletons

```html
<div class="projects-grid">
  <!-- Mientras carga -->
  <article class="project-card card card--large card--loading" aria-busy="true">
    <div class="skeleton skeleton--image" style="aspect-ratio: 16/10;"></div>
    <div class="skeleton-content" style="padding: var(--space-4);">
      <div class="skeleton skeleton--heading"></div>
      <div class="skeleton skeleton--text"></div>
      <div class="skeleton skeleton--text skeleton--text-short"></div>
    </div>
  </article>

  <!-- Repetir para más cards -->
</div>

<script>
// Cuando los datos estén listos, reemplazar con contenido real
async function loadProjects() {
  const projects = await fetchProjects();
  const grid = document.querySelector('.projects-grid');

  grid.innerHTML = projects.map(project => `
    <article class="project-card card card--large">
      <img src="${project.image}" alt="${project.title}">
      <div class="project-info">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
      </div>
    </article>
  `).join('');
}
</script>
```

#### Ejemplo 2: Timeline con Skeleton (Ver Anatomía)

```html
<!-- Ver sección Anatomía para Timeline Item Skeleton -->
```

### Performance Considerations

- Skeleton usa CSS animations en lugar de JavaScript para mejor rendimiento
- `will-change: transform` en animaciones para optimizar compositing
- Usa `contain: layout style` para aislar reflows
- Lazy load de imágenes mientras skeleton está visible

```css
/* Performance Optimizations */
.skeleton {
  will-change: background-position;
  contain: layout style;
}

/* Remove will-change después de que termina la animación */
.skeleton--loaded {
  will-change: auto;
}
```

### Referencias

→ **Technical Reference**: [01-TECHNICAL-REFERENCE.md - Animation System](01-TECHNICAL-REFERENCE.md#animation-system)
→ **Quick Reference**: [Performance Budgets](quick-references/performance-budgets.md)
→ **PRDs**: Phase 2 (Core Content), Phase 5 (Performance Optimization)

---

## 📊 Component Usage Matrix

Tabla de referencia rápida que muestra qué componentes se usan en qué fases:

| Component | Phase 1 | Phase 2 | Phase 3 | Phase 4 | Phase 5 | Phase 6 |
|-----------|---------|---------|---------|---------|---------|---------|
| Card (Base) | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Hero Card | | ✅ | | ✅ | | |
| About Card | | ✅ | | ✅ | | |
| Timeline | | | ✅ | ✅ | | |
| Project Card | | | ✅ | ✅ | | |
| Skills Visualization | | | ✅ | ✅ | | |
| Stats Counter | | ✅ | | ✅ | | |
| Contact Card | | ✅ | | | | ✅ |
| Button | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Theme Toggle | ✅ | | | | | ✅ |
| Skip Links | ✅ | | | | | ✅ |
| Loading Skeleton | | ✅ | | | ✅ | |

---

## 🔗 Quick Navigation

### By Complexity Level

**🟢 Low Complexity**
- [Card (Base)](#1-card-base-component)
- [Stats Counter](#7-stats-counter)
- [Contact Card](#8-contact-card)
- [Button Component](#9-button-component)
- [Skip Links](#11-skip-links)
- [Loading Skeleton](#12-loading-skeleton)

**🟡 Medium Complexity**
- [Hero Card](#2-hero-card)
- [About Card](#3-about-card)
- [Project Card](#5-project-card)
- [Skills Visualization](#6-skills-visualization)
- [Theme Toggle](#10-theme-toggle)

**🔴 High Complexity**
- [Timeline Component](#4-timeline-component)

### By Category

**Layout Components**
- [Card (Base)](#1-card-base-component)

**Content Components**
- [Hero Card](#2-hero-card)
- [About Card](#3-about-card)
- [Timeline Component](#4-timeline-component)
- [Project Card](#5-project-card)
- [Contact Card](#8-contact-card)

**Interactive Components**
- [Skills Visualization](#6-skills-visualization)
- [Stats Counter](#7-stats-counter)
- [Button Component](#9-button-component)
- [Theme Toggle](#10-theme-toggle)

**Accessibility Components**
- [Skip Links](#11-skip-links)

**Utility Components**
- [Loading Skeleton](#12-loading-skeleton)

---

## 📝 Implementation Notes

### General Guidelines

1. **Design Tokens**: Todos los componentes DEBEN usar design tokens del [01-TECHNICAL-REFERENCE.md](01-TECHNICAL-REFERENCE.md)
2. **Accessibility First**: Implementar ARIA roles y keyboard navigation desde el inicio
3. **Mobile First**: CSS debe seguir enfoque mobile-first con progressive enhancement
4. **Performance**: Usar CSS animations con `will-change` solo cuando sea necesario
5. **Browser Compatibility**: Probar en Chrome, Firefox, Safari, Edge (últimas 2 versiones)

### Component Checklist

Antes de considerar un componente como "completo", verificar:

- [ ] HTML semántico implementado
- [ ] Estilos usando design tokens exclusivamente
- [ ] Todos los estados visuales implementados (default, hover, focus, active, disabled)
- [ ] ARIA roles y labels apropiados
- [ ] Soporte completo de navegación por teclado
- [ ] Ratios de contraste WCAG AA verificados
- [ ] Responsive behavior probado (320px - 1920px+)
- [ ] Animaciones respetan `prefers-reduced-motion`
- [ ] JavaScript (si aplica) con manejo de errores
- [ ] Documentación de uso con ejemplos

---

**Última actualización**: 20 Enero 2025
**Total de Componentes**: 12
**Total de Líneas**: ~1,950+
**Estado**: ✅ Completo

---

