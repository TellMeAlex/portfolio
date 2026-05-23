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
                    <strong>Talleres comunidad Código Sin Siesta</strong> (abril
                    2026): Agentes IA + MCP Servers, Graphify (knowledge graphs)
                    y LLM Wiki (estilo Karpathy)
                  </li>
                  <li>
                    <strong>Pipeline agéntico aplicado al desarrollo</strong> —
                    charla interna en Inditex (mayo 2026)
                  </li>
                  <li>
                    <strong>Patrones de Orquestación de Agentes IA</strong> —
                    material modular de 3 piezas (en preparación)
                  </li>
                  <li>
                    "Sacarle partido a la IA: Instructions de Copilot y Agentes"
                    (interno NTT)
                  </li>
                  <li>
                    <strong>Dev Containers</strong> y estandarización de
                    entornos de desarrollo
                  </li>
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
