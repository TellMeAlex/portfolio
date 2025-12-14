# PHASE 3: Advanced Features & Portfolio Showcase

## Quick Reference

**Timeline**: 3-4 semanas
**Complexity**: 🔴 High
**Dependencies**: Phase 2 (Core Content Implementation) - BLOCKING
**Key Deliverables**:

- Interactive professional experience timeline
- Project showcase with overlay system
- Technical skills visualization
- Animated statistics dashboard
- Certifications and education section
- Values and philosophy presentation

---

## 🎯 Objectives & Success Criteria

| Objective                | Success Metric                   | Target                              |
| ------------------------ | -------------------------------- | ----------------------------------- |
| **Experience Timeline**  | Interactive professional journey | All positions + smooth interactions |
| **Project Showcase**     | Detailed project presentations   | 3 projects with overlays + filters  |
| **Skills Visualization** | Animated technical proficiency   | 4 categories with progress bars     |
| **Statistics Dashboard** | Animated impact metrics          | Counter animations on scroll        |
| **Certifications**       | Complete credential display      | All certifications + education      |
| **Performance**          | Complex animations smooth        | 60fps animations, no jank           |
| **Accessibility**        | Maintain baseline                | Lighthouse ≥ 90                     |

---

## 📖 Overview

Esta fase implementa las secciones más complejas del portfolio: timeline interactivo de experiencia profesional, showcase de proyectos con sistema de overlays, visualización de habilidades técnicas, y dashboard de estadísticas animadas. Introduce interacciones avanzadas, componentes data-driven, y presentaciones multimedia que demuestran expertise técnica y crecimiento profesional.

**Critical Components**:

- Timeline con múltiples posiciones por empresa
- Sistema de overlays para detalles de proyectos
- Skill bars animadas con categorización
- Counters animados con Intersection Observer
- Sistema de badges y certificaciones

**Note**: Todo el contenido debe extraerse de → [02-CONTENT-SPECIFICATIONS.md](../02-CONTENT-SPECIFICATIONS.md)

---

## 🏗️ Implementation Guide

### Step 1: Implement Interactive Experience Timeline

**Objective**: Crear timeline interactivo mostrando la trayectoria profesional completa

**Components Needed**:
→ [Timeline Component](../03-COMPONENT-LIBRARY.md#4-timeline-component)

**Content Source**:
→ [Experiencia Profesional](../02-CONTENT-SPECIFICATIONS.md#experiencia-profesional)

**Grid Placement**: XL Card (3x2)

**Implementation**:

```html
<section
  class="timeline-card card card--xl"
  aria-label="Professional Experience"
>
  <div class="timeline-header">
    <h2 class="section-title">
      <span class="title-icon" aria-hidden="true">💼</span>
      Experiencia Laboral
    </h2>
  </div>

  <div class="timeline-container">
    <!-- Vertical timeline line -->
    <div class="timeline-line" aria-hidden="true"></div>

    <!-- NTT DATA Experience (2022 - Present) -->
    <article
      class="timeline-item timeline-item--current"
      data-company="ntt-data"
    >
      <div class="timeline-marker">
        <div class="timeline-dot"></div>
        <div class="timeline-date">2022 - Presente</div>
      </div>

      <div class="timeline-content">
        <div class="company-header">
          <h3 class="company-name">NTT DATA</h3>
          <div class="company-location">
            <span class="location-icon" aria-hidden="true">📍</span>
            Jaén, España
          </div>
        </div>

        <!-- Multiple positions within NTT DATA -->
        <div class="positions-list">
          <!-- Position 1: Technical Leader Specialist -->
          <div
            class="position-item position-item--current"
            data-position="technical-leader"
          >
            <div class="position-header">
              <h4 class="position-title">Technical Leader Specialist</h4>
              <div class="position-period">Jul 2025 - Presente</div>
            </div>
            <ul class="position-achievements">
              <li>
                Liderazgo en iniciativas de IA y talleres de GenAI, Copilot
                Agents y Dev Containers
              </li>
              <li>
                Participación en procesos de selección y validación de
                conocimientos técnicos
              </li>
              <li>Arquitectura de aplicaciones microfrontends para Inditex</li>
            </ul>
            <div class="position-skills">
              <span class="skill-tag">Leadership</span>
              <span class="skill-tag">GenAI</span>
              <span class="skill-tag">Microfrontends</span>
              <span class="skill-tag">Team Coordination</span>
            </div>
          </div>

          <!-- Position 2: Technical Senior Specialist -->
          <div class="position-item" data-position="technical-senior">
            <div class="position-header">
              <h4 class="position-title">Technical Senior Specialist</h4>
              <div class="position-period">Ene 2025 - Jul 2025</div>
            </div>
            <ul class="position-achievements">
              <li>
                Shell principal de aplicación iPad para Inditex (orquestación de
                múltiples equipos)
              </li>
              <li>Gestión completa del ciclo de vida de empleados</li>
              <li>Coordinación técnica cross-team</li>
            </ul>
            <div class="position-skills">
              <span class="skill-tag">React</span>
              <span class="skill-tag">iPad Apps</span>
              <span class="skill-tag">Team Leadership</span>
            </div>
          </div>

          <!-- Position 3: Senior Developer (Inditex SPA) -->
          <div class="position-item" data-position="senior-developer-2">
            <div class="position-header">
              <h4 class="position-title">Desarrollador Sénior</h4>
              <div class="position-period">Mayo 2023 - Ene 2025</div>
            </div>
            <ul class="position-achievements">
              <li>SPA para unificación de gestión de tiendas Inditex</li>
              <li>Implementación de RTK Query para gestión de estado</li>
              <li>
                Primera plataforma de RRHH publicada globalmente en el grupo
              </li>
            </ul>
            <div class="position-skills">
              <span class="skill-tag">React</span>
              <span class="skill-tag">RTK Query</span>
              <span class="skill-tag">SPA</span>
            </div>
          </div>

          <!-- Position 4: Senior Developer (Internal Panel) -->
          <div class="position-item" data-position="senior-developer-1">
            <div class="position-header">
              <h4 class="position-title">Desarrollador Sénior</h4>
              <div class="position-period">Feb 2023 - Mayo 2023</div>
            </div>
            <ul class="position-achievements">
              <li>Panel interno de gestión de gastos y recursos</li>
              <li>Desarrollo de componentes reutilizables y KPIs</li>
              <li>Dashboards en tiempo real</li>
            </ul>
            <div class="position-skills">
              <span class="skill-tag">React</span>
              <span class="skill-tag">Real-time</span>
              <span class="skill-tag">KPIs</span>
            </div>
          </div>

          <!-- Position 5: Web Developer (RTVE) -->
          <div class="position-item" data-position="web-developer">
            <div class="position-header">
              <h4 class="position-title">Desarrollador Web</h4>
              <div class="position-period">Jun 2022 - Feb 2023</div>
            </div>
            <ul class="position-achievements">
              <li>Desarrollo y mantenimiento de APIs para RTVE Play</li>
              <li>Automatización de tareas con Puppeteer</li>
              <li>Sistema de notificaciones y gestión de contenidos</li>
            </ul>
            <div class="position-skills">
              <span class="skill-tag">Node.js</span>
              <span class="skill-tag">Puppeteer</span>
              <span class="skill-tag">APIs</span>
            </div>
          </div>
        </div>
      </div>
    </article>

    <!-- HelloAuto Experience (2021 - 2022) -->
    <article class="timeline-item" data-company="helloauto">
      <div class="timeline-marker">
        <div class="timeline-dot"></div>
        <div class="timeline-date">Feb 2021 - Jun 2022</div>
      </div>

      <div class="timeline-content">
        <div class="company-header">
          <h3 class="company-name">HelloAuto</h3>
          <div class="company-location">
            <span class="location-icon" aria-hidden="true">📍</span>
            Jaén, España
          </div>
        </div>

        <div class="positions-list">
          <div class="position-item" data-position="fullstack-developer">
            <div class="position-header">
              <h4 class="position-title">Desarrollador Full Stack</h4>
              <div class="position-period">Feb 2021 - Jun 2022</div>
            </div>
            <ul class="position-achievements">
              <li>
                Panel de telemetría en tiempo real para flotas vehiculares
              </li>
              <li>Procesamiento de datos IoT de 500+ vehículos</li>
              <li>Mentoría a 3 desarrolladores junior</li>
              <li>
                Arquitectura de microservicios con Node.js, Express, Azure
              </li>
            </ul>
            <div class="position-skills">
              <span class="skill-tag">React</span>
              <span class="skill-tag">Node.js</span>
              <span class="skill-tag">Azure</span>
              <span class="skill-tag">IoT</span>
              <span class="skill-tag">Mentoring</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  </div>
</section>
```

**Styling Reference**:
→ Complete styles in: [Timeline Component](../03-COMPONENT-LIBRARY.md#4-timeline-component)

**Interactive Elements**:

- Timeline line: Progressive drawing animation on scroll
- Position items: Expand/collapse on click (mobile) or hover (desktop)
- Skill tags: Hover highlighting with related skills
- Touch-friendly: Minimum 44x44px touch targets

**Animation JavaScript**:

```javascript
// Timeline line progressive drawing
const timelineObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('timeline-visible')
      }
    })
  },
  { threshold: 0.2 }
)

document.querySelectorAll('.timeline-item').forEach(item => {
  timelineObserver.observe(item)
})

// Position expansion on mobile
document.querySelectorAll('.position-item').forEach(position => {
  position.addEventListener('click', () => {
    position.classList.toggle('position-expanded')
  })
})
```

**Accessibility**:

- Semantic HTML: `<article>` for each experience, `<h3>` for companies, `<h4>` for positions
- ARIA: Timeline line decorative with `aria-hidden="true"`
- Keyboard: All expandable items accessible via Enter/Space keys
- Screen readers: Clear hierarchy and relationship announcements

---

### Step 2: Implement Project Showcase with Overlay System

**Objective**: Presentar proyectos destacados con detalles técnicos y sistema de overlays

**Components Needed**:
→ [Project Card Component](../03-COMPONENT-LIBRARY.md#5-project-card)

**Content Source**:
→ [Proyectos Destacados](../02-CONTENT-SPECIFICATIONS.md#proyectos-destacados)

**Grid Placement**: XL Card (3x3)

**Implementation**:

```html
<section class="projects-card card card--xl" aria-label="Featured Projects">
  <div class="projects-header">
    <h2 class="section-title">
      <span class="title-icon" aria-hidden="true">🚀</span>
      Proyectos Destacados
    </h2>
    <div
      class="projects-filter"
      role="group"
      aria-label="Filter projects by category"
    >
      <button
        class="filter-btn filter-btn--active"
        data-filter="all"
        aria-pressed="true"
      >
        Todos
      </button>
      <button class="filter-btn" data-filter="enterprise" aria-pressed="false">
        Enterprise
      </button>
      <button class="filter-btn" data-filter="web" aria-pressed="false">
        Web Apps
      </button>
      <button class="filter-btn" data-filter="iot" aria-pressed="false">
        IoT
      </button>
    </div>
  </div>

  <div class="projects-grid">
    <!-- Project 1: Inditex Platform -->
    <article
      class="project-item"
      data-category="enterprise"
      data-project="inditex"
    >
      <div class="project-image">
        <picture>
          <source
            srcset="images/projects/inditex-platform.avif"
            type="image/avif"
          />
          <source
            srcset="images/projects/inditex-platform.webp"
            type="image/webp"
          />
          <img
            src="images/projects/inditex-platform.jpg"
            alt="Inditex Store Management Platform Interface"
            loading="lazy"
            width="600"
            height="400"
          />
        </picture>
        <div class="project-overlay">
          <div class="project-status">
            <span
              class="status-indicator status-indicator--live"
              aria-label="Live in production"
              >🟢</span
            >
            <span class="status-text">En Producción</span>
          </div>
        </div>
      </div>

      <div class="project-content">
        <div class="project-header">
          <h3 class="project-title">Plataforma Inditex Store Management</h3>
          <div class="project-tags">
            <span class="project-tag project-tag--enterprise">Enterprise</span>
            <span class="project-tag project-tag--nda">NDA</span>
          </div>
        </div>

        <p class="project-description">
          Arquitectura de microfrontends React para gestión integral de tiendas.
          Primera plataforma de RRHH publicada globalmente en el grupo Inditex,
          cubriendo el 100% de las tiendas en España.
        </p>

        <div class="project-tech">
          <span class="tech-tag">React</span>
          <span class="tech-tag">Microfrontends</span>
          <span class="tech-tag">RTK Query</span>
          <span class="tech-tag">Azure</span>
          <span class="tech-tag">TypeScript</span>
        </div>

        <div class="project-impact">
          <div class="impact-metric">
            <span class="impact-number">100%</span>
            <span class="impact-label">Tiendas España</span>
          </div>
          <div class="impact-metric">
            <span class="impact-number">5+</span>
            <span class="impact-label">Países activos</span>
          </div>
          <div class="impact-metric">
            <span class="impact-number">Global</span>
            <span class="impact-label">Primera RRHH Inditex</span>
          </div>
        </div>

        <div class="project-actions">
          <button
            class="btn btn--primary btn--small"
            data-action="case-study"
            data-project="inditex"
          >
            <span>Caso de Estudio</span>
            <span class="btn-icon" aria-hidden="true">→</span>
          </button>
          <button
            class="btn btn--secondary btn--small"
            data-action="tech-details"
            data-project="inditex"
          >
            <span>Detalles Técnicos</span>
          </button>
        </div>
      </div>
    </article>

    <!-- Project 2: RTVE Play CMS -->
    <article class="project-item" data-category="web" data-project="rtve">
      <div class="project-image">
        <picture>
          <source srcset="images/projects/rtve-cms.avif" type="image/avif" />
          <source srcset="images/projects/rtve-cms.webp" type="image/webp" />
          <img
            src="images/projects/rtve-cms.jpg"
            alt="RTVE Play Content Management System"
            loading="lazy"
            width="600"
            height="400"
          />
        </picture>
        <div class="project-overlay">
          <div class="project-status">
            <span
              class="status-indicator status-indicator--completed"
              aria-label="Project completed"
              >✅</span
            >
            <span class="status-text">Completado</span>
          </div>
        </div>
      </div>

      <div class="project-content">
        <div class="project-header">
          <h3 class="project-title">RTVE Play CMS</h3>
          <div class="project-tags">
            <span class="project-tag project-tag--web">Web App</span>
            <span class="project-tag project-tag--public">Público</span>
          </div>
        </div>

        <p class="project-description">
          Desarrollo y mantenimiento de APIs para gestión de contenidos
          audiovisuales de alcance nacional. Automatización de workflows con
          Puppeteer.
        </p>

        <div class="project-tech">
          <span class="tech-tag">Node.js</span>
          <span class="tech-tag">Swig.js</span>
          <span class="tech-tag">Puppeteer</span>
          <span class="tech-tag">CI/CD</span>
        </div>

        <div class="project-impact">
          <div class="impact-metric">
            <span class="impact-number">70%</span>
            <span class="impact-label">Reducción errores</span>
          </div>
          <div class="impact-metric">
            <span class="impact-number">Nacional</span>
            <span class="impact-label">Alcance</span>
          </div>
        </div>

        <div class="project-actions">
          <button
            class="btn btn--primary btn--small"
            data-action="case-study"
            data-project="rtve"
          >
            <span>Ver Detalles</span>
            <span class="btn-icon" aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </article>

    <!-- Project 3: HelloAuto Telemetry Dashboard -->
    <article class="project-item" data-category="iot" data-project="helloauto">
      <div class="project-image">
        <picture>
          <source
            srcset="images/projects/helloauto-dashboard.avif"
            type="image/avif"
          />
          <source
            srcset="images/projects/helloauto-dashboard.webp"
            type="image/webp"
          />
          <img
            src="images/projects/helloauto-dashboard.jpg"
            alt="HelloAuto IoT Telemetry Dashboard"
            loading="lazy"
            width="600"
            height="400"
          />
        </picture>
        <div class="project-overlay">
          <div class="project-status">
            <span
              class="status-indicator status-indicator--completed"
              aria-label="Project completed"
              >✅</span
            >
            <span class="status-text">Completado</span>
          </div>
        </div>
      </div>

      <div class="project-content">
        <div class="project-header">
          <h3 class="project-title">HelloAuto Telemetry Dashboard</h3>
          <div class="project-tags">
            <span class="project-tag project-tag--iot">IoT</span>
            <span class="project-tag project-tag--realtime">Tiempo Real</span>
          </div>
        </div>

        <p class="project-description">
          Panel de control IoT para monitorización de flotas vehiculares con
          procesamiento de datos en tiempo real de 500+ vehículos.
        </p>

        <div class="project-tech">
          <span class="tech-tag">React</span>
          <span class="tech-tag">Node.js</span>
          <span class="tech-tag">Express</span>
          <span class="tech-tag">Azure</span>
          <span class="tech-tag">Cypress</span>
        </div>

        <div class="project-impact">
          <div class="impact-metric">
            <span class="impact-number">1M+</span>
            <span class="impact-label">Eventos/día</span>
          </div>
          <div class="impact-metric">
            <span class="impact-number">500+</span>
            <span class="impact-label">Vehículos</span>
          </div>
        </div>

        <div class="project-actions">
          <button
            class="btn btn--primary btn--small"
            data-action="case-study"
            data-project="helloauto"
          >
            <span>Arquitectura</span>
            <span class="btn-icon" aria-hidden="true">→</span>
          </button>
          <button
            class="btn btn--secondary btn--small"
            data-action="metrics"
            data-project="helloauto"
          >
            <span>Métricas</span>
          </button>
        </div>
      </div>
    </article>
  </div>
</section>
```

**Styling Reference**:
→ Complete styles in: [Project Card Component](../03-COMPONENT-LIBRARY.md#5-project-card)

**Filter Functionality**:

```javascript
// Project filtering
const filterButtons = document.querySelectorAll('.filter-btn')
const projectItems = document.querySelectorAll('.project-item')

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter

    // Update active state
    filterButtons.forEach(btn => {
      btn.classList.remove('filter-btn--active')
      btn.setAttribute('aria-pressed', 'false')
    })
    button.classList.add('filter-btn--active')
    button.setAttribute('aria-pressed', 'true')

    // Filter projects
    projectItems.forEach(project => {
      const category = project.dataset.category
      if (filter === 'all' || category === filter) {
        project.classList.remove('project-hidden')
        project.setAttribute('aria-hidden', 'false')
      } else {
        project.classList.add('project-hidden')
        project.setAttribute('aria-hidden', 'true')
      }
    })
  })
})
```

**Image Optimization**:

- Project screenshots: 600x400px base size
- Formats: AVIF → WebP → JPG fallback
- Budget: < 200 KB per image
- Loading: `loading="lazy"` for below-fold images
- → Reference: [performance-budgets.md - Images](../quick-references/performance-budgets.md#images)

---

### Step 3: Implement Technical Skills Visualization

**Objective**: Mostrar proficiencia técnica con skill bars animadas

**Components Needed**:
→ [Skills Visualization Component](../03-COMPONENT-LIBRARY.md#6-skills-visualization)

**Content Source**:
→ [Habilidades Técnicas](../02-CONTENT-SPECIFICATIONS.md#habilidades-técnicas)

**Grid Placement**: Large Card (2x2)

**Implementation**:

```html
<section class="skills-card card card--large" aria-label="Technical Skills">
  <div class="skills-header">
    <h2 class="section-title">
      <span class="title-icon" aria-hidden="true">⚡</span>
      Stack Técnico
    </h2>
    <div class="skills-legend">
      <div class="legend-item">
        <span
          class="legend-color legend-color--expert"
          aria-hidden="true"
        ></span>
        <span class="legend-label">Experto (85%+)</span>
      </div>
      <div class="legend-item">
        <span
          class="legend-color legend-color--advanced"
          aria-hidden="true"
        ></span>
        <span class="legend-label">Avanzado (70-84%)</span>
      </div>
      <div class="legend-item">
        <span
          class="legend-color legend-color--intermediate"
          aria-hidden="true"
        ></span>
        <span class="legend-label">Intermedio (50-69%)</span>
      </div>
    </div>
  </div>

  <div class="skills-categories">
    <!-- Frontend Mastery -->
    <div class="skill-category" data-category="frontend">
      <div class="category-header">
        <span class="category-icon" aria-hidden="true">🎨</span>
        <h3 class="category-title">Frontend Mastery</h3>
      </div>
      <div class="skills-list">
        <div class="skill-item skill-item--expert">
          <div class="skill-info">
            <span class="skill-name">React</span>
            <span class="skill-percentage">95%</span>
          </div>
          <div
            class="skill-bar-container"
            role="progressbar"
            aria-valuenow="95"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-label="React proficiency: 95%"
          >
            <div
              class="skill-bar"
              data-level="95"
              style="--skill-level: 95%"
            ></div>
          </div>
        </div>
        <div class="skill-item skill-item--expert">
          <div class="skill-info">
            <span class="skill-name">Redux Toolkit</span>
            <span class="skill-percentage">90%</span>
          </div>
          <div
            class="skill-bar-container"
            role="progressbar"
            aria-valuenow="90"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-label="Redux Toolkit proficiency: 90%"
          >
            <div
              class="skill-bar"
              data-level="90"
              style="--skill-level: 90%"
            ></div>
          </div>
        </div>
        <div class="skill-item skill-item--expert">
          <div class="skill-info">
            <span class="skill-name">RTK Query</span>
            <span class="skill-percentage">85%</span>
          </div>
          <div
            class="skill-bar-container"
            role="progressbar"
            aria-valuenow="85"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-label="RTK Query proficiency: 85%"
          >
            <div
              class="skill-bar"
              data-level="85"
              style="--skill-level: 85%"
            ></div>
          </div>
        </div>
        <div class="skill-item skill-item--advanced">
          <div class="skill-info">
            <span class="skill-name">Micro Frontends</span>
            <span class="skill-percentage">80%</span>
          </div>
          <div
            class="skill-bar-container"
            role="progressbar"
            aria-valuenow="80"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-label="Micro Frontends proficiency: 80%"
          >
            <div
              class="skill-bar"
              data-level="80"
              style="--skill-level: 80%"
            ></div>
          </div>
        </div>
        <div class="skill-item skill-item--advanced">
          <div class="skill-info">
            <span class="skill-name">Next.js</span>
            <span class="skill-percentage">75%</span>
          </div>
          <div
            class="skill-bar-container"
            role="progressbar"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-label="Next.js proficiency: 75%"
          >
            <div
              class="skill-bar"
              data-level="75"
              style="--skill-level: 75%"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <!-- IA & Automatización -->
    <div class="skill-category" data-category="ai">
      <div class="category-header">
        <span class="category-icon" aria-hidden="true">🤖</span>
        <h3 class="category-title">IA & Automatización</h3>
      </div>
      <div class="skills-list">
        <div class="skill-item skill-item--expert">
          <div class="skill-info">
            <span class="skill-name">GenAI</span>
            <span class="skill-percentage">90%</span>
          </div>
          <div
            class="skill-bar-container"
            role="progressbar"
            aria-valuenow="90"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-label="GenAI proficiency: 90%"
          >
            <div
              class="skill-bar"
              data-level="90"
              style="--skill-level: 90%"
            ></div>
          </div>
        </div>
        <div class="skill-item skill-item--expert">
          <div class="skill-info">
            <span class="skill-name">Copilot</span>
            <span class="skill-percentage">85%</span>
          </div>
          <div
            class="skill-bar-container"
            role="progressbar"
            aria-valuenow="85"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-label="Copilot proficiency: 85%"
          >
            <div
              class="skill-bar"
              data-level="85"
              style="--skill-level: 85%"
            ></div>
          </div>
        </div>
        <div class="skill-item skill-item--expert">
          <div class="skill-info">
            <span class="skill-name">Puppeteer</span>
            <span class="skill-percentage">88%</span>
          </div>
          <div
            class="skill-bar-container"
            role="progressbar"
            aria-valuenow="88"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-label="Puppeteer proficiency: 88%"
          >
            <div
              class="skill-bar"
              data-level="88"
              style="--skill-level: 88%"
            ></div>
          </div>
        </div>
        <div class="skill-item skill-item--advanced">
          <div class="skill-info">
            <span class="skill-name">LangChain</span>
            <span class="skill-percentage">75%</span>
          </div>
          <div
            class="skill-bar-container"
            role="progressbar"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-label="LangChain proficiency: 75%"
          >
            <div
              class="skill-bar"
              data-level="75"
              style="--skill-level: 75%"
            ></div>
          </div>
        </div>
        <div class="skill-item skill-item--advanced">
          <div class="skill-info">
            <span class="skill-name">Agents</span>
            <span class="skill-percentage">70%</span>
          </div>
          <div
            class="skill-bar-container"
            role="progressbar"
            aria-valuenow="70"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-label="Agents proficiency: 70%"
          >
            <div
              class="skill-bar"
              data-level="70"
              style="--skill-level: 70%"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Backend & Cloud -->
    <div class="skill-category" data-category="backend">
      <div class="category-header">
        <span class="category-icon" aria-hidden="true">⚙️</span>
        <h3 class="category-title">Backend & Cloud</h3>
      </div>
      <div class="skills-list">
        <div class="skill-item skill-item--expert">
          <div class="skill-info">
            <span class="skill-name">Node.js</span>
            <span class="skill-percentage">88%</span>
          </div>
          <div
            class="skill-bar-container"
            role="progressbar"
            aria-valuenow="88"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-label="Node.js proficiency: 88%"
          >
            <div
              class="skill-bar"
              data-level="88"
              style="--skill-level: 88%"
            ></div>
          </div>
        </div>
        <div class="skill-item skill-item--expert">
          <div class="skill-info">
            <span class="skill-name">Express</span>
            <span class="skill-percentage">85%</span>
          </div>
          <div
            class="skill-bar-container"
            role="progressbar"
            aria-valuenow="85"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-label="Express proficiency: 85%"
          >
            <div
              class="skill-bar"
              data-level="85"
              style="--skill-level: 85%"
            ></div>
          </div>
        </div>
        <div class="skill-item skill-item--advanced">
          <div class="skill-info">
            <span class="skill-name">Azure</span>
            <span class="skill-percentage">75%</span>
          </div>
          <div
            class="skill-bar-container"
            role="progressbar"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-label="Azure proficiency: 75%"
          >
            <div
              class="skill-bar"
              data-level="75"
              style="--skill-level: 75%"
            ></div>
          </div>
        </div>
        <div class="skill-item skill-item--intermediate">
          <div class="skill-info">
            <span class="skill-name">Microservicios</span>
            <span class="skill-percentage">70%</span>
          </div>
          <div
            class="skill-bar-container"
            role="progressbar"
            aria-valuenow="70"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-label="Microservicios proficiency: 70%"
          >
            <div
              class="skill-bar"
              data-level="70"
              style="--skill-level: 70%"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Arquitectura -->
    <div class="skill-category" data-category="architecture">
      <div class="category-header">
        <span class="category-icon" aria-hidden="true">🏗️</span>
        <h3 class="category-title">Arquitectura</h3>
      </div>
      <div class="skills-list">
        <div class="skill-item skill-item--expert">
          <div class="skill-info">
            <span class="skill-name">Microfrontends</span>
            <span class="skill-percentage">92%</span>
          </div>
          <div
            class="skill-bar-container"
            role="progressbar"
            aria-valuenow="92"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-label="Microfrontends proficiency: 92%"
          >
            <div
              class="skill-bar"
              data-level="92"
              style="--skill-level: 92%"
            ></div>
          </div>
        </div>
        <div class="skill-item skill-item--advanced">
          <div class="skill-info">
            <span class="skill-name">Design Systems</span>
            <span class="skill-percentage">80%</span>
          </div>
          <div
            class="skill-bar-container"
            role="progressbar"
            aria-valuenow="80"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-label="Design Systems proficiency: 80%"
          >
            <div
              class="skill-bar"
              data-level="80"
              style="--skill-level: 80%"
            ></div>
          </div>
        </div>
        <div class="skill-item skill-item--advanced">
          <div class="skill-info">
            <span class="skill-name">Modular Architecture</span>
            <span class="skill-percentage">78%</span>
          </div>
          <div
            class="skill-bar-container"
            role="progressbar"
            aria-valuenow="78"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-label="Modular Architecture proficiency: 78%"
          >
            <div
              class="skill-bar"
              data-level="78"
              style="--skill-level: 78%"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

**Styling Reference**:
→ Complete styles in: [Skills Visualization Component](../03-COMPONENT-LIBRARY.md#6-skills-visualization)

**Animation JavaScript**:

```javascript
// Skill bars animation on scroll
const skillsObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const skillBars = entry.target.querySelectorAll('.skill-bar')
        skillBars.forEach((bar, index) => {
          setTimeout(() => {
            bar.classList.add('skill-bar--animated')
          }, index * 100) // Stagger animation
        })
        skillsObserver.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.3 }
)

const skillsCard = document.querySelector('.skills-card')
if (skillsCard) {
  skillsObserver.observe(skillsCard)
}
```

**CSS Animation**:

```css
/* Skill bar animation using CSS custom properties */
.skill-bar {
  width: 0;
  transition: width 1s cubic-bezier(0.4, 0, 0.2, 1);
}

.skill-bar--animated {
  width: var(--skill-level);
}
```

---

### Step 4: Implement Statistics Dashboard

**Objective**: Crear dashboard con estadísticas animadas de impacto profesional

**Components Needed**:
→ [Stats Counter Component](../03-COMPONENT-LIBRARY.md#7-stats-counter)

**Content Source**:
→ [Información Personal](../02-CONTENT-SPECIFICATIONS.md#información-personal-canonical-data)

**Grid Placement**: Medium Card (2x1)

**Implementation**:

```html
<section
  class="stats-card card card--medium"
  aria-label="Professional Statistics"
>
  <div class="stats-header">
    <h2 class="section-title">
      <span class="title-icon" aria-hidden="true">📊</span>
      Impacto & Logros
    </h2>
  </div>

  <div class="stats-grid">
    <div class="stat-item" data-stat="experience">
      <div class="stat-icon" aria-hidden="true">💼</div>
      <div class="stat-number">
        <span
          class="counter"
          data-count="3"
          data-suffix="+"
          aria-label="3+ years of experience"
          >0</span
        >
      </div>
      <div class="stat-label">años experiencia</div>
    </div>

    <div class="stat-item" data-stat="projects">
      <div class="stat-icon" aria-hidden="true">🚀</div>
      <div class="stat-number">
        <span
          class="counter"
          data-count="5"
          data-suffix=""
          aria-label="5 high-impact projects"
          >0</span
        >
      </div>
      <div class="stat-label">proyectos alto impacto</div>
    </div>

    <div class="stat-item" data-stat="mentoring">
      <div class="stat-icon" aria-hidden="true">👥</div>
      <div class="stat-number">
        <span
          class="counter"
          data-count="3"
          data-suffix=""
          aria-label="3 developers mentored"
          >0</span
        >
      </div>
      <div class="stat-label">devs mentoreados</div>
    </div>

    <div class="stat-item" data-stat="coverage">
      <div class="stat-icon" aria-hidden="true">🏪</div>
      <div class="stat-number">
        <span
          class="counter"
          data-count="100"
          data-suffix="%"
          aria-label="100% store coverage"
          >0</span
        >
      </div>
      <div class="stat-label">tiendas Inditex España</div>
    </div>
  </div>
</section>
```

**Styling Reference**:
→ Complete styles in: [Stats Counter Component](../03-COMPONENT-LIBRARY.md#7-stats-counter)

**Counter Animation JavaScript**:

```javascript
// Counter animation function
function animateCounter(element) {
  const target = parseInt(element.dataset.count)
  const suffix = element.dataset.suffix || ''
  const duration = 2000 // 2 seconds
  const fps = 60
  const totalFrames = (duration / 1000) * fps
  const increment = target / totalFrames

  let current = 0
  let frame = 0

  const animate = () => {
    frame++
    current += increment

    if (frame >= totalFrames) {
      current = target
      element.textContent = target + suffix
      element.classList.add('counter-complete')
      return
    }

    element.textContent = Math.floor(current) + suffix
    requestAnimationFrame(animate)
  }

  requestAnimationFrame(animate)
}

// Trigger counters on scroll
const statsObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counters = entry.target.querySelectorAll('.counter')
        counters.forEach((counter, index) => {
          setTimeout(() => {
            animateCounter(counter)
          }, index * 150) // Stagger each counter
        })
        statsObserver.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.5 }
)

const statsCard = document.querySelector('.stats-card')
if (statsCard) {
  statsObserver.observe(statsCard)
}
```

---

### Step 5: Implement Certifications & Education Section

**Objective**: Mostrar credenciales académicas y certificaciones profesionales

**Components Needed**:
→ [Card (Base Component)](../03-COMPONENT-LIBRARY.md#1-card-base-component)

**Content Source**:
→ [Certificaciones](../02-CONTENT-SPECIFICATIONS.md#certificaciones)
→ [Educación](../02-CONTENT-SPECIFICATIONS.md#educación)

**Grid Placement**: Medium Card (2x1)

**Implementation**:

```html
<section
  class="education-card card card--medium"
  aria-label="Education and Certifications"
>
  <div class="education-header">
    <h2 class="section-title">
      <span class="title-icon" aria-hidden="true">🎓</span>
      Certificaciones & Educación
    </h2>
  </div>

  <div class="education-content">
    <!-- Certifications Section -->
    <div class="certifications-section">
      <h3 class="subsection-title">Certificaciones Profesionales</h3>
      <div class="certifications-list">
        <div class="cert-item cert-item--current">
          <div class="cert-badge" aria-hidden="true">
            <span class="badge-icon">🏅</span>
          </div>
          <div class="cert-info">
            <h4 class="cert-name">GenAI Academy: Yellow Belt P1</h4>
            <div class="cert-issuer">NTT DATA University</div>
            <div class="cert-date">2025</div>
          </div>
        </div>

        <div class="cert-item">
          <div class="cert-badge" aria-hidden="true">
            <span class="badge-icon">🏅</span>
          </div>
          <div class="cert-info">
            <h4 class="cert-name">GenAI Academy: White Belt</h4>
            <div class="cert-issuer">NTT DATA University</div>
            <div class="cert-date">2025</div>
          </div>
        </div>

        <div class="cert-item">
          <div class="cert-badge" aria-hidden="true">
            <span class="badge-icon">✓</span>
          </div>
          <div class="cert-info">
            <h4 class="cert-name">React JS (Avanzado)</h4>
            <div class="cert-issuer">Certificación Profesional</div>
          </div>
        </div>

        <div class="cert-item">
          <div class="cert-badge" aria-hidden="true">
            <span class="badge-icon">✓</span>
          </div>
          <div class="cert-info">
            <h4 class="cert-name">Node.js & Express</h4>
            <div class="cert-issuer">Certificación Profesional</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Education Section -->
    <div class="education-section">
      <h3 class="subsection-title">Formación Académica</h3>
      <div class="education-item">
        <div class="education-icon" aria-hidden="true">🎯</div>
        <div class="education-info">
          <h4 class="education-degree">Ciclo Formativo Grado Superior</h4>
          <div class="education-field">Desarrollo de Aplicaciones Web</div>
          <div class="education-institution">Las Fuentezuelas</div>
          <div class="education-period">2017 - 2019</div>
        </div>
      </div>
    </div>
  </div>
</section>
```

**Styling**:

```css
/* Certifications and Education styling */
.certifications-list,
.education-item {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.cert-item {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  padding: var(--space-3);
  background: var(--color-bg-secondary);
  border-radius: var(--radius-md);
  transition:
    transform 0.2s,
    box-shadow 0.2s;
}

.cert-item:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.cert-item--current {
  border-left: 3px solid var(--color-cyan);
}

.cert-badge {
  font-size: var(--text-2xl);
  flex-shrink: 0;
}

.cert-name {
  font-size: var(--text-base);
  font-weight: var(--font-semibold);
  color: var(--color-text-primary);
  margin-bottom: var(--space-1);
}

.cert-issuer,
.cert-date {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
}
```

---

### Step 6: Implement Values & Philosophy Section

**Objective**: Presentar valores profesionales y filosofía de trabajo

**Components Needed**:
→ [Card (Base Component)](../03-COMPONENT-LIBRARY.md#1-card-base-component)

**Content Source**:
→ [Valores y Filosofía](../02-CONTENT-SPECIFICATIONS.md#valores-y-filosofía)

**Grid Placement**: Large Card (2x2)

**Implementation**:

```html
<section
  class="values-card card card--large"
  aria-label="Professional Values and Philosophy"
>
  <div class="values-header">
    <h2 class="section-title">
      <span class="title-icon" aria-hidden="true">💡</span>
      Valores & Filosofía
    </h2>
  </div>

  <div class="values-content">
    <blockquote class="personal-quote">
      <p class="quote-text">
        "Me motiva aprender y compartir. Soy una persona curiosa y entusiasta de
        los nuevos retos, que busca mantenerse siempre actualizada con las
        últimas tendencias del ecosistema frontend."
      </p>
      <cite class="quote-author">— Alejandro de la Fuente</cite>
    </blockquote>

    <div class="values-list">
      <div class="values-grid">
        <div class="value-item" data-value="innovation">
          <div class="value-icon" aria-hidden="true">💡</div>
          <div class="value-content">
            <h3 class="value-title">Innovación continua</h3>
            <p class="value-description">
              Búsqueda constante de mejores soluciones y adopción de tecnologías
              emergentes
            </p>
          </div>
        </div>

        <div class="value-item" data-value="collaboration">
          <div class="value-icon" aria-hidden="true">🤝</div>
          <div class="value-content">
            <h3 class="value-title">Colaboración y mentoría</h3>
            <p class="value-description">
              Compartir conocimiento y facilitar el crecimiento del equipo
            </p>
          </div>
        </div>

        <div class="value-item" data-value="learning">
          <div class="value-icon" aria-hidden="true">📚</div>
          <div class="value-content">
            <h3 class="value-title">Aprendizaje permanente</h3>
            <p class="value-description">
              Mantenerme actualizado con las últimas tendencias tecnológicas
            </p>
          </div>
        </div>

        <div class="value-item" data-value="quality">
          <div class="value-icon" aria-hidden="true">🎯</div>
          <div class="value-content">
            <h3 class="value-title">Calidad y buenas prácticas</h3>
            <p class="value-description">
              Código limpio, mantenible y siguiendo estándares de la industria
            </p>
          </div>
        </div>

        <div class="value-item" data-value="vision">
          <div class="value-icon" aria-hidden="true">🚀</div>
          <div class="value-content">
            <h3 class="value-title">Visión de producto</h3>
            <p class="value-description">
              Enfoque en soluciones que generan valor real para los usuarios
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

**Styling**:

```css
/* Values section styling */
.personal-quote {
  padding: var(--space-6);
  background: linear-gradient(
    135deg,
    rgba(100, 255, 218, 0.05),
    rgba(100, 255, 218, 0.02)
  );
  border-left: 4px solid var(--color-cyan);
  border-radius: var(--radius-md);
  margin-bottom: var(--space-8);
}

.quote-text {
  font-size: var(--text-lg);
  line-height: 1.7;
  color: var(--color-text-primary);
  font-style: italic;
  margin-bottom: var(--space-3);
}

.quote-author {
  font-size: var(--text-sm);
  color: var(--color-cyan);
  font-weight: var(--font-medium);
  font-style: normal;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--space-4);
}

.value-item {
  display: flex;
  gap: var(--space-3);
  padding: var(--space-4);
  background: var(--color-bg-secondary);
  border-radius: var(--radius-md);
  transition:
    transform 0.2s,
    box-shadow 0.2s;
}

.value-item:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.value-icon {
  font-size: var(--text-3xl);
  flex-shrink: 0;
}

.value-title {
  font-size: var(--text-base);
  font-weight: var(--font-semibold);
  color: var(--color-text-primary);
  margin-bottom: var(--space-2);
}

.value-description {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  line-height: 1.6;
}
```

---

## 🧪 Testing Checklist

### Interaction Testing

→ [Complete Testing Template](../templates/testing-checklist.md)

- [ ] Timeline: Progressive line drawing animates on scroll
- [ ] Timeline: Position items expand/collapse correctly
- [ ] Projects: Filter buttons toggle active state
- [ ] Projects: Filtering shows/hides correct projects
- [ ] Skills: Bars animate with stagger effect on scroll
- [ ] Stats: Counters animate from 0 to target value
- [ ] All interactions work on touch devices
- [ ] Keyboard navigation functional for all interactive elements

### Performance Testing

→ [Performance Budgets](../quick-references/performance-budgets.md)

- [ ] Timeline animations maintain 60fps
- [ ] Project images load without blocking interactions
- [ ] Skills animations smooth without jank
- [ ] Counter animations don't cause layout thrashing
- [ ] Intersection Observer properly cleanup on unmount
- [ ] No memory leaks during repeated scroll interactions

### Content Verification

- [ ] All experience data matches [02-CONTENT-SPECIFICATIONS.md](../02-CONTENT-SPECIFICATIONS.md#experiencia-profesional)
- [ ] Project information accurate and current
- [ ] Skills percentages reflect genuine proficiency
- [ ] Statistics factually correct
- [ ] Certifications and dates verified
- [ ] No typos or grammatical errors

### Responsive Testing

- [ ] Timeline readable on mobile (320px+)
- [ ] Projects grid adapts correctly: 1 col (mobile) → 2 col (tablet) → 3 col (desktop)
- [ ] Skills bars and labels don't overflow
- [ ] Stats grid responsive across breakpoints
- [ ] Touch targets ≥ 44x44px on mobile
- [ ] Text readable at all viewport sizes

### Accessibility Testing

→ [Accessibility Checklist](../quick-references/accessibility-checklist.md)

- [ ] Semantic HTML: Proper heading hierarchy (h2 → h3 → h4)
- [ ] ARIA: Progress bars have `role="progressbar"` with aria-valuenow
- [ ] ARIA: Filter buttons have `aria-pressed` state
- [ ] ARIA: Decorative icons have `aria-hidden="true"`
- [ ] Keyboard: All expandable items accessible via Enter/Space
- [ ] Screen readers: Counter animations announce final value
- [ ] Focus indicators: Visible on all interactive elements
- [ ] Color contrast: ≥ 4.5:1 for all text
- [ ] Lighthouse Accessibility: ≥ 90

---

## 📦 Deliverables

### Content Sections

- ✅ Interactive Experience Timeline (XL 3x2)
- ✅ Project Showcase with filters (XL 3x3)
- ✅ Technical Skills Visualization (Large 2x2)
- ✅ Statistics Dashboard (Medium 2x1)
- ✅ Certifications & Education (Medium 2x1)
- ✅ Values & Philosophy (Large 2x2)

### Assets

- ✅ Project screenshots (3 projects, AVIF/WebP/JPG @ 600x400)
- ✅ Certification badges (SVG format)
- ✅ Company logos (if applicable)

### Code Components

- ✅ Timeline component with progressive animation
- ✅ Project filter and display system
- ✅ Skill bars with scroll-triggered animation
- ✅ Counter animation with Intersection Observer
- ✅ Responsive grid layouts for all sections
- ✅ Reusable animation utilities

### JavaScript Features

- ✅ Timeline progressive line drawing
- ✅ Position expand/collapse interaction
- ✅ Project category filtering
- ✅ Skill bars staggered animation
- ✅ Counter animation from 0 to target
- ✅ Intersection Observer for scroll triggers
- ✅ Touch-friendly mobile interactions

---

## 🚀 Definition of Done

### Technical Criteria

- [ ] **All Sections Implemented**: Timeline, Projects, Skills, Stats, Certifications, Values
- [ ] **Content Accurate**: All data matches [02-CONTENT-SPECIFICATIONS.md](../02-CONTENT-SPECIFICATIONS.md)
- [ ] **Animations Smooth**: All animations 60fps, no jank or layout thrashing
- [ ] **Responsive**: Works flawlessly 320px - 1920px+
- [ ] **Interactive**: Timeline, filters, counters, expansions all functional
- [ ] **Accessibility**: WCAG 2.1 AA compliant, Lighthouse ≥ 90
- [ ] **Performance**: Complex interactions don't degrade performance

### Quality Gates

- [ ] **Lighthouse Scores**:
  - Performance: > 90 (with all animations)
  - Accessibility: ≥ 90
  - Best Practices: > 90
  - SEO: 100
- [ ] **Animation Performance**:
  - Timeline: 60fps during scroll
  - Skills bars: Smooth stagger with no jank
  - Counters: No layout shift during animation
- [ ] **Cross-browser**: Chrome, Firefox, Safari, Edge tested
- [ ] **Touch**: Mobile interactions feel responsive and natural
- [ ] **Content Accuracy**: All information verified and current

### Handoff Requirements

**Assets for Phase 4** (Advanced Animations & Microinteractions):

- ✅ Complex animation patterns established
- ✅ Intersection Observer utilities reusable
- ✅ Scroll-triggered animation framework
- ✅ Touch interaction patterns documented

**Dependencies Met**:

- ✅ Design system from Phase 1 used consistently
- ✅ Grid system from Phase 1 accommodates complex layouts
- ✅ Content from Phase 2 structure maintained
- ✅ No regressions in previous phases

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
→ [Phase 2: Core Content](PHASE-02-Core-Content.md) - DEPENDENCY
→ [Phase 4: Advanced Animations](PHASE-04-Animations.md) - NEXT

---

**Phase Owner**: Frontend Developer
**Stakeholders**: Content Manager, UX Designer, Technical Lead
**Created**: 21 Enero 2025
**Last Updated**: 21 Enero 2025
**Status**: Ready for Implementation
