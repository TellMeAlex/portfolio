# Dokploy Auto-Deploy Setup Guide

**Status**: ✅ Workflow configurado - Requiere configuración de SSH secrets

## 📋 Resumen

Se ha configurado auto-deployment usando GitHub Actions + SSH + Dokploy API para evitar el problema de la IP privada Tailscale.

### Arquitectura de Solución

```
GitHub (push to main)
  ↓
GitHub Actions CI/CD (quality gates)
  ↓ (si pasa)
GitHub Actions Deploy Workflow
  ↓ (SSH via Tailscale)
Raspberry Pi (100.122.202.103)
  ↓ (curl localhost)
Dokploy API (trigger deployment)
  ↓
VPS (198.12.82.184) - Deploy portfolio
```

## ✅ Completado

- [x] API Token generado en Dokploy: `DOKPLOY_API_TOKEN`
- [x] Application ID obtenido: `R02khAu1mJJTnpSlkiu2v`
- [x] GitHub Secret configurado: `DOKPLOY_API_TOKEN`
- [x] Workflow creado: `.github/workflows/dokploy-deploy.yml`

## ⚙️ Configuración Pendiente

Necesitas configurar 3 GitHub Secrets adicionales para SSH:

### 1. RASPBERRY_PI_SSH_KEY

**Descripción**: Clave privada SSH para acceder a la Raspberry Pi

**Cómo obtenerla**:
```bash
# En tu máquina local, si ya tienes acceso SSH a la Raspberry Pi:
cat ~/.ssh/id_rsa  # O la clave que uses para conectarte

# Si necesitas generar una nueva clave específica para GitHub Actions:
ssh-keygen -t ed25519 -C "github-actions@portfolio-deploy" -f ~/.ssh/github_actions_rpi
# Luego copia la clave pública a la Raspberry Pi:
ssh-copy-id -i ~/.ssh/github_actions_rpi.pub usuario@100.122.202.103
# Y usa la clave privada para el secret:
cat ~/.ssh/github_actions_rpi
```

**Cómo configurarlo**:
```bash
# Copia el contenido de la clave privada y ejecútala:
gh secret set RASPBERRY_PI_SSH_KEY -R TellMeAlex/portfolio
# Pega la clave completa (incluye -----BEGIN ... END-----)
```

### 2. RASPBERRY_PI_HOST

**Descripción**: Dirección IP o hostname de la Raspberry Pi en Tailscale

**Valor recomendado**: `100.122.202.103`

**Cómo configurarlo**:
```bash
gh secret set RASPBERRY_PI_HOST -b "100.122.202.103" -R TellMeAlex/portfolio
```

### 3. RASPBERRY_PI_USER

**Descripción**: Usuario SSH en la Raspberry Pi

**Valor**: El usuario con el que te conectas normalmente por SSH (ej: `pi`, `ubuntu`, tu nombre de usuario)

**Cómo verificarlo**:
```bash
# Conecta a tu Raspberry Pi y ejecuta:
whoami
```

**Cómo configurarlo**:
```bash
# Reemplaza 'usuario' con el valor correcto:
gh secret set RASPBERRY_PI_USER -b "usuario" -R TellMeAlex/portfolio
```

## 🚀 Flujo de Deployment

1. **Push a main** → GitHub Actions ejecuta `ci-cd.yml`
2. **CI/CD pasa** → Linting, formatting, type-check, build, tests ✅
3. **Auto-trigger** → `dokploy-deploy.yml` se ejecuta automáticamente
4. **SSH a Raspberry Pi** → GitHub Actions se conecta via Tailscale
5. **API Call** → Curl a `localhost:3000/api/application.deploy`
6. **Dokploy deploys** → Construye y despliega en VPS

## 🧪 Testing

Para probar que funciona:

1. **Configura los 3 secrets SSH** (ver arriba)
2. **Haz un cambio pequeño** al código (ej: comentario en `src/main.tsx`)
3. **Commit y push** a main:
   ```bash
   git add .
   git commit -m "test: verify Dokploy auto-deployment via SSH"
   git push origin main
   ```
4. **Monitorea**:
   - GitHub Actions: https://github.com/TellMeAlex/portfolio/actions
   - Dokploy UI: http://100.122.202.103:3000 → Projects → portfolio → portfolio-app → Deployments
   - Live site: https://tellmealex.dev

## 📊 Verificación

### Verificar secrets configurados:
```bash
gh secret list -R TellMeAlex/portfolio
```

Deberías ver:
- `DOKPLOY_API_TOKEN`
- `RASPBERRY_PI_SSH_KEY`
- `RASPBERRY_PI_HOST`
- `RASPBERRY_PI_USER`

### Verificar conectividad SSH (local):
```bash
# Desde tu máquina, verifica que puedes conectarte:
ssh usuario@100.122.202.103 "curl -s http://localhost:3000/api/health"
```

### Ver logs del último deployment:
```bash
# En GitHub Actions:
gh run list --workflow=dokploy-deploy.yml --limit 1
gh run view --log
```

## 🔧 Troubleshooting

### Error: "Permission denied (publickey)"
- Verifica que `RASPBERRY_PI_SSH_KEY` tiene la clave correcta
- Asegúrate de que la clave pública está en `~/.ssh/authorized_keys` en la Raspberry Pi

### Error: "Connection timed out"
- Verifica que estás conectado a Tailscale
- Confirma que `RASPBERRY_PI_HOST` es correcto

### Error: "API call failed"
- Verifica que Dokploy está corriendo: `ssh usuario@100.122.202.103 "docker ps | grep dokploy"`
- Verifica el API token: `DOKPLOY_API_TOKEN` debe ser válido

## 📝 Archivos Relacionados

- `.github/workflows/dokploy-deploy.yml` - Workflow de auto-deployment
- `.github/workflows/ci-cd.yml` - Pipeline de quality gates
- `DEPLOYMENT.md` - Guía general de deployment
- `WEBHOOK-SETUP.md` - Contexto del problema de webhooks (reemplazado por esta solución)

## 🎯 Próximos Pasos

1. ✅ Configurar los 3 GitHub Secrets SSH
2. ✅ Probar deployment con un commit de prueba
3. ✅ Verificar que el despliegue funciona correctamente
4. ✅ Actualizar `DEPLOYMENT.md` con el nuevo flujo
5. ✅ Eliminar `WEBHOOK-SETUP.md` (ya no necesario)

---

**Fecha de configuración**: 2025-12-14
**Configurado por**: Claude Code + Alejandro
**Método**: GitHub Actions + SSH + Dokploy API (evita problema IP privada)
