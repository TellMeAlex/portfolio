/**
 * Projects Showcase Feature Types
 * Source: prds/02-CONTENT-SPECIFICATIONS.md#proyectos-destacados
 */

export type ProjectCategory = 'enterprise' | 'web' | 'iot'
export type ProjectStatus = 'production' | 'completed'

export interface ProjectImpact {
  coverage?: string
  users?: string
  performance?: string
  scale?: string
  reach?: string
  errorReduction?: string
  uptime?: string
  automation?: string
  eventsPerDay?: string
  vehicles?: string
  responseTime?: string
  mentoring?: string
}

export interface Project {
  id: string
  name: string
  tagline: string
  category: ProjectCategory
  status: ProjectStatus
  confidential: boolean
  client: string
  period: {
    start: string
    end: string | null
    current: boolean
    display: string
  }
  description: {
    short: string
    long: string
  }
  role: string
  impact: ProjectImpact
  technologies: string[]
  tags: string[]
  images?: {
    hero?: string
  }
}

export interface ProjectsData {
  projects: Project[]
}
