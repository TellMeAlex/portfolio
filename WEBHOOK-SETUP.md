# Configuración del Webhook de Dokploy

**Fecha**: 2025-12-14
**Propósito**: Activar auto-deployment automático cuando se hace push a main

---

## ⚠️ Problema Identificado

El webhook de Dokploy NO está configurado actualmente. Por eso los despliegues no ocurren automáticamente al hacer push a GitHub.

**Evidencia:**
- ✅ Push a GitHub exitoso
- ✅ CI/CD Pipeline pasa correctamente
- ❌ Dokploy NO despliega (no recibe notificación)
- ❌ No hay webhooks configurados en el repositorio GitHub

---

## 🎯 Objetivo

Configurar el webhook para que:
1. GitHub notifique a Dokploy cuando hay push a `main`
2. Dokploy haga build automático del código
3. El nuevo contenedor se despliegue automáticamente en el VPS

---

## 📋 Pasos de Configuración

### Paso 1: Acceder a Dokploy en Raspberry Pi

```bash
# Desde tu red local o vía Tailscale
URL: http://100.122.202.103:3000

# Credenciales: [tu usuario admin de Dokploy]
```

### Paso 2: Navegar al Proyecto Portfolio

1. **Login** en Dokploy
2. Click en **Projects** (barra lateral)
3. Selecciona el proyecto **"portfolio"**
4. Click en la aplicación **"portfolio-app"**

### Paso 3: Configurar Auto-Deploy

#### Opción A: Usando GitHub App (Recomendado)

1. **Ve a la pestaña "Source"** o "Git"
2. Verifica que esté conectado via **GitHub App**: `Dokploy-2025-10-23-b1h5vv`
3. **Activa "Auto Deploy"**:
   - Busca toggle "Auto Deploy" o "Automatic Deployments"
   - Actívalo: ✅
4. **Configura rama**: `main`
5. **Guarda cambios**

**La GitHub App debería configurar el webhook automáticamente.**

#### Opción B: Webhook Manual

Si la GitHub App no funciona o prefieres manual:

1. **En Dokploy**, ve a **Settings** → **Webhooks**
2. Click en **"Generate Webhook"** o "Create Webhook"
3. **Copia la URL** generada. Será algo como:
   ```
   https://100.122.202.103:3000/api/webhook/github/[app-id]
   ```
   O si es pública:
   ```
   https://tellmealex.dev:3000/api/webhook/github/[app-id]
   ```

4. **Nota**: Dokploy en Raspberry Pi necesita ser accesible desde GitHub:
   - **Problema**: IP privada 100.122.202.103 no es accesible desde internet
   - **Solución**: Usar la IP pública del VPS o configurar port forwarding

### Paso 4: Configurar Webhook en GitHub

Si usas webhook manual (Opción B):

1. **Ve a GitHub**: https://github.com/TellMeAlex/portfolio
2. **Settings** → **Webhooks** → **Add webhook**
3. **Configuración**:
   ```
   Payload URL: [URL copiada de Dokploy]
   Content type: application/json
   Secret: [si Dokploy proporciona uno]

   Which events?
   ☑️ Just the push event

   Active: ✅
   ```
4. **Add webhook**

### Paso 5: Verificar Configuración

#### En Dokploy:
1. Ve a la sección de Deployments
2. Busca opción "Test Webhook" o similar
3. Si hay, ejecuta test

#### En GitHub:
1. Settings → Webhooks
2. Click en el webhook recién creado
3. Ve a **"Recent Deliveries"**
4. Debería mostrar entregas recientes

---

## 🧪 Probar el Webhook

Una vez configurado, haz una prueba:

```bash
# 1. Haz un cambio mínimo (ej: actualizar comentario en README)
echo "# Test webhook - $(date)" >> README.md

# 2. Commit y push
git add README.md
git commit -m "test: verify webhook configuration"
git push origin main

# 3. Monitorear en Dokploy:
# - Ve a Projects → portfolio → portfolio-app → Deployments
# - Deberías ver un nuevo build iniciándose

# 4. Verificar en el servidor VPS:
ssh servidor-198 'watch -n 2 "docker service ps portfolio-portfolioapp-cjgywg --no-trunc | head -3"'

# Cuando termine, deberías ver un nuevo contenedor
```

---

## 🔧 Troubleshooting

### Webhook no se dispara

**Síntomas**: Push a GitHub pero Dokploy no hace build.

**Verificaciones**:

1. **Webhook existe en GitHub**:
   ```bash
   gh api repos/TellMeAlex/portfolio/hooks --jq '.[].config.url'
   ```
   Debería mostrar la URL de Dokploy.

2. **Dokploy es accesible desde internet**:
   ```bash
   # Desde fuera de tu red, verifica:
   curl -I http://[dokploy-public-url]:3000
   ```

3. **Logs de webhook en GitHub**:
   - Settings → Webhooks → [tu webhook]
   - Recent Deliveries
   - Click en una entrega → ver Response
   - ✅ 200 OK = webhook funcionando
   - ❌ 500/404 = problema de acceso

4. **Logs de Dokploy**:
   ```bash
   ssh servidor-198 'docker service logs dokploy --tail 100 | grep webhook'
   ```

### Dokploy en IP privada (100.122.202.103)

**Problema**: GitHub no puede alcanzar una IP privada de Tailscale.

**Soluciones**:

#### Solución 1: Usar IP pública del VPS

1. Configurar Dokploy para escuchar en el VPS (198.12.82.184)
2. Abrir puerto 3000 en firewall del VPS
3. Usar webhook URL: `http://198.12.82.184:3000/api/webhook/...`

**Riesgo**: Exponer Dokploy UI públicamente (requiere autenticación)

#### Solución 2: Reverse Proxy en VPS

1. Configurar nginx en VPS como proxy
2. Crear endpoint público: `https://tellmealex.dev/dokploy-webhook`
3. Proxy redirige a Raspberry Pi via Tailscale
4. Webhook URL: `https://tellmealex.dev/dokploy-webhook`

**Ventaja**: No expone UI de Dokploy directamente

#### Solución 3: GitHub App (Recomendada)

1. Usar la GitHub App de Dokploy existente: `Dokploy-2025-10-23-b1h5vv`
2. La app usa mecanismos de GitHub que no requieren webhook HTTP directo
3. Activar "Auto Deploy" en Dokploy es suficiente

**Nota**: Verifica que la GitHub App tenga acceso al repositorio.

---

## 📝 Configuración Recomendada

Para tu setup actual (Dokploy en Raspberry Pi + VPS):

### Opción A: GitHub App (Más Simple)

1. En Dokploy: Activar "Auto Deploy" via GitHub App
2. Asegurar que GitHub App tiene permisos en el repo
3. No requiere configuración de webhook manual

### Opción B: Webhook via VPS Reverse Proxy

Si GitHub App no funciona:

1. **En VPS**: Configurar nginx reverse proxy
2. **Endpoint público**: `https://tellmealex.dev/webhook/dokploy`
3. **Proxy a Raspberry**: Via Tailscale a `http://100.122.202.103:3000`
4. **Webhook URL**: `https://tellmealex.dev/webhook/dokploy`

---

## ✅ Verificación Post-Configuración

Una vez configurado el webhook:

```bash
# 1. Hacer cambio real en código
echo "// Webhook test" >> src/main.tsx

# 2. Commit y push
git add src/main.tsx
git commit -m "test: webhook verification"
git push origin main

# 3. Verificar en Dokploy UI:
# - Nuevo build debería aparecer en Deployments
# - Status: Building → Success
# - Tiempo: ~2-5 minutos

# 4. Verificar en servidor:
ssh servidor-198 'docker service ps portfolio-portfolioapp-cjgywg | head -2'
# Debería mostrar nuevo contenedor con timestamp reciente

# 5. Verificar sitio web:
curl -I https://tellmealex.dev
# last-modified header debería ser reciente
```

---

## 📚 Próximos Pasos

Después de configurar el webhook:

1. ✅ **Probar con cambio real** (ya hicimos uno en main.tsx)
2. ✅ **Verificar build automático**
3. ✅ **Documentar en DEPLOYMENT.md**
4. ✅ **Revertir cambio de prueba** (si solo era test)

---

## 🔗 Referencias

- **Dokploy Docs**: https://docs.dokploy.com/docs/core/webhooks
- **GitHub Webhooks**: https://docs.github.com/webhooks
- **Servidor Info**: `/Users/alejandro/dev/server/SERVIDOR-INFO.md`
- **Deployment Log**: `/Users/alejandro/dev/server/DEPLOYMENT-LOG.md`

---

**Última actualización**: 2025-12-14
**Responsable**: Alejandro de la Fuente
**Estado**: ⏳ Webhook pendiente de configuración
