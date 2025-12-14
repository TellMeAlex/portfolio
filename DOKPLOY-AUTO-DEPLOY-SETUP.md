# Dokploy Deployment Guide

**Status**: ✅ Manual deployment workflow - Simple and reliable

## 📋 Resumen

Se ha configurado un workflow simplificado de notificación en GitHub Actions que alerta cuando el CI/CD pasa exitosamente. El despliegue a Dokploy se realiza manualmente a través de la interfaz web de Dokploy.

### Arquitectura de Solución

```
GitHub (push to main)
  ↓
GitHub Actions CI/CD (quality gates)
  ↓ (si pasa todos los tests)
Workflow Notification
  ↓ (notifica al desarrollador)
Developer (manual deployment)
  ↓
Dokploy Web UI (http://100.122.202.103:3000)
  ↓
VPS (198.12.82.184) - Deploy portfolio
```

## ✅ Completado

- [x] API Token generado en Dokploy: `DOKPLOY_API_TOKEN`
- [x] Application ID obtenido: `R02khAu1mJJTnpSlkiu2v`
- [x] GitHub Secret configurado: `DOKPLOY_API_TOKEN`
- [x] Workflow creado: `.github/workflows/dokploy-deploy.yml`
- [x] Workflow actualizado para conectar a Tailscale

## 🚀 Flujo de Despliegue Manual

La configuración es simple: solo necesitas el API token de Dokploy configurado.

### GitHub Secret Requerido:

**DOKPLOY_API_TOKEN**: Token de autenticación para la API de Dokploy
- ✅ Ya configurado durante la setup inicial

## 🚀 Flujo de Deployment

1. **Push a main** → GitHub Actions ejecuta `ci-cd.yml`
2. **CI/CD pasa** → Linting, formatting, type-check, build, tests ✅
3. **Notification** → GitHub Actions notifica que el código está listo
4. **Developer manual deployment**:
   - Accede a: http://100.122.202.103:3000
   - Projects → portfolio → portfolio-app
   - Click "Deploy" button
5. **Dokploy deploys** → Construye y despliega en VPS (198.12.82.184)

## 🧪 Workflow Verification

Para probar que el workflow funciona:

1. **Haz un cambio pequeño** al código (ej: comentario en `src/main.tsx`)
2. **Commit y push** a main:
   ```bash
   git add .
   git commit -m "test: verify deployment workflow"
   git push origin main
   ```
3. **Monitorea**:
   - GitHub Actions: https://github.com/TellMeAlex/portfolio/actions
   - Verifica que los workflows "CI/CD Pipeline" y "Deployment Notification" ejecutan correctamente
   - Live site: https://tellmealex.dev (después de hacer deploy en Dokploy)

## 📊 Verificación

### Verificar secrets configurados:
```bash
gh secret list -R TellMeAlex/portfolio
```

Deberías ver:
- ✅ `DOKPLOY_API_TOKEN`
- ❌ `TAILSCALE_OAUTH_CLIENT_ID` (no necesario, removible)
- ❌ `TAILSCALE_OAUTH_SECRET` (no necesario, removible)
- ❌ `TAILSCALE_AUTH_KEY` (no necesario, removible)
- ❌ `RASPBERRY_PI_SSH_KEY` (no necesario, removible)
- ❌ `RASPBERRY_PI_HOST` (no necesario, removible)
- ❌ `RASPBERRY_PI_USER` (no necesario, removible)

## 📝 Archivos Relacionados

- `.github/workflows/dokploy-deploy.yml` - Workflow de notificación de despliegue
- `.github/workflows/ci-cd.yml` - Pipeline de quality gates
- `DEPLOYMENT.md` - Guía general de deployment
- `WEBHOOK-SETUP.md` - Contexto del problema de webhooks (reemplazado por esta solución)

## 🎯 Cleanup (Opcional)

Si deseas limpiar los secrets que no se usan:

```bash
# Removar secrets Tailscale no necesarios:
gh secret delete TAILSCALE_OAUTH_CLIENT_ID -R TellMeAlex/portfolio
gh secret delete TAILSCALE_OAUTH_SECRET -R TellMeAlex/portfolio
gh secret delete TAILSCALE_AUTH_KEY -R TellMeAlex/portfolio

# Removar secrets SSH no necesarios:
gh secret delete RASPBERRY_PI_SSH_KEY -R TellMeAlex/portfolio
gh secret delete RASPBERRY_PI_HOST -R TellMeAlex/portfolio
gh secret delete RASPBERRY_PI_USER -R TellMeAlex/portfolio

# También puedes remover los antiguos SSH secrets:
gh secret delete SSH_HOST -R TellMeAlex/portfolio
gh secret delete SSH_PRIVATE_KEY -R TellMeAlex/portfolio
gh secret delete SSH_USER -R TellMeAlex/portfolio
```

---

**Fecha de actualización**: 2025-12-14
**Configurado por**: Claude Code + Alejandro
**Método**: GitHub Actions Notification + Manual Dokploy Deployment
**Solución**: Simple, confiable y sin dependencias externas complejas
