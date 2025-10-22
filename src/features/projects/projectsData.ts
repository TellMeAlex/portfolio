/**
 * Projects Data
 * Source: prds/02-CONTENT-SPECIFICATIONS.md#proyectos-destacados
 */
import type { ProjectsData } from './Projects.types'

export const projectsData: ProjectsData = {
  projects: [
    {
      id: 'inditex-platform',
      name: 'Plataforma Inditex Store Management',
      tagline: 'Arquitectura microfrontends para gestión integral de tiendas',
      category: 'enterprise',
      status: 'production',
      confidential: true,
      client: 'Inditex (NTT DATA)',
      period: {
        start: '2023-05',
        end: null,
        current: true,
        display: 'Mayo 2023 - Presente',
      },
      description: {
        short:
          'Arquitectura microfrontends para gestión integral de tiendas. Primera plataforma RRHH publicada globalmente en el grupo Inditex.',
        long: 'Desarrollo de una plataforma SPA con arquitectura microfrontends que unifica la gestión de todas las tiendas del grupo Inditex en España. El sistema implementa gestión completa del ciclo de vida de empleados, desde onboarding hasta offboarding, con integración a sistemas legacy y APIs corporativas.',
      },
      role: 'Technical Leader & Senior Developer',
      impact: {
        coverage: '100% tiendas de España',
        users: 'Miles de empleados',
        performance: '60% mejora en tiempo de carga',
        scale: 'Primera plataforma RRHH global',
      },
      technologies: [
        'React',
        'Microfrontends',
        'RTK Query',
        'Azure',
        'TypeScript',
      ],
      tags: ['Enterprise', 'NDA', 'Production'],
    },
    {
      id: 'rtve-cms',
      name: 'RTVE Play CMS',
      tagline: 'Sistema de gestión de contenidos audiovisuales nacional',
      category: 'web',
      status: 'completed',
      confidential: false,
      client: 'RTVE (NTT DATA)',
      period: {
        start: '2022-06',
        end: '2023-02',
        current: false,
        display: 'Junio 2022 - Febrero 2023',
      },
      description: {
        short:
          'Desarrollo y mantenimiento de APIs de gestión de contenidos audiovisuales con alcance nacional.',
        long: 'Desarrollo de APIs para el sistema de gestión de contenidos de RTVE Play, la plataforma de streaming de la televisión pública española. Implementación de automatizaciones con Puppeteer para procesamiento de contenidos multimedia, sistema de notificaciones en tiempo real, y integración con CMS Swig.js.',
      },
      role: 'Backend Developer',
      impact: {
        reach: 'Alcance nacional',
        errorReduction: '70% reducción en errores',
        uptime: '99.9% uptime',
        automation: '80% procesos automatizados',
      },
      technologies: ['Node.js', 'Swig.js', 'Puppeteer', 'CI/CD'],
      tags: ['Public Sector', 'APIs', 'Automation'],
    },
    {
      id: 'helloauto-telemetry',
      name: 'HelloAuto Telemetry Dashboard',
      tagline: 'Panel de control IoT para monitorización de flotas vehiculares',
      category: 'iot',
      status: 'completed',
      confidential: false,
      client: 'HelloAuto',
      period: {
        start: '2021-02',
        end: '2022-06',
        current: false,
        display: 'Febrero 2021 - Junio 2022',
      },
      description: {
        short:
          'Panel de control IoT para monitorización de flotas vehiculares con procesamiento de datos en tiempo real.',
        long: 'Desarrollo de plataforma full-stack para monitorización en tiempo real de flotas de vehículos mediante telemetría IoT. El sistema procesa millones de eventos diarios de sensores vehiculares (ubicación, velocidad, aceleración, frenadas bruscas) y los visualiza en dashboards interactivos.',
      },
      role: 'Full Stack Developer',
      impact: {
        eventsPerDay: '1M+ eventos procesados/día',
        vehicles: '500+ vehículos monitoreados',
        responseTime: '35% mejora en tiempo de respuesta',
        mentoring: '3 developers junior formados',
      },
      technologies: ['React', 'Node.js', 'Express', 'Azure', 'Cypress'],
      tags: ['IoT', 'Real-time', 'Microservices'],
    },
  ],
}
