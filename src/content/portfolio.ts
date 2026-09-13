/**
 * Portfolio content — single source of truth for everything rendered on the page.
 * Bilingual strings are `{ es, en }` pairs resolved with `t()` from the language context.
 *
 * Keep this in sync with `server/facts.mjs`, which is what the `$ ask alex` agent knows.
 */
import type { Bi } from '@/i18n'
import { PERSONAL_INFO } from '@/constants/personal'

/** Category colours — shared by talk cards, timeline dots and filter chips. */
export const KIND_COLORS = {
  work: '#3b82f6',
  talk: '#a78bfa',
  project: '#34d399',
  all: '#60a5fa',
} as const

export type TimelineKind = 'work' | 'talk' | 'project'
export type TimelineFilter = TimelineKind | 'all'

export const SITE = {
  name: 'tellmealex',
  url: 'https://tellmealex.dev',
  displayUrl: 'tellmealex.dev',
  /** Drop the PDF in `public/cv.pdf` — this is where every CV button points. */
  cvUrl: '/cv.pdf',
  cvMeta: { pages: 2, sizeKb: 180, revision: '2026.09' },
  talksBaseUrl: 'https://codigosinsiesta.github.io',
}

export const HERO = {
  eyebrow: 'Technical Leader Specialist · NTT DATA · Jaén',
  title: {
    es: {
      lead: 'Soy Alejandro.',
      body: 'Construyo software con ',
      accent: 'criterio',
    },
    en: {
      lead: "I'm Alejandro.",
      body: 'I build software with ',
      accent: 'judgment',
    },
  } satisfies Bi<{ lead: string; body: string; accent: string }>,
  bio: {
    es: 'Llevo años peleando con código real: arquitecturas que se mantienen, equipos que iteran sin romper, IA que ayuda en vez de estorbar. Lidero frontend y adopción de IA en NTT DATA; lo que aprendo lo cuento en Código Sin Siesta.',
    en: 'Years wrestling with real code: architectures that hold up, teams that iterate without breaking, AI that helps instead of getting in the way. I lead frontend and AI adoption at NTT DATA; what I learn, I share at Código Sin Siesta.',
  } satisfies Bi,
  cvLabel: { es: 'Descargar CV · PDF', en: 'Download CV · PDF' } satisfies Bi,
  cvNote: `ES/EN · ${SITE.cvMeta.pages} pág. · rev. ${SITE.cvMeta.revision}`,
}

export interface TerminalCommand {
  cmd: string
  out: Array<{ color: string; text: Bi }>
}

/** Commands typed by the hero terminal, in order. */
export const TERMINAL_COMMANDS: TerminalCommand[] = [
  {
    cmd: 'whoami',
    out: [
      {
        color: '#cbd5e1',
        text: {
          es: 'alejandro · technical leader · ntt data · jaén',
          en: 'alejandro · technical leader · ntt data · jaén',
        },
      },
      {
        color: '#94a3b8',
        text: {
          es: '# construyo software con criterio. IA con cabeza.',
          en: '# I build software with judgment. AI with a clear head.',
        },
      },
    ],
  },
  {
    cmd: 'ls charlas/ | wc -l',
    out: [
      { color: '#34d399', text: { es: '9', en: '9' } },
      {
        color: '#94a3b8',
        text: {
          es: '# vibe-coding · subagentes · mcp · sdd · harness · llm-wiki…',
          en: '# vibe-coding · subagents · mcp · sdd · harness · llm-wiki…',
        },
      },
    ],
  },
  {
    cmd: 'cat tesis.md',
    out: [
      {
        color: '#f1f5f9',
        text: {
          es: 'El agente no sustituye el criterio. Lo amplifica.',
          en: "The agent doesn't replace judgment. It amplifies it.",
        },
      },
    ],
  },
  {
    cmd: 'cat valores.md',
    out: [
      {
        color: '#34d399',
        text: {
          es: '✓ arquitecturas que se mantienen',
          en: '✓ architectures that hold up',
        },
      },
      {
        color: '#34d399',
        text: {
          es: '✓ equipos que iteran sin romper',
          en: '✓ teams that iterate without breaking',
        },
      },
      {
        color: '#34d399',
        text: {
          es: '✓ IA que ayuda en vez de estorbar',
          en: '✓ AI that helps instead of getting in the way',
        },
      },
    ],
  },
]

export type TalkFormat = 'keynote' | 'talk' | 'workshop'

export interface Talk {
  id: string
  title: Bi
  /** Repo slug in the Código Sin Siesta GitHub org — also the deck URL path. */
  repo: string
  format: TalkFormat
  kind: Bi
  /** Duration in minutes (upper bound for ranges) — used by the "duración" sort. */
  minutes: number
  meta: string
  emoji: string
  color: string
  desc: Bi
}

/** The 9 public decks, most recent first (the default "reciente" order). */
export const TALKS: Talk[] = [
  {
    id: 'vibe-coding',
    title: {
      es: 'Vibe Coding vs Software Engineering',
      en: 'Vibe Coding vs Software Engineering',
    },
    repo: 'ai-presentation',
    format: 'keynote',
    kind: { es: 'keynote', en: 'keynote' },
    minutes: 60,
    meta: '21 slides',
    emoji: '🌀',
    color: KIND_COLORS.work,
    desc: {
      es: 'Framework 4R: seguridad, calidad, tests y resiliencia con IA.',
      en: '4R framework: security, quality, testing and resilience with AI.',
    },
  },
  {
    id: 'subagents-skills',
    title: { es: 'Subagentes y Skills', en: 'Subagents & Skills' },
    repo: 'subagents-skills-presentation',
    format: 'talk',
    kind: { es: 'charla', en: 'talk' },
    minutes: 45,
    meta: '45 min',
    emoji: '🤖',
    color: KIND_COLORS.talk,
    desc: {
      es: 'Patrones de orquestación y anatomía de una skill.',
      en: 'Orchestration patterns and skill anatomy.',
    },
  },
  {
    id: 'harness-engineering',
    title: { es: 'Harness Engineering', en: 'Harness Engineering' },
    repo: 'harness-engineering-presentation',
    format: 'talk',
    kind: { es: 'charla', en: 'talk' },
    minutes: 45,
    meta: '45 min',
    emoji: '⚙️',
    color: KIND_COLORS.work,
    desc: {
      es: 'Mismo modelo, mismo benchmark. La diferencia está en el harness.',
      en: 'Same model, same benchmark. The harness makes the difference.',
    },
  },
  {
    id: 'spec-driven',
    title: { es: 'Spec-Driven Development', en: 'Spec-Driven Development' },
    repo: 'spec-driven-development-presentation',
    format: 'talk',
    kind: { es: 'charla', en: 'talk' },
    minutes: 45,
    meta: '45 min',
    emoji: '📐',
    color: KIND_COLORS.work,
    desc: {
      es: 'La spec como contrato entre humano y agente.',
      en: 'The spec as a contract between human and agent.',
    },
  },
  {
    id: 'mcp-servers',
    title: { es: 'MCP Servers', en: 'MCP Servers' },
    repo: 'mcp-servers-presentation',
    format: 'talk',
    kind: { es: 'charla', en: 'talk' },
    minutes: 45,
    meta: '45 min',
    emoji: '🔌',
    color: KIND_COLORS.talk,
    desc: {
      es: 'Tools, resources, prompts y sampling explicados con código.',
      en: 'Tools, resources, prompts and sampling, explained with code.',
    },
  },
  {
    id: 'skills-vs-subagents',
    title: { es: 'Skills vs Subagentes', en: 'Skills vs Subagents' },
    repo: 'skills-vs-subagents-presentation',
    format: 'talk',
    kind: { es: 'charla', en: 'talk' },
    minutes: 30,
    meta: '30 min',
    emoji: '🎯',
    color: KIND_COLORS.talk,
    desc: {
      es: 'Cuándo usar cada uno. Tabla de decisión incluida.',
      en: 'When to use which. Decision table included.',
    },
  },
  {
    id: 'coding-agents',
    title: { es: 'Coding Agents', en: 'Coding Agents' },
    repo: 'coding-agents-presentation',
    format: 'talk',
    kind: { es: 'charla', en: 'talk' },
    minutes: 45,
    meta: '45 min',
    emoji: '🛠️',
    color: KIND_COLORS.work,
    desc: {
      es: 'Del autocompletado al agente autónomo, sin perder el control.',
      en: 'From autocomplete to autonomous agent, without losing control.',
    },
  },
  {
    id: 'taller-llm-wiki',
    title: { es: 'Taller LLM Wiki', en: 'LLM Wiki Workshop' },
    repo: 'taller-llm-wiki-presentation',
    format: 'workshop',
    kind: { es: 'taller ⚡', en: 'workshop ⚡' },
    minutes: 120,
    meta: '90–120 min',
    emoji: '📁',
    color: KIND_COLORS.project,
    desc: {
      es: 'Patrón Karpathy: markdown + LLM redactor + humano editor.',
      en: 'Karpathy pattern: markdown + LLM writer + human editor.',
    },
  },
  {
    id: 'taller-graphify',
    title: { es: 'Taller Graphify', en: 'Graphify Workshop' },
    repo: 'taller-graphify-presentation',
    format: 'workshop',
    kind: { es: 'taller ⚡', en: 'workshop ⚡' },
    minutes: 90,
    meta: '90 min',
    emoji: '⚡',
    color: KIND_COLORS.project,
    desc: {
      es: 'Grafos de conocimiento para agentes. Estrena el theme V4.',
      en: 'Knowledge graphs for agents. Debuts the V4 theme.',
    },
  },
]

export const talkUrl = (talk: Talk): string =>
  `${SITE.talksBaseUrl}/${talk.repo}/`

export interface TimelineEntry {
  id: string
  date: string
  title: Bi
  desc: Bi
  kind: TimelineKind
  /** Label shown on the right of the row (may differ from `kind`, e.g. "taller"). */
  kindLabel: Bi
}

/** `$ git log --oneline` — newest first. */
export const TIMELINE: TimelineEntry[] = [
  {
    id: 'redesign-2026',
    date: '2026·09',
    title: { es: 'Rediseño de tellmealex.dev', en: 'tellmealex.dev redesign' },
    desc: {
      es: 'Portafolio one-page sobre el sistema V4.',
      en: 'One-page portfolio on the V4 system.',
    },
    kind: 'project',
    kindLabel: { es: 'proyecto', en: 'project' },
  },
  {
    id: 'graphify-2026',
    date: '2026',
    title: { es: 'Taller Graphify', en: 'Graphify Workshop' },
    desc: {
      es: 'Estrena @codigosinsiesta/theme v0.7.0.',
      en: 'Debuts @codigosinsiesta/theme v0.7.0.',
    },
    kind: 'talk',
    kindLabel: { es: 'taller', en: 'workshop' },
  },
  {
    id: 'theme-2026',
    date: '2026',
    title: { es: '@codigosinsiesta/theme', en: '@codigosinsiesta/theme' },
    desc: {
      es: 'Design system V4: tokens, chrome, 26 shells, Storybook.',
      en: 'V4 design system: tokens, chrome, 26 shells, Storybook.',
    },
    kind: 'project',
    kindLabel: { es: 'proyecto', en: 'project' },
  },
  {
    id: 'harness-sdd-2026',
    date: '2026',
    title: {
      es: 'Harness Engineering · Spec-Driven Development',
      en: 'Harness Engineering · Spec-Driven Development',
    },
    desc: {
      es: 'Dos charlas sobre el trabajo alrededor del modelo.',
      en: 'Two talks on the work around the model.',
    },
    kind: 'talk',
    kindLabel: { es: 'charla', en: 'talk' },
  },
  {
    id: 'llm-wiki-2025',
    date: '2025',
    title: { es: 'Taller LLM Wiki', en: 'LLM Wiki Workshop' },
    desc: {
      es: '10 slides · 90–120 min · patrón Karpathy.',
      en: '10 slides · 90–120 min · Karpathy pattern.',
    },
    kind: 'talk',
    kindLabel: { es: 'taller', en: 'workshop' },
  },
  {
    id: 'orchestration-trilogy-2025',
    date: '2025',
    title: {
      es: 'MCP Servers · Subagentes y Skills · Skills vs Subagentes',
      en: 'MCP Servers · Subagents & Skills · Skills vs Subagents',
    },
    desc: {
      es: 'Trilogía sobre orquestación de agentes.',
      en: 'Trilogy on agent orchestration.',
    },
    kind: 'talk',
    kindLabel: { es: 'charla', en: 'talk' },
  },
  {
    id: 'tecnoboletin-2025',
    date: '2025',
    title: { es: 'tecnoboletin', en: 'tecnoboletin' },
    desc: {
      es: 'Lectura cómoda de boletines Telegram · Astro 5.',
      en: 'Readable Telegram digests · Astro 5.',
    },
    kind: 'project',
    kindLabel: { es: 'proyecto', en: 'project' },
  },
  {
    id: 'first-talks-2024',
    date: '2024',
    title: {
      es: 'Vibe Coding vs Software Engineering · Coding Agents',
      en: 'Vibe Coding vs Software Engineering · Coding Agents',
    },
    desc: {
      es: 'Primeras charlas de Código Sin Siesta. Framework 4R.',
      en: 'First Código Sin Siesta talks. 4R framework.',
    },
    kind: 'talk',
    kindLabel: { es: 'charla', en: 'talk' },
  },
  {
    id: 'ntt-2023',
    date: '2023 →',
    title: {
      es: 'Technical Leader Specialist · NTT DATA · GDNE',
      en: 'Technical Leader Specialist · NTT DATA · GDNE',
    },
    desc: {
      es: 'IA aplicada, ReactJS, microfrontends. Cliente: Inditex.',
      en: 'Applied AI, ReactJS, microfrontends. Client: Inditex.',
    },
    kind: 'work',
    kindLabel: { es: 'trabajo', en: 'work' },
  },
  {
    id: 'frontend-2021',
    date: '2021 – 23',
    title: {
      es: 'Frontend Engineer · [empresa]',
      en: 'Frontend Engineer · [company]',
    },
    desc: { es: '[completar]', en: '[to fill]' },
    kind: 'work',
    kindLabel: { es: 'trabajo', en: 'work' },
  },
]

export const TIMELINE_FILTERS: Array<{ id: TimelineFilter; label: Bi }> = [
  { id: 'all', label: { es: 'todo', en: 'all' } },
  { id: 'work', label: { es: 'trabajo', en: 'work' } },
  { id: 'talk', label: { es: 'charlas', en: 'talks' } },
  { id: 'project', label: { es: 'proyectos', en: 'projects' } },
]

export const CV_CARD = {
  title: { es: 'La versión clásica.', en: 'The classic version.' } satisfies Bi,
  desc: {
    es: 'Misma cronología, formato para recruiters y organizadores de eventos.',
    en: 'Same timeline, formatted for recruiters and event organisers.',
  } satisfies Bi,
  stats: [
    { value: String(TALKS.length), label: { es: 'charlas', en: 'talks' } },
    { value: '5+', label: { es: 'años', en: 'years' } },
  ] satisfies Array<{ value: string; label: Bi }>,
  pagesLabel: { es: 'páginas', en: 'pages' } satisfies Bi,
}

export const PROJECTS: Array<{ name: string; desc: Bi }> = [
  {
    name: 'Inditex · microfrontends',
    desc: {
      es: 'Transformación digital, React a escala. NTT DATA.',
      en: 'Digital transformation, React at scale. NTT DATA.',
    },
  },
  {
    name: '@codigosinsiesta/theme',
    desc: {
      es: 'Design system para decks · Svelte 5 · v0.7.0',
      en: 'Deck design system · Svelte 5 · v0.7.0',
    },
  },
  {
    name: 'tecnoboletin',
    desc: {
      es: 'Boletines Telegram legibles · Astro 5',
      en: 'Readable Telegram digests · Astro 5',
    },
  },
]

export const WHOAMI = {
  bio: {
    es: 'Technical Leader Specialist en NTT DATA (GDNE). Jaén. Años peleando con código real: arquitecturas que se mantienen, equipos que iteran sin romper, IA que ayuda en vez de estorbar.',
    en: 'Technical Leader Specialist at NTT DATA (GDNE). Jaén. Years wrestling with real code: architectures that hold up, teams that iterate without breaking, AI that helps instead of getting in the way.',
  } satisfies Bi,
  note: {
    es: '# esta web fue construida con agentes de IA. Y con criterio.',
    en: '# this site was built with AI agents. And with judgment.',
  } satisfies Bi,
}

export const STACK = [
  'React',
  'TypeScript',
  'Microfrontends',
  'Astro',
  'Svelte 5',
  'Node',
  'Claude Code',
  'MCP',
  'GSAP',
  'Tailwind',
]

export const CONTACT_LINKS: Array<{
  icon: string
  label: string
  href: string
}> = [
  { icon: '🌐', label: SITE.displayUrl, href: SITE.url },
  {
    icon: '🐙',
    label: 'github.com/TellMeAlex',
    href: PERSONAL_INFO.contact.github,
  },
  { icon: '🐦', label: '@TellMeAlex', href: PERSONAL_INFO.contact.twitter },
  {
    icon: '💼',
    label: 'linkedin/alejandro-de-la-fuente',
    href: PERSONAL_INFO.contact.linkedin,
  },
]

export const ASK = {
  title: { es: 'Pregúntale a mi CV.', en: 'Ask my CV.' } satisfies Bi,
  intro: {
    es: 'Un agente con acceso solo a lo que hay en esta página: experiencia, charlas, proyectos y stack. Responde en tu idioma, en cuatro frases como mucho. Si no lo sabe, te manda a mi correo.',
    en: "An agent with access only to what's on this page: experience, talks, projects and stack. Answers in your language, four sentences max. If it doesn't know, it points you to my email.",
  } satisfies Bi,
  tryLabel: { es: 'Prueba con', en: 'Try' } satisfies Bi,
  suggestions: [
    { es: '¿En qué charla hablas de MCP?', en: 'Which talk covers MCP?' },
    { es: '¿Qué haces en NTT DATA?', en: 'What do you do at NTT DATA?' },
    {
      es: 'Resume tu experiencia en 3 líneas',
      en: 'Summarize your experience in 3 lines',
    },
    {
      es: '¿Haces talleres? ¿De cuánto?',
      en: 'Do you run workshops? How long?',
    },
  ] satisfies Bi[],
  footnote: {
    es: '# contexto: cv.md + charlas/ · sin memoria entre sesiones · no inventa',
    en: "# context: cv.md + charlas/ · no memory across sessions · doesn't make things up",
  } satisfies Bi,
  windowTitle: { es: 'contexto: cv.md', en: 'context: cv.md' } satisfies Bi,
  greeting: {
    es: 'Hola. Soy el agente de Alejandro. Pregúntame por su experiencia, sus charlas o su stack — respondo solo con lo que hay en su CV.',
    en: "Hi. I'm Alejandro's agent. Ask me about his experience, talks or stack — I only answer from what's in his CV.",
  } satisfies Bi,
  busy: { es: 'leyendo cv.md…', en: 'reading cv.md…' } satisfies Bi,
  placeholder: {
    es: 'pregunta algo sobre Alejandro…',
    en: 'ask something about Alejandro…',
  } satisfies Bi,
  send: { es: 'enviar ↵', en: 'send ↵' } satisfies Bi,
  error: {
    es: 'Algo falló al consultar. Inténtalo de nuevo.',
    en: 'Something failed. Try again.',
  } satisfies Bi,
}
