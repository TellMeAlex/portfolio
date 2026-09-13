// Personal information constants
// This file centralizes personal data for easy maintenance
import { calculateYearsOfExperience } from '@/utils/date'

export const PERSONAL_INFO = {
  name: {
    first: 'Alejandro',
    full: 'Alejandro de la Fuente de la Rosa',
  },
  title: 'Technical Leader Specialist · NTT DATA',
  description:
    'Technical Leader Specialist en NTT DATA (GDNE), especializado en IA agéntica, ReactJS y arquitectura microfrontends. Construyo software con criterio; IA aplicada con cabeza.',
  location: 'Jaén, Andalucía, Spain',
  company: 'NTT DATA',
  role: 'Technical Leader Specialist',
  experience: `${calculateYearsOfExperience('2021-02')}+ years leading digital transformation`,

  // Contact information
  contact: {
    email: 'llamamealex@gmail.com',
    phone: '+34 629 20 26 39',
    github: 'https://github.com/TellMeAlex',
    linkedin: 'https://www.linkedin.com/in/alejandro-de-la-fuente/',
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
