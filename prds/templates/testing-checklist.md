# Testing Checklist Template

**Feature/Component**: [Name]
**Phase**: [Phase Number]
**Date**: [Testing Date]
**Tester**: [Name]

---

## ✅ Pre-Testing Setup

- [ ] Development environment setup
- [ ] All dependencies installed
- [ ] Feature/component deployed to staging
- [ ] Test data prepared
- [ ] Testing tools configured

---

## 🧪 Functional Testing

### Core Functionality

- [ ] Feature loads without errors
- [ ] All primary user flows work
- [ ] All secondary user flows work
- [ ] Expected output is correct
- [ ] Data persistence works (if applicable)

### Edge Cases

- [ ] Empty state handled correctly
- [ ] Maximum data load handled
- [ ] Minimum data handled
- [ ] Invalid input rejected gracefully
- [ ] Network errors handled

### Error States

- [ ] Error messages display correctly
- [ ] Error messages are user-friendly
- [ ] Errors logged appropriately
- [ ] Recovery from errors works
- [ ] Error analytics tracking functional

### Loading States

- [ ] Loading indicators display
- [ ] Loading doesn't block critical functionality
- [ ] Skeleton screens render correctly
- [ ] Progress indicators accurate

---

## 🌐 Cross-Browser Testing

→ See [browser-compatibility.md](../quick-references/browser-compatibility.md)

### Desktop Browsers

| Browser | Version | Status | Notes |
|---------|---------|--------|-------|
| Chrome | Latest | [ ] | |
| Firefox | Latest | [ ] | |
| Safari | Latest | [ ] | |
| Edge | Latest | [ ] | |
| Chrome | N-1 | [ ] | |
| Firefox | N-1 | [ ] | |

### Mobile Browsers

| Browser | Device | Status | Notes |
|---------|--------|--------|-------|
| Chrome Mobile | Android | [ ] | |
| Safari iOS | iPhone | [ ] | |
| Safari iOS | iPad | [ ] | |
| Samsung Internet | Android | [ ] | |

### Browser-Specific Issues

- [ ] No Chrome-specific bugs
- [ ] No Firefox-specific bugs
- [ ] No Safari-specific bugs
- [ ] No Edge-specific bugs
- [ ] Polyfills loaded correctly for older browsers

---

## 📱 Responsive Testing

### Breakpoints

| Breakpoint | Width | Status | Notes |
|------------|-------|--------|-------|
| Mobile S | 320px | [ ] | |
| Mobile M | 375px | [ ] | |
| Mobile L | 425px | [ ] | |
| Tablet | 768px | [ ] | |
| Laptop | 1024px | [ ] | |
| Desktop | 1440px | [ ] | |
| 4K | 2560px | [ ] | |

### Layout Verification

- [ ] No horizontal scroll on any breakpoint
- [ ] Content readable at all sizes
- [ ] Images scale properly
- [ ] Text doesn't overflow containers
- [ ] Navigation usable at all sizes
- [ ] Buttons/CTAs accessible on mobile

### Touch Interactions (Mobile/Tablet)

- [ ] Touch targets ≥ 44x44px
- [ ] Swipe gestures work (if applicable)
- [ ] Pinch zoom works (if applicable)
- [ ] No hover-dependent functionality
- [ ] Long-press handled (if applicable)

### Orientation Testing

- [ ] Portrait mode works
- [ ] Landscape mode works
- [ ] Rotation transition smooth
- [ ] No layout shift on rotation

---

## ♿ Accessibility Testing

→ See [accessibility-checklist.md](../quick-references/accessibility-checklist.md)

### Automated Testing

| Tool | Target | Actual | Status | Notes |
|------|--------|--------|--------|-------|
| Lighthouse Accessibility | 100 | | [ ] | |
| axe DevTools | 0 violations | | [ ] | |
| WAVE | 0 errors | | [ ] | |

### Keyboard Navigation

- [ ] All functionality accessible via keyboard
- [ ] Tab order is logical
- [ ] Focus indicators visible (2px minimum)
- [ ] No keyboard traps
- [ ] Enter/Space activate buttons
- [ ] Escape closes modals/dropdowns
- [ ] Arrow keys work in components (if applicable)

### Screen Reader Testing

| Screen Reader | Platform | Status | Notes |
|---------------|----------|--------|-------|
| NVDA | Windows | [ ] | |
| JAWS | Windows | [ ] | |
| VoiceOver | macOS | [ ] | |
| VoiceOver | iOS | [ ] | |
| TalkBack | Android | [ ] | |

**Screen Reader Verification**:
- [ ] All content announced
- [ ] Heading structure correct (h1 → h2 → h3)
- [ ] Landmarks identified (`main`, `nav`, `aside`)
- [ ] Form labels associated correctly
- [ ] Images have descriptive alt text
- [ ] Icon-only buttons have aria-labels
- [ ] State changes announced
- [ ] Error messages announced

### Semantic HTML

- [ ] Proper heading hierarchy (only one h1)
- [ ] Semantic tags used (`article`, `section`, `nav`, etc.)
- [ ] Lists use `ul`/`ol` appropriately
- [ ] Buttons are `<button>`, not `<div>`
- [ ] Links are `<a>` with href
- [ ] Forms use `<form>`, `<label>`, `<input>`

### ARIA Implementation

- [ ] ARIA roles appropriate
- [ ] `aria-label` on icon-only buttons
- [ ] `aria-labelledby` used correctly
- [ ] `aria-describedby` for additional info
- [ ] `aria-expanded` on expandable items
- [ ] `aria-hidden="true"` on decorative elements
- [ ] `aria-live` for dynamic content
- [ ] `aria-current` on active navigation

### Color & Contrast

| Element | Foreground | Background | Ratio | Target | Status |
|---------|-----------|-----------|-------|--------|--------|
| Body text | | | | 4.5:1 | [ ] |
| Headings | | | | 4.5:1 | [ ] |
| Links | | | | 4.5:1 | [ ] |
| Buttons | | | | 4.5:1 | [ ] |
| UI components | | | | 3:1 | [ ] |

- [ ] Color not sole indicator of information
- [ ] Links distinguishable without color
- [ ] Error states have icons, not just color
- [ ] Focus indicators contrast ≥ 3:1

---

## ⚡ Performance Testing

→ See [performance-budgets.md](../quick-references/performance-budgets.md)

### Lighthouse Audit

| Metric | Target | Actual | Status | Notes |
|--------|--------|--------|--------|-------|
| Performance | > 90 | | [ ] | |
| Accessibility | 100 | | [ ] | |
| Best Practices | > 90 | [ ] | |
| SEO | 100 | | [ ] | |

### Core Web Vitals

| Metric | Good | Actual | Status | Notes |
|--------|------|--------|--------|-------|
| LCP (Largest Contentful Paint) | < 2.5s | | [ ] | |
| FID (First Input Delay) | < 100ms | | [ ] | |
| CLS (Cumulative Layout Shift) | < 0.1 | | [ ] | |
| INP (Interaction to Next Paint) | < 200ms | | [ ] | |

### Additional Metrics

| Metric | Target | Actual | Status |
|--------|--------|--------|--------|
| FCP (First Contentful Paint) | < 1.5s | | [ ] |
| SI (Speed Index) | < 3.0s | | [ ] |
| TTI (Time to Interactive) | < 3.5s | | [ ] |
| TBT (Total Blocking Time) | < 200ms | | [ ] |

### Asset Budgets

| Asset Type | Budget | Actual | Status | Notes |
|------------|--------|--------|--------|-------|
| HTML | < 50 KB | | [ ] | |
| CSS (Total) | < 100 KB | | [ ] | |
| JavaScript (Total) | < 200 KB | | [ ] | |
| Images (each) | < 200 KB | | [ ] | |
| Fonts | < 100 KB | | [ ] | |

### Optimization Verification

- [ ] Images optimized (AVIF/WebP + fallback)
- [ ] Images lazy loaded (below fold)
- [ ] Critical CSS inlined
- [ ] Non-critical CSS deferred
- [ ] JavaScript deferred/async
- [ ] Fonts preloaded
- [ ] Compression enabled (Gzip/Brotli)
- [ ] CDN configured
- [ ] Caching headers set
- [ ] No render-blocking resources

### Performance Issues

- [ ] No layout shifts (CLS < 0.1)
- [ ] No long tasks (> 50ms)
- [ ] No excessive DOM size (< 1500 nodes)
- [ ] No memory leaks
- [ ] Animations smooth (60fps)
- [ ] Scrolling smooth

---

## 🔒 Security Testing

### Basic Security

- [ ] No sensitive data in console
- [ ] No sensitive data in localStorage
- [ ] HTTPS enforced
- [ ] No mixed content warnings
- [ ] External links use `rel="noopener noreferrer"`
- [ ] User input sanitized
- [ ] SQL injection protected (if applicable)
- [ ] XSS protected
- [ ] CSRF tokens implemented (if applicable)

### Authentication & Authorization (if applicable)

- [ ] Login/logout works
- [ ] Sessions expire appropriately
- [ ] Password requirements enforced
- [ ] Protected routes secured
- [ ] Authorization levels respected

---

## 📊 Analytics & Tracking

### Event Tracking

- [ ] Page views tracked
- [ ] Button clicks tracked
- [ ] Form submissions tracked
- [ ] Error events tracked
- [ ] Custom events tracked
- [ ] User properties captured

### Analytics Verification

- [ ] Events fire correctly
- [ ] Event properties accurate
- [ ] No duplicate events
- [ ] Tracking respects privacy settings
- [ ] GDPR compliance (if applicable)

---

## 🌍 Internationalization (i18n)

### Language Support (if applicable)

- [ ] Correct language attribute (`lang="es"`)
- [ ] Text direction correct (LTR/RTL)
- [ ] Date formats localized
- [ ] Number formats localized
- [ ] Currency formats localized
- [ ] Translations accurate

---

## 🎨 Visual Testing

### Design Consistency

- [ ] Matches design mockups
- [ ] Typography correct (fonts, sizes, weights)
- [ ] Colors match design system
- [ ] Spacing consistent
- [ ] Alignment correct
- [ ] Border radius consistent
- [ ] Shadows match design tokens

### Visual Regression

- [ ] No unintended visual changes
- [ ] Screenshots match baseline
- [ ] Component states styled correctly
- [ ] Hover states work
- [ ] Focus states visible
- [ ] Active states clear

---

## 🔄 Integration Testing

### API Integration (if applicable)

- [ ] All API calls successful
- [ ] Error handling for failed requests
- [ ] Loading states during requests
- [ ] Data validation on response
- [ ] Retry logic works (if applicable)
- [ ] Timeout handling

### Third-Party Integration

- [ ] Analytics loads correctly
- [ ] External scripts load
- [ ] No blocking third-party resources
- [ ] Fallback for failed third-party loads

---

## 📝 Content Verification

### Text Content

- [ ] No typos or grammatical errors
- [ ] Professional tone maintained
- [ ] Content accurate and up-to-date
- [ ] Links work correctly
- [ ] No placeholder text (Lorem Ipsum)

### Images & Media

- [ ] All images load
- [ ] Images have alt text
- [ ] Images properly sized
- [ ] No broken image links
- [ ] Videos play correctly (if applicable)

---

## 🐛 Bug Tracking

### Bugs Found

| # | Severity | Description | Steps to Reproduce | Status |
|---|----------|-------------|-------------------|--------|
| 1 | | | | |
| 2 | | | | |
| 3 | | | | |

**Severity Levels**:
- 🔴 Critical: Blocks core functionality
- 🟠 High: Major feature broken
- 🟡 Medium: Minor feature issue
- 🟢 Low: Cosmetic issue

---

## ✅ Final Sign-Off

### Pre-Production Checklist

- [ ] All critical bugs fixed
- [ ] All tests passing
- [ ] Performance targets met
- [ ] Accessibility score 100
- [ ] Cross-browser tested
- [ ] Mobile tested on real devices
- [ ] Security review passed
- [ ] Code review completed
- [ ] Documentation updated
- [ ] Stakeholder approval received

### Deployment Approval

- [ ] **QA Approved**: [Name] - [Date]
- [ ] **Dev Lead Approved**: [Name] - [Date]
- [ ] **PM Approved**: [Name] - [Date]

---

## 📊 Test Summary

**Total Tests**: [Number]
**Passed**: [Number]
**Failed**: [Number]
**Blocked**: [Number]

**Pass Rate**: [Percentage]%

---

## 💡 Notes & Observations

[Any additional notes, observations, or recommendations from testing]

---

**Template Version**: 1.0
**Last Updated**: 20 Enero 2025
