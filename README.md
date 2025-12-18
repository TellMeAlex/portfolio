# Portfolio - Alejandro de la Fuente

A premium, highly accessible, and modern portfolio built with **React 19**, **TypeScript**, and **Vanilla CSS**. This project demonstrates advanced frontend architecture, a robust design system, and state-of-the-art accessibility features.

## 🚀 Live Demo
[Check it out here!](https://tellmealex.dev/)

## ✨ Key Features

- **Responsive Bento Grid**: A dynamic layout that adapts to all screen sizes using CSS Grid.
- **Multi-Palette Theme System**: Choose between 5 primary color palettes (Navy & Cyan, Deep Purple, Emerald, Amber, Coral).
- **Auto Dark/Light Mode**: Respects system preferences with manual toggle.
- **Enhanced Accessibility**:
  - AA-compliant color contrast in all themes.
  - Custom Accessibility Panel with high-contrast settings.
  - Full keyboard navigation and semantic HTML.
- **Professional Sections**:
  - Interactive Experience Timeline with lazy loading.
  - Filterable Project Showcase.
  - Animated Skill Mastery bars.
  - Real-time Impact Counters.
- **Performance Optimized**: Lazy loading of below-the-fold components and manual chunking for optimal bundle size.

## 🛠️ Tech Stack

- **Framework**: [React 19](https://reactjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Bundler**: [Vite](https://vitejs.dev/)
- **Styling**: Vanilla CSS with Design Tokens (CSS Variables)
- **Icons**: [Lucide React](https://lucide.dev/) (via feature imports)
- **Testing**: [Vitest](https://vitest.dev/) & [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- **Animations**: CSS Animations & Transitions

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── core/           # Shared foundations
│   │   ├── design-system/  # Tokens, reset, typography
│   │   ├── layout/         # Grid, Nav, Card components
│   │   └── ui/             # Reusable UI elements (Button, ThemeToggle)
│   ├── features/       # Business logic / Sections
│   │   ├── experience/     # Timeline & career data
│   │   ├── projects/       # Filterable showcase
│   │   ├── skills/         # Technical stack visualization
│   │   └── ...            # Other sections
│   ├── App.tsx         # Main entry & lazy loading strategy
│   └── main.tsx        # Render root
├── public/             # Static assets
└── tests/              # Test suites
```

## 📋 Available Scripts

- `npm run dev`: Starts the development server on `localhost:3000`.
- `npm run build`: Compiles TypeScript and builds for production.
- `npm run preview`: Locally preview the production build.
- `npm test`: Runs the test suite with Vitest.
- `npm run lint`: Performs static analysis and checks for errors.

## 🤝 Contributing

This project uses **Husky** for pre-commit hooks (linting and formatting) to maintain code quality. Please ensure tests pass before pushing.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

MIT © Alejandro de la Fuente de la Rosa