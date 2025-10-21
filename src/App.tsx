import React from 'react';
import { BentoGrid } from './core/layout/BentoGrid';
import { Card } from './core/layout/Card';
import { SkipLinks } from './core/layout/SkipLinks';
import { Button } from './core/ui/Button';
import { ThemeToggle } from './core/ui/ThemeToggle';

const App: React.FC = () => {
  return (
    <>
      {/* Skip Links for Accessibility - WCAG 2.4.1 */}
      <SkipLinks />

      {/* Main Content */}
      <div className="min-h-screen">
        {/* Header with Theme Toggle */}
        <header style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          padding: '1rem 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'var(--color-bg-secondary)',
          borderBottom: '1px solid rgba(100, 255, 218, 0.1)'
        }}>
          <h1 style={{
            fontSize: 'var(--text-2xl)',
            fontWeight: 'var(--font-bold)',
            color: 'var(--color-text-primary)'
          }}>
            Alejandro de la Fuente
          </h1>
          <ThemeToggle />
        </header>

        {/* Main Portfolio Grid */}
        <main id="main-content" tabIndex={-1}>
          <BentoGrid>
            {/* Hero Card - XL (3x2) */}
            <Card size="xl" ariaLabel="Hero section">
              <div className="card-header">
                <h2 className="card-title" style={{ fontSize: 'var(--text-4xl)' }}>
                  👋 Hola, soy Alejandro
                </h2>
              </div>
              <div className="card-body">
                <p style={{
                  fontSize: 'var(--text-xl)',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 'var(--leading-relaxed)'
                }}>
                  Technical Leader Specialist en NTT DATA
                </p>
                <p style={{ color: 'var(--color-text-secondary)' }}>
                  Liderando la transformación digital con IA y React.
                  Especializado en arquitecturas de microfrontends y soluciones empresariales.
                </p>
                <div style={{
                  display: 'flex',
                  gap: 'var(--space-4)',
                  marginTop: 'var(--space-6)'
                }}>
                  <Button variant="primary">
                    Ver proyectos
                  </Button>
                  <Button variant="secondary">
                    Contactar
                  </Button>
                </div>
              </div>
            </Card>

            {/* About Card - Large (2x2) */}
            <Card size="large" ariaLabel="About me">
              <div className="card-header">
                <h2 className="card-title">Sobre mí</h2>
              </div>
              <div className="card-body">
                <p style={{ color: 'var(--color-text-secondary)' }}>
                  Con más de 3 años de experiencia liderando equipos de desarrollo
                  en proyectos de transformación digital para empresas como Inditex,
                  RTVE y HelloAuto.
                </p>
                <p style={{ color: 'var(--color-text-secondary)' }}>
                  Mi enfoque combina expertise técnico en React y arquitectura de software
                  con liderazgo efectivo de equipos distribuidos.
                </p>
              </div>
            </Card>

            {/* Skills Card - Medium (2x1) */}
            <Card size="medium" ariaLabel="Skills">
              <div className="card-header">
                <h2 className="card-title">Habilidades</h2>
              </div>
              <div className="card-body">
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 'var(--space-2)'
                }}>
                  {['React', 'TypeScript', 'AI', 'Microfrontends', 'Node.js', 'Leadership'].map(skill => (
                    <span
                      key={skill}
                      style={{
                        padding: 'var(--space-2) var(--space-4)',
                        background: 'rgba(100, 255, 218, 0.1)',
                        borderRadius: 'var(--radius-full)',
                        fontSize: 'var(--text-sm)',
                        color: 'var(--color-accent)',
                        border: '1px solid var(--color-cyan)'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Card>

            {/* Stats Cards - Small (1x1) */}
            <Card size="small" ariaLabel="Projects completed">
              <div className="card-body" style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center'
              }}>
                <h3 style={{
                  fontSize: 'var(--text-5xl)',
                  fontWeight: 'var(--font-bold)',
                  color: 'var(--color-cyan)'
                }}>
                  50+
                </h3>
                <p style={{ color: 'var(--color-text-secondary)' }}>
                  Proyectos completados
                </p>
              </div>
            </Card>

            <Card size="small" ariaLabel="Years of experience">
              <div className="card-body" style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center'
              }}>
                <h3 style={{
                  fontSize: 'var(--text-5xl)',
                  fontWeight: 'var(--font-bold)',
                  color: 'var(--color-cyan)'
                }}>
                  3+
                </h3>
                <p style={{ color: 'var(--color-text-secondary)' }}>
                  Años de experiencia
                </p>
              </div>
            </Card>

            {/* Contact Card - Medium (2x1) */}
            <Card size="medium" ariaLabel="Contact information">
              <div className="card-header">
                <h2 className="card-title">Contacto</h2>
              </div>
              <div className="card-body">
                <p style={{ color: 'var(--color-text-secondary)' }}>
                  📧 llamamealex@gmail.com
                </p>
                <p style={{ color: 'var(--color-text-secondary)' }}>
                  📍 Jaén, Andalucía, España
                </p>
                <div style={{
                  display: 'flex',
                  gap: 'var(--space-3)',
                  marginTop: 'var(--space-4)'
                }}>
                  <Button variant="tertiary" size="small">
                    LinkedIn
                  </Button>
                  <Button variant="tertiary" size="small">
                    GitHub
                  </Button>
                </div>
              </div>
            </Card>
          </BentoGrid>
        </main>

        {/* Footer */}
        <footer style={{
          padding: 'var(--space-16) var(--space-8)',
          textAlign: 'center',
          borderTop: '1px solid rgba(100, 255, 218, 0.1)'
        }}>
          <p style={{
            color: 'var(--color-text-secondary)',
            fontSize: 'var(--text-sm)'
          }}>
            © 2025 Alejandro de la Fuente. Built with React + TypeScript.
          </p>
          <p style={{
            color: 'var(--color-text-secondary)',
            fontSize: 'var(--text-xs)',
            marginTop: 'var(--space-2)'
          }}>
            Phase 1: Foundation & Design System ✨
          </p>
        </footer>
      </div>
    </>
  );
};

export default App;
