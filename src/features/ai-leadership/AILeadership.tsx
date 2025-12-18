import React from 'react'
import { Card } from '../../core/layout/Card'
import './AILeadership.css'

export const AILeadership: React.FC = () => {
  return (
    <Card size="large" ariaLabel="Liderazgo en IA e Innovación" id="ai-leadership">
      <div className="ai-leadership-card">
        <div className="section-header">
          <h2 className="section-title" id="ai-leadership-heading">
            <span className="title-icon" aria-hidden="true">
              🤖
            </span>
            Liderando Innovación en IA
          </h2>
        </div>

        <div className="leadership-content">
          <p className="leadership-intro">
            Como Technical Leader Specialist en NTT DATA, lidero:
          </p>

          <ul className="responsibilities-list" aria-labelledby="ai-leadership-heading">
            <li className="responsibility-item">
              <span className="check-icon" aria-hidden="true">
                ✓
              </span>
              <div className="responsibility-text">
                <strong>Desarrollo de soluciones transformadoras</strong> con
                microfrontends React para el ecosistema de tiendas Inditex
                (todas las tiendas de España)
              </div>
            </li>

            <li className="responsibility-item">
              <span className="check-icon" aria-hidden="true">
                ✓
              </span>
              <div className="responsibility-text">
                <strong>Talleres de GenAI y herramientas de IA:</strong>
                <ul className="workshop-list" aria-label="Temas de talleres impartidos">
                  <li>
                    "Sacarle partido a la IA: Instructions de Copilot y Agentes"
                  </li>
                  <li>"Dev Containers: estandarización de entornos"</li>
                  <li>Novedades en React y arquitecturas modernas</li>
                </ul>
              </div>
            </li>

            <li className="responsibility-item">
              <span className="check-icon" aria-hidden="true">
                ✓
              </span>
              <div className="responsibility-text">
                <strong>Procesos de selección técnica</strong> y validación de
                conocimientos
              </div>
            </li>

            <li className="responsibility-item">
              <span className="check-icon" aria-hidden="true">
                ✓
              </span>
              <div className="responsibility-text">
                <strong>Arquitectura de aplicaciones para iPad</strong> con
                orquestación de múltiples equipos de desarrollo
              </div>
            </li>
          </ul>

          <div className="certifications">
            <span className="certification-badge" role="status" aria-label="Certificación actual">
              <span aria-hidden="true">🏅</span>
              Certificado GenAI Yellow Belt
            </span>
          </div>
        </div>
      </div>
    </Card>
  )
}
