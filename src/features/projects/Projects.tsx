/**
 * Projects Showcase Feature
 * Interactive projects showcase with filtering
 * Source: prds/phases/PHASE-03-Advanced-Features.md#step-2
 */
import React, { useState } from 'react'
import { Card } from '@/core/layout/Card'
import { projectsData } from './projectsData'
import type { Project, ProjectCategory } from './Projects.types'
import './Projects.css'

type FilterOption = 'all' | ProjectCategory

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterOption>('all')

  const filteredProjects =
    activeFilter === 'all'
      ? projectsData.projects
      : projectsData.projects.filter(p => p.category === activeFilter)

  const handleFilterChange = (filter: FilterOption) => {
    setActiveFilter(filter)
  }

  return (
    <Card
      size="xl"
      ariaLabel="Featured Projects"
      className="projects-card"
      id="projects"
    >
      <div className="projects-header">
        <h2 className="section-title">
          <span className="title-icon" aria-hidden="true">
            🚀
          </span>
          Proyectos Destacados
        </h2>

        <div
          className="projects-filter"
          role="group"
          aria-label="Filter projects by category"
        >
          <FilterButton
            label="Todos"
            filter="all"
            isActive={activeFilter === 'all'}
            onClick={handleFilterChange}
          />
          <FilterButton
            label="Enterprise"
            filter="enterprise"
            isActive={activeFilter === 'enterprise'}
            onClick={handleFilterChange}
          />
          <FilterButton
            label="Web Apps"
            filter="web"
            isActive={activeFilter === 'web'}
            onClick={handleFilterChange}
          />
          <FilterButton
            label="IoT"
            filter="iot"
            isActive={activeFilter === 'iot'}
            onClick={handleFilterChange}
          />
          <FilterButton
            label="IA & Agentes"
            filter="ai"
            isActive={activeFilter === 'ai'}
            onClick={handleFilterChange}
          />
        </div>
      </div>

      <div className="projects-grid">
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Card>
  )
}

interface FilterButtonProps {
  label: string
  filter: FilterOption
  isActive: boolean
  onClick: (filter: FilterOption) => void
}

const FilterButton: React.FC<FilterButtonProps> = ({
  label,
  filter,
  isActive,
  onClick,
}) => {
  return (
    <button
      className={`filter-btn ${isActive ? 'filter-btn--active' : ''}`}
      data-filter={filter}
      aria-pressed={isActive}
      onClick={() => onClick(filter)}
    >
      {label}
    </button>
  )
}

interface ProjectCardProps {
  project: Project
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const statusIcon =
    project.status === 'production'
      ? '🟢'
      : project.status === 'completed'
        ? '✅'
        : '🔵'
  const statusText =
    project.status === 'production'
      ? 'En Producción'
      : project.status === 'completed'
        ? 'Completado'
        : 'En Desarrollo'

  // Get first 2 impact metrics
  const impactEntries = Object.entries(project.impact).slice(0, 3)

  return (
    <article
      className="project-item"
      data-category={project.category}
      data-project={project.id}
    >
      {/* Project Image/Placeholder */}
      <div className="project-image">
        <div className="project-placeholder">
          <span className="placeholder-icon">
            {project.category === 'enterprise'
              ? '🏢'
              : project.category === 'web'
                ? '🌐'
                : project.category === 'iot'
                  ? '📡'
                  : '🤖'}
          </span>
        </div>
        <div className="project-overlay">
          <div className="project-status">
            <span
              className={`status-indicator status-indicator--${project.status}`}
              aria-label={statusText}
            >
              {statusIcon}
            </span>
            <span className="status-text">{statusText}</span>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="project-content">
        <div className="project-header">
          <h3 className="project-title">{project.name}</h3>
          <div className="project-tags">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className={`project-tag project-tag--${tag.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <p className="project-description">{project.description.short}</p>

        <div className="project-tech">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>

        {impactEntries.length > 0 && (
          <div className="project-impact">
            {impactEntries.map(([key, value]) => (
              <div key={key} className="impact-metric">
                <span className="impact-number">{value}</span>
                <span className="impact-label">
                  {key === 'coverage'
                    ? 'Cobertura'
                    : key === 'performance'
                      ? 'Mejora'
                      : key === 'scale'
                        ? 'Escala'
                        : key === 'reach'
                          ? 'Alcance'
                          : key === 'errorReduction'
                            ? 'Reducción errores'
                            : key === 'uptime'
                              ? 'Uptime'
                              : key === 'eventsPerDay'
                                ? 'Eventos/día'
                                : key === 'vehicles'
                                  ? 'Vehículos'
                                  : key === 'students'
                                    ? 'Estudiantes'
                                    : key === 'repositories'
                                      ? 'Repositorios'
                                      : key}
                </span>
              </div>
            ))}
          </div>
        )}

        <div className="project-footer">
          <span className="project-role">{project.role}</span>
          <span className="project-period">{project.period.display}</span>
        </div>
      </div>
    </article>
  )
}
