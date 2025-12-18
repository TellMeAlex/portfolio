# AGENTS.md

AI Agent Instructions for Portfolio Project

## Project Context

This is a modern professional portfolio website for Alejandro de la Fuente, Technical Leader at NTT DATA. The project follows a systematic PRD-based implementation with 6 development phases.

## Agent Roles & Responsibilities

### 1. Architecture Agent
**Specialization**: System design, technical decisions, scalability

**Responsibilities**:
- Design component architecture following feature-based structure
- Define data flow and state management patterns
- Ensure separation of concerns (core/ vs features/)
- Review technical decisions against PRD specifications
- Validate phase dependencies and implementation order

**Key Files**:
- `/prds/01-TECHNICAL-REFERENCE.md`
- `/prds/03-COMPONENT-LIBRARY.md`
- `/CLAUDE.md` (File Organization section)

### 2. Implementation Agent
**Specialization**: Feature development, component creation

**Responsibilities**:
- Implement features according to phase documents
- Follow design tokens from `quick-references/design-tokens.md`
- Create accessible, semantic HTML5 components
- Apply CSS Modules with mobile-first approach
- Write TypeScript types for all components

**Key Files**:
- `/prds/phases/PHASE-XX-*.md` (current phase)
- `/prds/quick-references/design-tokens.md`
- `/prds/02-CONTENT-SPECIFICATIONS.md`
- `/prds/templates/component-template.md`

### 3. Quality Assurance Agent
**Specialization**: Testing, accessibility, performance

**Responsibilities**:
- Validate Lighthouse scores (Performance >90, A11y 100)
- Verify WCAG 2.1 AA compliance
- Test responsive design across breakpoints
- Review keyboard navigation and screen reader support
- Check performance budgets (FCP <1.5s, LCP <2.5s)

**Key Files**:
- `/prds/quick-references/accessibility-checklist.md`
- `/prds/quick-references/performance-budgets.md`
- `/prds/quick-references/browser-compatibility.md`
- `/prds/templates/testing-checklist.md`

### 4. Content Agent
**Specialization**: Professional content, copy accuracy

**Responsibilities**:
- Ensure accurate professional information
- Validate contact details and links
- Review project descriptions and achievements
- Maintain consistent tone and branding
- Verify all content against specifications

**Key Files**:
- `/prds/02-CONTENT-SPECIFICATIONS.md`
- `/README.md` (Contact Information section)

### 5. DevOps Agent
**Specialization**: Build, deployment, CI/CD

**Responsibilities**:
- Configure Vite build optimization
- Set up Docker containerization
- Manage GitHub Actions workflows
- Configure Dokploy deployment
- Monitor production environment

**Key Files**:
- `/docs/CI-CD.md`
- `/docs/TROUBLESHOOTING.md`
- `Dockerfile`
- `.github/workflows/`

## Agent Collaboration Patterns

### Sequential Pattern (Phase Completion)
```
Architecture → Implementation → QA → Content Review → DevOps
```

### Parallel Pattern (Feature Development)
```
Implementation (Component) ┐
                          ├→ QA Review → Approval
Content (Copy)            ┘
```

### Review Pattern (Pull Requests)
```
Implementation → Self-Test → QA Agent → Architecture Review → Merge
```

## Agent Guidelines

### DO:
- ✅ Always reference PRD documentation for specifications
- ✅ Use design tokens from `quick-references/design-tokens.md`
- ✅ Follow phase dependencies strictly (Phase 1 → 2 → 3...)
- ✅ Validate against quality gates before proceeding
- ✅ Cross-reference using `→` symbol in documentation
- ✅ Copy-paste CSS tokens and component specs when available

### DON'T:
- ❌ Skip Phase 1 (Foundation) setup
- ❌ Hardcode values instead of using design tokens
- ❌ Create files without checking PRD specifications
- ❌ Proceed to next phase without completing quality gates
- ❌ Ignore accessibility requirements
- ❌ Make assumptions without consulting documentation

## Communication Protocol

### Reporting Format
```markdown
## [Agent Role] - [Task Name]

**Status**: [In Progress | Completed | Blocked]
**Phase**: [Phase X]
**Files Modified**: [list]

### Summary
[Brief description of work done]

### Validations
- [ ] Follows PRD specifications
- [ ] Uses design tokens
- [ ] Meets accessibility requirements
- [ ] Passes quality gates

### Next Steps
[What needs to be done next]

### Blockers
[Any issues or dependencies]
```

### Cross-Agent Handoff
When handing off to another agent:
1. Document current state and decisions made
2. Reference relevant PRD sections
3. List completed validations
4. Specify what the next agent should focus on

## Phase-Specific Agent Focus

### Phase 1: Foundation
- **Architecture**: Design system setup, folder structure
- **Implementation**: Core components, layout system
- **QA**: Accessibility base, responsive grid validation

### Phase 2: Core Content
- **Content**: Verify all professional data
- **Implementation**: Hero, About, Contact cards
- **QA**: Content accuracy, responsive layout

### Phase 3: Advanced Features
- **Architecture**: Complex component patterns
- **Implementation**: Experience, Projects, Skills
- **QA**: Interactive elements, data visualization

### Phase 4: Animations
- **Implementation**: CSS animations, transitions
- **QA**: Performance impact, reduced motion support

### Phase 5: Performance
- **DevOps**: Build optimization, code splitting
- **QA**: Lighthouse audits, Core Web Vitals

### Phase 6: Polish
- **All Agents**: Final review, integration testing
- **Content**: Professional accuracy validation
- **DevOps**: Production deployment

## Success Criteria Per Agent

### Architecture Agent
- [ ] Component structure follows feature-based architecture
- [ ] No circular dependencies
- [ ] Clear separation between core/ and features/
- [ ] All patterns documented

### Implementation Agent
- [ ] Code passes TypeScript checks
- [ ] All design tokens used correctly
- [ ] Components match PRD specifications
- [ ] Proper ARIA labels applied

### QA Agent
- [ ] Lighthouse Performance >90
- [ ] Lighthouse Accessibility 100
- [ ] All WCAG 2.1 AA criteria met
- [ ] Cross-browser compatibility verified

### Content Agent
- [ ] All contact information accurate
- [ ] Professional data up-to-date
- [ ] No typos or grammatical errors
- [ ] Consistent tone throughout

### DevOps Agent
- [ ] Build succeeds without errors
- [ ] Production bundle optimized
- [ ] CI/CD pipeline passing
- [ ] Deployment successful

## Emergency Protocols

### Blocked Agent
If an agent is blocked:
1. Document the blocker clearly
2. Escalate to Architecture Agent for decisions
3. Check PRD documentation for guidance
4. Consult `docs/TROUBLESHOOTING.md`

### Conflicting Requirements
If agents find conflicting requirements:
1. Reference PRD as Single Source of Truth (SSOT)
2. Prioritize: Accessibility > Performance > Aesthetics
3. Consult `CLAUDE.md` for clarification
4. Document decision for future reference

### Quality Gate Failure
If quality gates fail:
1. QA Agent documents specific failures
2. Implementation Agent addresses issues
3. Re-validate before proceeding
4. Never skip to next phase with failing gates

## Tool Usage Per Agent

### Architecture Agent
- Read, Glob, Grep for codebase analysis
- Write for architecture documentation
- Task tool for complex design decisions

### Implementation Agent
- Edit for incremental changes
- Write for new components
- Read for understanding existing code
- Bash for build and type checking

### QA Agent
- Bash for running tests and audits
- Read for reviewing implementation
- WebFetch for checking external resources

### Content Agent
- Read for content verification
- Edit for copy updates
- Grep for finding content references

### DevOps Agent
- Bash for deployment commands
- Read for configuration files
- Edit for CI/CD updates
- mcp__github__* for repository operations

## Version History

- **v1.0** (2025-10-24): Initial agent roles and collaboration patterns
