# Feature: [Feature Name]

**Phase**: [Phase Number] - [Phase Name]
**Timeline**: [Estimated duration]
**Complexity**: [🟢 Low / 🟡 Medium / 🔴 High]
**Dependencies**: [List of dependencies]

---

## 📋 Quick Reference

| Attribute | Value |
|-----------|-------|
| **Timeline** | [X weeks/days] |
| **Complexity** | [Level with emoji] |
| **Dependencies** | [Phase X, Library Y, etc.] |
| **Key Deliverables** | [3-5 main items] |
| **Success Criteria** | [Main success metric] |

---

## 🎯 Objectives & Success Criteria

### Primary Objectives

- ✅ [Objective 1]
- ✅ [Objective 2]
- ✅ [Objective 3]

### Success Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| [Metric 1] | [Target value] | [How to measure] |
| [Metric 2] | [Target value] | [How to measure] |
| [Metric 3] | [Target value] | [How to measure] |

### Definition of Done

- [ ] [Criterion 1]
- [ ] [Criterion 2]
- [ ] [Criterion 3]
- [ ] [Criterion 4]
- [ ] [Criterion 5]

---

## 📖 Overview

### What

[Detailed description of what this feature is]

### Why

[Why this feature is needed, business value, user benefit]

### How

[High-level approach to implementation]

---

## 🏗️ Implementation Guide

### Step 1: [Step Name]

**Components Needed**:
→ [Component 1](../03-COMPONENT-LIBRARY.md#component-1)
→ [Component 2](../03-COMPONENT-LIBRARY.md#component-2)

**Content Required**:
→ [Content Section](../02-CONTENT-SPECIFICATIONS.md#section)

**Technical Specs**:
→ [Spec Section](../01-TECHNICAL-REFERENCE.md#spec)

**Implementation**:

```[language]
// Code example for step 1
```

**Notes**:
- [Important note 1]
- [Important note 2]

---

### Step 2: [Step Name]

**Components Needed**:
→ [Component 3](../03-COMPONENT-LIBRARY.md#component-3)

**Content Required**:
→ [Content Section](../02-CONTENT-SPECIFICATIONS.md#section)

**Technical Specs**:
→ [Spec Section](../01-TECHNICAL-REFERENCE.md#spec)

**Implementation**:

```[language]
// Code example for step 2
```

**Notes**:
- [Important note 1]
- [Important note 2]

---

### Step 3: [Step Name]

[Continue with additional steps as needed]

---

## 🎨 Design Specifications

### Visual Requirements

- **Layout**: [Description]
- **Spacing**: [Specific spacing requirements]
- **Typography**: [Font sizes, weights, etc.]
- **Colors**: [Color usage]
- **Animations**: [Animation requirements]

### Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| **Mobile (< 768px)** | [Mobile layout description] |
| **Tablet (768px - 1024px)** | [Tablet layout description] |
| **Desktop (> 1024px)** | [Desktop layout description] |

### Design Tokens Used

```css
/* Key design tokens for this feature */
--color-[name]: [value];
--space-[size]: [value];
--text-[size]: [value];
--radius-[size]: [value];
```

---

## 💻 Technical Implementation

### File Structure

```
[feature-name]/
├── components/
│   ├── FeatureComponent1.tsx
│   ├── FeatureComponent2.tsx
│   └── index.ts
├── styles/
│   ├── feature.css
│   └── components.css
├── utils/
│   └── feature-utils.ts
└── index.ts
```

### Key Components

#### Component 1: [Name]

```[language]
// Component implementation
```

#### Component 2: [Name]

```[language]
// Component implementation
```

### State Management

```javascript
// State management approach
const [state, setState] = useState(initialState);
```

### API Integration (if applicable)

```javascript
// API calls
async function fetchData() {
  const response = await fetch('/api/endpoint');
  return response.json();
}
```

---

## ♿ Accessibility Requirements

### WCAG Compliance

- [ ] All interactive elements keyboard accessible
- [ ] Focus indicators visible
- [ ] ARIA labels on all necessary elements
- [ ] Contrast ratios meet WCAG AA (4.5:1 minimum)
- [ ] Screen reader tested with [NVDA/JAWS/VoiceOver]
- [ ] No keyboard traps
- [ ] Skip links functional

### Specific Requirements

→ See [accessibility-checklist.md](../quick-references/accessibility-checklist.md)

- [Requirement 1]
- [Requirement 2]
- [Requirement 3]

---

## ⚡ Performance Requirements

### Performance Budgets

| Asset Type | Budget | Notes |
|------------|--------|-------|
| **JavaScript** | < [X] KB | [Notes] |
| **CSS** | < [X] KB | [Notes] |
| **Images** | < [X] KB | [Notes] |
| **Total** | < [X] KB | [Notes] |

### Optimization Checklist

- [ ] Images optimized (WebP/AVIF with fallback)
- [ ] Lazy loading implemented
- [ ] Code splitting applied
- [ ] Critical CSS extracted
- [ ] Fonts preloaded
- [ ] JavaScript deferred/async
- [ ] Animations use transform/opacity only

→ See [performance-budgets.md](../quick-references/performance-budgets.md)

---

## 🧪 Testing Checklist

### Functional Testing

- [ ] Feature works as intended
- [ ] All user flows tested
- [ ] Edge cases handled
- [ ] Error states work correctly
- [ ] Loading states display properly

### Cross-Browser Testing

→ See [browser-compatibility.md](../quick-references/browser-compatibility.md)

- [ ] Chrome (Latest)
- [ ] Firefox (Latest)
- [ ] Safari (Latest)
- [ ] Edge (Latest)
- [ ] Chrome Mobile (Android)
- [ ] Safari iOS

### Responsive Testing

- [ ] Mobile (320px - 767px)
- [ ] Tablet (768px - 1023px)
- [ ] Desktop (1024px+)
- [ ] Large desktop (1440px+)
- [ ] Portrait orientation
- [ ] Landscape orientation

### Accessibility Testing

- [ ] Lighthouse Accessibility = 100
- [ ] axe DevTools = 0 violations
- [ ] WAVE = 0 errors
- [ ] Keyboard navigation works
- [ ] Screen reader tested
- [ ] Contrast ratios verified

### Performance Testing

- [ ] Lighthouse Performance > 90
- [ ] LCP < 2.5s
- [ ] FID < 100ms
- [ ] CLS < 0.1
- [ ] TTI < 3.5s

---

## 📦 Dependencies

### External Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| [package-1] | [version] | [Purpose] |
| [package-2] | [version] | [Purpose] |

### Internal Dependencies

- [Component 1](../03-COMPONENT-LIBRARY.md#component-1)
- [Component 2](../03-COMPONENT-LIBRARY.md#component-2)
- [Utility 1]
- [Service 1]

### Phase Dependencies

This feature depends on:
- ✅ Phase [X]: [Reason]
- ✅ Phase [Y]: [Reason]

This feature enables:
- Phase [Z]: [Reason]

---

## 🚀 Deployment

### Pre-Deployment Checklist

- [ ] All tests passing
- [ ] Code reviewed
- [ ] Documentation updated
- [ ] Performance budgets met
- [ ] Accessibility verified
- [ ] Cross-browser tested
- [ ] Security review completed
- [ ] Staging deployment successful

### Deployment Steps

1. [Step 1]
2. [Step 2]
3. [Step 3]
4. [Step 4]

### Post-Deployment Verification

- [ ] Feature live in production
- [ ] Analytics tracking working
- [ ] Error monitoring active
- [ ] Performance metrics acceptable
- [ ] User feedback collected

---

## 📊 Analytics & Monitoring

### Key Metrics to Track

| Metric | Target | Tracking Method |
|--------|--------|-----------------|
| [Metric 1] | [Target] | [Method] |
| [Metric 2] | [Target] | [Method] |
| [Metric 3] | [Target] | [Method] |

### Events to Track

```javascript
// Analytics events
analytics.track('[Event Name]', {
  property1: value1,
  property2: value2
});
```

---

## 🐛 Known Issues & Limitations

### Current Limitations

1. **[Limitation 1]**
   - Description: [Details]
   - Workaround: [If any]
   - Planned fix: [If planned]

2. **[Limitation 2]**
   - Description: [Details]
   - Workaround: [If any]
   - Planned fix: [If planned]

### Future Enhancements

- [Enhancement 1]
- [Enhancement 2]
- [Enhancement 3]

---

## 🔗 Referencias

→ **Project Overview**: [00-PROJECT-OVERVIEW.md](../00-PROJECT-OVERVIEW.md)
→ **Technical Reference**: [01-TECHNICAL-REFERENCE.md](../01-TECHNICAL-REFERENCE.md)
→ **Content Specifications**: [02-CONTENT-SPECIFICATIONS.md](../02-CONTENT-SPECIFICATIONS.md)
→ **Component Library**: [03-COMPONENT-LIBRARY.md](../03-COMPONENT-LIBRARY.md)
→ **Design Tokens**: [design-tokens.md](../quick-references/design-tokens.md)
→ **Accessibility**: [accessibility-checklist.md](../quick-references/accessibility-checklist.md)
→ **Performance**: [performance-budgets.md](../quick-references/performance-budgets.md)
→ **Browser Support**: [browser-compatibility.md](../quick-references/browser-compatibility.md)

---

## 📝 Change Log

### Version 1.0 - [Date]
- Initial feature specification

### Version 1.1 - [Date]
- [Change description]

---

## 👥 Contributors

- **Author**: [Name]
- **Reviewer**: [Name]
- **Last Updated By**: [Name]

---

**Template Version**: 1.0
**Last Updated**: 20 Enero 2025
**Status**: [Draft / In Review / Approved / In Development / Completed]
