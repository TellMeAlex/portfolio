/**
 * Skills Data
 * Source: prds/02-CONTENT-SPECIFICATIONS.md#habilidades-técnicas
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
    name: 'Frontend Mastery',
    icon: '🎨',
    skills: [
      { name: 'React', level: 95, proficiency: 'expert' },
      { name: 'Redux Toolkit', level: 90, proficiency: 'expert' },
      { name: 'TypeScript', level: 85, proficiency: 'expert' },
      { name: 'Microfrontends', level: 80, proficiency: 'advanced' },
    ],
  },
  {
    name: 'IA & Automatización',
    icon: '🤖',
    skills: [
      { name: 'GenAI', level: 90, proficiency: 'expert' },
      { name: 'Copilot', level: 85, proficiency: 'expert' },
      { name: 'Puppeteer', level: 88, proficiency: 'expert' },
    ],
  },
  {
    name: 'Backend & Cloud',
    icon: '⚙️',
    skills: [
      { name: 'Node.js', level: 88, proficiency: 'expert' },
      { name: 'Express', level: 85, proficiency: 'expert' },
      { name: 'Azure', level: 75, proficiency: 'advanced' },
    ],
  },
]
