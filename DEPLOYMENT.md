# Deployment Guide - Portfolio TellMeAlex

**Last Updated**: 2025-12-14
**Status**: ✅ Automated via Dokploy
**Production URL**: https://tellmealex.dev

---

## 📋 Deployment Architecture

This project uses **Dokploy** for automated deployments, managed remotely from a Raspberry Pi.

```
Developer → GitHub (main branch)
                ↓
         GitHub Webhook
                ↓
    Dokploy (Raspberry Pi) ← Monitors repository
                ↓
         Docker Build
                ↓
    VPS Server (198.12.82.184)
                ↓
    Docker Swarm + Traefik
                ↓
    https://tellmealex.dev ✨
```

---

## 🚀 How Deployment Works

### 1. Code Quality Gates (GitHub Actions)

When you push to `main` or create a PR, GitHub Actions runs:

- ✅ **Linting**: Code style checks
- ✅ **Format Check**: Prettier validation
- ✅ **Type Checking**: TypeScript compilation
- ✅ **Unit Tests**: Test suite with coverage
- ✅ **Security Scan**: yarn audit for vulnerabilities
- ✅ **Build Test**: Verify production build succeeds

**Workflow**: `.github/workflows/ci-cd.yml`

### 2. Automatic Deployment (Dokploy)

If all CI/CD checks pass and the push is to `main`:

1. **GitHub sends webhook** to Dokploy
2. **Dokploy triggers build** on VPS server
3. **Docker multi-stage build** executes:
   - Stage 1: Build React app with Node.js
   - Stage 2: Serve with Nginx
4. **Docker Swarm** updates service with zero-downtime
5. **Traefik** routes traffic with automatic SSL

**Container**: `portfolio-portfolioapp-cjgywg`
**Service**: Docker Swarm managed
**SSL**: Let's Encrypt (auto-renewed)

---

## 🔧 Dokploy Configuration

### Access Dokploy UI

- **URL**: Managed from Raspberry Pi Dokploy instance
- **Project**: portfolio
- **Application**: portfolio-app
- **Remote Server**: VPS TellMeAlex (198.12.82.184)

### Webhook Settings

- **Event**: Push to `main` branch
- **Repository**: https://github.com/TellMeAlex/portfolio
- **GitHub App**: Dokploy-2025-10-23-b1h5vv
- **Auto-deploy**: ✅ Enabled

---

## 📊 Monitoring Deployment

### Check Deployment Status

```bash
# View service status
ssh servidor-198 'docker service ls | grep portfolio'

# Expected output:
# portfolio-portfolioapp-cjgywg   replicated   1/1   [image]

# View container status
ssh servidor-198 'docker ps | grep portfolio'

# View deployment logs
ssh servidor-198 'docker service logs portfolio-portfolioapp-cjgywg -f'

# Check health
curl -I https://tellmealex.dev
# Expected: HTTP/2 200
```

### Dokploy UI Monitoring

1. Access Dokploy from Raspberry Pi
2. Navigate to: Projects → portfolio → portfolio-app
3. View:
   - **Deployments**: Build history and logs
   - **Logs**: Real-time container output
   - **Monitoring**: Resource usage
   - **Settings**: Configuration and domains

---

## 🔄 Rollback Procedures

### Option 1: Via Dokploy UI (Recommended)

1. Open Dokploy → portfolio-app
2. Go to **Deployments** tab
3. Find previous successful deployment
4. Click **Redeploy** on that version

### Option 2: Via Git

```bash
# Find the commit to rollback to
git log --oneline -10

# Revert to specific commit
git revert <commit-hash>
git push origin main

# Or reset to previous commit (use with caution)
git reset --hard <commit-hash>
git push origin main --force
```

### Option 3: Manual Service Update

```bash
# SSH to server
ssh servidor-198

# Scale down service
docker service scale portfolio-portfolioapp-cjgywg=0

# Wait 10 seconds
sleep 10

# Scale back up (will use previous image)
docker service scale portfolio-portfolioapp-cjgywg=1

# Verify
docker service ps portfolio-portfolioapp-cjgywg
```

---

## 🐛 Troubleshooting

### Deployment Failed in Dokploy

1. **Check build logs** in Dokploy UI
2. Common issues:
   - TypeScript errors → Fix and push
   - npm/yarn errors → Check dependencies
   - Docker build fails → Verify Dockerfile
   - Out of memory → Check server resources

### Site Not Updating After Push

1. **Verify webhook triggered**:
   - GitHub → Settings → Webhooks
   - Check recent deliveries
   - Look for 200 response

2. **Check Dokploy logs**:
   - Dokploy UI → Deployments
   - Verify build started and completed

3. **Hard refresh browser**:
   - Ctrl+Shift+R (Windows/Linux)
   - Cmd+Shift+R (Mac)
   - Clear browser cache

### Container Not Healthy

```bash
# Check container health
ssh servidor-198 'docker ps | grep portfolio'

# If unhealthy, check logs
ssh servidor-198 'docker service logs portfolio-portfolioapp-cjgywg --tail 100'

# Force restart
ssh servidor-198 'docker service update --force portfolio-portfolioapp-cjgywg'
```

### SSL Certificate Issues

Traefik automatically manages SSL via Let's Encrypt. If HTTPS fails:

1. **Check Traefik logs**:
   ```bash
   ssh servidor-198 'docker service logs dokploy-traefik -f'
   ```

2. **Verify DNS**:
   ```bash
   dig tellmealex.dev
   # Should resolve to: 198.12.82.184
   ```

3. **Check Traefik config**:
   ```bash
   ssh servidor-198 'cat /etc/dokploy/traefik/dynamic/portfolio-portfolioapp.yml'
   ```

---

## 📈 Deployment History

### Current Deployment

- **Date**: 2025-10-26
- **Method**: Dokploy (Docker Swarm)
- **Uptime**: 6+ weeks
- **Status**: ✅ Stable

### Previous Deployments

- **2025-11-01**: Recovered from 3-day downtime (service scaled to 0)
- **2025-10-28**: Migrated to remote management via Raspberry Pi
- **2025-10-27**: Configured multi-server Dokploy setup
- **2025-10-26**: Initial Dokploy deployment with SSL

---

## 🔐 Security Notes

### Secrets Management

- **SSH Keys**: Managed by Dokploy (ED25519)
- **SSL Certificates**: Auto-generated by Let's Encrypt
- **Environment Variables**: Set in Dokploy UI (if needed)

### Firewall Configuration

VPS has UFW enabled with ports:
- 22 (SSH)
- 80 (HTTP → HTTPS redirect)
- 443 (HTTPS)
- 3000 (Dokploy - restricted)

---

## 📚 Related Documentation

- **Server Info**: `/Users/alejandro/dev/server/SERVIDOR-INFO.md`
- **Deployment Log**: `/Users/alejandro/dev/server/DEPLOYMENT-LOG.md`
- **Dokploy Setup**: `/Users/alejandro/dev/server/DOKPLOY-SETUP.md`
- **Dockerfile**: `/Dockerfile` (multi-stage build)
- **Nginx Config**: `/nginx.conf` (SPA routing)

---

## ✅ Quick Reference

### Deploy New Changes

```bash
# 1. Make your changes
git add .
git commit -m "feat: your feature description"

# 2. Push to main (triggers CI/CD + deployment)
git push origin main

# 3. Monitor in GitHub Actions
gh run watch

# 4. Verify deployment
curl -I https://tellmealex.dev

# 5. Check in browser
open https://tellmealex.dev
```

### Emergency Stop

```bash
# Stop deployment (scale to 0)
ssh servidor-198 'docker service scale portfolio-portfolioapp-cjgywg=0'
```

### Emergency Restore

```bash
# Restore service (scale to 1)
ssh servidor-198 'docker service scale portfolio-portfolioapp-cjgywg=1'
```

---

**Maintained by**: Alejandro de la Fuente
**Contact**: llamamealex@gmail.com
**Server Location**: Jaén, Andalucía, Spain 🇪🇸
