# 🚀 Deployment Setup Guide

Esta guía te ayudará a configurar el deployment automático a tu servidor SSH.

## 📋 Prerequisitos

- ✅ Servidor SSH accesible (`servidor-198`)
- ✅ Docker instalado en el servidor
- ✅ Clave SSH configurada localmente
- ✅ Puerto disponible para el portfolio (configurado: `3001`)

## 🔑 Configuración de GitHub Secrets

Necesitas configurar estos secrets en tu repositorio de GitHub:

### 1. Ir a GitHub Settings

1. Ve a tu repositorio: `https://github.com/TellMeAlex/portfolio`
2. Click en **Settings** → **Secrets and variables** → **Actions**
3. Click en **New repository secret**

### 2. Secrets Requeridos

#### `SSH_PRIVATE_KEY`
Tu clave privada SSH para acceder al servidor:

```bash
# En tu máquina local, copia tu clave privada:
cat ~/.ssh/id_rsa
```

- **Name**: `SSH_PRIVATE_KEY`
- **Value**: Pega todo el contenido de tu clave privada (incluye `-----BEGIN RSA PRIVATE KEY-----` y `-----END RSA PRIVATE KEY-----`)

#### `SSH_HOST`
La dirección de tu servidor:

- **Name**: `SSH_HOST`
- **Value**: La IP o hostname de tu servidor (el que usas después de `ssh`)

#### `SSH_USER`
El usuario SSH (probablemente `root`):

- **Name**: `SSH_USER`
- **Value**: `root`

## 🐳 Configuración del Servidor

### Estructura de Directorios

El deployment creará esta estructura en tu servidor:

```
/root/development/portfolio/
├── Dockerfile
├── docker-compose.yml
├── nginx.conf
└── [archivos del build]
```

### Puertos Utilizados

- **Portfolio**: Puerto `3001` (configurable)
- **App Existente**: Puerto `80` y `443` (sin cambios)

## 🔄 Flujo de Deployment

### Trigger Automático

El deployment se ejecuta cuando:

1. ✅ Todos los tests pasan
2. ✅ Quality gates completados
3. ✅ Push a la rama `main`
4. ✅ Workflow CI/CD exitoso

### Proceso de Deployment

1. **Build**: Construye la aplicación
2. **Package**: Crea paquete de deployment con Docker
3. **Transfer**: Sube archivos al servidor via SSH
4. **Deploy**: Construye y ejecuta container Docker
5. **Verify**: Verifica que el deployment funcione
6. **Cleanup**: Limpia imágenes Docker antiguas

## 🌐 URLs de Acceso

Después del deployment:

- **Portfolio**: `http://tellmealex.dev:3001`
- **Health Check**: `http://tellmealex.dev:3001/health`
- **App Existente**: `http://tellmealex.dev` (sin cambios)

## 🐛 Troubleshooting

### Ver logs del container

```bash
ssh servidor-198
cd /root/development/portfolio
docker-compose logs -f
```

### Verificar estado del container

```bash
ssh servidor-198
docker ps | grep portfolio-app
```

### Rebuild manual

```bash
ssh servidor-198
cd /root/development/portfolio
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

### Verificar conectividad

```bash
# Desde tu máquina local
curl http://tellmealex.dev:3001/health
```

## 🔧 Configuración Avanzada

### Cambiar Puerto

Edita `.github/workflows/deploy-ssh.yml`:

```yaml
env:
  PORT: '3002'  # Cambia aquí
```

### Configurar Dominio

Para usar un subdominio en lugar de puerto:

1. Configura reverse proxy (nginx o traefik)
2. Actualiza `nginx.conf` en el workflow
3. Modifica las URLs en el workflow

### Backup Automático

Opcional: Configura backup antes del deployment:

```bash
# En el servidor, antes del deployment
docker exec portfolio-app tar -czf /backup/portfolio-$(date +%Y%m%d).tar.gz /usr/share/nginx/html
```

## ✅ Verificación Final

Una vez configurados los secrets:

1. Haz un push a `main`
2. Ve a **Actions** en GitHub
3. Verifica que ambos workflows completen exitosamente:
   - ✅ CI/CD Pipeline
   - ✅ Deploy to SSH Server
4. Accede a `http://tellmealex.dev:3001`

## 🛡️ Seguridad

- ✅ Clave SSH protegida en GitHub Secrets
- ✅ Container aislado del sistema host
- ✅ Health checks automáticos
- ✅ Headers de seguridad en nginx
- ✅ Cleanup automático de imágenes antiguas

## 📞 Soporte

Si algo no funciona:

1. Revisa los logs de GitHub Actions
2. Verifica la conectividad SSH manual
3. Confirma que Docker funciona en el servidor
4. Asegúrate que el puerto 3001 esté libre