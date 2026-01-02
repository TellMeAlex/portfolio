import React from 'react'
import { Card } from '@/core/layout/Card'
import './Contact.css'

export const Contact: React.FC = () => {
  return (
    <Card
      size="medium"
      ariaLabel="Información de contacto"
      className="contact-card"
      id="contact"
      keyboardHint="6"
    >
      <div className="card-header">
        <h2 className="card-title" id="contact-heading">
          Contacto
        </h2>
      </div>
      <div className="card-body">
        <div
          className="contact-info"
          role="list"
          aria-label="Detalles de contacto"
        >
          <div role="listitem">
            <a
              href="mailto:llamamealex@gmail.com"
              className="contact-link"
              aria-label="Enviar correo electrónico a llamamealex@gmail.com"
            >
              <span className="contact-icon" aria-hidden="true">
                📧
              </span>
              <span>llamamealex@gmail.com</span>
            </a>
          </div>

          <div className="contact-item" role="listitem">
            <span className="contact-icon" aria-hidden="true">
              📍
            </span>
            <span>Jaén, Andalucía, España</span>
          </div>
        </div>

        <nav className="contact-social" aria-label="Redes sociales">
          <a
            href="https://linkedin.com/in/alejandro-de-la-fuente"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social-link"
            aria-label="LinkeIn (abre en nueva pestaña)"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/TellMeAlex"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social-link"
            aria-label="GitHub (abre en nueva pestaña)"
          >
            GitHub
          </a>
        </nav>
      </div>
    </Card>
  )
}
