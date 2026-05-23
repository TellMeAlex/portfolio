// Personal information constants
// This file centralizes personal data for easy maintenance
import { calculateYearsOfExperience } from '@/utils/date'

export const PERSONAL_INFO = {
  name: {
    first: 'Alejandro',
    full: 'Alejandro de la Fuente de la Rosa',
  },
  title: 'Technical Leader Specialist · Agentic AI',
  description:
    'Technical Leader Specialist en NTT DATA, especializado en IA agéntica, harness engineering y arquitectura microfrontends. Diseño sistemas donde humanos y agentes colaboran sin perder el techo de calidad.',
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
  },

  // Specializations
  specializations: [
    'Agentic AI & Harness Engineering',
    'Claude Code & Multi-agent Orchestration',
    'Microfrontends Architecture (React + TS)',
    'Technical Leadership & Mentoring',
  ],

  // Key projects
  keyProjects: [
    {
      name: 'ONLY-WORKS-ON-OLYMPUS',
      description: 'Meta-orquestador OSS para oh-my-opencode',
      role: 'Creator & Maintainer',
    },
    {
      name: 'NTTCoder OCX Registry',
      description: 'Registry de extensiones OpenCode para equipos NTT',
      role: 'Creator & Maintainer',
    },
    {
      name: 'Inditex Store Management Platform',
      description: 'Microfrontends architecture for all Spain stores',
      role: 'Technical Lead',
    },
    {
      name: 'RTVE Play CMS',
      description: 'National broadcasting content management APIs',
      role: 'Backend Developer',
    },
  ],
}

// Status message for CI/CD indicator
export const STATUS_MESSAGE = `✨ Portfolio actualizado - ${new Intl.DateTimeFormat('es-ES', { month: 'long', year: 'numeric' }).format(new Date())} - CI/CD Automático Funcionando`

// Navigation anchors
export const NAVIGATION = {
  projects: '#projects',
  contact: '#contact',
  about: '#about',
  skills: '#skills',
} as const
