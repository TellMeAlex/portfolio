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
      ariaLabel="Proyectos Destacados"
      className="projects-card"
      id="projects"
      keyboardHint="4"
    >
      <div className="projects-header">
        <h2 className="section-title" id="projects-heading">
          <span className="title-icon" aria-hidden="true">
            🚀
          </span>
          Proyectos Destacados
        </h2>

        <div
          className="projects-filter"
          role="tablist"
          aria-label="Filtrar proyectos por categoría"
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

      <div
        className="projects-grid"
        role="tabpanel"
        id="projects-panel"
        aria-labelledby={`tab-${activeFilter}`}
      >
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
      id={`tab-${filter}`}
      role="tab"
      aria-selected={isActive}
      aria-controls="projects-panel"
      data-filter={filter}
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

  const CardWrapper = project.url ? 'a' : 'div'
  const projectId = `project-${project.id}`

  return (
    <article
      className="project-item"
      data-category={project.category}
      data-project={project.id}
      aria-labelledby={`${projectId}-title`}
    >
      <CardWrapper
        href={project.url}
        target={project.url ? '_blank' : undefined}
        rel={project.url ? 'noopener noreferrer' : undefined}
        className="project-card-link"
        aria-label={project.url ? `Ver proyecto ${project.name}` : undefined}
        style={{
          textDecoration: 'none',
          color: 'inherit',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        {/* Project Image/Placeholder */}
        <div className="project-image">
          <div className="project-placeholder" aria-hidden="true">
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
          <header className="project-header">
            <h3 className="project-title" id={`${projectId}-title`}>{project.name}</h3>
            <div className="project-tags" role="list" aria-label="Etiquetas">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  role="listitem"
                  className={`project-tag project-tag--${tag.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>

          <p className="project-description">{project.description.short}</p>

          <div className="project-tech" role="list" aria-label="Tecnologías">
            {project.technologies.map((tech, index) => (
              <span key={index} className="tech-tag" role="listitem">
                {tech}
              </span>
            ))}
          </div>

          {impactEntries.length > 0 && (
            <div className="project-impact" aria-label="Impacto del proyecto">
              {impactEntries.map(([key, value]) => (
                <div key={key} className="impact-metric">
                  <span className="impact-number">{value}</span>
                  <span className="impact-label">
                    {key === 'coverage'
                      ? 'Cobertura'
                      : key === 'performance'
                        ? 'Rendimiento'
                        : key === 'scale'
                          ? 'Escalabilidad'
                          : key === 'reach'
                            ? 'Impacto'
                            : key === 'errorReduction'
                              ? 'Calidad'
                              : key === 'uptime'
                                ? 'Disponibilidad'
                                : key === 'eventsPerDay'
                                  ? 'Carga'
                                  : key === 'vehicles'
                                    ? 'Unidades'
                                    : key === 'students'
                                      ? 'Participantes'
                                      : key === 'repositories'
                                        ? 'Repositorios'
                                        : key === 'innovation'
                                          ? 'Innovación'
                                          : key === 'community'
                                            ? 'Comunidad'
                                            : key === 'ux'
                                              ? 'Experiencia'
                                              : key}
                  </span>
                </div>
              ))}
            </div>
          )}

          <div className="project-footer">
            <span className="project-role">{project.role}</span>
            <time className="project-period" dateTime={project.period.display}>{project.period.display}</time>
          </div>
        </div>
      </CardWrapper>
    </article>
  )
}
