import React from 'react'
import { Card } from '@/core/layout/Card'
import './Contact.css'

export const Contact: React.FC = () => {
  return (
    <Card
      size="medium"
      ariaLabel="Contact information"
      className="contact-card"
      id="contact"
    >
      <div className="card-header">
        <h2 className="card-title">Contacto</h2>
      </div>
      <div className="card-body">
        <div className="contact-info">
          <a
            href="mailto:llamamealex@gmail.com"
            className="contact-link"
            aria-label="Send email to llamamealex@gmail.com"
          >
            <span className="contact-icon" aria-hidden="true">
              📧
            </span>
            <span>llamamealex@gmail.com</span>
          </a>

          <div className="contact-item">
            <span className="contact-icon" aria-hidden="true">
              📍
            </span>
            <span>Jaén, Andalucía, España</span>
          </div>
        </div>

        <div className="contact-social">
          <a
            href="https://linkedin.com/in/alejandro-de-la-fuente"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social-link"
            aria-label="Visit LinkedIn profile (opens in new tab)"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/TellMeAlex"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social-link"
            aria-label="Visit GitHub profile (opens in new tab)"
          >
            GitHub
          </a>
        </div>
      </div>
    </Card>
  )
}
