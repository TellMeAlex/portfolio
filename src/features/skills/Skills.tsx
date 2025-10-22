import React from 'react'
import { Card } from '../../core/layout/Card'
import './Skills.css'

interface SkillTag {
  name: string
  category?: string
}

export const Skills: React.FC = () => {
  const skills: SkillTag[] = [
    { name: 'React', category: 'Frontend' },
    { name: 'TypeScript', category: 'Frontend' },
    { name: 'AI', category: 'Emerging Tech' },
    { name: 'Microfrontends', category: 'Architecture' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Leadership', category: 'Soft Skills' },
  ]

  return (
    <Card size="medium" ariaLabel="Technical skills overview">
      <div className="skills-card">
        <div className="card-header">
          <h2 className="card-title">Habilidades</h2>
        </div>
        <div className="card-body">
          <div className="skills-tags">
            {skills.map(skill => (
              <span
                key={skill.name}
                className="skill-tag"
                title={skill.category}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Card>
  )
}
