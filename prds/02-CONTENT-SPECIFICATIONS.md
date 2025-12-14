# Content Specifications - Portfolio Data

**Versión**: 2.0
**Última actualización**: 20 Enero 2025
**Propósito**: Fuente única de verdad para todo el contenido editorial del portfolio

---

## 📋 Información Personal (Canonical Data)

### Datos Básicos

```json
{
  "personal": {
    "fullName": "Alejandro de la Fuente de la Rosa",
    "displayName": "Alejandro de la Fuente",
    "alternateName": "Alex de la Fuente",
    "title": "Technical Leader Specialist",
    "subtitle": "Experto en IA",
    "currentRole": {
      "position": "Technical Leader Specialist",
      "company": "NTT DATA",
      "department": "Innovation & AI",
      "startDate": "2025-07",
      "current": true
    },
    "location": {
      "city": "Jaén",
      "region": "Andalucía",
      "country": "España",
      "countryCode": "ES",
      "emoji": "🇪🇸",
      "coordinates": {
        "latitude": 37.7749,
        "longitude": -3.789
      }
    },
    "availability": {
      "status": "open",
      "message": "Disponible para nuevos retos",
      "emoji": "🚀"
    }
  }
}
```

### Información de Contacto

```json
{
  "contact": {
    "email": {
      "primary": "llamamealex@gmail.com",
      "display": "llamamealex@gmail.com",
      "verified": true
    },
    "phone": {
      "primary": "+34 629 20 26 39",
      "display": "+34 629 20 26 39",
      "whatsapp": true,
      "whatsappLink": "https://wa.me/34629202639"
    },
    "social": {
      "linkedin": {
        "username": "alejandro-de-la-fuente",
        "url": "https://linkedin.com/in/alejandro-de-la-fuente",
        "display": "linkedin.com/in/alejandro-de-la-fuente"
      },
      "github": {
        "username": "TellMeAlex",
        "url": "https://github.com/TellMeAlex",
        "display": "github.com/TellMeAlex"
      },
      "twitter": {
        "username": "TellMeAlex",
        "url": "https://twitter.com/TellMeAlex",
        "display": "@TellMeAlex"
      }
    },
    "website": {
      "primary": "https://alejandrodelafuente.dev",
      "canonical": "https://alejandrodelafuente.dev"
    }
  }
}
```

---

## 💼 Experiencia Profesional

### NTT DATA (2022 - Presente)

```json
{
  "experience": [
    {
      "company": {
        "name": "NTT DATA",
        "location": "Jaén, España",
        "website": "https://www.nttdata.com",
        "industry": "IT Services & Consulting",
        "size": "100,000+ employees"
      },
      "period": {
        "start": "2022-06",
        "end": null,
        "current": true,
        "displayStart": "Junio 2022",
        "displayEnd": "Presente",
        "totalDuration": "3+ años"
      },
      "positions": [
        {
          "title": "Technical Leader Specialist",
          "level": "Leadership",
          "period": {
            "start": "2025-07",
            "end": null,
            "current": true,
            "display": "Julio 2025 - Presente"
          },
          "description": "Liderando iniciativas de IA y transformación digital para clientes enterprise",
          "responsibilities": [
            "Liderazgo en desarrollo de soluciones transformadoras con microfrontends React para el ecosistema de tiendas Inditex (todas las tiendas de España)",
            "Impartición de talleres técnicos: 'Sacarle partido a la IA: Instructions de Copilot y Agentes', 'Dev Containers: estandarización de entornos', 'Novedades en React y arquitecturas modernas'",
            "Conducción de procesos de selección técnica y validación de conocimientos",
            "Arquitectura de aplicaciones para iPad con orquestación de múltiples equipos de desarrollo"
          ],
          "achievements": [
            "Implementación de arquitectura microfrontends adoptada por toda la organización Inditex",
            "Creación de programa de formación en IA con +100 participantes",
            "Reducción del 40% en tiempo de onboarding mediante standardización de dev containers"
          ],
          "technologies": [
            "Leadership",
            "GenAI",
            "Microfrontends",
            "React",
            "Team Management",
            "Technical Mentoring"
          ]
        },
        {
          "title": "Technical Senior Specialist",
          "level": "Senior",
          "period": {
            "start": "2025-01",
            "end": "2025-07",
            "current": false,
            "display": "Enero 2025 - Julio 2025"
          },
          "description": "Arquitectura de shell principal para aplicación iPad de gestión de tiendas Inditex",
          "responsibilities": [
            "Desarrollo del shell principal de aplicación iPad para Inditex",
            "Gestión del ciclo de vida completo de empleados en plataforma RRHH",
            "Orquestación y coordinación de múltiples equipos de desarrollo",
            "Definición de estándares de arquitectura microfrontend"
          ],
          "achievements": [
            "Primera aplicación iPad desplegada en todas las tiendas de España",
            "Arquitectura escalable soportando 5 países simultáneos",
            "100% cobertura de pruebas en componentes críticos"
          ],
          "technologies": [
            "React",
            "iPad Apps",
            "Microfrontends",
            "Team Leadership",
            "Architecture Design"
          ]
        },
        {
          "title": "Desarrollador Sénior",
          "level": "Senior",
          "period": {
            "start": "2023-05",
            "end": "2025-01",
            "current": false,
            "display": "Mayo 2023 - Enero 2025"
          },
          "description": "Desarrollo de SPA para unificación de gestión de tiendas Inditex",
          "responsibilities": [
            "Desarrollo de SPA para unificación de gestión de todas las tiendas",
            "Implementación de RTK Query para gestión de estado y caché",
            "Creación de primera plataforma RRHH global del grupo Inditex",
            "Integración con sistemas legacy y APIs corporativas"
          ],
          "achievements": [
            "Reducción del 60% en tiempo de carga mediante RTK Query",
            "Primera plataforma RRHH publicada globalmente en Inditex",
            "Mejora del 45% en satisfacción de usuarios finales"
          ],
          "technologies": [
            "React",
            "RTK Query",
            "Redux Toolkit",
            "SPA Architecture",
            "REST APIs"
          ]
        },
        {
          "title": "Desarrollador Sénior",
          "level": "Senior",
          "period": {
            "start": "2023-02",
            "end": "2023-05",
            "current": false,
            "display": "Febrero 2023 - Mayo 2023"
          },
          "description": "Panel interno de gestión de gastos con dashboards en tiempo real",
          "responsibilities": [
            "Desarrollo de panel interno de gestión de gastos",
            "Creación de componentes reutilizables para KPIs",
            "Implementación de dashboards en tiempo real",
            "Optimización de queries para grandes volúmenes de datos"
          ],
          "achievements": [
            "Dashboard procesando 10K+ transacciones/día",
            "Librería de componentes reutilizada en 3+ proyectos",
            "Reducción del 70% en tiempo de generación de reportes"
          ],
          "technologies": [
            "React",
            "Real-time Data",
            "KPI Dashboards",
            "Data Visualization",
            "Component Library"
          ]
        },
        {
          "title": "Desarrollador Web",
          "level": "Mid-level",
          "period": {
            "start": "2022-06",
            "end": "2023-02",
            "current": false,
            "display": "Junio 2022 - Febrero 2023"
          },
          "description": "Desarrollo y mantenimiento de APIs para RTVE Play",
          "responsibilities": [
            "Desarrollo de APIs de gestión para RTVE Play",
            "Automatización de procesos con Puppeteer",
            "Implementación de sistema de notificaciones",
            "Integración con CMS Swig.js"
          ],
          "achievements": [
            "Reducción del 70% en errores mediante automatización",
            "API sirviendo contenido a millones de usuarios españoles",
            "Sistema de notificaciones con 99.9% uptime"
          ],
          "technologies": [
            "Node.js",
            "Puppeteer",
            "Swig.js",
            "APIs",
            "Automation"
          ]
        }
      ]
    }
  ]
}
```

### HelloAuto (2021 - 2022)

```json
{
  "company": {
    "name": "HelloAuto",
    "location": "Jaén, España",
    "website": "https://www.helloauto.com",
    "industry": "InsurTech / IoT",
    "description": "Plataforma de seguros de coche con telemetría IoT"
  },
  "period": {
    "start": "2021-02",
    "end": "2022-06",
    "current": false,
    "displayStart": "Febrero 2021",
    "displayEnd": "Junio 2022",
    "totalDuration": "1 año 4 meses"
  },
  "positions": [
    {
      "title": "Desarrollador Full Stack",
      "level": "Mid-level",
      "period": {
        "start": "2021-02",
        "end": "2022-06",
        "current": false,
        "display": "Febrero 2021 - Junio 2022"
      },
      "description": "Desarrollo de panel de telemetría IoT en tiempo real para monitorización de flotas",
      "responsibilities": [
        "Desarrollo de panel de telemetría en tiempo real",
        "Procesamiento de datos IoT de vehículos",
        "Mentoría a 3 developers junior",
        "Desarrollo de microservicios con Node.js, Express y Azure",
        "Implementación de tests con Cypress"
      ],
      "achievements": [
        "Panel procesando 1M+ eventos IoT por día",
        "Monitorización de 500+ vehículos en tiempo real",
        "Reducción del 35% en tiempo de respuesta de APIs",
        "3 developers junior mentoreados con éxito"
      ],
      "technologies": [
        "React",
        "Node.js",
        "Express",
        "Azure",
        "IoT",
        "Microservices",
        "Cypress",
        "Real-time Data"
      ]
    }
  ]
}
```

---

## 🚀 Proyectos Destacados

### Proyecto 1: Inditex Store Management Platform

```json
{
  "projects": [
    {
      "id": "inditex-platform",
      "name": "Plataforma Inditex Store Management",
      "tagline": "Arquitectura microfrontends para gestión integral de tiendas",
      "type": "Enterprise Application",
      "status": "production",
      "confidential": true,
      "client": "Inditex (NTT DATA)",
      "period": {
        "start": "2023-05",
        "end": null,
        "current": true,
        "display": "Mayo 2023 - Presente"
      },
      "description": {
        "short": "Arquitectura microfrontends para gestión integral de tiendas. Primera plataforma RRHH publicada globalmente en el grupo Inditex.",
        "long": "Desarrollo de una plataforma SPA con arquitectura microfrontends que unifica la gestión de todas las tiendas del grupo Inditex en España. El sistema implementa gestión completa del ciclo de vida de empleados, desde onboarding hasta offboarding, con integración a sistemas legacy y APIs corporativas. Shell principal desarrollado para aplicación iPad que orquesta múltiples microfrontends de diferentes equipos."
      },
      "role": "Technical Leader & Senior Developer",
      "responsibilities": [
        "Diseño de arquitectura microfrontends escalable",
        "Desarrollo del shell principal de aplicación iPad",
        "Implementación de RTK Query para gestión de estado",
        "Coordinación de 5+ equipos de desarrollo",
        "Definición de estándares y mejores prácticas"
      ],
      "impact": {
        "coverage": "100% tiendas de España + 5 países activos",
        "users": "Miles de empleados de tienda",
        "performance": "60% mejora en tiempo de carga",
        "scale": "Primera plataforma RRHH global de Inditex"
      },
      "technologies": [
        "React",
        "Microfrontends",
        "RTK Query",
        "Redux Toolkit",
        "Azure",
        "TypeScript",
        "Module Federation"
      ],
      "challenges": [
        "Integración con sistemas legacy de 20+ años",
        "Coordinación de múltiples equipos autónomos",
        "Escalabilidad a nivel internacional",
        "Performance en dispositivos iPad de tienda"
      ],
      "achievements": [
        "Primera aplicación iPad desplegada en todas las tiendas España",
        "Arquitectura adoptada como estándar para futuras aplicaciones",
        "Reducción del 40% en tiempo de onboarding de empleados",
        "100% cobertura de tests en componentes críticos"
      ],
      "tags": ["Enterprise", "NDA", "Production", "Microfrontends"],
      "images": {
        "hero": "images/projects/inditex-platform-hero.webp",
        "gallery": [
          "images/projects/inditex-platform-1.webp",
          "images/projects/inditex-platform-2.webp",
          "images/projects/inditex-platform-3.webp"
        ]
      }
    }
  ]
}
```

### Proyecto 2: RTVE Play CMS

```json
{
  "id": "rtve-cms",
  "name": "RTVE Play CMS",
  "tagline": "Sistema de gestión de contenidos audiovisuales nacional",
  "type": "Content Management System",
  "status": "completed",
  "confidential": false,
  "client": "RTVE (NTT DATA)",
  "period": {
    "start": "2022-06",
    "end": "2023-02",
    "current": false,
    "display": "Junio 2022 - Febrero 2023"
  },
  "description": {
    "short": "Desarrollo y mantenimiento de APIs de gestión de contenidos audiovisuales con alcance nacional.",
    "long": "Desarrollo de APIs para el sistema de gestión de contenidos de RTVE Play, la plataforma de streaming de la televisión pública española. Implementación de automatizaciones con Puppeteer para procesamiento de contenidos multimedia, sistema de notificaciones en tiempo real, y integración con CMS Swig.js. El sistema sirve contenido a millones de usuarios a nivel nacional."
  },
  "role": "Backend Developer",
  "responsibilities": [
    "Desarrollo de APIs RESTful para gestión de contenidos",
    "Automatización de procesos con Puppeteer",
    "Implementación de sistema de notificaciones",
    "Integración con CMS Swig.js",
    "Optimización de queries y performance"
  ],
  "impact": {
    "reach": "Alcance nacional (millones de usuarios)",
    "errorReduction": "70% reducción en errores",
    "uptime": "99.9% uptime del sistema",
    "automation": "80% procesos automatizados"
  },
  "technologies": [
    "Node.js",
    "Swig.js",
    "Puppeteer",
    "REST APIs",
    "CI/CD",
    "Automation"
  ],
  "challenges": [
    "Procesamiento de gran volumen de contenido multimedia",
    "Alta disponibilidad (servicio público nacional)",
    "Integración con sistemas legacy de broadcasting",
    "Automatización de flujos complejos de publicación"
  ],
  "achievements": [
    "Reducción del 70% en errores mediante automatización",
    "Sistema sirviendo contenido a millones de usuarios",
    "99.9% uptime mantenido durante todo el proyecto",
    "Procesamiento exitoso de 10K+ contenidos/mes"
  ],
  "tags": ["Public Sector", "APIs", "Automation", "Completed"],
  "links": {
    "github": "https://github.com/TellMeAlex/rtve-project",
    "demo": null
  },
  "images": {
    "hero": "images/projects/rtve-cms-hero.webp",
    "gallery": [
      "images/projects/rtve-cms-1.webp",
      "images/projects/rtve-cms-2.webp"
    ]
  }
}
```

### Proyecto 3: HelloAuto Telemetry Dashboard

```json
{
  "id": "helloauto-telemetry",
  "name": "HelloAuto Telemetry Dashboard",
  "tagline": "Panel de control IoT para monitorización de flotas vehiculares",
  "type": "IoT Dashboard",
  "status": "completed",
  "confidential": false,
  "client": "HelloAuto",
  "period": {
    "start": "2021-02",
    "end": "2022-06",
    "current": false,
    "display": "Febrero 2021 - Junio 2022"
  },
  "description": {
    "short": "Panel de control IoT para monitorización de flotas vehiculares con procesamiento de datos en tiempo real.",
    "long": "Desarrollo de plataforma full-stack para monitorización en tiempo real de flotas de vehículos mediante telemetría IoT. El sistema procesa millones de eventos diarios de sensores vehiculares (ubicación, velocidad, aceleración, frenadas bruscas) y los visualiza en dashboards interactivos para compañías de seguros. Implementación de microservicios en Azure para procesamiento de streams de datos IoT."
  },
  "role": "Full Stack Developer",
  "responsibilities": [
    "Desarrollo de frontend React con dashboards en tiempo real",
    "Desarrollo de microservicios Node.js/Express",
    "Procesamiento de streams de datos IoT",
    "Implementación de tests E2E con Cypress",
    "Mentoría a 3 developers junior",
    "Despliegue y monitorización en Azure"
  ],
  "impact": {
    "eventsPerDay": "1M+ eventos procesados/día",
    "vehicles": "500+ vehículos monitoreados",
    "responseTime": "35% mejora en tiempo de respuesta",
    "mentoring": "3 developers junior formados"
  },
  "technologies": [
    "React",
    "Node.js",
    "Express",
    "Azure",
    "IoT Hub",
    "Microservices",
    "Cypress",
    "Real-time Streaming"
  ],
  "challenges": [
    "Procesamiento de alto volumen de datos IoT en tiempo real",
    "Visualización fluida de datos actualizados cada segundo",
    "Escalabilidad para soportar crecimiento de flota",
    "Precisión en cálculos de métricas de conducción"
  ],
  "achievements": [
    "Sistema procesando 1M+ eventos IoT diarios",
    "Monitorización simultánea de 500+ vehículos",
    "Reducción del 35% en latencia de APIs",
    "100% cobertura de tests E2E en flujos críticos"
  ],
  "tags": ["IoT", "Real-time", "Microservices", "Completed"],
  "images": {
    "hero": "images/projects/helloauto-dashboard-hero.webp",
    "gallery": [
      "images/projects/helloauto-dashboard-1.webp",
      "images/projects/helloauto-dashboard-2.webp",
      "images/projects/helloauto-dashboard-3.webp"
    ]
  }
}
```

---

## 🛠️ Habilidades Técnicas

### Frontend Mastery

```json
{
  "skills": {
    "categories": [
      {
        "name": "Frontend Mastery",
        "icon": "🎨",
        "description": "Especialización en desarrollo frontend moderno con React",
        "skills": [
          {
            "name": "React",
            "level": 95,
            "proficiency": "expert",
            "yearsExperience": 3,
            "description": "Desarrollo avanzado de aplicaciones React con hooks, context, y patterns modernos"
          },
          {
            "name": "Redux Toolkit",
            "level": 90,
            "proficiency": "expert",
            "yearsExperience": 2.5,
            "description": "Gestión de estado compleja con RTK, slices, y middleware personalizado"
          },
          {
            "name": "RTK Query",
            "level": 85,
            "proficiency": "expert",
            "yearsExperience": 2,
            "description": "Data fetching y caching optimizado para aplicaciones enterprise"
          },
          {
            "name": "Microfrontends",
            "level": 80,
            "proficiency": "advanced",
            "yearsExperience": 1.5,
            "description": "Arquitectura microfrontends con Module Federation y shell apps"
          },
          {
            "name": "Next.js",
            "level": 75,
            "proficiency": "advanced",
            "yearsExperience": 1,
            "description": "SSR, SSG, y aplicaciones full-stack con Next.js"
          },
          {
            "name": "TypeScript",
            "level": 85,
            "proficiency": "expert",
            "yearsExperience": 2,
            "description": "Tipado fuerte, genéricos avanzados, y type safety en proyectos grandes"
          }
        ]
      }
    ]
  }
}
```

### IA & Automatización

```json
{
  "name": "IA & Automatización",
  "icon": "🤖",
  "description": "Especialización en IA generativa y automatización de procesos",
  "skills": [
    {
      "name": "GenAI",
      "level": 90,
      "proficiency": "expert",
      "certifications": ["GenAI Yellow Belt P1", "GenAI White Belt"],
      "description": "Implementación de soluciones con modelos de lenguaje y IA generativa"
    },
    {
      "name": "GitHub Copilot",
      "level": 85,
      "proficiency": "expert",
      "description": "Uso avanzado de Copilot, creación de agentes e instructions personalizadas"
    },
    {
      "name": "LangChain",
      "level": 75,
      "proficiency": "advanced",
      "description": "Desarrollo de aplicaciones con LLMs, chains, y agents"
    },
    {
      "name": "Prompt Engineering",
      "level": 88,
      "proficiency": "expert",
      "description": "Diseño de prompts efectivos para máxima calidad de respuestas"
    },
    {
      "name": "Puppeteer",
      "level": 88,
      "proficiency": "expert",
      "description": "Automatización web, scraping, y testing E2E"
    }
  ]
}
```

### Backend & Cloud

```json
{
  "name": "Backend & Cloud",
  "icon": "⚙️",
  "description": "Desarrollo backend y arquitectura cloud",
  "skills": [
    {
      "name": "Node.js",
      "level": 88,
      "proficiency": "expert",
      "yearsExperience": 3,
      "description": "APIs RESTful, microservicios, y procesamiento asíncrono"
    },
    {
      "name": "Express",
      "level": 85,
      "proficiency": "advanced",
      "description": "Framework backend con middleware customizado y routing avanzado"
    },
    {
      "name": "Azure",
      "level": 75,
      "proficiency": "advanced",
      "description": "App Services, Functions, IoT Hub, y servicios cloud de Microsoft"
    },
    {
      "name": "REST APIs",
      "level": 90,
      "proficiency": "expert",
      "description": "Diseño e implementación de APIs escalables y documentadas"
    },
    {
      "name": "Microservices",
      "level": 70,
      "proficiency": "intermediate",
      "description": "Arquitectura de microservicios con comunicación asíncrona"
    }
  ]
}
```

### Arquitectura & Design Systems

```json
{
  "name": "Arquitectura",
  "icon": "🏗️",
  "description": "Diseño de arquitecturas escalables y design systems",
  "skills": [
    {
      "name": "Microfrontends",
      "level": 92,
      "proficiency": "expert",
      "description": "Arquitectura microfrontends con Module Federation, shell apps, y shared state"
    },
    {
      "name": "Design Systems",
      "level": 80,
      "proficiency": "advanced",
      "description": "Creación de design systems con componentes reutilizables y design tokens"
    },
    {
      "name": "Modular Architecture",
      "level": 78,
      "proficiency": "advanced",
      "description": "Arquitecturas modulares escalables con separación de concerns"
    },
    {
      "name": "Component Libraries",
      "level": 85,
      "proficiency": "expert",
      "description": "Desarrollo de librerías de componentes compartidas"
    }
  ]
}
```

---

## 🎓 Educación y Certificaciones

### Certificaciones Profesionales

```json
{
  "certifications": [
    {
      "name": "GenAI Academy: Yellow Belt P1",
      "issuer": "NTT DATA University",
      "date": "2025-01",
      "credentialId": null,
      "description": "Certificación avanzada en IA Generativa con enfoque en implementación enterprise",
      "skills": ["GenAI", "LLMs", "Prompt Engineering", "AI Implementation"],
      "badge": "images/certs/genai-yellow-belt.svg",
      "current": true
    },
    {
      "name": "GenAI Academy: White Belt",
      "issuer": "NTT DATA University",
      "date": "2025-01",
      "credentialId": null,
      "description": "Certificación fundamental en conceptos de IA Generativa",
      "skills": ["GenAI Fundamentals", "AI Ethics", "Use Cases"],
      "badge": "images/certs/genai-white-belt.svg"
    },
    {
      "name": "React JS (Avanzado)",
      "issuer": "Certificación Profesional",
      "date": "2023",
      "description": "Certificación avanzada en desarrollo React",
      "skills": ["React", "Hooks", "Context API", "Performance"]
    },
    {
      "name": "Node.js & Express",
      "issuer": "Certificación Profesional",
      "date": "2022",
      "description": "Certificación en desarrollo backend con Node.js y Express",
      "skills": ["Node.js", "Express", "REST APIs", "Async Programming"]
    }
  ]
}
```

### Educación Formal

```json
{
  "education": [
    {
      "degree": "Ciclo Formativo de Grado Superior",
      "field": "Desarrollo de Aplicaciones Web",
      "institution": "Las Fuentezuelas",
      "location": "Jaén, España",
      "period": {
        "start": "2017",
        "end": "2019",
        "display": "2017 - 2019"
      },
      "description": "Formación especializada en desarrollo web full-stack",
      "achievements": [
        "Proyecto final con mención de honor",
        "Especialización en frontend moderno"
      ]
    }
  ]
}
```

---

## 💡 Valores y Filosofía Profesional

### Declaración Personal

```json
{
  "philosophy": {
    "quote": "Me motiva aprender y compartir. Soy una persona curiosa y entusiasta de los nuevos retos, que busca mantenerse siempre actualizada con las últimas tendencias del ecosistema frontend.",
    "author": "Alejandro de la Fuente",
    "coreValues": [
      {
        "name": "Innovación continua",
        "icon": "💡",
        "description": "Búsqueda constante de mejores soluciones y tecnologías emergentes",
        "examples": [
          "Adopción temprana de GenAI en workflows de desarrollo",
          "Exploración de nuevas arquitecturas como microfrontends",
          "Experimentación con herramientas cutting-edge"
        ]
      },
      {
        "name": "Colaboración y mentoría",
        "icon": "🤝",
        "description": "Compartir conocimiento y ayudar al crecimiento del equipo",
        "examples": [
          "Mentoría a 3+ developers junior en HelloAuto",
          "Talleres de formación en GenAI y React en NTT DATA",
          "Documentación técnica para el equipo"
        ]
      },
      {
        "name": "Aprendizaje permanente",
        "icon": "📚",
        "description": "Mantenerme actualizado con las últimas tendencias tecnológicas",
        "examples": [
          "Certificaciones GenAI Yellow Belt y White Belt",
          "Participación en comunidades tech",
          "Lectura constante de documentación y artículos técnicos"
        ]
      },
      {
        "name": "Calidad y buenas prácticas",
        "icon": "🎯",
        "description": "Código limpio, mantenible y siguiendo estándares industriales",
        "examples": [
          "100% cobertura de tests en componentes críticos",
          "Implementación de design systems reutilizables",
          "Code reviews exhaustivos y standards de equipo"
        ]
      },
      {
        "name": "Visión de producto",
        "icon": "🚀",
        "description": "Enfoque en soluciones que generan valor real para usuarios",
        "examples": [
          "Reducción del 40% en tiempo de onboarding de empleados Inditex",
          "Mejora del 45% en satisfacción de usuarios finales",
          "Priorización de features con mayor impacto business"
        ]
      }
    ]
  }
}
```

---

## 📊 Estadísticas y Logros

```json
{
  "statistics": [
    {
      "metric": "Años de Experiencia",
      "value": "3+",
      "icon": "💼",
      "description": "Años liderando proyectos de transformación digital"
    },
    {
      "metric": "Proyectos Alto Impacto",
      "value": "5",
      "icon": "🚀",
      "description": "Proyectos enterprise con millones de usuarios"
    },
    {
      "metric": "Developers Mentoreados",
      "value": "3",
      "icon": "👥",
      "description": "Developers junior formados exitosamente"
    },
    {
      "metric": "Cobertura Inditex España",
      "value": "100%",
      "icon": "🏪",
      "description": "Todas las tiendas Inditex en España utilizan la plataforma"
    },
    {
      "metric": "Talleres Impartidos",
      "value": "∞",
      "icon": "🎓",
      "description": "Talleres técnicos sobre GenAI, React, y DevContainers"
    },
    {
      "metric": "Eventos IoT Procesados",
      "value": "1M+/día",
      "icon": "📡",
      "description": "En proyecto HelloAuto Telemetry"
    }
  ]
}
```

---

## 📝 Directrices de Contenido

### Tono de Voz

**Características**:

- Profesional pero accesible
- Técnicamente preciso sin ser pedante
- Orientado a resultados y logros medibles
- Honesto sobre nivel de experiencia
- Entusiasta sobre aprendizaje y crecimiento

**Evitar**:

- Jerga innecesaria o buzzwords vacíos
- Exageraciones o claims no respaldados
- Negatividad sobre tecnologías o empresas
- Información personal irrelevante
- Lenguaje demasiado informal

### Keywords SEO

**Primary Keywords**:

- Technical Leader
- ReactJS
- Inteligencia Artificial
- IA Generativa
- Microfrontends

**Secondary Keywords**:

- NTT DATA
- Inditex
- Frontend Developer
- Full Stack Developer
- GenAI

**Long-tail Keywords**:

- "Technical Leader Specialist IA"
- "Desarrollador React microfrontends España"
- "Experto GenAI Jaén"
- "Arquitectura microfrontends Inditex"

---

## 🔄 Proceso de Actualización

### Cuándo Actualizar

- **Cambio de rol**: Actualizar inmediatamente
- **Nuevo proyecto**: Al finalizar hito importante
- **Nueva certificación**: Inmediatamente tras obtenerla
- **Cambio de contacto**: Actualizar en 24h
- **Revisión general**: Trimestral

### Cómo Actualizar

1. Editar este archivo JSON con nueva información
2. Validar formato JSON
3. Actualizar fecha de última modificación
4. Commit con mensaje descriptivo
5. Regenerar componentes si es necesario

---

**Última actualización**: 20 Enero 2025
**Próxima revisión**: Abril 2025
**Mantenido por**: Alejandro de la Fuente
