# Accessibility Checklist - WCAG 2.1 AA

**Propósito**: Checklist completo para garantizar accesibilidad WCAG 2.1 Level AA

**Target**: Lighthouse Accessibility Score = 100

**Última actualización**: 20 Enero 2025

---

## 🎯 Objetivos de Accesibilidad

- **WCAG 2.1 Level AA**: Cumplimiento completo
- **Lighthouse Accessibility**: Score 100
- **Screen Reader**: Compatible con NVDA, JAWS, VoiceOver
- **Keyboard Navigation**: 100% navegable sin mouse
- **Contrast Ratios**: Todos los textos ≥ 4.5:1 (AAA cuando posible)

---

## ✅ Checklist por Categoría

### 1. Color & Contrast

#### Ratios de Contraste Requeridos

- [ ] **Texto normal** (< 18px): Contraste ≥ 4.5:1 (AA)
- [ ] **Texto grande** (≥ 18px o 14px bold): Contraste ≥ 3:1 (AA)
- [ ] **Componentes UI**: Contraste ≥ 3:1 (AA)
- [ ] **Estados de foco**: Contraste ≥ 3:1
- [ ] **Gráficos informativos**: Contraste ≥ 3:1

#### Portfolio Específico

- [ ] Navy (#0A192F) + White (#FFFFFF): 15.3:1 ✅ (AAA)
- [ ] Navy + Gray Light (#8892B0): 7.2:1 ✅ (AA)
- [ ] Navy + Cyan (#64FFDA): 8.9:1 ✅ (AA)
- [ ] Cyan buttons sobre Navy: 8.9:1 ✅ (AA)
- [ ] Error text (#FF6B6B) sobre Navy: 4.5:1 ✅ (AA)

#### Uso de Color

- [ ] Color NO es el único indicador de información
- [ ] Estados tienen indicadores visuales adicionales (iconos, texto, borders)
- [ ] Links se distinguen sin depender solo del color
- [ ] Gráficos usan patrones además de colores

**Herramientas de Verificación**:
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- Chrome DevTools: Inspect > Accessibility > Contrast

---

### 2. Keyboard Navigation

#### Funcionalidad General

- [ ] **Toda funcionalidad** accesible vía teclado
- [ ] **Orden lógico** de tabulación (coincide con flujo visual)
- [ ] **Focus visible** en todos los elementos interactivos
- [ ] **No hay trampas** de teclado (keyboard traps)
- [ ] **Atajos de teclado** documentados (si aplica)

#### Teclas Estándar

| Tecla | Función |
|-------|---------|
| `Tab` | Siguiente elemento interactivo |
| `Shift + Tab` | Elemento interactivo anterior |
| `Enter` | Activar link/botón |
| `Space` | Activar botón/checkbox |
| `Escape` | Cerrar modal/dropdown |
| `Arrow Keys` | Navegar dentro de componentes (tabs, radio buttons) |
| `Home` | Ir al inicio |
| `End` | Ir al final |

#### Portfolio Específico

- [ ] Skip links funcionan correctamente
- [ ] Hero CTAs accesibles con Tab
- [ ] Timeline items expandibles con Enter/Space
- [ ] Project cards abren modal con Enter
- [ ] Theme toggle cambia con Enter/Space
- [ ] Contact links focuseables
- [ ] Copy buttons activables con teclado

#### Focus Indicators

```css
/* REQUERIDO: Focus visible */
*:focus-visible {
  outline: 2px solid var(--color-cyan);
  outline-offset: 4px;
}

/* NO hacer esto */
*:focus {
  outline: none; /* ❌ NUNCA */
}
```

- [ ] Focus outline de **mínimo 2px**
- [ ] Contraste del outline ≥ 3:1
- [ ] Offset para separar del elemento
- [ ] Consistente en toda la aplicación

---

### 3. Screen Readers

#### Semantic HTML

- [ ] Estructura con **headings jerárquicos** (h1 → h2 → h3...)
- [ ] Solo **un h1** por página
- [ ] **Landmarks** ARIA correctos (`<main>`, `<nav>`, `<aside>`, `<footer>`)
- [ ] Listas con `<ul>` / `<ol>` / `<li>`
- [ ] Formularios con `<form>`, `<label>`, `<input>`

#### Portfolio Específico

```html
<!-- ✅ Estructura correcta -->
<body>
  <a href="#main-content" class="skip-link">Skip to content</a>

  <header role="banner">
    <nav aria-label="Main navigation">...</nav>
  </header>

  <main id="main-content" role="main">
    <section aria-label="Hero">
      <h1>Alejandro de la Fuente</h1>
    </section>

    <section aria-label="About Me">
      <h2>Sobre Mí</h2>
    </section>

    <section aria-label="Projects">
      <h2>Proyectos</h2>
      <article>
        <h3>Inditex Platform</h3>
      </article>
    </section>
  </main>

  <footer role="contentinfo">...</footer>
</body>
```

#### ARIA Labels y Roles

- [ ] **`aria-label`** en elementos sin texto visible
- [ ] **`aria-labelledby`** para asociar labels
- [ ] **`aria-describedby`** para descripciones adicionales
- [ ] **`aria-hidden="true"`** en iconos decorativos
- [ ] **`role="button"`** en divs/spans clickeables (mejor usar `<button>`)
- [ ] **`aria-expanded`** en elementos expandibles
- [ ] **`aria-current="page"`** en navegación activa

#### Imágenes

- [ ] **Todas las imágenes** tienen `alt` text
- [ ] Alt text **descriptivo** (no "imagen de...", "foto de...")
- [ ] Imágenes **decorativas** con `alt=""` (vacío, no omitido)
- [ ] Iconos decorativos con `aria-hidden="true"`

```html
<!-- ✅ Correcto -->
<img src="profile.jpg"
     alt="Alejandro de la Fuente, Technical Leader Specialist">

<!-- ✅ Icono decorativo -->
<span aria-hidden="true">🚀</span>
<span>Disponible para nuevos retos</span>

<!-- ❌ Incorrecto -->
<img src="profile.jpg" alt="imagen">
<img src="profile.jpg"> <!-- Sin alt -->
```

#### Formularios

- [ ] Cada `<input>` tiene `<label>` asociado
- [ ] Labels visibles (no solo placeholders)
- [ ] Campos requeridos indicados visualmente Y con `aria-required="true"`
- [ ] Mensajes de error asociados con `aria-describedby`
- [ ] Grupos de campos con `<fieldset>` y `<legend>`

```html
<!-- ✅ Formulario accesible -->
<form>
  <label for="email">
    Email <span aria-label="requerido">*</span>
  </label>
  <input type="email"
         id="email"
         name="email"
         aria-required="true"
         aria-describedby="email-error">
  <span id="email-error" role="alert" class="error">
    Email inválido
  </span>
</form>
```

---

### 4. Contenido y Lenguaje

#### Texto Legible

- [ ] Idioma de la página declarado: `<html lang="es">`
- [ ] Cambios de idioma marcados: `<span lang="en">Hello</span>`
- [ ] Tamaño de fuente base ≥ 16px
- [ ] Texto escalable (usar `rem`/`em`, no `px` fijos)
- [ ] Usuarios pueden hacer zoom hasta 200%

#### Estructura de Contenido

- [ ] Párrafos cortos (máx 3-4 líneas)
- [ ] Line-height ≥ 1.5 para body text
- [ ] Ancho de línea ≤ 80 caracteres
- [ ] Espacio entre párrafos claro
- [ ] Listas para contenido en serie

#### Enlaces

- [ ] Texto de link **descriptivo** (no "click aquí")
- [ ] Links se distinguen visualmente del texto
- [ ] Links externos indican que abren en nueva ventana

```html
<!-- ✅ Correcto -->
<a href="/projects">Ver todos los proyectos</a>

<a href="https://github.com/TellMeAlex"
   target="_blank"
   rel="noopener noreferrer">
  GitHub
  <span class="sr-only">abre en nueva ventana</span>
</a>

<!-- ❌ Incorrecto -->
<a href="/projects">Haz click aquí</a>
<a href="#">Más información</a>
```

---

### 5. Multimedia

#### Imágenes y Gráficos

- [ ] Alt text descriptivo para imágenes informativas
- [ ] Gráficos complejos con descripción larga (`aria-describedby`)
- [ ] Infografías con alternativa textual completa
- [ ] Lazy loading no afecta a lectores de pantalla

#### Videos (si aplica)

- [ ] Subtítulos (captions) para audio
- [ ] Transcripciones disponibles
- [ ] Controles accesibles por teclado
- [ ] Auto-play desactivado o pausable

#### Animaciones

- [ ] Respetan `prefers-reduced-motion`
- [ ] Animaciones no causan convulsiones (< 3 flashes/segundo)
- [ ] Animaciones pausables si duran > 5 segundos

```css
/* REQUERIDO: Respetar preferencias de usuario */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

### 6. Responsive y Adaptable

#### Viewport

- [ ] `<meta name="viewport" content="width=device-width, initial-scale=1">`
- [ ] Layout funciona en 320px - 1920px+
- [ ] Zoom hasta 200% sin pérdida de funcionalidad
- [ ] No hay scroll horizontal no intencionado

#### Touch Targets

- [ ] Mínimo **44x44px** para elementos táctiles
- [ ] Espaciado adecuado entre elementos interactivos
- [ ] Botones grandes en mobile

```css
/* Tamaño mínimo para touch */
.btn, .link, .interactive {
  min-width: 44px;
  min-height: 44px;
  /* O use padding para alcanzar el tamaño */
}
```

#### Orientación

- [ ] Funciona en portrait y landscape
- [ ] No requiere orientación específica

---

### 7. Estados Interactivos

#### Estados Requeridos

Cada elemento interactivo debe tener:

- [ ] **Default**: Estado inicial claro
- [ ] **Hover**: Feedback visual al pasar el mouse
- [ ] **Focus**: Indicador visible con teclado
- [ ] **Active**: Feedback al hacer click
- [ ] **Disabled**: Visualmente distinguible, `aria-disabled="true"`
- [ ] **Loading**: Indicador de progreso, `aria-busy="true"`
- [ ] **Error**: Mensaje claro, `role="alert"`

```css
/* Estados completos */
.button {
  /* Default */
  background: var(--color-cyan);
}

.button:hover {
  /* Hover */
  background: var(--color-white);
}

.button:focus-visible {
  /* Focus */
  outline: 2px solid var(--color-cyan);
  outline-offset: 4px;
}

.button:active {
  /* Active */
  transform: scale(0.98);
}

.button:disabled {
  /* Disabled */
  opacity: 0.5;
  cursor: not-allowed;
}
```

---

### 8. Skip Links

- [ ] **Skip link es el primer elemento** en el DOM
- [ ] Visible al recibir focus
- [ ] Funciona correctamente (scroll + focus en destino)
- [ ] Target tiene `tabindex="-1"` para recibir focus programático

```html
<!-- REQUERIDO para WCAG 2.4.1 -->
<body>
  <a href="#main-content" class="skip-link">
    Saltar al contenido principal
  </a>

  <main id="main-content" tabindex="-1">
    <!-- Contenido -->
  </main>
</body>
```

```css
.skip-link {
  position: absolute;
  top: -100px;
  left: 1rem;
  background: var(--color-cyan);
  color: var(--color-navy);
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  z-index: 9999;
  transition: top 0.3s ease;
}

.skip-link:focus {
  top: 1rem;
}
```

---

## 🧪 Testing Tools

### Automated Testing

| Tool | Purpose | Target Score |
|------|---------|--------------|
| **Lighthouse** | Overall accessibility audit | **100** |
| **axe DevTools** | Detailed WCAG violations | **0 violations** |
| **WAVE** | Visual accessibility checker | **0 errors** |
| **Pa11y** | CI/CD integration | **0 errors** |

### Manual Testing

#### Screen Readers

- [ ] **Windows**: NVDA (gratis) o JAWS
- [ ] **macOS**: VoiceOver (incluido)
- [ ] **iOS**: VoiceOver
- [ ] **Android**: TalkBack

#### Keyboard Navigation

- [ ] Desconectar mouse y navegar solo con teclado
- [ ] Verificar que todos los elementos sean alcanzables
- [ ] Verificar orden lógico de tabulación
- [ ] Verificar que no haya trampas de teclado

#### Browser Extensions

- [ ] **axe DevTools** (Chrome/Firefox)
- [ ] **WAVE** (Chrome/Firefox)
- [ ] **Accessibility Insights** (Chrome/Edge)
- [ ] **Lighthouse** (Chrome DevTools)

---

## 📋 Pre-Launch Checklist

### Before Deployment

- [ ] Lighthouse Accessibility = 100
- [ ] axe DevTools = 0 violations
- [ ] WAVE = 0 errors
- [ ] Probado con screen reader (NVDA o VoiceOver)
- [ ] Navegación completa solo con teclado
- [ ] Zoom a 200% sin problemas
- [ ] Tested en mobile (touch targets)
- [ ] Contrast ratios verificados
- [ ] Skip links funcionan
- [ ] Todos los formularios tienen labels
- [ ] Todas las imágenes tienen alt text
- [ ] ARIA roles apropiados
- [ ] Heading hierarchy correcta (h1 → h2 → h3)
- [ ] `lang="es"` en `<html>`
- [ ] No hay elementos con `tabindex` positivo

### Portfolio Específico

- [ ] Hero section anunciado correctamente
- [ ] Timeline items navegables con teclado
- [ ] Project cards accesibles
- [ ] Contact copy buttons con feedback audible
- [ ] Theme toggle anuncia estado
- [ ] Stats counters anuncian valor final
- [ ] Skills bars tienen labels descriptivos
- [ ] Modals tienen `role="dialog"` y `aria-modal="true"`
- [ ] Modals devuelven focus al elemento que los abrió

---

## 🚨 Common Mistakes to Avoid

### ❌ Errores Críticos

```html
<!-- ❌ Removing focus outline -->
<style>
  *:focus { outline: none; }
</style>

<!-- ❌ Div como botón sin ARIA -->
<div onclick="handleClick()">Click me</div>

<!-- ❌ Placeholder como label -->
<input type="text" placeholder="Email">

<!-- ❌ Color como único indicador -->
<p style="color: red;">Error</p>

<!-- ❌ Imágenes sin alt -->
<img src="important-diagram.png">

<!-- ❌ Links no descriptivos -->
<a href="/more">Ver más</a>

<!-- ❌ Tabindex positivo -->
<button tabindex="1">Button</button>

<!-- ❌ Texto demasiado pequeño -->
<p style="font-size: 10px;">Important text</p>
```

### ✅ Correcciones

```html
<!-- ✅ Focus visible -->
<style>
  *:focus-visible {
    outline: 2px solid var(--color-cyan);
  }
</style>

<!-- ✅ Botón semántico -->
<button onclick="handleClick()">Click me</button>

<!-- ✅ Label visible -->
<label for="email">Email</label>
<input type="email" id="email" placeholder="ejemplo@email.com">

<!-- ✅ Múltiples indicadores -->
<p class="error">
  <span aria-hidden="true">⚠️</span>
  <strong>Error:</strong> Invalid input
</p>

<!-- ✅ Alt descriptivo -->
<img src="important-diagram.png"
     alt="Diagrama de arquitectura mostrando 3 microservicios">

<!-- ✅ Link descriptivo -->
<a href="/more">Ver más proyectos de IA</a>

<!-- ✅ Tabindex natural -->
<button>Button</button>

<!-- ✅ Tamaño legible -->
<p style="font-size: 1rem;">Important text</p>
```

---

## 🔗 Resources

### WCAG Guidelines
- [WCAG 2.1 Quick Reference](https://www.w3.org/WAI/WCAG21/quickref/)
- [WCAG 2.1 Checklist](https://webaim.org/standards/wcag/checklist)

### Testing Tools
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [WAVE](https://wave.webaim.org/)
- [Pa11y](https://pa11y.org/)

### Screen Readers
- [NVDA (Windows, Free)](https://www.nvaccess.org/)
- [JAWS (Windows)](https://www.freedomscientific.com/products/software/jaws/)
- [VoiceOver (macOS/iOS)](https://www.apple.com/accessibility/voiceover/)

### Learning
- [WebAIM](https://webaim.org/)
- [A11y Project](https://www.a11yproject.com/)
- [Inclusive Components](https://inclusive-components.design/)

---

## 📊 Referencias

→ **Component Accessibility**: [03-COMPONENT-LIBRARY.md](../03-COMPONENT-LIBRARY.md)
→ **Design Tokens**: [design-tokens.md](design-tokens.md)
→ **Performance**: [performance-budgets.md](performance-budgets.md)

---

**Última actualización**: 20 Enero 2025
**WCAG Version**: 2.1 Level AA
**Target**: Lighthouse 100, 0 violations
