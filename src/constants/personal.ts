// Personal information constants
// This file centralizes personal data for easy maintenance
import { calculateYearsOfExperience } from '@/utils/date'

export const PERSONAL_INFO = {
  name: {
    first: 'Alejandro',
    full: 'Alejandro de la Fuente de la Rosa',
  },
  title: 'Expert Architect · AI Champion · NTT DATA',
  description:
    'Expert Architect en NTT DATA, AI Champion para NTT DATA e Inditex y AI/SDD Delivery Lead. Lidero la adopción de IA aplicada al desarrollo de software — agentes, MCP, SDD — en equipos de más de 800 profesionales.',
  location: 'Jaén, Andalucía, Spain',
  company: 'NTT DATA',
  role: 'Expert Architect',
  experience: `${calculateYearsOfExperience('2021-02')}+ years leading digital transformation`,

  // Contact information
  contact: {
    email: 'llamamealex@gmail.com',
    phone: '+34 629 20 26 39',
    github: 'https://github.com/TellMeAlex',
    linkedin: 'https://www.linkedin.com/in/alejandro-dela-fuente/',
    twitter: 'https://x.com/TellMeAlex',
  },
}

// Section anchors used by the nav and the Alt+N keyboard shortcuts
export const NAVIGATION = {
  hero: '#hero',
  talks: '#charlas',
  timeline: '#cronologia',
  ask: '#ask',
  about: '#sobre-mi',
  contact: '#contacto',
} as const
