# Component: [Component Name]

**Metadata**
- **Category**: [UI/Layout/Interactive/Utility]
- **Complexity**: [🟢 Low / 🟡 Medium / 🔴 High]
- **Used in Phases**: [Phase 1, Phase 2, etc.]

---

## 📋 Overview

[Brief description of what this component does and why it's needed]

---

## 🎨 Variantes

- **Variant 1**: [Description]
- **Variant 2**: [Description]
- **Variant 3**: [Description]

---

## 🏗️ Anatomía

### HTML Structure

```html
<!-- Base component structure -->
<[element] class="component-name component-name--variant">
  <div class="component-header">
    <!-- Header content -->
  </div>

  <div class="component-body">
    <!-- Main content -->
  </div>

  <div class="component-footer">
    <!-- Footer content (optional) -->
  </div>
</[element]>
```

---

## 💅 Estilos Base

### CSS

```css
/* Base Component Styles */
.component-name {
  /* Layout */
  display: flex;
  flex-direction: column;

  /* Spacing */
  padding: var(--space-[size]);
  gap: var(--space-[size]);

  /* Visual */
  background: var(--color-[name]);
  color: var(--color-[name]);
  border-radius: var(--radius-[size]);
  box-shadow: var(--shadow-[size]);

  /* Transitions */
  transition: all var(--transition-base) var(--ease-out);
}

/* Variant Styles */
.component-name--variant1 {
  /* Variant-specific styles */
}

.component-name--variant2 {
  /* Variant-specific styles */
}

/* Responsive */
@media (max-width: 768px) {
  .component-name {
    /* Mobile adjustments */
  }
}
```

---

## 🎭 Estados

### Required States

- **Default**: [Description of default state]
  ```css
  .component-name {
    /* Default styles */
  }
  ```

- **Hover**: [Description of hover state]
  ```css
  .component-name:hover {
    /* Hover styles */
  }
  ```

- **Focus**: [Description of focus state]
  ```css
  .component-name:focus-visible {
    outline: 2px solid var(--color-cyan);
    outline-offset: 4px;
  }
  ```

- **Active**: [Description of active state]
  ```css
  .component-name:active {
    /* Active styles */
  }
  ```

- **Disabled**: [Description of disabled state]
  ```css
  .component-name:disabled,
  .component-name--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  ```

- **Loading**: [Description of loading state]
  ```css
  .component-name--loading {
    /* Loading styles */
  }
  ```

- **Error**: [Description of error state]
  ```css
  .component-name--error {
    border-color: var(--color-error);
  }
  ```

---

## ♿ Accessibility

### ARIA Attributes

- **Role**: `[role]` - [Description]
- **aria-label**: [When to use]
- **aria-labelledby**: [When to use]
- **aria-describedby**: [When to use]
- **aria-expanded**: [For expandable components]
- **aria-hidden**: [For decorative elements]

### Keyboard Support

| Key | Action |
|-----|--------|
| `Tab` | [Action] |
| `Shift + Tab` | [Action] |
| `Enter` | [Action] |
| `Space` | [Action] |
| `Escape` | [Action] |
| `Arrow Keys` | [Action if applicable] |

### Screen Reader Support

- **Announces**: [What screen readers announce]
- **Label requirements**: [Required labels/descriptions]
- **State changes**: [How state changes are announced]

### Contrast Compliance

| Element | Contrast Ratio | WCAG Level |
|---------|----------------|------------|
| [Element 1] | [Ratio]:1 | [AA/AAA] |
| [Element 2] | [Ratio]:1 | [AA/AAA] |

**Verification**: All contrasts meet WCAG 2.1 Level AA minimum (4.5:1 for text, 3:1 for UI components)

---

## 🎬 JavaScript (if applicable)

### Initialization

```javascript
// Component initialization
class ComponentName {
  constructor(element, options = {}) {
    this.element = element;
    this.options = {
      // Default options
      ...options
    };
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.render();
  }

  setupEventListeners() {
    // Event listeners
  }

  render() {
    // Rendering logic
  }

  destroy() {
    // Cleanup
  }
}

// Usage
const component = new ComponentName(
  document.querySelector('.component-name')
);
```

### Event Handlers

```javascript
// Common event handlers
function handleClick(event) {
  // Click handler
}

function handleKeydown(event) {
  // Keyboard handler
}

function handleFocus(event) {
  // Focus handler
}
```

---

## 📝 Ejemplos de Uso

### Ejemplo 1: [Use Case Name]

```html
<!-- Example HTML -->
<div class="component-name">
  <!-- Example content -->
</div>
```

**Description**: [What this example demonstrates]

### Ejemplo 2: [Another Use Case]

```html
<!-- Example HTML -->
<div class="component-name component-name--variant">
  <!-- Example content -->
</div>
```

**Description**: [What this example demonstrates]

### Ejemplo 3: [Complex Example]

```html
<!-- Example HTML -->
<div class="component-name" data-option="value">
  <!-- Example content with more complexity -->
</div>
```

```javascript
// Associated JavaScript
const component = new ComponentName(element, {
  option1: value1,
  option2: value2
});
```

**Description**: [What this example demonstrates]

---

## 🧪 Testing

### Manual Testing Checklist

- [ ] Component renders correctly
- [ ] All variants display properly
- [ ] All states work as expected (hover, focus, active, disabled)
- [ ] Keyboard navigation functional
- [ ] Screen reader announces correctly
- [ ] Responsive behavior works on mobile/tablet/desktop
- [ ] Theme toggle works (light/dark)
- [ ] Animations respect `prefers-reduced-motion`
- [ ] Contrast ratios meet WCAG AA

### Automated Testing

```javascript
// Example test
describe('ComponentName', () => {
  test('renders correctly', () => {
    const component = new ComponentName(element);
    expect(component.element).toBeTruthy();
  });

  test('handles keyboard navigation', () => {
    // Test keyboard interactions
  });

  test('announces to screen readers', () => {
    // Test ARIA attributes
  });
});
```

---

## 🔗 Referencias

→ **Technical Reference**: [01-TECHNICAL-REFERENCE.md](../01-TECHNICAL-REFERENCE.md#relevant-section)
→ **Design Tokens**: [design-tokens.md](../quick-references/design-tokens.md)
→ **Accessibility**: [accessibility-checklist.md](../quick-references/accessibility-checklist.md)
→ **Related Components**: [Other related components]
→ **PRDs**: [Phases that use this component]

---

## 📊 Component Metadata

**Created**: [Date]
**Last Updated**: [Date]
**Version**: 1.0
**Status**: [Draft / In Review / Approved / Implemented]

---

## 💡 Implementation Notes

### Best Practices

- [Best practice 1]
- [Best practice 2]
- [Best practice 3]

### Common Pitfalls

- ❌ [Pitfall 1] → ✅ [Solution]
- ❌ [Pitfall 2] → ✅ [Solution]
- ❌ [Pitfall 3] → ✅ [Solution]

### Performance Considerations

- [Performance tip 1]
- [Performance tip 2]
- [Performance tip 3]

---

**Template Version**: 1.0
**Last Updated**: 20 Enero 2025
