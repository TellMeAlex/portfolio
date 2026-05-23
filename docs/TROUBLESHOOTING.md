# 🔧 Guía de Troubleshooting CI/CD

Esta guía te ayudará a diagnosticar y resolver problemas comunes en el sistema CI/CD.

## 🚨 Problemas Comunes y Soluciones

### 1. CI/CD Pipeline Fallando

#### ❌ Quality Checks Fallando

**Síntomas:**

- ESLint errors
- Format check failures
- TypeScript errors
- Test failures

**Diagnóstico:**

```bash
# Ejecutar localmente para reproducir
npm run lint
npm run format:check
npm run type-check
npm run test:unit
```

**Soluciones:**

```bash
# Fix linting issues
npm run lint -- --fix

# Fix formatting
npm run format

# Fix TypeScript errors
# Revisar errores específicos en el output

# Debug tests
npm run test:unit -- --reporter=verbose
```

#### ❌ Security Scan Fallando

**Síntomas:**

- npm audit encuentra vulnerabilidades
- Dependencias con problemas de seguridad

**Diagnóstico:**

```bash
# Revisar vulnerabilidades
npm audit

# Ver detalles específicos
npm audit --audit-level=moderate
```

**Soluciones:**

```bash
# Actualizar dependencias vulnerables
npm audit fix

# Actualizar dependencias específicas
npm update [package-name]

# En casos críticos, considerar alternativas
npm uninstall [vulnerable-package]
npm install [alternative-package]
```

#### ❌ Build Test Fallando

**Síntomas:**

- `npm run build` falla
- Assets no se generan correctamente
- Import/export errors

**Diagnóstico:**

```bash
# Construir localmente
npm run build

# Revisar configuración Vite
cat vite.config.ts

# Verificar imports
npm run type-check
```

**Soluciones:**

```bash
# Limpiar caché y reconstruir
rm -rf dist/ node_modules/
npm install
npm run build

# Verificar rutas de importación
# Verificar configuración de Vite
# Verificar estructura de archivos
```

### 2. SSH Deployment Fallando

#### ❌ SSH Connection Issues

**Síntomas:**

- "Permission denied"
- "Connection refused"
- "Host key verification failed"

**Diagnóstico:**

```bash
# Probar conexión SSH manual
ssh -i ~/.ssh/servidor_198_12_82_184 root@198.12.82.184

# Verificar secrets en GitHub
# Settings > Secrets and variables > Actions
```

**Soluciones:**

1. **Verificar SSH Secrets en GitHub:**
   - `SSH_HOST`: `198.12.82.184`
   - `SSH_USER`: `root`
   - `SSH_PRIVATE_KEY`: clave completa incluyendo `-----BEGIN...-----END`

2. **Regenerar SSH Keys si es necesario:**

```bash
# En tu máquina local
ssh-keygen -t rsa -b 4096 -f ~/.ssh/servidor_198_12_82_184_new

# Copiar clave pública al servidor
ssh-copy-id -i ~/.ssh/servidor_198_12_82_184_new.pub root@198.12.82.184

# Actualizar secret en GitHub con la nueva clave privada
```

#### ❌ Docker Container Issues

**Síntomas:**

- Container no existe: `react-nginx-app`
- Docker commands failing
- Port conflicts

**Diagnóstico:**

```bash
# Conectar al servidor
ssh root@198.12.82.184

# Verificar containers
docker ps -a

# Verificar logs
docker logs react-nginx-app

# Verificar puertos
netstat -tulpn | grep :80
```

**Soluciones:**

1. **Si el container no existe:**

```bash
# Crear container básico temporal
docker run -d --name react-nginx-app -p 80:80 -p 443:443 nginx:alpine

# O restaurar desde backup si existe
```

2. **Si hay conflictos de puerto:**

```bash
# Identificar qué está usando el puerto
lsof -i :80

# Detener proceso conflictivo
docker stop [container-conflictivo]

# Restart container principal
docker restart react-nginx-app
```

#### ❌ File Transfer Issues

**Síntomas:**

- `scp` command failing
- Files not updating in container
- Permission denied on file operations

**Diagnóstico:**

```bash
# Verificar espacio en disco del servidor
ssh root@198.12.82.184 "df -h"

# Verificar permisos del directorio
ssh root@198.12.82.184 "ls -la /root/development/"

# Verificar contenido actual del container
ssh root@198.12.82.184 "docker exec react-nginx-app ls -la /usr/share/nginx/html/"
```

**Soluciones:**

1. **Limpiar espacio si es necesario:**

```bash
ssh root@198.12.82.184 "
  docker system prune -f
  rm -rf /root/development/portfolio/*
  find /tmp -name 'backup-*' -type d -mtime +7 -delete
"
```

2. **Fix permisos:**

```bash
ssh root@198.12.82.184 "
  mkdir -p /root/development/portfolio
  chmod 755 /root/development/portfolio
"
```

### 3. Website Issues

#### ❌ Website No Actualiza

**Síntomas:**

- Deployment exitoso pero contenido antiguo
- Assets 404
- JavaScript errors en browser

**Diagnóstico:**

```bash
# Verificar timestamp de archivos en container
ssh root@198.12.82.184 "docker exec react-nginx-app ls -la /usr/share/nginx/html/"

# Verificar logs de nginx
ssh root@198.12.82.184 "docker logs react-nginx-app --tail 20"

# Test HTTP directo
curl -I http://tellmealex.com
```

**Soluciones:**

1. **Force reload del container:**

```bash
ssh root@198.12.82.184 "
  docker exec react-nginx-app nginx -s reload
  docker restart react-nginx-app
"
```

2. **Clear browser cache:**

- Ctrl+Shift+R (hard refresh)
- Developer tools > Network > Disable cache

3. **Verificar assets:**

```bash
# Verificar que todos los assets existen
ssh root@198.12.82.184 "docker exec react-nginx-app find /usr/share/nginx/html -name '*.js' -o -name '*.css'"
```

#### ❌ SSL/HTTPS Issues

**Síntomas:**

- Certificate warnings
- Mixed content errors
- HTTPS redirect not working

**Diagnóstico:**

```bash
# Verificar certificados
ssh root@198.12.82.184 "ls -la /etc/letsencrypt/live/tellmealex.com/"

# Verificar nginx configuration
ssh root@198.12.82.184 "docker exec react-nginx-app nginx -T"
```

**Soluciones:**

1. **Renovar certificados SSL:**

```bash
ssh root@198.12.82.184 "certbot renew --nginx"
```

2. **Verificar configuración nginx para HTTPS:**

```bash
# La configuración debe incluir SSL redirects
# Verificar que los certificados estén montados correctamente
```

## 🔍 Comandos de Diagnóstico

### GitHub Actions

```bash
# Ver últimos workflows
gh run list -R TellMeAlex/portfolio --limit 10

# Ver detalles de un workflow específico
gh run view [RUN_ID] -R TellMeAlex/portfolio

# Ver logs de error
gh run view [RUN_ID] --log-failed -R TellMeAlex/portfolio

# Re-ejecutar workflow fallido
gh run rerun [RUN_ID] -R TellMeAlex/portfolio
```

### Servidor

```bash
# Estado general del sistema
ssh root@198.12.82.184 "
  uptime
  df -h
  free -h
  docker ps
"

# Logs del container
ssh root@198.12.82.184 "docker logs react-nginx-app --tail 50"

# Verificar conectividad
ssh root@198.12.82.184 "curl -I http://localhost"

# Verificar procesos en puertos importantes
ssh root@198.12.82.184 "netstat -tulpn | grep -E ':(80|443|22)'"
```

### Local Development

```bash
# Verificar que todo funciona localmente
npm install
npm run lint
npm run type-check
npm run test:unit
npm run build
npm run preview

# Verificar git status
git status
git log --oneline -5
```

## 🚨 Emergency Procedures

### 1. Rollback Rápido

```bash
# Conectar al servidor
ssh root@198.12.82.184

# Listar backups disponibles
ls -la /tmp/backup-*

# Restaurar último backup bueno
LAST_BACKUP=$(ls -t /tmp/backup-* | head -1)
docker exec react-nginx-app cp -r $LAST_BACKUP/* /usr/share/nginx/html/
docker exec react-nginx-app nginx -s reload
```

### 2. Restart Completo del Container

```bash
ssh root@198.12.82.184 "
  docker restart react-nginx-app
  sleep 5
  docker ps | grep react-nginx-app
  curl -I http://localhost
"
```

### 3. Bypass CI/CD (Emergency Only)

```bash
# SOLO EN EMERGENCIAS - Deployment manual directo
npm run build
scp -r dist/* root@198.12.82.184:/tmp/emergency-deploy/
ssh root@198.12.82.184 "
  docker exec react-nginx-app cp -r /tmp/emergency-deploy/* /usr/share/nginx/html/
  docker exec react-nginx-app nginx -s reload
  rm -rf /tmp/emergency-deploy
"
```

## 📊 Health Check Script

Guarda este script como `scripts/health-check.sh`:

```bash
#!/bin/bash
echo "🔍 Sistema CI/CD Health Check"
echo "=============================="

# 1. GitHub Actions Status
echo "📊 GitHub Actions Status:"
gh run list -R TellMeAlex/portfolio --limit 3

# 2. Server Connectivity
echo -e "\n🌐 Server Connectivity:"
if ssh -o ConnectTimeout=10 root@198.12.82.184 "echo 'SSH OK'"; then
    echo "✅ SSH Connection: OK"
else
    echo "❌ SSH Connection: FAILED"
fi

# 3. Container Status
echo -e "\n🐳 Container Status:"
ssh root@198.12.82.184 "docker ps --filter name=react-nginx-app --format 'table {{.Names}}\t{{.Status}}\t{{.Ports}}'"

# 4. Website Status
echo -e "\n🌐 Website Status:"
HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" http://tellmealex.com || echo "000")
if [ "$HTTP_STATUS" = "200" ] || [ "$HTTP_STATUS" = "301" ]; then
    echo "✅ Website: OK (HTTP $HTTP_STATUS)"
else
    echo "❌ Website: FAILED (HTTP $HTTP_STATUS)"
fi

# 5. Recent Deployments
echo -e "\n📈 Recent Deployments:"
ssh root@198.12.82.184 "docker exec react-nginx-app ls -la /usr/share/nginx/html/ | head -5"

echo -e "\n✅ Health check complete!"
```

## 📞 Contacto y Escalación

Si los problemas persisten después de seguir esta guía:

1. **Revisar logs completos** de GitHub Actions y server
2. **Documentar el problema** con screenshots y logs
3. **Verificar** que no hay cambios en infraestructura externa
4. **Considerar** si el problema requiere intervención manual urgente

---

**📅 Última actualización**: Octubre 2025
**🔗 Documentación CI/CD**: [CI-CD.md](./CI-CD.md)
**📧 Contacto**: llamamealex@gmail.com
