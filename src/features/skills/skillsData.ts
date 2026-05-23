/**
 * Skills Data
 */

export interface Skill {
  name: string
  level: number
  proficiency: 'expert' | 'advanced' | 'intermediate'
}

export interface SkillCategory {
  name: string
  icon: string
  skills: Skill[]
}

export const skillsData: SkillCategory[] = [
  {
    name: 'Agentic AI & Harnesses',
    icon: '🤖',
    skills: [
      { name: 'Claude Code', level: 95, proficiency: 'expert' },
      { name: 'Multi-agent Orchestration', level: 90, proficiency: 'expert' },
      {
        name: 'MCP (Model Context Protocol)',
        level: 88,
        proficiency: 'expert',
      },
      { name: 'Harness Engineering', level: 85, proficiency: 'expert' },
      { name: 'Spec-Driven Development', level: 80, proficiency: 'advanced' },
      {
        name: 'OpenCode / Pi / OSS Harnesses',
        level: 80,
        proficiency: 'advanced',
      },
    ],
  },
  {
    name: 'Frontend Mastery',
    icon: '🎨',
    skills: [
      { name: 'React', level: 95, proficiency: 'expert' },
      { name: 'TypeScript', level: 90, proficiency: 'expert' },
      { name: 'Microfrontends', level: 85, proficiency: 'expert' },
      { name: 'Redux Toolkit / RTK Query', level: 90, proficiency: 'expert' },
      { name: 'Vite & Modern Tooling', level: 85, proficiency: 'expert' },
    ],
  },
  {
    name: 'Backend & Cloud',
    icon: '⚙️',
    skills: [
      { name: 'Node.js', level: 88, proficiency: 'expert' },
      { name: 'Express / REST APIs', level: 85, proficiency: 'expert' },
      { name: 'Puppeteer / Automation', level: 88, proficiency: 'expert' },
      { name: 'Azure', level: 75, proficiency: 'advanced' },
      { name: 'CI/CD & DevContainers', level: 80, proficiency: 'advanced' },
    ],
  },
]
