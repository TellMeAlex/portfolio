# Performance Budgets - Core Web Vitals & Optimization

**Propósito**: Presupuestos de rendimiento y targets de optimización para el portfolio

**Target**: Lighthouse Performance > 90, todos los Core Web Vitals en "Good"

**Última actualización**: 20 Enero 2025

---

## 🎯 Objetivos de Performance

### Lighthouse Scores

| Metric | Target | Status |
|--------|--------|--------|
| **Performance** | > 90 | 🎯 Required |
| **Accessibility** | 100 | 🎯 Required |
| **Best Practices** | > 90 | 🎯 Required |
| **SEO** | 100 | 🎯 Required |

---

## 📊 Core Web Vitals

### Métricas de Google

| Metric | Good | Needs Improvement | Poor | Portfolio Target |
|--------|------|-------------------|------|------------------|
| **LCP** (Largest Contentful Paint) | < 2.5s | 2.5s - 4.0s | > 4.0s | **< 2.0s** ⚡ |
| **FID** (First Input Delay) | < 100ms | 100ms - 300ms | > 300ms | **< 50ms** ⚡ |
| **CLS** (Cumulative Layout Shift) | < 0.1 | 0.1 - 0.25 | > 0.25 | **< 0.05** ⚡ |
| **INP** (Interaction to Next Paint) | < 200ms | 200ms - 500ms | > 500ms | **< 150ms** ⚡ |

### Métricas Adicionales

| Metric | Target | Description |
|--------|--------|-------------|
| **FCP** (First Contentful Paint) | < 1.5s | Primer elemento visible |
| **SI** (Speed Index) | < 3.0s | Velocidad de renderizado visual |
| **TTI** (Time to Interactive) | < 3.5s | Página completamente interactiva |
| **TBT** (Total Blocking Time) | < 200ms | Tiempo de bloqueo del main thread |

---

## 💾 Asset Budgets

### HTML

| Asset | Budget | Current | Notes |
|-------|--------|---------|-------|
| **HTML Total** | < 50 KB | - | Sin comprimir |
| **Critical HTML** | < 14 KB | - | Above-the-fold |
| **DOM Nodes** | < 1,500 | - | Total elements |
| **DOM Depth** | < 32 | - | Max nesting level |

### CSS

| Asset | Budget | Current | Notes |
|-------|--------|---------|-------|
| **Critical CSS** | < 14 KB | - | Inline en `<head>` |
| **Total CSS** | < 100 KB | - | Gzipped |
| **Unused CSS** | < 20% | - | Porcentaje no utilizado |
| **CSS Files** | ≤ 3 | - | Archivos separados |

**Estrategia CSS**:
- Critical CSS inline para above-the-fold
- Resto con `preload` o async
- Eliminar CSS no utilizado con PurgeCSS/UnCSS

### JavaScript

| Asset | Budget | Current | Notes |
|-------|--------|---------|-------|
| **Critical JS** | < 50 KB | - | Gzipped, blocking |
| **Total JS** | < 200 KB | - | Gzipped, all bundles |
| **Main Thread Time** | < 2s | - | JS execution time |
| **Long Tasks** | 0 | - | Tasks > 50ms |

**Estrategia JS**:
- Defer non-critical scripts
- Code splitting por ruta
- Lazy load para componentes pesados
- Tree shaking automático

### Images

| Asset Type | Budget (per image) | Format | Notes |
|------------|-------------------|--------|-------|
| **Hero Images** | < 200 KB | AVIF/WebP | Con fallback JPG |
| **Project Images** | < 150 KB | AVIF/WebP | Lazy loaded |
| **Thumbnails** | < 50 KB | AVIF/WebP | Grid items |
| **Icons** | < 10 KB | SVG | Inline cuando posible |
| **Profile Photo** | < 100 KB | AVIF/WebP | Optimizado, 120x120 base |

**Estrategia de Imágenes**:
```html
<!-- Responsive images con modern formats -->
<picture>
  <source srcset="hero.avif" type="image/avif">
  <source srcset="hero.webp" type="image/webp">
  <img src="hero.jpg"
       alt="Description"
       loading="lazy"
       width="1200"
       height="800">
</picture>
```

### Fonts

| Font | Budget | Format | Notes |
|------|--------|--------|-------|
| **Inter (Regular)** | < 30 KB | WOFF2 | Body text |
| **Inter (Medium)** | < 30 KB | WOFF2 | Headings |
| **Inter (Bold)** | < 30 KB | WOFF2 | Emphasis |
| **JetBrains Mono** | < 35 KB | WOFF2 | Code, titles |
| **Total Fonts** | < 100 KB | - | All variants |

**Estrategia de Fuentes**:
```css
/* Font loading optimization */
@font-face {
  font-family: 'Inter';
  src: url('/fonts/inter-var.woff2') format('woff2');
  font-weight: 100 900; /* Variable font */
  font-display: swap; /* Evitar FOIT */
}

/* Preload critical fonts */
<link rel="preload"
      href="/fonts/inter-var.woff2"
      as="font"
      type="font/woff2"
      crossorigin>
```

### Third-party Scripts

| Service | Budget | Type | Notes |
|---------|--------|------|-------|
| **Analytics** | < 20 KB | Defer | Google Analytics / Plausible |
| **Total 3rd-party** | < 50 KB | - | All external scripts |

**Recomendación**: Usar analytics ligero (Plausible, Fathom) en lugar de Google Analytics.

---

## ⚡ Performance Optimization Checklist

### Critical Path Optimization

- [ ] Critical CSS inline en `<head>` (< 14 KB)
- [ ] Non-critical CSS con `preload` o `media="print" onload="this.media='all'"`
- [ ] JavaScript diferido con `defer` o `async`
- [ ] Fonts preloaded con `<link rel="preload">`
- [ ] Above-the-fold images con `loading="eager"`
- [ ] Below-the-fold images con `loading="lazy"`

### Image Optimization

- [ ] Todas las imágenes comprimidas (TinyPNG, ImageOptim)
- [ ] AVIF + WebP + JPG fallback
- [ ] Responsive images con `srcset` y `sizes`
- [ ] `width` y `height` definidos (evitar CLS)
- [ ] Lazy loading para imágenes below-the-fold
- [ ] Placeholder o blur-up mientras carga

```html
<!-- Optimización completa de imagen -->
<picture>
  <source srcset="project-1-400.avif 400w,
                  project-1-800.avif 800w,
                  project-1-1200.avif 1200w"
          type="image/avif">
  <source srcset="project-1-400.webp 400w,
                  project-1-800.webp 800w,
                  project-1-1200.webp 1200w"
          type="image/webp">
  <img src="project-1-800.jpg"
       srcset="project-1-400.jpg 400w,
               project-1-800.jpg 800w,
               project-1-1200.jpg 1200w"
       sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              600px"
       alt="Inditex Platform Dashboard"
       loading="lazy"
       width="800"
       height="600">
</picture>
```

### JavaScript Optimization

- [ ] Code splitting por ruta
- [ ] Tree shaking habilitado
- [ ] Minificación con Terser/ESBuild
- [ ] Dead code elimination
- [ ] Lazy import de componentes grandes
- [ ] Web Workers para cálculos pesados
- [ ] Debounce/throttle en event handlers

```javascript
// Code splitting
const TimelineComponent = lazy(() =>
  import('./components/Timeline')
);

// Lazy load cuando sea visible
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      import('./components/HeavyComponent').then(module => {
        // Initialize component
      });
    }
  });
});
```

### CSS Optimization

- [ ] Critical CSS extraction (Critical, Critters)
- [ ] Unused CSS removal (PurgeCSS, UnCSS)
- [ ] CSS minificación (cssnano)
- [ ] CSS combinado en pocos archivos (max 3)
- [ ] Evitar `@import` (usa bundler)
- [ ] CSS Containment para secciones independientes

```css
/* CSS Containment para mejor performance */
.card {
  contain: layout style;
}

.independent-section {
  contain: layout paint style;
}
```

### Layout Shift Prevention (CLS)

- [ ] Dimensiones explícitas en imágenes (`width`, `height`)
- [ ] Aspect ratio en containers de imágenes
- [ ] Reservar espacio para ads/embeds
- [ ] Evitar insertar contenido arriba del contenido existente
- [ ] Fonts con `font-display: swap` o `optional`
- [ ] Animations con `transform` y `opacity` solamente

```css
/* Prevenir CLS con aspect ratio */
.image-container {
  aspect-ratio: 16 / 9;
  overflow: hidden;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Skeleton con mismo tamaño que contenido final */
.skeleton {
  height: 300px; /* Mismo que contenido real */
  animation: shimmer 2s infinite;
}
```

### Network Optimization

- [ ] **Compression**: Gzip o Brotli habilitado en servidor
- [ ] **Caching**: Cache headers apropiados
- [ ] **CDN**: Assets servidos desde CDN
- [ ] **HTTP/2**: Multiplexing habilitado
- [ ] **Preconnect**: DNS/TLS preconnection para orígenes externos
- [ ] **Resource Hints**: Preload, prefetch para recursos críticos

```html
<!-- Resource hints -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="dns-prefetch" href="https://analytics.example.com">
<link rel="preload" href="/fonts/inter.woff2" as="font" crossorigin>
<link rel="prefetch" href="/images/next-page-hero.jpg">
```

### Caching Strategy

| Asset Type | Cache Duration | Strategy |
|------------|----------------|----------|
| **HTML** | No cache / 5 min | Revalidate always |
| **CSS** | 1 year | Cache-busting con hash |
| **JavaScript** | 1 year | Cache-busting con hash |
| **Images** | 1 year | Cache-busting o immutable |
| **Fonts** | 1 year | Immutable |

```
# Example cache headers (nginx)
# HTML - No cache
location ~* \.html$ {
  add_header Cache-Control "no-cache, must-revalidate";
}

# CSS/JS - Long cache with hash busting
location ~* \.(css|js)$ {
  add_header Cache-Control "public, max-age=31536000, immutable";
}

# Images, Fonts
location ~* \.(jpg|jpeg|png|webp|avif|woff2|woff)$ {
  add_header Cache-Control "public, max-age=31536000, immutable";
}
```

---

## 🚀 Advanced Optimizations

### Service Worker

```javascript
// sw.js - Aggressive caching strategy
const CACHE_NAME = 'portfolio-v1';
const ASSETS = [
  '/',
  '/css/main.css',
  '/js/main.js',
  '/fonts/inter.woff2',
  '/images/profile.webp'
];

// Cache-first strategy for static assets
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then(response =>
      response || fetch(event.request)
    )
  );
});
```

### Intersection Observer for Lazy Loading

```javascript
// Lazy load images, components, analytics
const lazyLoadObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        lazyLoadObserver.unobserve(img);
      }
    });
  },
  {
    rootMargin: '50px' // Load 50px before entering viewport
  }
);

document.querySelectorAll('img[data-src]').forEach(img => {
  lazyLoadObserver.observe(img);
});
```

### RequestAnimationFrame for Smooth Animations

```javascript
// Smooth scroll counter animation
function animateCounter(element, target) {
  let current = 0;
  const increment = target / 60; // 60 frames for 1 second

  function update() {
    current += increment;
    if (current < target) {
      element.textContent = Math.floor(current);
      requestAnimationFrame(update);
    } else {
      element.textContent = target;
    }
  }

  requestAnimationFrame(update);
}
```

### Debounce Scroll/Resize Events

```javascript
// Prevent performance issues from scroll events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

window.addEventListener('scroll',
  debounce(() => {
    // Your scroll handler
  }, 100)
);
```

---

## 📱 Mobile Performance

### Mobile-Specific Optimizations

- [ ] Touch targets mínimo 44x44px
- [ ] Smaller images para mobile (srcset)
- [ ] Reducir animaciones complejas
- [ ] Minimizar JavaScript execution
- [ ] Evitar hover states (no son útiles)
- [ ] Test en throttled 3G connection

### Mobile Testing

```bash
# Lighthouse con throttling mobile
lighthouse https://portfolio.com \
  --throttling.cpuSlowdownMultiplier=4 \
  --throttling.rttMs=150 \
  --throttling.throughputKbps=1638 \
  --emulated-form-factor=mobile
```

---

## 🧪 Performance Testing Tools

### Automated Tools

| Tool | Purpose | Frequency |
|------|---------|-----------|
| **Lighthouse** | Overall performance audit | Every deploy |
| **WebPageTest** | Detailed waterfall analysis | Weekly |
| **Chrome DevTools** | Real-time performance profiling | During development |
| **PageSpeed Insights** | Google's perspective + field data | Every deploy |
| **Calibre/SpeedCurve** | Continuous monitoring | Hourly |

### Manual Testing

```bash
# Lighthouse CLI
npm install -g lighthouse
lighthouse https://portfolio.com --view

# WebPageTest API
curl "https://www.webpagetest.org/runtest.php?url=https://portfolio.com&k=API_KEY"

# Chrome DevTools Performance Recording
# 1. Open DevTools (F12)
# 2. Performance tab
# 3. Record
# 4. Perform actions
# 5. Stop and analyze
```

### Performance Budget CI/CD

```yaml
# .github/workflows/performance.yml
name: Performance Budget

on: [push, pull_request]

jobs:
  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Run Lighthouse
        uses: treosh/lighthouse-ci-action@v9
        with:
          urls: |
            https://staging.portfolio.com
          budgetPath: ./budget.json
          uploadArtifacts: true
```

```json
// budget.json
{
  "performance": 90,
  "accessibility": 100,
  "best-practices": 90,
  "seo": 100,
  "first-contentful-paint": 1500,
  "largest-contentful-paint": 2000,
  "cumulative-layout-shift": 0.05,
  "total-blocking-time": 200
}
```

---

## 📊 Monitoring & Alerts

### Real User Monitoring (RUM)

```javascript
// Web Vitals tracking
import {getCLS, getFID, getFCP, getLCP, getTTFB} from 'web-vitals';

function sendToAnalytics(metric) {
  const body = JSON.stringify(metric);
  // Use `navigator.sendBeacon()` if available, falling back to `fetch()`
  (navigator.sendBeacon && navigator.sendBeacon('/analytics', body)) ||
    fetch('/analytics', {body, method: 'POST', keepalive: true});
}

getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getFCP(sendToAnalytics);
getLCP(sendToAnalytics);
getTTFB(sendToAnalytics);
```

### Performance Alerts

Set up alerts when:
- Lighthouse Performance drops below 90
- LCP exceeds 2.5s
- CLS exceeds 0.1
- Bundle size increases > 10%
- Any Core Web Vital enters "Needs Improvement"

---

## 🎯 Implementation Priority

### High Priority (Pre-launch)

1. ✅ Image optimization (AVIF/WebP + lazy loading)
2. ✅ Critical CSS inline
3. ✅ Font loading optimization (`font-display: swap`)
4. ✅ JavaScript defer/async
5. ✅ Dimensions on images (prevent CLS)
6. ✅ Compression (Gzip/Brotli)

### Medium Priority (Week 1)

1. Code splitting
2. Service Worker caching
3. Resource hints (preconnect, prefetch)
4. Unused CSS removal
5. CDN setup

### Low Priority (Continuous improvement)

1. Advanced image formats (AVIF priority)
2. HTTP/3 / QUIC
3. Edge computing
4. Advanced caching strategies
5. Performance monitoring dashboard

---

## 🔗 Resources

### Tools
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WebPageTest](https://www.webpagetest.org/)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/)

### Learning
- [Web.dev Performance](https://web.dev/performance/)
- [Core Web Vitals](https://web.dev/vitals/)
- [Performance Budget Calculator](https://www.performancebudget.io/)

### Optimization Services
- [Cloudflare](https://www.cloudflare.com/) - CDN + Optimization
- [ImageOptim](https://imageoptim.com/) - Image compression
- [Squoosh](https://squoosh.app/) - Image optimization

---

## 📊 Referencias

→ **Design Tokens**: [design-tokens.md](design-tokens.md)
→ **Accessibility**: [accessibility-checklist.md](accessibility-checklist.md)
→ **Browser Support**: [browser-compatibility.md](browser-compatibility.md)
→ **Component Library**: [03-COMPONENT-LIBRARY.md](../03-COMPONENT-LIBRARY.md)

---

**Última actualización**: 20 Enero 2025
**Target**: Lighthouse > 90, Core Web Vitals "Good"
**Status**: 🎯 Active monitoring required
