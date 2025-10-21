// Personal information constants
// This file centralizes personal data for easy maintenance

export const PERSONAL_INFO = {
  name: {
    first: 'Alejandro',
    full: 'Alejandro de la Fuente de la Rosa',
  },
  title: 'Full Stack Developer',
  description:
    'Full Stack Developer passionate about creating innovative web solutions with modern technologies',
  location: 'Jaén, Andalucía, Spain',
  company: 'NTT DATA',
  role: 'Technical Leader Specialist',
  experience: '3+ years leading digital transformation',

  // Contact information
  contact: {
    email: 'llamamealex@gmail.com',
    phone: '+34 629 20 26 39',
    github: 'https://github.com/TellMeAlex',
    linkedin: 'https://www.linkedin.com/in/alejandro-de-la-fuente/',
  },

  // Specializations
  specializations: [
    'AI Integration',
    'ReactJS Development',
    'Microfrontends Architecture',
    'Technical Leadership',
  ],

  // Key projects
  keyProjects: [
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
    {
      name: 'HelloAuto Telemetry Dashboard',
      description: 'IoT vehicle fleet monitoring',
      role: 'Full Stack Developer',
    },
  ],
} as const

// Status message for CI/CD indicator
export const STATUS_MESSAGE =
  '✨ Portfolio actualizado - Octubre 2025 - CI/CD Automático Funcionando'

// Navigation anchors
export const NAVIGATION = {
  projects: '#projects',
  contact: '#contact',
  about: '#about',
  skills: '#skills',
} as const
