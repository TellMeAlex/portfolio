/**
 * Experience Data
 * Source: prds/02-CONTENT-SPECIFICATIONS.md#experiencia-profesional
 */
import type { ExperienceData } from './Experience.types'
import { calculateYearsOfExperience } from '@/utils/date'

export const experienceData: ExperienceData = {
  companies: [
    {
      name: 'NTT DATA',
      location: 'Jaén, España',
      website: 'https://www.nttdata.com',
      industry: 'IT Services & Consulting',
      period: {
        start: '2022-06',
        end: null,
        current: true,
        displayStart: 'Jun 2022',
        displayEnd: 'Presente',
        totalDuration: `${calculateYearsOfExperience('2022-06')}+ años`,
      },
      positions: [
        {
          title: 'Technical Leader Specialist',
          level: 'Leadership',
          period: {
            start: '2025-07',
            end: null,
            current: true,
            display: 'Jul 2025 - Presente',
          },
          responsibilities: [
            'Liderazgo en iniciativas de IA y talleres de GenAI, Copilot Agents y Dev Containers',
            'Participación en procesos de selección y validación de conocimientos técnicos',
            'Arquitectura de aplicaciones microfrontends para Inditex',
          ],
          technologies: [
            'Leadership',
            'GenAI',
            'Microfrontends',
            'Team Coordination',
          ],
        },
        {
          title: 'Technical Senior Specialist',
          level: 'Senior',
          period: {
            start: '2025-01',
            end: '2025-07',
            current: false,
            display: 'Ene 2025 - Jul 2025',
          },
          responsibilities: [
            'Shell principal de aplicación iPad para Inditex (orquestación de múltiples equipos)',
            'Gestión completa del ciclo de vida de empleados',
            'Coordinación técnica cross-team',
          ],
          technologies: ['React', 'iPad Apps', 'Team Leadership'],
        },
        {
          title: 'Desarrollador Sénior',
          level: 'Senior',
          period: {
            start: '2023-05',
            end: '2025-01',
            current: false,
            display: 'Mayo 2023 - Ene 2025',
          },
          responsibilities: [
            'SPA para unificación de gestión de tiendas Inditex',
            'Implementación de RTK Query para gestión de estado',
            'Primera plataforma de RRHH publicada globalmente en el grupo',
          ],
          technologies: ['React', 'RTK Query', 'SPA'],
        },
        {
          title: 'Desarrollador Sénior',
          level: 'Senior',
          period: {
            start: '2023-02',
            end: '2023-05',
            current: false,
            display: 'Feb 2023 - Mayo 2023',
          },
          responsibilities: [
            'Panel interno de gestión de gastos y recursos',
            'Desarrollo de componentes reutilizables y KPIs',
            'Dashboards en tiempo real',
          ],
          technologies: ['React', 'Real-time', 'KPIs'],
        },
        {
          title: 'Desarrollador Web',
          level: 'Mid-level',
          period: {
            start: '2022-06',
            end: '2023-02',
            current: false,
            display: 'Jun 2022 - Feb 2023',
          },
          responsibilities: [
            'Desarrollo y mantenimiento de APIs para RTVE Play',
            'Automatización de tareas con Puppeteer',
            'Sistema de notificaciones y gestión de contenidos',
          ],
          technologies: ['Node.js', 'Puppeteer', 'APIs'],
        },
      ],
    },
    {
      name: 'HelloAuto',
      location: 'Jaén, España',
      website: 'https://www.helloauto.com',
      industry: 'InsurTech / IoT',
      period: {
        start: '2021-02',
        end: '2022-06',
        current: false,
        displayStart: 'Feb 2021',
        displayEnd: 'Jun 2022',
        totalDuration: '1 año 4 meses',
      },
      positions: [
        {
          title: 'Desarrollador Full Stack',
          level: 'Mid-level',
          period: {
            start: '2021-02',
            end: '2022-06',
            current: false,
            display: 'Feb 2021 - Jun 2022',
          },
          responsibilities: [
            'Panel de telemetría en tiempo real para flotas vehiculares',
            'Procesamiento de datos IoT de 500+ vehículos',
            'Mentoría a 3 desarrolladores junior',
            'Arquitectura de microservicios con Node.js, Express, Azure',
          ],
          technologies: ['React', 'Node.js', 'Azure', 'IoT', 'Mentoring'],
        },
      ],
    },
  ],
}
