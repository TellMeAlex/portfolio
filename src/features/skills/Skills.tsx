/**
 * Skills Visualization Feature - Enhanced with Progress Bars
 * Animated skill bars with Intersection Observer
 */
import React from 'react'
import { Card } from '@/core/layout/Card'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { skillsData, type Skill, type SkillCategory } from './skillsData'
import './Skills.css'

export const Skills: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.3 })

  return (
    <Card
      size="large"
      ariaLabel="Habilidades Técnicas"
      className="skills-card"
      id="skills"
      keyboardHint="5"
    >
      <div className="skills-header">
        <h2 className="section-title">
          <span className="title-icon" aria-hidden="true">
            ⚡
          </span>
          Stack Técnico
        </h2>
      </div>

      <div className="skills-categories" ref={ref}>
        {skillsData.map((category, index) => (
          <SkillCategorySection
            key={category.name}
            category={category}
            isVisible={isVisible}
            animationDelay={index * 100}
          />
        ))}
      </div>
    </Card>
  )
}

interface SkillCategorySectionProps {
  category: SkillCategory
  isVisible: boolean
  animationDelay: number
}

const SkillCategorySection: React.FC<SkillCategorySectionProps> = ({
  category,
  isVisible,
  animationDelay,
}) => {
  return (
    <div className="skill-category" data-category={category.name.toLowerCase()}>
      <div className="category-header">
        <span className="category-icon" aria-hidden="true">
          {category.icon}
        </span>
        <h3 className="category-title">{category.name}</h3>
      </div>

      <div className="skills-list">
        {category.skills.map((skill, index) => (
          <SkillBar
            key={skill.name}
            skill={skill}
            isVisible={isVisible}
            animationDelay={animationDelay + index * 100}
          />
        ))}
      </div>
    </div>
  )
}

interface SkillBarProps {
  skill: Skill
  isVisible: boolean
  animationDelay: number
}

const SkillBar: React.FC<SkillBarProps> = ({
  skill,
  isVisible,
  animationDelay,
}) => {
  const proficiencyClass = `skill-item--${skill.proficiency}`

  return (
    <div className={`skill-item ${proficiencyClass}`}>
      <div className="skill-info">
        <span className="skill-name">{skill.name}</span>
        <span className="skill-percentage">{skill.level}%</span>
      </div>

      <div
        className="skill-bar-container"
        role="progressbar"
        aria-valuenow={skill.level}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${skill.name} proficiency: ${skill.level}%`}
      >
        <div
          className={`skill-bar ${isVisible ? 'skill-bar--animated' : ''}`}
          style={
            {
              '--skill-level': `${skill.level}%`,
              '--animation-delay': `${animationDelay}ms`,
            } as React.CSSProperties
          }
        />
      </div>
    </div>
  )
}
