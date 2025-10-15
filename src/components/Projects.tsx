import React from 'react'

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      description:
        'A modern, responsive portfolio built with React, TypeScript, and Vite. Features automated CI/CD deployment and comprehensive testing.',
      technologies: ['React', 'TypeScript', 'Vite', 'Docker'],
      github: 'https://github.com/TellMeAlex/portfolio',
      demo: 'https://tellmealex.dev',
    },
    {
      title: 'Project Coming Soon',
      description:
        'Exciting projects are in development. Stay tuned for innovative solutions and creative implementations.',
      technologies: ['TBD'],
      github: '#',
      demo: '#',
    },
  ]

  return (
    <section id="projects" className="section bg-white dark:bg-gray-800">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-pretty">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map(tech => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects