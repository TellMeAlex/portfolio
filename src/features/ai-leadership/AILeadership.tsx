import React from 'react'
import { Card } from '../../core/layout/Card'
import './AILeadership.css'

export const AILeadership: React.FC = () => {
  return (
    <Card
      size="large"
      ariaLabel="Liderazgo en IA e Innovación"
      id="ai-leadership"
    >
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

          <ul
            className="responsibilities-list"
            aria-labelledby="ai-leadership-heading"
          >
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
                <strong>Talleres y charlas de IA agéntica:</strong>
                <ul
                  className="workshop-list"
                  aria-label="Temas de talleres impartidos"
                >
                  <li>
                    Workflows en Claude Code y orquestación multi-agente
                    determinística
                  </li>
                  <li>
                    Harness Engineering: contexto, tools, memoria y verificación
                  </li>
                  <li>
                    Pipeline agéntico aplicado al desarrollo (charla interna en
                    Inditex)
                  </li>
                  <li>
                    "Sacarle partido a la IA: Instructions de Copilot y Agentes"
                  </li>
                  <li>Dev Containers y estandarización de entornos</li>
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
            <span
              className="certification-badge"
              role="status"
              aria-label="Certificación actual"
            >
              <span aria-hidden="true">🏅</span>
              Certificado GenAI Yellow Belt
            </span>
          </div>
        </div>
      </div>
    </Card>
  )
}
