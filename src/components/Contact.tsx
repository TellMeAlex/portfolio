import React from 'react'

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-pretty">
            I'm always open to discussing new opportunities, interesting
            projects, or just having a chat about technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="mailto:llamamealex@gmail.com"
              className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <svg
                className="mr-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Send Email
            </a>
            <a
              href="https://www.linkedin.com/in/alejandro-de-la-fuente/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-medium rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-200"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
