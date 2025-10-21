# Browser Compatibility Matrix

**Propósito**: Matriz de compatibilidad de navegadores y estrategias de fallback

**Target**: 95%+ cobertura global de usuarios

**Última actualización**: 20 Enero 2025

---

## 🌐 Supported Browsers

### Desktop Browsers

| Browser | Minimum Version | Support Level | Market Share | Notes |
|---------|----------------|---------------|--------------|-------|
| **Chrome** | Last 2 versions | ✅ Full Support | ~65% | Primary target |
| **Firefox** | Last 2 versions | ✅ Full Support | ~3% | Full testing |
| **Safari** | Last 2 versions | ✅ Full Support | ~20% | webkit prefixes |
| **Edge** | Last 2 versions | ✅ Full Support | ~5% | Chromium-based |
| **Opera** | Last 2 versions | ⚠️ Best Effort | <1% | Chromium-based |
| **IE 11** | - | ❌ Not Supported | <0.5% | EOL June 2022 |

### Mobile Browsers

| Browser | Minimum Version | Support Level | Market Share | Notes |
|---------|----------------|---------------|--------------|-------|
| **Chrome Mobile** | Android 8+ | ✅ Full Support | ~60% | Primary mobile |
| **Safari iOS** | iOS 13+ | ✅ Full Support | ~25% | Full testing |
| **Samsung Internet** | Version 14+ | ⚠️ Best Effort | ~5% | Chromium-based |
| **Firefox Mobile** | Last 2 versions | ⚠️ Best Effort | <2% | Limited testing |
| **UC Browser** | - | ⚠️ Degraded | <5% | Basic support only |

---

## 🎯 Feature Support Matrix

### Critical Features (Must Work)

| Feature | Chrome | Firefox | Safari | Edge | Fallback Required |
|---------|--------|---------|--------|------|-------------------|
| **CSS Grid** | ✅ 57+ | ✅ 52+ | ✅ 10.1+ | ✅ 16+ | ❌ No (95%+ support) |
| **CSS Custom Properties** | ✅ 49+ | ✅ 31+ | ✅ 9.1+ | ✅ 15+ | ❌ No (98%+ support) |
| **Flexbox** | ✅ 29+ | ✅ 28+ | ✅ 9+ | ✅ 12+ | ❌ No (99%+ support) |
| **ES6 Modules** | ✅ 61+ | ✅ 60+ | ✅ 11+ | ✅ 16+ | ✅ Yes (script fallback) |
| **Async/Await** | ✅ 55+ | ✅ 52+ | ✅ 11+ | ✅ 15+ | ✅ Yes (transpile) |
| **Intersection Observer** | ✅ 58+ | ✅ 55+ | ✅ 12.1+ | ✅ 16+ | ✅ Yes (polyfill) |
| **ResizeObserver** | ✅ 64+ | ✅ 69+ | ✅ 13.1+ | ✅ 79+ | ✅ Yes (polyfill) |
| **Web Animations API** | ✅ 84+ | ✅ 75+ | ✅ 13.1+ | ✅ 84+ | ✅ Yes (CSS fallback) |

### Image Formats

| Format | Chrome | Firefox | Safari | Edge | Fallback |
|--------|--------|---------|--------|------|----------|
| **WebP** | ✅ 32+ | ✅ 65+ | ✅ 14+ | ✅ 18+ | → JPG/PNG |
| **AVIF** | ✅ 85+ | ✅ 93+ | ⚠️ iOS 16+ | ✅ 85+ | → WebP → JPG |
| **SVG** | ✅ All | ✅ All | ✅ All | ✅ All | → PNG |

### Font Formats

| Format | Chrome | Firefox | Safari | Edge | Fallback |
|--------|--------|---------|--------|------|----------|
| **WOFF2** | ✅ 36+ | ✅ 39+ | ✅ 10+ | ✅ 14+ | → WOFF → TTF |
| **WOFF** | ✅ 5+ | ✅ 3.6+ | ✅ 5.1+ | ✅ 12+ | → TTF |
| **Variable Fonts** | ✅ 66+ | ✅ 62+ | ✅ 11+ | ✅ 17+ | → Static fonts |

### JavaScript APIs

| API | Chrome | Firefox | Safari | Edge | Polyfill |
|-----|--------|---------|--------|------|----------|
| **localStorage** | ✅ 4+ | ✅ 3.5+ | ✅ 4+ | ✅ 12+ | ❌ Required |
| **fetch()** | ✅ 42+ | ✅ 39+ | ✅ 10.1+ | ✅ 14+ | ✅ [whatwg-fetch](https://github.com/github/fetch) |
| **Promise** | ✅ 32+ | ✅ 29+ | ✅ 8+ | ✅ 12+ | ✅ [es6-promise](https://github.com/stefanpenner/es6-promise) |
| **IntersectionObserver** | ✅ 58+ | ✅ 55+ | ✅ 12.1+ | ✅ 16+ | ✅ [polyfill](https://github.com/w3c/IntersectionObserver) |
| **ResizeObserver** | ✅ 64+ | ✅ 69+ | ✅ 13.1+ | ✅ 79+ | ✅ [polyfill](https://github.com/que-etc/resize-observer-polyfill) |
| **matchMedia** | ✅ 9+ | ✅ 6+ | ✅ 5.1+ | ✅ 10+ | ❌ Required |
| **requestAnimationFrame** | ✅ 24+ | ✅ 23+ | ✅ 6.1+ | ✅ 10+ | ✅ [raf](https://github.com/chrisdickinson/raf) |

---

## 🔄 Fallback Strategies

### Image Formats

```html
<!-- Progressive enhancement: AVIF → WebP → JPG -->
<picture>
  <source srcset="hero.avif" type="image/avif">
  <source srcset="hero.webp" type="image/webp">
  <img src="hero.jpg"
       alt="Hero image"
       width="1200"
       height="800">
</picture>
```

### Font Loading

```css
/* Progressive font loading with fallbacks */
@font-face {
  font-family: 'Inter';
  src: url('/fonts/inter-var.woff2') format('woff2'),
       url('/fonts/inter-var.woff') format('woff'),
       url('/fonts/inter-var.ttf') format('truetype');
  font-weight: 100 900;
  font-display: swap;
}

/* System font stack fallback */
body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont,
               'Segoe UI', Roboto, 'Helvetica Neue', Arial,
               sans-serif;
}
```

### CSS Feature Detection

```css
/* Grid with Flexbox fallback */
.container {
  display: flex; /* Fallback */
  flex-wrap: wrap;
}

@supports (display: grid) {
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
}

/* Custom properties with fallback */
.element {
  background: #0A192F; /* Fallback */
  background: var(--color-navy, #0A192F);
}
```

### JavaScript Feature Detection

```javascript
// Intersection Observer with fallback
if ('IntersectionObserver' in window) {
  // Use IntersectionObserver
  const observer = new IntersectionObserver(callback);
  observer.observe(element);
} else {
  // Fallback: Load polyfill or use scroll event
  import('intersection-observer').then(() => {
    const observer = new IntersectionObserver(callback);
    observer.observe(element);
  });
}

// Fetch with XMLHttpRequest fallback
if ('fetch' in window) {
  fetch('/api/data').then(response => response.json());
} else {
  // Use XMLHttpRequest or load polyfill
  const xhr = new XMLHttpRequest();
  xhr.open('GET', '/api/data');
  xhr.send();
}
```

### ES6+ Transpilation

```javascript
// Use Babel for older browsers
// .babelrc or babel.config.js
{
  "presets": [
    ["@babel/preset-env", {
      "targets": {
        "browsers": ["last 2 versions", "not dead", "> 0.2%"]
      },
      "useBuiltIns": "usage",
      "corejs": 3
    }]
  ]
}
```

---

## 📦 Polyfills Configuration

### Core Polyfills

```javascript
// polyfills.js - Load only what's needed
const polyfills = [];

// Intersection Observer
if (!('IntersectionObserver' in window)) {
  polyfills.push(import('intersection-observer'));
}

// ResizeObserver
if (!('ResizeObserver' in window)) {
  polyfills.push(import('resize-observer-polyfill'));
}

// Fetch
if (!('fetch' in window)) {
  polyfills.push(import('whatwg-fetch'));
}

// Promise
if (!window.Promise) {
  polyfills.push(import('es6-promise').then(m => m.polyfill()));
}

// Load all polyfills
Promise.all(polyfills).then(() => {
  // Initialize app
  initApp();
});
```

### Conditional Polyfill Loading

```html
<!-- Load polyfills only for older browsers -->
<script type="module">
  // Modern browsers - no polyfills needed
  import('./main.js');
</script>

<script nomodule>
  // Legacy browsers - load polyfills first
  var script = document.createElement('script');
  script.src = '/js/polyfills.js';
  script.onload = function() {
    var mainScript = document.createElement('script');
    mainScript.src = '/js/main.legacy.js';
    document.body.appendChild(mainScript);
  };
  document.body.appendChild(script);
</script>
```

---

## 🧪 Browser Testing Strategy

### Required Testing

#### Desktop

- [ ] **Chrome** (Latest) - Windows & macOS
- [ ] **Firefox** (Latest) - Windows & macOS
- [ ] **Safari** (Latest) - macOS only
- [ ] **Edge** (Latest) - Windows

#### Mobile

- [ ] **Chrome Mobile** - Android 10+
- [ ] **Safari iOS** - iOS 13+
- [ ] **Safari iOS** - iPad OS

### Manual Testing Checklist

- [ ] Homepage loads correctly
- [ ] All images display properly
- [ ] Fonts render correctly
- [ ] Animations run smoothly
- [ ] Forms work (if applicable)
- [ ] Navigation functional
- [ ] Responsive breakpoints
- [ ] Touch interactions (mobile)
- [ ] Landscape orientation (mobile)
- [ ] Print styles

### Automated Testing Tools

```bash
# BrowserStack - Cross-browser testing
# https://www.browserstack.com/

# Sauce Labs - Automated testing
# https://saucelabs.com/

# LambdaTest - Live testing
# https://www.lambdatest.com/

# Playwright - Automated testing
npx playwright test --browser=chromium,firefox,webkit
```

---

## ⚠️ Known Issues & Workarounds

### Safari-specific Issues

#### 1. Flexbox Gap Not Supported (Safari < 14.1)

```css
/* Problem: gap not supported in flexbox */
.flex-container {
  display: flex;
  gap: 1rem; /* Not supported < Safari 14.1 */
}

/* Workaround: Use margin */
.flex-container {
  display: flex;
  margin: -0.5rem; /* Negative margin on container */
}

.flex-container > * {
  margin: 0.5rem; /* Margin on children */
}
```

#### 2. Date Input Styling

```css
/* Safari doesn't support some input[type="date"] styles */
input[type="date"] {
  /* Use native picker or custom solution */
  -webkit-appearance: none;
  appearance: none;
}
```

#### 3. 100vh on Mobile Safari

```css
/* Problem: 100vh includes browser UI on iOS Safari */
.full-height {
  height: 100vh; /* Includes address bar */
}

/* Workaround: Use CSS variable updated with JS */
:root {
  --vh: 1vh;
}

.full-height {
  height: calc(var(--vh, 1vh) * 100);
}
```

```javascript
// Update CSS variable on resize
function setVH() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

window.addEventListener('resize', setVH);
setVH();
```

### Firefox-specific Issues

#### 1. Scrollbar Styling

```css
/* Firefox uses different scrollbar properties */

/* Webkit browsers */
::-webkit-scrollbar {
  width: 10px;
}

/* Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: var(--color-cyan) var(--color-navy);
}
```

### Chrome-specific Issues

#### 1. Input Autofill Styling

```css
/* Chrome applies ugly yellow background on autofill */
input:-webkit-autofill {
  -webkit-box-shadow: 0 0 0 30px var(--color-bg-secondary) inset;
  -webkit-text-fill-color: var(--color-text-primary);
}
```

---

## 🔧 Build Configuration

### Browserslist

```json
// package.json
{
  "browserslist": [
    "last 2 Chrome versions",
    "last 2 Firefox versions",
    "last 2 Safari versions",
    "last 2 Edge versions",
    "last 2 iOS versions",
    "last 2 ChromeAndroid versions",
    "not dead",
    "not IE 11",
    "> 0.2%"
  ]
}
```

### PostCSS with Autoprefixer

```javascript
// postcss.config.js
module.exports = {
  plugins: [
    require('autoprefixer')({
      overrideBrowserslist: [
        'last 2 versions',
        'not dead',
        '> 0.2%'
      ]
    })
  ]
};
```

### Babel Configuration

```javascript
// babel.config.js
module.exports = {
  presets: [
    ['@babel/preset-env', {
      targets: {
        browsers: ['last 2 versions', 'not dead', '> 0.2%']
      },
      useBuiltIns: 'usage',
      corejs: 3,
      modules: false
    }]
  ]
};
```

---

## 📊 Analytics Integration

### Browser Usage Monitoring

```javascript
// Track browser versions in analytics
const browserInfo = {
  browser: navigator.userAgent.match(/(chrome|firefox|safari|edge|opera)/i)?.[1] || 'unknown',
  version: navigator.userAgent.match(/version\/(\d+)/i)?.[1] || 'unknown',
  mobile: /mobile/i.test(navigator.userAgent)
};

// Send to analytics
analytics.track('Browser Info', browserInfo);
```

### Feature Detection Reporting

```javascript
// Report unsupported features
const features = {
  grid: CSS.supports('display', 'grid'),
  customProperties: CSS.supports('--test', '0'),
  intersectionObserver: 'IntersectionObserver' in window,
  webp: document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') === 0,
  avif: document.createElement('canvas').toDataURL('image/avif').indexOf('data:image/avif') === 0
};

// Log unsupported features
Object.entries(features).forEach(([feature, supported]) => {
  if (!supported) {
    console.warn(`Feature not supported: ${feature}`);
    analytics.track('Unsupported Feature', { feature });
  }
});
```

---

## 🚨 Critical Failures to Avoid

### CSS

- ❌ Don't rely solely on modern CSS features without fallbacks
- ❌ Don't use `-webkit-` only prefixes without standard property
- ❌ Don't assume `gap` works in Flexbox (Safari < 14.1)
- ❌ Don't use `aspect-ratio` without fallback (older browsers)

### JavaScript

- ❌ Don't use ES6+ features without transpilation
- ❌ Don't assume all APIs are available (check with feature detection)
- ❌ Don't use Optional Chaining (`?.`) without transpilation for older browsers
- ❌ Don't use Nullish Coalescing (`??`) without transpilation

### Images

- ❌ Don't serve only AVIF/WebP without JPG fallback
- ❌ Don't omit `alt` attributes
- ❌ Don't forget to specify width/height

---

## ✅ Pre-Launch Browser Testing Checklist

### Desktop Testing

- [ ] Chrome (Latest, Windows & macOS)
- [ ] Firefox (Latest, Windows & macOS)
- [ ] Safari (Latest, macOS)
- [ ] Edge (Latest, Windows)
- [ ] Chrome (N-1 version)
- [ ] Safari (iOS Simulator)

### Mobile Testing

- [ ] Chrome Mobile (Real Android device)
- [ ] Safari iOS (Real iPhone)
- [ ] Safari iOS (Real iPad)
- [ ] Different screen sizes (small, medium, large)
- [ ] Portrait and landscape orientations

### Functionality Testing

- [ ] All pages load successfully
- [ ] Images display correctly
- [ ] Fonts render properly
- [ ] Animations work smoothly
- [ ] Theme toggle functions
- [ ] Skip links accessible
- [ ] Keyboard navigation works
- [ ] Touch interactions responsive
- [ ] Forms validate correctly
- [ ] External links open properly

### Performance Testing

- [ ] Lighthouse (All browsers)
- [ ] WebPageTest (Multiple browsers)
- [ ] Real device testing
- [ ] Throttled 3G testing

---

## 🔗 Resources

### Testing Services
- [BrowserStack](https://www.browserstack.com/) - Cross-browser testing
- [Sauce Labs](https://saucelabs.com/) - Automated testing
- [LambdaTest](https://www.lambdatest.com/) - Live browser testing

### Compatibility Databases
- [Can I Use](https://caniuse.com/) - Feature compatibility
- [MDN Browser Compatibility](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) - API support
- [Browserslist](https://browserslist.dev/) - Browser query tool

### Polyfills
- [Polyfill.io](https://polyfill.io/) - Automatic polyfill service
- [Core-js](https://github.com/zloirock/core-js) - Modular polyfills
- [Babel](https://babeljs.io/) - JavaScript transpiler

---

## 📊 Referencias

→ **Design Tokens**: [design-tokens.md](design-tokens.md)
→ **Performance**: [performance-budgets.md](performance-budgets.md)
→ **Accessibility**: [accessibility-checklist.md](accessibility-checklist.md)

---

**Última actualización**: 20 Enero 2025
**Target Coverage**: 95%+ global users
**Supported Browsers**: Last 2 versions (Chrome, Firefox, Safari, Edge)
