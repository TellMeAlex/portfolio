# Portfolio - Alejandro de la Fuente

A premium, highly accessible, and modern portfolio built with **React 19**, **TypeScript**, and **Vanilla CSS**. This project demonstrates advanced frontend architecture, a robust design system, and state-of-the-art accessibility features.

## 🚀 Live Demo

[Check it out here!](https://tellmealex.dev/)

## ✨ Key Features

- **Terminal hero**: a self-typing `zsh` session (`whoami`, `ls charlas/`, `cat tesis.md`, `cat valores.md`) next to the headline.
- **`$ ls charlas/`**: the nine Código Sin Siesta decks, sortable by recency, topic or duration.
- **`$ git log --oneline`**: a filterable timeline (todo · trabajo · charlas · proyectos) with an animated spine and a sticky CV download card.
- **`$ ask alex`**: a chatbot that answers questions about Alejandro using only the facts on the page — powered by Claude through `POST /api/ask`, with a demo fallback when no API key is configured.
- **Bilingual ES/EN**: one toggle switches every string; the choice is remembered and mirrored to `<html lang>`.
- **Accessibility first**: semantic landmarks, skip links, keyboard shortcuts (Alt+1–6), `prefers-reduced-motion` support, self-hosted fonts under a strict CSP.

## 🛠️ Tech Stack

- **Framework**: [React 19](https://reactjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Bundler**: [Vite](https://vitejs.dev/)
- **Styling**: Vanilla CSS with Design Tokens (dark blueprint palette, Space Grotesk / Inter / JetBrains Mono via `@fontsource-variable`)
- **Chatbot**: [Anthropic SDK](https://github.com/anthropics/anthropic-sdk-typescript) (`claude-opus-5`) behind a zero-dependency Node server
- **Testing**: [Vitest](https://vitest.dev/) & [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── content/portfolio.ts   # All copy (ES/EN), talks, timeline, stack, contact
│   ├── i18n/                  # LanguageProvider + useLang()
│   ├── core/
│   │   ├── design-system/     # Tokens, reset, typography, animations
│   │   ├── layout/            # SkipLinks
│   │   └── ui/                # Eyebrow, TerminalWindow, ErrorBoundary
│   ├── features/              # nav · hero · talks · timeline · ask · about · footer
│   ├── App.tsx
│   └── main.tsx
├── server/
│   ├── index.mjs              # Production server: static dist/ + /api/ask
│   ├── ask.mjs                # Claude handler (also mounted on the Vite dev server)
│   └── facts.mjs              # The only context the agent gets
└── public/                    # Static assets — drop the CV at public/cv.pdf
```

## 📋 Available Scripts

- `npm run dev`: Starts the development server on `localhost:3000` (`/api/ask` included).
- `npm run build`: Compiles TypeScript and builds for production.
- `npm start`: Serves the production build with the Node server (`PORT`, default 80).
- `npm run preview`: Locally preview the production build.
- `npm test`: Runs the test suite with Vitest.
- `npm run lint`: Performs static analysis and checks for errors.

### Environment

Copy `.env.example` and set `ANTHROPIC_API_KEY` to make `$ ask alex` answer for real. Without it the endpoint returns a demo message, so the site runs locally with no secrets.

## 🤝 Contributing

This project uses **Husky** for pre-commit hooks (linting and formatting) to maintain code quality. Please ensure tests pass before pushing.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

MIT © Alejandro de la Fuente de la Rosa
