# PHASE 5: Performance Optimization & SEO

## Quick Reference

**Timeline**: 1-2 semanas
**Complexity**: 🟡 Medium
**Dependencies**: Phase 1-4 (Complete Feature Set Required) - BLOCKING
**Key Deliverables**:
- Image optimization (AVIF/WebP/Responsive)
- Critical CSS extraction
- Font loading optimization
- Comprehensive SEO (meta tags + structured data)
- Performance monitoring (Core Web Vitals)
- Analytics implementation (GA4)

---

## 🎯 Objectives & Success Criteria

| Objective | Success Metric | Target |
|-----------|----------------|--------|
| **Lighthouse Performance** | Overall score | ≥ 90 |
| **First Contentful Paint** | FCP time | < 1.5s |
| **Largest Contentful Paint** | LCP time | < 2.5s |
| **Cumulative Layout Shift** | CLS score | < 0.1 |
| **First Input Delay** | FID time | < 100ms |
| **Time to Interactive** | TTI time | < 3.5s |
| **SEO** | Search engine indexing | Complete with rich results |
| **Analytics** | Tracking implementation | GA4 + Core Web Vitals |

---

## 📖 Overview

Esta fase transforma el portfolio de una aplicación development-ready en un sitio web production-ready que sobresale en visibilidad de búsqueda, rendimiento de carga, y métricas de experiencia de usuario. Implementa optimizaciones comprensivas de performance, estrategias SEO, y preparación para analytics para asegurar estándares profesionales y máxima visibilidad.

**Critical Focus**:
- Optimización de assets (images, fonts, CSS, JS)
- SEO completo con schema markup
- Performance monitoring con Core Web Vitals
- Analytics y tracking de conversiones
- Production deployment readiness

**Performance Philosophy**: Toda optimización debe ser medible, toda métrica debe tener un presupuesto, y todo asset debe justificar su peso.

---

## 🏗️ Implementation Guide

### Step 1: Implement Image Optimization Pipeline

**Objective**: Optimizar todas las imágenes para delivery web moderno

**Performance Reference**:
→ [Image Optimization Strategy](../quick-references/performance-budgets.md#images)

**Modern Image Formats**:

```html
<!-- Hero Profile Image - Above the fold (eager loading) -->
<picture>
  <source
    srcset="
      images/alejandro-profile-60.avif 60w,
      images/alejandro-profile-120.avif 120w,
      images/alejandro-profile-240.avif 240w
    "
    sizes="(max-width: 768px) 60px, 120px"
    type="image/avif">

  <source
    srcset="
      images/alejandro-profile-60.webp 60w,
      images/alejandro-profile-120.webp 120w,
      images/alejandro-profile-240.webp 240w
    "
    sizes="(max-width: 768px) 60px, 120px"
    type="image/webp">

  <img
    src="images/alejandro-profile-120.jpg"
    srcset="
      images/alejandro-profile-60.jpg 60w,
      images/alejandro-profile-120.jpg 120w,
      images/alejandro-profile-240.jpg 240w
    "
    sizes="(max-width: 768px) 60px, 120px"
    alt="Alejandro de la Fuente - Technical Leader Specialist"
    width="120"
    height="120"
    loading="eager"
    decoding="async"
    fetchpriority="high">
</picture>

<!-- Project Images - Below the fold (lazy loading) -->
<picture>
  <source
    srcset="
      images/projects/inditex-400.avif 400w,
      images/projects/inditex-800.avif 800w,
      images/projects/inditex-1200.avif 1200w
    "
    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
    type="image/avif">

  <source
    srcset="
      images/projects/inditex-400.webp 400w,
      images/projects/inditex-800.webp 800w,
      images/projects/inditex-1200.webp 1200w
    "
    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
    type="image/webp">

  <img
    src="images/projects/inditex-400.jpg"
    srcset="
      images/projects/inditex-400.jpg 400w,
      images/projects/inditex-800.jpg 800w,
      images/projects/inditex-1200.jpg 1200w
    "
    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
    alt="Inditex Store Management Platform Interface"
    width="600"
    height="400"
    loading="lazy"
    decoding="async">
</picture>
```

**Image Generation Script**:

```bash
#!/bin/bash
# scripts/optimize-images.sh

# Generate responsive images in multiple formats

for img in src/images/*.{jpg,png}; do
  filename=$(basename "$img" | sed 's/\.[^.]*$//')

  # Generate AVIF (best compression)
  magick "$img" -resize 400x -quality 50 "dist/images/${filename}-400.avif"
  magick "$img" -resize 800x -quality 50 "dist/images/${filename}-800.avif"
  magick "$img" -resize 1200x -quality 50 "dist/images/${filename}-1200.avif"

  # Generate WebP (modern format)
  magick "$img" -resize 400x -quality 75 "dist/images/${filename}-400.webp"
  magick "$img" -resize 800x -quality 75 "dist/images/${filename}-800.webp"
  magick "$img" -resize 1200x -quality 75 "dist/images/${filename}-1200.webp"

  # Generate JPG (fallback)
  magick "$img" -resize 400x -quality 85 -strip "dist/images/${filename}-400.jpg"
  magick "$img" -resize 800x -quality 85 -strip "dist/images/${filename}-800.jpg"
  magick "$img" -resize 1200x -quality 85 -strip "dist/images/${filename}-1200.jpg"
done

echo "✅ Image optimization complete"
```

**Image Budgets**:
- Profile photo: < 100 KB total (all formats + sizes)
- Project screenshots: < 200 KB each
- OG/Social images: < 300 KB
- Icons/SVG: < 10 KB each

**Validation**:
- [ ] All images have width/height attributes (prevent CLS)
- [ ] Above-fold images use `loading="eager"` + `fetchpriority="high"`
- [ ] Below-fold images use `loading="lazy"`
- [ ] AVIF → WebP → JPG fallback chain complete
- [ ] All images < budget targets

---

### Step 2: Implement Critical CSS Extraction

**Objective**: Extraer e inline CSS crítico para above-the-fold content

**Implementation**:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- Critical CSS inlined for above-the-fold content -->
  <style>
    /* Critical styles extracted for hero section */
    :root {
      --color-navy: #0A192F;
      --color-cyan: #64FFDA;
      --color-white: #FFFFFF;
      --font-primary: 'Inter', system-ui, sans-serif;
      --space-4: 1rem;
      --space-6: 1.5rem;
      --radius-md: 0.5rem;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: var(--font-primary);
      background-color: var(--color-navy);
      color: var(--color-white);
      line-height: 1.6;
    }

    .portfolio-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1.5rem;
      max-width: 1400px;
      margin: 0 auto;
      padding: 2rem 1rem;
    }

    @media (min-width: 768px) {
      .portfolio-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (min-width: 1024px) {
      .portfolio-grid {
        grid-template-columns: repeat(4, 1fr);
        padding: 2rem;
      }
    }

    .card {
      background: rgba(255, 255, 255, 0.05);
      border-radius: var(--radius-md);
      padding: var(--space-6);
    }

    .hero-card {
      grid-column: span 1;
    }

    @media (min-width: 1024px) {
      .hero-card {
        grid-column: span 3;
        grid-row: span 2;
      }
    }

    /* Other critical above-the-fold styles */
  </style>

  <!-- Preload critical fonts -->
  <link rel="preload" href="fonts/inter-var.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="fonts/jetbrains-mono-var.woff2" as="font" type="font/woff2" crossorigin>

  <!-- DNS prefetch for external resources -->
  <link rel="dns-prefetch" href="//www.google-analytics.com">

  <!-- Non-critical CSS loaded asynchronously -->
  <link rel="preload" href="styles/main.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
  <noscript><link rel="stylesheet" href="styles/main.css"></noscript>

  <!-- Fallback for browsers without JS -->
  <script>
    document.documentElement.className = 'js';
  </script>
</head>
```

**Critical CSS Extraction Tool**:

```javascript
// scripts/extract-critical-css.js
const critical = require('critical');

critical.generate({
  inline: true,
  base: 'dist/',
  src: 'index.html',
  dest: 'index.html',
  width: 1300,
  height: 900,
  dimensions: [
    { width: 320, height: 568 },  // Mobile
    { width: 768, height: 1024 }, // Tablet
    { width: 1200, height: 800 }  // Desktop
  ],
  penthouse: {
    blockJSRequests: false,
  },
  extract: true,
  minify: true
});
```

---

### Step 3: Optimize Font Loading

**Objective**: Implementar estrategia óptima de carga de fuentes

**Font Face Declarations**:

```css
/* styles/fonts.css */

/* Variable font for Inter (100-900 weight) */
@font-face {
  font-family: 'Inter';
  src: url('fonts/inter-var.woff2') format('woff2');
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/* Variable font for JetBrains Mono (code) */
@font-face {
  font-family: 'JetBrains Mono';
  src: url('fonts/jetbrains-mono-var.woff2') format('woff2');
  font-weight: 100 800;
  font-style: normal;
  font-display: swap;
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/* Fallback system font stack */
body {
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
}

.code,
.tech-tag,
.skill-tag {
  font-family: 'JetBrains Mono', 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
}
```

**Font Preloading in HTML**:

```html
<head>
  <!-- Preload critical fonts -->
  <link rel="preload"
        href="fonts/inter-var.woff2"
        as="font"
        type="font/woff2"
        crossorigin>

  <link rel="preload"
        href="fonts/jetbrains-mono-var.woff2"
        as="font"
        type="font/woff2"
        crossorigin>
</head>
```

**Font Subsetting** (if needed):

```bash
# Subset fonts to only include used characters
pyftsubset fonts/inter-var.woff2 \
  --unicodes="U+0020-007E,U+00A0-00FF" \
  --output-file="fonts/inter-var-subset.woff2" \
  --flavor=woff2

pyftsubset fonts/jetbrains-mono-var.woff2 \
  --unicodes="U+0020-007E,U+00A0-00FF" \
  --output-file="fonts/jetbrains-mono-var-subset.woff2" \
  --flavor=woff2
```

**Font Budget**: < 100 KB total (both fonts combined)

---

### Step 4: Implement Comprehensive SEO

**Objective**: Maximizar visibilidad en buscadores y redes sociales

**Complete Meta Tags**:

```html
<head>
  <!-- Basic Meta Tags -->
  <title>Alejandro de la Fuente - Technical Leader Specialist | Experto en IA y ReactJS</title>
  <meta name="description" content="Technical Leader Specialist en NTT DATA especializado en IA, ReactJS y microfrontends. Liderando transformación digital para Inditex con +3 años de experiencia.">
  <meta name="keywords" content="Technical Leader, ReactJS, IA, Artificial Intelligence, Microfrontends, NTT DATA, Inditex, Frontend Developer, JavaScript, GenAI, Jaén, España">
  <meta name="author" content="Alejandro de la Fuente">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <link rel="canonical" href="https://alejandrodelafuente.dev">

  <!-- Open Graph / Facebook / LinkedIn -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://alejandrodelafuente.dev">
  <meta property="og:title" content="Alejandro de la Fuente - Technical Leader Specialist | Experto en IA">
  <meta property="og:description" content="Technical Leader especializado en IA, ReactJS y microfrontends. Liderando innovación tecnológica en NTT DATA. 3+ años de experiencia.">
  <meta property="og:image" content="https://alejandrodelafuente.dev/images/og-image-1200x630.jpg">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="Alejandro de la Fuente - Technical Leader Specialist Portfolio">
  <meta property="og:locale" content="es_ES">
  <meta property="og:site_name" content="Alejandro de la Fuente Portfolio">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:url" content="https://alejandrodelafuente.dev">
  <meta name="twitter:title" content="Alejandro de la Fuente - Technical Leader | IA & ReactJS">
  <meta name="twitter:description" content="Technical Leader especializado en IA, ReactJS y microfrontends. Liderando innovación en NTT DATA.">
  <meta name="twitter:image" content="https://alejandrodelafuente.dev/images/twitter-card-1200x675.jpg">
  <meta name="twitter:image:alt" content="Alejandro de la Fuente Portfolio">
  <meta name="twitter:creator" content="@TellMeAlex">

  <!-- Geographic Meta Tags -->
  <meta name="geo.region" content="ES-J">
  <meta name="geo.placename" content="Jaén, Andalucía">
  <meta name="geo.position" content="37.7749;-3.7890">
  <meta name="ICBM" content="37.7749, -3.7890">

  <!-- Theme and Mobile -->
  <meta name="theme-color" content="#0A192F" media="(prefers-color-scheme: dark)">
  <meta name="theme-color" content="#F8FAFC" media="(prefers-color-scheme: light)">
  <meta name="color-scheme" content="dark light">
  <meta name="mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
  <meta name="apple-mobile-web-app-title" content="Alejandro Portfolio">

  <!-- Language -->
  <meta http-equiv="content-language" content="es-ES">
  <link rel="alternate" hreflang="es" href="https://alejandrodelafuente.dev">
  <link rel="alternate" hreflang="x-default" href="https://alejandrodelafuente.dev">
</head>
```

**Structured Data (JSON-LD)**:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://alejandrodelafuente.dev/#person",
      "name": "Alejandro de la Fuente de la Rosa",
      "givenName": "Alejandro",
      "familyName": "de la Fuente",
      "alternateName": "Alex de la Fuente",
      "description": "Technical Leader Specialist especializado en IA, ReactJS y arquitecturas microfrontends",
      "jobTitle": "Technical Leader Specialist",
      "worksFor": {
        "@type": "Organization",
        "name": "NTT DATA",
        "url": "https://www.nttdata.com",
        "sameAs": [
          "https://www.linkedin.com/company/ntt-data",
          "https://twitter.com/nttdata"
        ]
      },
      "url": "https://alejandrodelafuente.dev",
      "image": {
        "@type": "ImageObject",
        "url": "https://alejandrodelafuente.dev/images/alejandro-profile-480.jpg",
        "width": 480,
        "height": 480
      },
      "sameAs": [
        "https://linkedin.com/in/alejandro-de-la-fuente",
        "https://github.com/TellMeAlex"
      ],
      "email": "llamamealex@gmail.com",
      "telephone": "+34629202639",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Jaén",
        "addressRegion": "Andalucía",
        "addressCountry": "ES"
      },
      "knowsAbout": [
        "ReactJS",
        "JavaScript",
        "TypeScript",
        "Artificial Intelligence",
        "GenAI",
        "Microfrontends",
        "Frontend Development",
        "Technical Leadership",
        "Node.js",
        "Azure",
        "Redux Toolkit",
        "RTK Query"
      ],
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "Las Fuentezuelas",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Jaén",
          "addressCountry": "ES"
        }
      },
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "name": "GenAI Academy: Yellow Belt P1",
          "credentialCategory": "certificate",
          "recognizedBy": {
            "@type": "Organization",
            "name": "NTT DATA University"
          },
          "dateCreated": "2025"
        },
        {
          "@type": "EducationalOccupationalCredential",
          "name": "GenAI Academy: White Belt",
          "credentialCategory": "certificate",
          "recognizedBy": {
            "@type": "Organization",
            "name": "NTT DATA University"
          },
          "dateCreated": "2025"
        }
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://alejandrodelafuente.dev/#website",
      "url": "https://alejandrodelafuente.dev",
      "name": "Alejandro de la Fuente - Portfolio",
      "description": "Portfolio profesional de Alejandro de la Fuente, Technical Leader Specialist en IA y ReactJS",
      "publisher": {
        "@id": "https://alejandrodelafuente.dev/#person"
      },
      "inLanguage": "es-ES"
    },
    {
      "@type": "WebPage",
      "@id": "https://alejandrodelafuente.dev/#webpage",
      "url": "https://alejandrodelafuente.dev",
      "name": "Alejandro de la Fuente - Technical Leader Specialist | Portfolio",
      "description": "Portfolio profesional showcasing expertise in AI, ReactJS, and microfrontends architecture. Technical Leader at NTT DATA.",
      "isPartOf": {
        "@id": "https://alejandrodelafuente.dev/#website"
      },
      "about": {
        "@id": "https://alejandrodelafuente.dev/#person"
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://alejandrodelafuente.dev/images/og-image-1200x630.jpg",
        "width": 1200,
        "height": 630
      },
      "datePublished": "2025-01-01",
      "dateModified": "2025-01-21",
      "inLanguage": "es-ES"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Inicio",
          "item": "https://alejandrodelafuente.dev"
        }
      ]
    }
  ]
}
</script>
```

**Sitemap.xml**:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>https://alejandrodelafuente.dev/</loc>
    <lastmod>2025-01-21</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
    <image:image>
      <image:loc>https://alejandrodelafuente.dev/images/alejandro-profile-480.jpg</image:loc>
      <image:title>Alejandro de la Fuente - Technical Leader</image:title>
    </image:image>
  </url>
</urlset>
```

**Robots.txt**:

```
User-agent: *
Allow: /
Disallow: /private/
Disallow: /api/

Sitemap: https://alejandrodelafuente.dev/sitemap.xml
```

---

### Step 5: Implement Performance Monitoring

**Objective**: Trackear Core Web Vitals y métricas de performance

**Performance Monitor Implementation**:

```javascript
// js/performance/core-web-vitals.js

class PerformanceMonitor {
  constructor() {
    this.metrics = {};
    this.init();
  }

  init() {
    // Track Core Web Vitals
    this.trackLCP();
    this.trackFID();
    this.trackCLS();
    this.trackFCP();
    this.trackTTFB();

    // Send metrics when page is about to unload
    this.sendMetrics();
  }

  trackLCP() {
    // Largest Contentful Paint
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      this.metrics.lcp = Math.round(lastEntry.startTime);

      console.log('LCP:', this.metrics.lcp, 'ms');
    }).observe({ entryTypes: ['largest-contentful-paint'] });
  }

  trackFID() {
    // First Input Delay
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach((entry) => {
        this.metrics.fid = Math.round(entry.processingStart - entry.startTime);
        console.log('FID:', this.metrics.fid, 'ms');
      });
    }).observe({ entryTypes: ['first-input'] });
  }

  trackCLS() {
    // Cumulative Layout Shift
    let clsValue = 0;
    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      }
      this.metrics.cls = parseFloat(clsValue.toFixed(4));
      console.log('CLS:', this.metrics.cls);
    }).observe({ entryTypes: ['layout-shift'] });
  }

  trackFCP() {
    // First Contentful Paint
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach((entry) => {
        if (entry.name === 'first-contentful-paint') {
          this.metrics.fcp = Math.round(entry.startTime);
          console.log('FCP:', this.metrics.fcp, 'ms');
        }
      });
    }).observe({ entryTypes: ['paint'] });
  }

  trackTTFB() {
    // Time to First Byte
    const navigationEntry = performance.getEntriesByType('navigation')[0];
    if (navigationEntry) {
      this.metrics.ttfb = Math.round(
        navigationEntry.responseStart - navigationEntry.requestStart
      );
      console.log('TTFB:', this.metrics.ttfb, 'ms');
    }
  }

  sendMetrics() {
    // Send metrics to Google Analytics 4 when available
    window.addEventListener('load', () => {
      setTimeout(() => {
        if (typeof gtag !== 'undefined') {
          Object.entries(this.metrics).forEach(([metric, value]) => {
            gtag('event', metric.toUpperCase(), {
              event_category: 'Web Vitals',
              value: value,
              metric_id: metric,
              metric_value: value,
              non_interaction: true
            });
          });
        }
      }, 1000);
    });
  }
}

// Initialize
if (typeof window !== 'undefined') {
  window.performanceMonitor = new PerformanceMonitor();
}

export default PerformanceMonitor;
```

---

### Step 6: Implement Analytics & Tracking

**Objective**: Configurar GA4 y tracking de eventos

**Content Source**:
→ [Información Personal](../02-CONTENT-SPECIFICATIONS.md#información-personal-canonical-data)

**Google Analytics 4 Setup**:

```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-XXXXXXXXXX', {
    page_title: 'Alejandro de la Fuente - Portfolio',
    page_location: window.location.href,
    content_group1: 'Portfolio',
    send_page_view: true
  });
</script>
```

**Event Tracking**:

```javascript
// js/analytics/tracking.js

class AnalyticsTracker {
  constructor() {
    this.init();
  }

  init() {
    this.trackScrollDepth();
    this.trackSectionViews();
    this.trackInteractions();
    this.trackContactAttempts();
  }

  trackScrollDepth() {
    const thresholds = [25, 50, 75, 90, 100];
    let maxScroll = 0;

    window.addEventListener('scroll', () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      );

      thresholds.forEach(threshold => {
        if (scrollPercent >= threshold && maxScroll < threshold) {
          maxScroll = threshold;

          if (typeof gtag !== 'undefined') {
            gtag('event', 'scroll_depth', {
              event_category: 'Engagement',
              event_label: `${threshold}%`,
              value: threshold,
              non_interaction: true
            });
          }
        }
      });
    }, { passive: true });
  }

  trackSectionViews() {
    const sections = document.querySelectorAll('section[aria-label]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const sectionName = entry.target.getAttribute('aria-label');

            if (typeof gtag !== 'undefined') {
              gtag('event', 'view_section', {
                event_category: 'Engagement',
                event_label: sectionName,
                value: 1,
                non_interaction: true
              });
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach(section => observer.observe(section));
  }

  trackInteractions() {
    // Track button clicks
    document.addEventListener('click', (e) => {
      const button = e.target.closest('button, a[role="button"]');
      if (button) {
        const buttonText = button.textContent.trim();

        if (typeof gtag !== 'undefined') {
          gtag('event', 'button_click', {
            event_category: 'Interaction',
            event_label: buttonText,
            value: 1
          });
        }
      }
    });

    // Track project filter usage
    document.addEventListener('click', (e) => {
      const filterBtn = e.target.closest('.filter-btn');
      if (filterBtn) {
        const filterCategory = filterBtn.dataset.filter;

        if (typeof gtag !== 'undefined') {
          gtag('event', 'filter_projects', {
            event_category: 'Interaction',
            event_label: filterCategory,
            value: 1
          });
        }
      }
    });
  }

  trackContactAttempts() {
    // Track email clicks
    document.addEventListener('click', (e) => {
      const emailLink = e.target.closest('[href^="mailto:"]');
      if (emailLink) {
        if (typeof gtag !== 'undefined') {
          gtag('event', 'contact_email', {
            event_category: 'Conversion',
            event_label: 'Email Click',
            value: 10
          });
        }
      }
    });

    // Track WhatsApp clicks
    document.addEventListener('click', (e) => {
      const whatsappLink = e.target.closest('[href*="wa.me"]');
      if (whatsappLink) {
        if (typeof gtag !== 'undefined') {
          gtag('event', 'contact_whatsapp', {
            event_category: 'Conversion',
            event_label: 'WhatsApp Click',
            value: 10
          });
        }
      }
    });

    // Track social media clicks
    document.addEventListener('click', (e) => {
      const socialLink = e.target.closest('[href*="linkedin.com"], [href*="github.com"]');
      if (socialLink) {
        const platform = socialLink.href.includes('linkedin') ? 'LinkedIn' : 'GitHub';

        if (typeof gtag !== 'undefined') {
          gtag('event', 'social_click', {
            event_category: 'Engagement',
            event_label: platform,
            value: 5
          });
        }
      }
    });
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  window.analyticsTracker = new AnalyticsTracker();
});

export default AnalyticsTracker;
```

---

## 🧪 Testing Checklist

### Performance Testing

→ [Performance Budgets](../quick-references/performance-budgets.md)

- [ ] **Lighthouse Audit**: Performance ≥ 90, Accessibility 100, Best Practices ≥ 90, SEO 100
- [ ] **WebPageTest**: Performance grades A/B
- [ ] **Core Web Vitals**:
  - LCP < 2.5s
  - FID < 100ms
  - CLS < 0.1
  - FCP < 1.5s
  - TTI < 3.5s
- [ ] **Image Optimization**: All images < budget targets
- [ ] **Font Loading**: FOIT/FOUT minimized, fonts < 100 KB total
- [ ] **CSS**: Critical CSS extracted, non-critical deferred

### SEO Validation

- [ ] **Google Search Console**: Site indexed, no errors
- [ ] **Rich Results Test**: Structured data valid
- [ ] **Meta Tags**: All meta tags present and correct
- [ ] **Social Cards**: OG images render correctly on Facebook, Twitter, LinkedIn
- [ ] **Mobile-Friendly Test**: Passing
- [ ] **Sitemap**: Submitted to Google Search Console
- [ ] **Robots.txt**: Configured correctly

### Cross-Device Testing

- [ ] Performance on 3G network
- [ ] Performance on 4G network
- [ ] Desktop performance (Chrome, Firefox, Safari, Edge)
- [ ] Mobile performance (iOS Safari, Chrome Mobile)
- [ ] Tablet performance (iPad, Android tablets)

### Analytics Verification

- [ ] GA4 tracking code firing
- [ ] Core Web Vitals events tracked
- [ ] Scroll depth tracking working
- [ ] Section view tracking working
- [ ] Interaction tracking working
- [ ] Conversion tracking working (email, WhatsApp, social)

---

## 📦 Deliverables

### Optimized Assets

- ✅ Images (AVIF + WebP + JPG, multiple sizes)
- ✅ Fonts (Variable fonts, subsetted if needed)
- ✅ CSS (Critical inlined, non-critical deferred)
- ✅ JavaScript (Minified, code-split)
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ OG/Social images (1200x630, 1200x675)

### SEO Implementation

- ✅ Complete meta tags (basic, OG, Twitter)
- ✅ Structured data (JSON-LD)
- ✅ Canonical URLs
- ✅ Language tags
- ✅ Geographic meta tags
- ✅ Theme and mobile meta tags

### Monitoring & Analytics

- ✅ Google Analytics 4 configured
- ✅ Core Web Vitals tracking
- ✅ Scroll depth tracking
- ✅ Section view tracking
- ✅ Interaction tracking
- ✅ Conversion tracking

### Documentation

- ✅ Performance baseline benchmarks
- ✅ Optimization strategies documented
- ✅ SEO implementation guide
- ✅ Analytics tracking plan

---

## 🚀 Definition of Done

### Technical Criteria

- [ ] **Lighthouse Scores**:
  - Performance: ≥ 90
  - Accessibility: 100
  - Best Practices: ≥ 90
  - SEO: 100
- [ ] **Core Web Vitals**: All metrics in "Good" range
- [ ] **Images**: All optimized (AVIF/WebP/JPG, responsive)
- [ ] **Fonts**: Optimized loading (preload, font-display: swap)
- [ ] **CSS**: Critical extracted and inlined
- [ ] **SEO**: Complete meta tags + structured data validated
- [ ] **Analytics**: GA4 + event tracking configured

### Quality Gates

- [ ] **Mobile Performance**: Lighthouse Mobile ≥ 85
- [ ] **Desktop Performance**: Lighthouse Desktop ≥ 95
- [ ] **Image Budget**: All images within budget
- [ ] **Font Budget**: Total fonts < 100 KB
- [ ] **CSS Budget**: Critical CSS < 14 KB inline
- [ ] **JS Budget**: Total JS < 200 KB (gzipped)

### Handoff Requirements

**Assets for Phase 6** (Final Polish):
- ✅ Performance baseline established
- ✅ SEO foundation complete
- ✅ Analytics tracking operational
- ✅ All optimizations documented

**Production Readiness**:
- ✅ Performance targets met
- ✅ SEO complete and validated
- ✅ Analytics configured
- ✅ Assets optimized
- ✅ No regressions in previous phases

---

## 🔗 Referencias

### Core Documentation
→ [Project Overview](../00-PROJECT-OVERVIEW.md)
→ [Technical Reference](../01-TECHNICAL-REFERENCE.md)
→ [Content Specifications](../02-CONTENT-SPECIFICATIONS.md)

### Quick References
→ [Design Tokens](../quick-references/design-tokens.md)
→ [Accessibility Checklist](../quick-references/accessibility-checklist.md)
→ [Performance Budgets](../quick-references/performance-budgets.md)
→ [Browser Compatibility](../quick-references/browser-compatibility.md)

### Related Phases
→ [Phase 1: Foundation](PHASE-01-Foundation.md) - DEPENDENCY
→ [Phase 2: Core Content](PHASE-02-Core-Content.md) - DEPENDENCY
→ [Phase 3: Advanced Features](PHASE-03-Advanced-Features.md) - DEPENDENCY
→ [Phase 4: Animations](PHASE-04-Animations.md) - DEPENDENCY
→ [Phase 6: Final Polish](PHASE-06-Polish.md) - NEXT

---

**Phase Owner**: Frontend Developer, SEO Specialist
**Stakeholders**: Product Owner, Performance Engineer
**Created**: 21 Enero 2025
**Last Updated**: 21 Enero 2025
**Status**: Ready for Implementation
