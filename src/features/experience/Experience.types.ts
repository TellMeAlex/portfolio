/**
 * Experience Timeline Feature Types
 */

export interface Position {
  title: string
  level: 'Leadership' | 'Senior' | 'Mid-level'
  period: {
    start: string
    end: string | null
    current: boolean
    display: string
  }
  description?: string
  responsibilities: string[]
  achievements?: string[]
  technologies: string[]
}

export interface Company {
  name: string
  location: string
  website?: string
  industry?: string
  period: {
    start: string
    end: string | null
    current: boolean
    displayStart: string
    displayEnd: string
    totalDuration: string
  }
  positions: Position[]
}

export interface ExperienceData {
  companies: Company[]
}
