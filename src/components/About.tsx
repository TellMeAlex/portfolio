import React from 'react'

const About: React.FC = () => {
  return (
    <section id="about" className="section bg-white dark:bg-gray-800">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 text-pretty">
            I'm a passionate Full Stack Developer with expertise in modern web
            technologies. I love creating efficient, scalable, and user-friendly
            applications that solve real-world problems.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 text-pretty">
            When I'm not coding, you can find me exploring new technologies,
            contributing to open source projects, or sharing knowledge with the
            developer community.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About