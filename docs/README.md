# 📚 Documentación del Portfolio - Alejandro de la Fuente

Bienvenido a la documentación técnica del sistema de portfolio. Este proyecto utiliza un stack moderno optimizado para rendimiento, accesibilidad y mantenibilidad.

## 📋 Índice de Documentación

### 🚀 [CI/CD System](./CI-CD.md)
Detalles sobre la integración y despliegue continuo con GitHub Actions.

### 🔧 [Troubleshooting](./TROUBLESHOOTING.md)
Guía para resolver problemas comunes y procedimientos de mantenimiento.

## 🎯 Quick Start

### Para Desarrolladores
```bash
# 1. Clonar repositorio
git clone https://github.com/TellMeAlex/portfolio.git
cd portfolio

# 2. Instalar dependencias
npm install

# 3. Desarrollo local
npm run dev

# 4. Integración
git add .
git commit -m "feat: descripción de los cambios"
git push origin feature/nombre-rama
```

## 🏗️ arquitectura General

Este proyecto sigue una arquitectura **basada en características (Feature-based)**:
- **`src/core`**: Fundamentos compartidos (Design System, Layout, UI).
- **`src/features`**: Módulos independientes para cada sección del portfolio (Experiencia, Proyectos, Skills).
- **`src/features/stats`**: Componentes de métricas y contadores.

## 🛠️ Stack Tecnológico

- **Framework**: React 19 + TypeScript + Vite
- **Estilos**: Vanilla CSS con Sistema de Tokens (CSS Variables)
- **Animaciones**: CSS Transitions & Framer Motion (opcional en algunas features)
- **Testing**: Vitest + Testing Library
- **Calidad**: ESLint + Prettier + Husky (pre-commit hooks)
- **CI/CD**: GitHub Actions

## 🔄 Flujo de Trabajo

1. **Desarrollo**: Servidor local en `localhost:3000`.
2. **Validación**: Los hooks de Husky ejecutan linting y formato antes de cada commit.
3. **Integración**: Los cambios se integran en `main` tras validación.
4. **Producción**: Live en [tellmealex.dev](https://tellmealex.dev/).

## 📅 Historial de Cambios Técnicos

### v1.1.0 (Diciembre 2025) - Phase 03
- ✅ Implementación completa de secciones de Experiencia, Proyectos y Habilidades.
- ✅ Sistema de Temas (Dark/Light) con persistencia.
- ✅ Mejoras de accesibilidad WCAG 2.1 AA (Contrastes corregidos).
- ✅ Lazy loading de componentes pesados para optimizar performance.
- ✅ Logo estilo terminal animado.

---

**📅 Última actualización**: Diciembre 2025
**🔗 URL oficial**: [https://tellmealex.dev/](https://tellmealex.dev/)