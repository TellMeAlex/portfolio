import React from 'react'
import { Card } from '@/core/layout/Card'
import { Button } from '@/core/ui/Button'
import './Contact.css'

export const Contact: React.FC = () => {
  return (
    <Card size="medium" ariaLabel="Contact information" className="contact-card">
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
          <Button
            variant="tertiary"
            size="small"
            onClick={() =>
              window.open(
                'https://linkedin.com/in/alejandro-de-la-fuente',
                '_blank'
              )
            }
            ariaLabel="Visit LinkedIn profile"
          >
            LinkedIn
          </Button>
          <Button
            variant="tertiary"
            size="small"
            onClick={() => window.open('https://github.com/TellMeAlex', '_blank')}
            ariaLabel="Visit GitHub profile"
          >
            GitHub
          </Button>
        </div>
      </div>
    </Card>
  )
}
