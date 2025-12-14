# Dokploy Auto-Deploy Setup Guide

**Status**: ⚙️ Workflow actualizado - Requiere configuración de Tailscale OAuth + SSH secrets

## 📋 Resumen

Se ha configurado auto-deployment usando GitHub Actions + Tailscale + SSH + Dokploy API para evitar el problema de la IP privada Tailscale. El runner de GitHub se conecta temporalmente a la red Tailscale vía OAuth para alcanzar la Raspberry Pi.

### Arquitectura de Solución

```
GitHub (push to main)
  ↓
GitHub Actions CI/CD (quality gates)
  ↓ (si pasa)
GitHub Actions Deploy Workflow
  ↓ (1. Connect to Tailscale via OAuth)
GitHub Runner en Tailscale network
  ↓ (2. SSH via Tailscale)
Raspberry Pi (100.122.202.103)
  ↓ (3. curl localhost:3000)
Dokploy API (trigger deployment)
  ↓
VPS (198.12.82.184) - Deploy portfolio
```

## ✅ Completado

- [x] API Token generado en Dokploy: `DOKPLOY_API_TOKEN`
- [x] Application ID obtenido: `R02khAu1mJJTnpSlkiu2v`
- [x] GitHub Secret configurado: `DOKPLOY_API_TOKEN`
- [x] Workflow creado: `.github/workflows/dokploy-deploy.yml`
- [x] Workflow actualizado para conectar a Tailscale

## ⚙️ Configuración Pendiente

Necesitas configurar 5 GitHub Secrets adicionales:

### Tailscale OAuth Credentials (Requeridos para conectar GitHub Actions a Tailscale)

### 0.1 TAILSCALE_OAUTH_CLIENT_ID

**Descripción**: OAuth Client ID para conectar GitHub Actions a Tailscale

**Cómo obtenerlo**:
1. Ve a Tailscale Admin Console: https://login.tailscale.com/admin/settings/oauth
2. Click en "Generate OAuth client"
3. Descripción: "GitHub Actions - Portfolio Auto-Deploy"
4. Tags: `tag:ci` (necesitas crear este tag si no existe)
5. Scopes: "devices:write" (para conectar dispositivos temporales)
6. Copia el **Client ID**

**Cómo configurarlo**:
```bash
# Copia el Client ID y ejecuta:
gh secret set TAILSCALE_OAUTH_CLIENT_ID -R TellMeAlex/portfolio
# Pega el Client ID
```

### 0.2 TAILSCALE_OAUTH_SECRET

**Descripción**: OAuth Secret para autenticar GitHub Actions con Tailscale

**Cómo obtenerlo**:
- En el mismo paso anterior, copia el **Client Secret** (solo se muestra una vez)

**Cómo configurarlo**:
```bash
gh secret set TAILSCALE_OAUTH_SECRET -R TellMeAlex/portfolio
# Pega el Client Secret
```

### SSH Credentials (Requeridos para conectar a Raspberry Pi):

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
4. **Connect to Tailscale** → GitHub runner se conecta a Tailscale network vía OAuth
5. **SSH a Raspberry Pi** → GitHub Actions se conecta a 100.122.202.103
6. **API Call** → Curl a `localhost:3000/api/application.deploy`
7. **Dokploy deploys** → Construye y despliega en VPS

## 🧪 Testing

Para probar que funciona:

1. **Configura los 2 secrets de Tailscale OAuth** (ver sección 0.1 y 0.2)
2. **Configura los 3 secrets SSH** (ver arriba)
3. **Haz un cambio pequeño** al código (ej: comentario en `src/main.tsx`)
4. **Commit y push** a main:
   ```bash
   git add .
   git commit -m "test: verify Dokploy auto-deployment via Tailscale+SSH"
   git push origin main
   ```
5. **Monitorea**:
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
- `TAILSCALE_OAUTH_CLIENT_ID`
- `TAILSCALE_OAUTH_SECRET`
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

### Error: "Connection timed out" (SSH)
**Causa**: GitHub Actions runner no pudo conectarse a Tailscale o la Raspberry Pi
**Solución**:
- Verifica que `TAILSCALE_OAUTH_CLIENT_ID` y `TAILSCALE_OAUTH_SECRET` están configurados
- Verifica que el tag `tag:ci` está permitido en el OAuth client de Tailscale
- Verifica que `RASPBERRY_PI_HOST` es correcto (100.122.202.103)
- Revisa los logs del step "Connect to Tailscale" en GitHub Actions

### Error: "Permission denied (publickey)"
**Causa**: La clave SSH no es correcta o no está autorizada en la Raspberry Pi
**Solución**:
- Verifica que `RASPBERRY_PI_SSH_KEY` tiene la clave privada correcta
- Asegúrate de que la clave pública está en `~/.ssh/authorized_keys` en la Raspberry Pi
- Verifica que el usuario `RASPBERRY_PI_USER` es correcto

### Error: "Failed to authenticate with Tailscale"
**Causa**: Las credenciales OAuth de Tailscale son incorrectas
**Solución**:
- Regenera el OAuth client en Tailscale Admin Console
- Actualiza `TAILSCALE_OAUTH_CLIENT_ID` y `TAILSCALE_OAUTH_SECRET` en GitHub Secrets
- Verifica que los scopes incluyen "devices:write"

### Error: "API call failed"
**Causa**: El API de Dokploy no respondió correctamente
**Solución**:
- Verifica que Dokploy está corriendo: `ssh usuario@100.122.202.103 "docker ps | grep dokploy"`
- Verifica el API token: `DOKPLOY_API_TOKEN` debe ser válido
- Verifica que el Application ID es correcto: `R02khAu1mJJTnpSlkiu2v`

## 📝 Archivos Relacionados

- `.github/workflows/dokploy-deploy.yml` - Workflow de auto-deployment
- `.github/workflows/ci-cd.yml` - Pipeline de quality gates
- `DEPLOYMENT.md` - Guía general de deployment
- `WEBHOOK-SETUP.md` - Contexto del problema de webhooks (reemplazado por esta solución)

## 🎯 Próximos Pasos

1. ⏳ Configurar Tailscale OAuth credentials (2 secrets)
2. ⏳ Configurar los 3 GitHub Secrets SSH
3. ⏳ Probar deployment con un commit de prueba
4. ⏳ Verificar que el despliegue funciona correctamente
5. ⏳ Actualizar `DEPLOYMENT.md` con el nuevo flujo
6. ⏳ Eliminar `WEBHOOK-SETUP.md` (ya no necesario)

---

**Fecha de configuración**: 2025-12-14 (actualizado)
**Configurado por**: Claude Code + Alejandro
**Método**: GitHub Actions + Tailscale OAuth + SSH + Dokploy API
**Solución**: Conecta GitHub runner temporalmente a Tailscale network para alcanzar Raspberry Pi en IP privada
