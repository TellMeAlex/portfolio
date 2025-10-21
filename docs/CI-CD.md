# 📚 Documentación del Sistema CI/CD Automático

Este documento describe el sistema de integración y despliegue continuo (CI/CD) configurado para el portfolio de Alejandro de la Fuente.

## 🎯 Resumen Ejecutivo

El sistema automatiza completamente el proceso desde el desarrollo hasta la producción, garantizando calidad y desplegando automáticamente cambios validados en tellmealex.com.

## 🏗️ Arquitectura General

```mermaid
graph TB
    DEV[👨‍💻 Desarrollador] --> GIT[📁 Git Push main]
    GIT --> GHA[🤖 GitHub Actions]

    subgraph "CI/CD Pipeline"
        GHA --> QC[🔍 Quality Checks]
        QC --> SC[🛡️ Security Scan]
        SC --> BT[🏗️ Build Test]
        BT --> DT[🚀 Deployment Trigger]
    end

    DT --> SSH[📡 SSH Deployment]

    subgraph "Servidor (198.12.82.184)"
        SSH --> CONT[🐳 react-nginx-app]
        CONT --> WEB[🌐 tellmealex.com]
    end

    WEB --> USER[👥 Usuarios]
```

## 📋 Flujo Detallado del Proceso

### 1. Desarrollo y Commit

```mermaid
sequenceDiagram
    participant Dev as 👨‍💻 Desarrollador
    participant Git as 📁 Git Repository
    participant GHA as 🤖 GitHub Actions

    Dev->>Git: git push origin main
    Git->>GHA: Trigger CI/CD Pipeline
    Note over GHA: Workflow: ci-cd.yml
```

### 2. Pipeline de Calidad (CI/CD)

```mermaid
graph LR
    subgraph "Quality Checks (~28s)"
        QC1[📦 yarn install]
        QC2[✨ yarn lint]
        QC3[🎨 yarn format:check]
        QC4[🔍 yarn type-check]
        QC5[🧪 yarn test:unit]
        QC1 --> QC2 --> QC3 --> QC4 --> QC5
    end

    subgraph "Security Scan (~16s)"
        SC1[📦 yarn install]
        SC2[🛡️ yarn audit]
        SC1 --> SC2
    end

    subgraph "Build Test (~21s)"
        BT1[📦 yarn install]
        BT2[🏗️ yarn build]
        BT1 --> BT2
    end

    QC5 --> SC1
    SC2 --> BT1
    BT2 --> DT[🚀 Deployment Trigger]
```

### 3. Despliegue SSH Automático

```mermaid
sequenceDiagram
    participant GHA as 🤖 GitHub Actions
    participant SSH as 📡 SSH Connection
    participant Server as 🖥️ Servidor
    participant Docker as 🐳 Container
    participant Web as 🌐 Website

    GHA->>SSH: Establecer conexión SSH
    SSH->>Server: mkdir -p /root/development/portfolio
    SSH->>Server: scp dist/* → servidor
    SSH->>Docker: docker exec react-nginx-app
    Docker->>Docker: Backup contenido actual
    Docker->>Docker: rm -rf /usr/share/nginx/html/*
    SSH->>Docker: docker cp archivos → container
    Docker->>Docker: nginx -s reload
    Docker->>Web: Contenido actualizado
    SSH->>GHA: ✅ Deployment exitoso
```

## 🔧 Componentes Técnicos

### Archivos de Configuración

#### `.github/workflows/ci-cd.yml`
- **Propósito**: Pipeline principal de validación
- **Triggers**: Push/PR a rama `main`
- **Jobs**: quality-checks → security-scan → build-test → deployment-trigger

#### `.github/workflows/deploy-ssh.yml`
- **Propósito**: Despliegue automático al servidor
- **Trigger**: Completion exitosa de ci-cd.yml
- **Estrategia**: Actualización in-place del container existente

### Stack Tecnológico

```mermaid
graph TB
    subgraph "Frontend"
        REACT[⚛️ React 18]
        TS[📘 TypeScript]
        VITE[⚡ Vite]
        TAIL[🎨 Tailwind CSS]
    end

    subgraph "Quality Tools"
        ESLINT[🔍 ESLint]
        PRETTIER[✨ Prettier]
        VITEST[🧪 Vitest]
        YARN[📦 Yarn]
    end

    subgraph "Infrastructure"
        DOCKER[🐳 Docker]
        NGINX[🌐 Nginx]
        SSL[🔒 Let's Encrypt SSL]
        SSH[📡 SSH]
    end

    REACT --> QUALITY
    TS --> QUALITY
    VITE --> QUALITY
    QUALITY --> DOCKER
    DOCKER --> NGINX
```

## 🚀 Proceso de Despliegue Detallado

### Estrategia de Container Update

El sistema utiliza una estrategia inteligente que **actualiza el container existente** en lugar de crear uno nuevo:

```mermaid
graph LR
    subgraph "Antes"
        OLD[🐳 react-nginx-app<br/>Puerto 80:80, 443:443<br/>SSL Certificates]
    end

    subgraph "Durante Update"
        BACKUP[💾 Backup contenido]
        CLEAR[🗑️ Limpiar /html/*]
        COPY[📄 Copiar nuevos archivos]
        RELOAD[🔄 nginx -s reload]
    end

    subgraph "Después"
        NEW[🐳 react-nginx-app<br/>Puerto 80:80, 443:443<br/>SSL Certificates<br/>✨ Contenido actualizado]
    end

    OLD --> BACKUP --> CLEAR --> COPY --> RELOAD --> NEW
```

### Ventajas de esta Estrategia

1. **Zero Downtime**: El container nunca se detiene
2. **SSL Preservation**: Mantiene certificados Let's Encrypt
3. **Port Management**: Evita conflictos de puerto 80/443
4. **Rollback Safety**: Backup automático antes de actualizar

## 📊 Métricas y Tiempos

### Tiempos Promedio de Ejecución

```mermaid
gantt
    title Timeline del CI/CD Process
    dateFormat X
    axisFormat %s

    section CI Pipeline
    Quality Checks    :0, 28
    Security Scan     :28, 44
    Build Test        :44, 65
    Trigger           :65, 68

    section SSH Deploy
    Setup SSH         :68, 73
    Deploy to Server  :73, 108
    Verify            :108, 113

    section Total
    Complete Process  :0, 113
```

**Tiempo Total**: ~2 minutos desde push hasta deployment

## 🔒 Configuración de Seguridad

### GitHub Secrets Requeridos

```yaml
SSH_HOST: "198.12.82.184"           # IP del servidor
SSH_USER: "root"                     # Usuario SSH
SSH_PRIVATE_KEY: "-----BEGIN..."     # Clave privada SSH
```

### Validaciones de Seguridad

```mermaid
graph TD
    CODE[📝 Código] --> LINT[🔍 ESLint]
    LINT --> AUDIT[🛡️ yarn audit]
    AUDIT --> TYPE[📘 TypeScript]
    TYPE --> TEST[🧪 Unit Tests]
    TEST --> BUILD[🏗️ Build Verification]
    BUILD --> DEPLOY[🚀 Deploy]

    LINT -.-> FAIL1[❌ Lint Errors]
    AUDIT -.-> FAIL2[❌ Security Vulnerabilities]
    TYPE -.-> FAIL3[❌ Type Errors]
    TEST -.-> FAIL4[❌ Test Failures]
    BUILD -.-> FAIL5[❌ Build Errors]
```

## 📁 Estructura de Archivos

### En el Repositorio
```
portfolio/
├── .github/workflows/
│   ├── ci-cd.yml              # Pipeline principal
│   └── deploy-ssh.yml         # Despliegue SSH
├── src/                       # Código fuente React
├── public/                    # Assets estáticos
├── docs/                      # Documentación
├── package.json               # Dependencias y scripts
├── yarn.lock                  # Lock de dependencias
├── vite.config.ts            # Configuración Vite
└── tailwind.config.js        # Configuración Tailwind
```

### En el Servidor (Container)
```
/usr/share/nginx/html/
├── index.html                 # Aplicación principal
├── assets/
│   ├── index-[hash].js       # JavaScript bundle
│   ├── index-[hash].css      # CSS bundle
│   └── vendor-[hash].js      # Vendor bundle
└── vite.svg                  # Assets estáticos
```

## 🔄 Flujo de Rollback

En caso de problemas, el sistema mantiene backups automáticos:

```mermaid
graph LR
    ISSUE[🚨 Problema Detectado] --> BACKUP[💾 Localizar Backup]
    BACKUP --> RESTORE[🔄 Restaurar Contenido]
    RESTORE --> RELOAD[🔄 nginx -s reload]
    RELOAD --> VERIFY[✅ Verificar Funcionamiento]
```

### Comando de Rollback Manual
```bash
# Conectar al servidor
ssh root@198.12.82.184

# Listar backups disponibles
ls -la /tmp/backup-*

# Restaurar backup específico
docker exec react-nginx-app cp -r /tmp/backup-YYYYMMDD-HHMMSS/* /usr/share/nginx/html/

# Recargar nginx
docker exec react-nginx-app nginx -s reload
```

## 🎛️ Monitoreo y Debugging

### Comandos Útiles de Verificación

```bash
# Estado del workflow
gh run list -R TellMeAlex/portfolio --limit 5

# Logs de deployment fallido
gh run view [RUN_ID] --log-failed

# Estado del container en servidor
ssh root@198.12.82.184 "docker ps | grep react-nginx-app"

# Logs del container
ssh root@198.12.82.184 "docker logs react-nginx-app --tail 20"

# Verificar contenido actual
ssh root@198.12.82.184 "docker exec react-nginx-app ls -la /usr/share/nginx/html/"
```

### Health Checks

El sistema incluye verificaciones automáticas:

```mermaid
graph TD
    DEPLOY[🚀 Deploy Complete] --> CHECK1[🔍 Container Status]
    CHECK1 --> CHECK2[📡 HTTP Response]
    CHECK2 --> CHECK3[🌐 External Access]
    CHECK3 --> SUCCESS[✅ Deployment Verified]

    CHECK1 -.-> FAIL1[❌ Container Down]
    CHECK2 -.-> FAIL2[❌ HTTP Error]
    CHECK3 -.-> FAIL3[❌ External Blocked]
```

## 📈 Beneficios del Sistema

### Para el Desarrollo
- ✅ **Automatización Completa**: Cero intervención manual
- ✅ **Calidad Garantizada**: Múltiples gates de validación
- ✅ **Feedback Inmediato**: Errores detectados en minutos
- ✅ **Deployment Seguro**: Backup automático y rollback

### Para la Producción
- ✅ **Zero Downtime**: Actualizaciones sin interrupciones
- ✅ **SSL Preservation**: Certificados mantenidos automáticamente
- ✅ **Performance**: Assets optimizados con Vite
- ✅ **Monitoring**: Logs y métricas integradas

### Para el Mantenimiento
- ✅ **Reproducibilidad**: Mismo proceso cada vez
- ✅ **Trazabilidad**: Logs completos de cada deployment
- ✅ **Escalabilidad**: Fácil extensión para nuevos ambientes
- ✅ **Documentación**: Proceso completamente documentado

## 🚦 Estados del Sistema

```mermaid
stateDiagram-v2
    [*] --> Development
    Development --> Push: git push main
    Push --> CI_Running: GitHub Actions
    CI_Running --> CI_Success: All checks pass
    CI_Running --> CI_Failed: Quality gates fail
    CI_Failed --> Development: Fix issues
    CI_Success --> Deploy_Running: SSH trigger
    Deploy_Running --> Deploy_Success: Container updated
    Deploy_Running --> Deploy_Failed: SSH/Docker issues
    Deploy_Failed --> Investigation: Debug required
    Deploy_Success --> Production: Live on tellmealex.com
    Production --> Development: Next iteration
    Investigation --> Development: Issues resolved
```

## 🎯 Próximos Pasos Sugeridos

### Mejoras Potenciales
1. **Monitoring Avanzado**: Integración con Datadog/New Relic
2. **Testing E2E**: Playwright tests automáticos
3. **Multiple Environments**: Staging environment
4. **Performance Metrics**: Core Web Vitals tracking
5. **Notifications**: Slack/Discord integration

### Escalabilidad
```mermaid
graph LR
    CURRENT[🎯 Actual<br/>Single Server] --> STAGING[🔄 Staging<br/>Environment]
    STAGING --> CDN[📡 CDN<br/>Integration]
    CDN --> CLUSTER[☁️ Container<br/>Orchestration]
    CLUSTER --> MONITORING[📊 Advanced<br/>Monitoring]
```

---

**🎉 Sistema CI/CD Completamente Funcional**
**📅 Implementado**: Octubre 2025
**🔗 URL**: https://tellmealex.com
**📧 Contacto**: llamamealex@gmail.com