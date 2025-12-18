/**
 * Projects Data
 * Source: prds/02-CONTENT-SPECIFICATIONS.md#proyectos-destacados
 */
import type { ProjectsData } from './Projects.types'

export const projectsData: ProjectsData = {
  projects: [
    {
      id: 'ai-agents-workshop',
      name: 'Taller Agentes IA & MCP',
      tagline: 'Formación avanzada sobre agentes autónomos y protocolo MCP',
      category: 'ai',
      status: 'completed',
      confidential: false,
      client: 'Código Sin Siesta (Open Source)',
      period: {
        start: '2025-11',
        end: '2025-12',
        current: false,
        display: 'Noviembre 2025 - Diciembre 2025',
      },
      description: {
        short:
          'Workshop teórico-práctico sobre la creación de agentes de IA y el uso de Model Context Protocol.',
        long: 'Liderazgo de un taller especializado en la arquitectura de agentes inteligentes. El contenido abarca desde la configuración de servidores MCP hasta la orquestación avanzada de LLMs, incluyendo la creación de presentaciones interactivas con GenAI para facilitar el aprendizaje.',
      },
      role: 'Project Creator & Mentor',
      impact: {
        innovation: 'Arquitectura MCP',
        community: 'Open Source',
        students: '50+ desarrolladores',
      },
      technologies: ['TypeScript', 'MCP', 'LLMs', 'Node.js'],
      tags: ['AI', 'Education', 'Open Source'],
      url: 'https://github.com/CodigoSinSiesta/taller-ia-agentes-mcp',
    },
    {
      id: 'codigo-sin-siesta-platform',
      name: 'Código Sin Siesta',
      tagline: 'Plataforma de divulgación técnica y comunidad dev',
      category: 'web',
      status: 'production',
      confidential: false,
      client: 'Código Sin Siesta',
      period: {
        start: '2025-09',
        end: null,
        current: true,
        display: 'Septiembre 2025 - Presente',
      },
      description: {
        short:
          'Ecosistema de contenido divulgativo sobre desarrollo moderno, arquitectura de software e IA.',
        long: 'Sede digital de la organización donde genero y coordino contenido técnico de alto valor. La plataforma sirve como hub para la comunidad, albergando artículos, recursos y guías sobre tendencias tecnológicas, con un enfoque fuerte en la calidad del código y la innovación constante.',
      },
      role: 'Founder & Main Contributor',
      impact: {
        reach: 'Comunidad Hispana',
        innovation: 'Nuevas Tendencias',
        community: 'Crecimiento Orgánico',
      },
      technologies: ['JavaScript', 'CSS', 'Markdown', 'Git'],
      tags: ['Community', 'Education', 'Content'],
      url: 'https://codigosinsiesta.github.io/',
    },
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
      url: 'https://www.rtve.es/play/',
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
      url: 'https://helloauto.com/',
    },
  ],
}
