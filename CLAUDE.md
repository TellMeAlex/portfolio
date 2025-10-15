# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Modern professional portfolio website for Alejandro de la Fuente, Technical Leader Specialist at NTT DATA. Features a responsive Bento Grid design showcasing AI expertise, ReactJS proficiency, and technical leadership experience.

**Key Context**: This is a greenfield project following a systematic PRD-based implementation approach with 6 development phases.

## Project Structure

```
portfolio/
├── general-plan.md          # Complete project specification (371 lines)
├── prds/                    # Phase-based implementation documents
│   ├── README.md           # Project guide and implementation strategy
│   ├── PRD-01-Foundation-Design-System.md
│   ├── PRD-02-Core-Content-Implementation.md
│   ├── PRD-03-Experience-Timeline-Portfolio.md
│   ├── PRD-04-Advanced-Animations-Microinteractions.md
│   ├── PRD-05-Performance-Optimization-SEO.md
│   └── PRD-06-Final-Polish-Accessibility.md
└── [implementation files to be created]
```

## Implementation Architecture

### Technology Stack
- **Core**: HTML5, CSS3 Grid/Flexbox, Vanilla JavaScript
- **Optional Enhancement**: React for component architecture
- **Animations**: CSS Animations + Intersection Observer API
- **Typography**: Inter (body text) + JetBrains Mono (code)
- **Color Palette**: Navy (#0A192F) + Cyan (#64FFDA) + light variants

### Phase Dependencies
```
Phase 1 (Foundation) → Phase 2 (Core Content) → Phase 3 (Complex Features)
                    ↘ Phase 4 (Animations) ↗
                      Phase 5 (Performance) → Phase 6 (Polish)
```

### Bento Grid Layout
- **Responsive**: 1 column (mobile) → 2 columns (tablet) → 4 columns (desktop)
- **Card Sizes**: small (1x1), medium (2x1), large (2x2), xl (3x2)
- **Gap**: 1.5rem between cards
- **Key Sections**: Hero (3x2), About Me (2x2), Experience Timeline (3x2), Projects (3x3)

## Content Requirements

### Professional Information
- **Name**: Alejandro de la Fuente de la Rosa
- **Role**: Technical Leader Specialist at NTT DATA
- **Location**: Jaén, Andalucía, Spain
- **Experience**: 3+ years leading digital transformation
- **Specializations**: AI, ReactJS, Microfrontends, Technical Leadership

### Key Projects
1. **Inditex Store Management Platform** - Microfrontends architecture for all Spain stores
2. **RTVE Play CMS** - National broadcasting content management APIs
3. **HelloAuto Telemetry Dashboard** - IoT vehicle fleet monitoring

### Contact Information
- **Email**: llamamealex@gmail.com
- **LinkedIn**: linkedin.com/in/alejandro-de-la-fuente
- **GitHub**: github.com/TellMeAlex
- **Phone**: +34 629 20 26 39

## Performance Standards

### Required Metrics
- **Lighthouse Performance**: >90
- **Lighthouse Accessibility**: 100
- **WCAG 2.1 AA**: Full compliance
- **First Contentful Paint**: <1.5s
- **Largest Contentful Paint**: <2.5s
- **Mobile-first**: Touch-friendly responsive design

### Animation Standards
- **Entry**: Staggered fade-in (100ms between cards)
- **Scroll**: Intersection Observer threshold 0.2
- **Hover**: translateY(-8px) + shadow + glow effects
- **Transitions**: cubic-bezier(0.4, 0, 0.2, 1)

## Development Guidelines

### Implementation Order
1. **Always start with PRD-01** for foundation setup
2. **Read general-plan.md** for complete specifications
3. **Follow phase dependencies** - never skip Phase 1
4. **Validate quality gates** before proceeding to next phase
5. **Reference PRD README** for success criteria

### Code Standards
- **Semantic HTML5** with proper ARIA labels
- **Mobile-first CSS** with progressive enhancement
- **Modern JavaScript** (ES6+) with performance optimization
- **Accessibility-first** implementation from Phase 1
- **Component modularity** for maintainability

### File Organization
```
src/
├── index.html              # Main HTML structure
├── css/
│   ├── main.css           # Global styles
│   ├── grid.css           # Bento Grid layout
│   └── components/        # Component-specific styles
├── js/
│   ├── main.js            # Core functionality
│   ├── animations.js      # Scroll & hover animations
│   └── components/        # Component scripts
└── assets/
    ├── images/            # Optimized images (AVIF, WebP)
    └── fonts/             # Inter & JetBrains Mono
```

## Quality Validation

### Pre-deployment Checklist
- [ ] All PRD requirements implemented
- [ ] Lighthouse scores meet targets
- [ ] Cross-browser compatibility tested
- [ ] Mobile responsiveness validated
- [ ] Accessibility compliance verified
- [ ] Contact information accuracy confirmed
- [ ] Professional content review completed

### Testing Requirements
- **Performance**: Core Web Vitals monitoring
- **Accessibility**: Screen reader testing + keyboard navigation
- **Responsiveness**: Multiple device sizes and orientations
- **Content**: Professional accuracy and currency validation