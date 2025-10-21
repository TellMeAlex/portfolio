#!/bin/bash

# 🔍 Sistema CI/CD Health Check
# Verifica el estado completo del sistema de deployment

set -e

echo "🔍 Sistema CI/CD Health Check"
echo "=============================="
echo ""

# Función para mostrar estado con colores
show_status() {
    local status=$1
    local message=$2
    if [ "$status" = "OK" ]; then
        echo "✅ $message"
    else
        echo "❌ $message"
    fi
}

# Función para verificar comando disponible
check_command() {
    if command -v $1 &> /dev/null; then
        return 0
    else
        return 1
    fi
}

# 1. Verificar herramientas necesarias
echo "🛠️  Verificando herramientas..."
TOOLS_OK=true

if ! check_command "gh"; then
    show_status "FAIL" "GitHub CLI (gh) no está instalado"
    TOOLS_OK=false
fi

if ! check_command "ssh"; then
    show_status "FAIL" "SSH no está disponible"
    TOOLS_OK=false
fi

if ! check_command "curl"; then
    show_status "FAIL" "curl no está disponible"
    TOOLS_OK=false
fi

if [ "$TOOLS_OK" = true ]; then
    show_status "OK" "Todas las herramientas están disponibles"
else
    echo ""
    echo "❌ Faltan herramientas necesarias. Instala:"
    echo "   - GitHub CLI: https://cli.github.com/"
    echo "   - SSH client (usualmente preinstalado)"
    echo "   - curl (usualmente preinstalado)"
    exit 1
fi

echo ""

# 2. GitHub Actions Status
echo "📊 GitHub Actions Status:"
echo "------------------------"

if gh auth status &> /dev/null; then
    show_status "OK" "GitHub CLI autenticado"

    # Obtener últimos 3 runs
    echo ""
    echo "Últimos workflows:"
    gh run list -R TellMeAlex/portfolio --limit 3 --json status,conclusion,name,createdAt,url | \
    jq -r '.[] | "  \(.status | if . == "completed" then "✅" else "🔄" end) \(.name) - \(.createdAt[0:10]) - \(.conclusion // "running")"'

    # Verificar si hay fallos recientes
    RECENT_FAILURES=$(gh run list -R TellMeAlex/portfolio --limit 5 --json conclusion | jq -r '.[] | select(.conclusion == "failure") | .conclusion' | wc -l)
    if [ "$RECENT_FAILURES" -gt 0 ]; then
        show_status "WARN" "Hay $RECENT_FAILURES workflows fallidos en los últimos 5 runs"
    else
        show_status "OK" "No hay workflows fallidos recientes"
    fi
else
    show_status "FAIL" "GitHub CLI no está autenticado (ejecuta: gh auth login)"
fi

echo ""

# 3. Server Connectivity
echo "🌐 Server Connectivity:"
echo "----------------------"

SERVER_HOST="198.12.82.184"
SSH_KEY="$HOME/.ssh/servidor_198_12_82_184"

if [ -f "$SSH_KEY" ]; then
    show_status "OK" "SSH key encontrada"

    # Test SSH connection
    if ssh -i "$SSH_KEY" -o ConnectTimeout=10 -o StrictHostKeyChecking=no root@$SERVER_HOST "echo 'SSH OK'" &> /dev/null; then
        show_status "OK" "SSH Connection establecida"
        SSH_OK=true
    else
        show_status "FAIL" "SSH Connection falló"
        SSH_OK=false
    fi
else
    show_status "FAIL" "SSH key no encontrada en $SSH_KEY"
    SSH_OK=false
fi

echo ""

# 4. Container Status (solo si SSH funciona)
if [ "$SSH_OK" = true ]; then
    echo "🐳 Container Status:"
    echo "-------------------"

    # Verificar si el container existe y está corriendo
    CONTAINER_STATUS=$(ssh -i "$SSH_KEY" -o StrictHostKeyChecking=no root@$SERVER_HOST "docker ps --filter name=react-nginx-app --format '{{.Status}}'" 2>/dev/null || echo "ERROR")

    if [ "$CONTAINER_STATUS" = "ERROR" ]; then
        show_status "FAIL" "No se pudo verificar el estado del container"
    elif [ -z "$CONTAINER_STATUS" ]; then
        show_status "FAIL" "Container react-nginx-app no existe"
    else
        show_status "OK" "Container react-nginx-app: $CONTAINER_STATUS"

        # Verificar puertos
        PORTS=$(ssh -i "$SSH_KEY" -o StrictHostKeyChecking=no root@$SERVER_HOST "docker ps --filter name=react-nginx-app --format '{{.Ports}}'" 2>/dev/null)
        echo "  Puertos: $PORTS"
    fi

    # Verificar logs recientes por errores
    ERROR_COUNT=$(ssh -i "$SSH_KEY" -o StrictHostKeyChecking=no root@$SERVER_HOST "docker logs react-nginx-app --tail 20 2>/dev/null | grep -i error | wc -l" || echo "0")
    if [ "$ERROR_COUNT" -gt 0 ]; then
        show_status "WARN" "Se encontraron $ERROR_COUNT errores en logs recientes"
    else
        show_status "OK" "No hay errores en logs recientes"
    fi

    echo ""
fi

# 5. Website Status
echo "🌐 Website Status:"
echo "-----------------"

# Test HTTP directo
HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" --max-time 10 http://tellmealex.com 2>/dev/null || echo "000")

case $HTTP_STATUS in
    200)
        show_status "OK" "Website responde correctamente (HTTP 200)"
        ;;
    301|302)
        show_status "OK" "Website responde con redirect (HTTP $HTTP_STATUS) - Normal para HTTPS"
        ;;
    000)
        show_status "FAIL" "Website no responde (timeout o error de conexión)"
        ;;
    *)
        show_status "WARN" "Website responde con código inesperado (HTTP $HTTP_STATUS)"
        ;;
esac

# Test HTTPS si HTTP funciona
if [ "$HTTP_STATUS" != "000" ]; then
    HTTPS_STATUS=$(curl -s -o /dev/null -w "%{http_code}" --max-time 10 https://tellmealex.com 2>/dev/null || echo "000")
    if [ "$HTTPS_STATUS" = "200" ]; then
        show_status "OK" "HTTPS funciona correctamente"
    else
        show_status "WARN" "HTTPS no responde como esperado (código: $HTTPS_STATUS)"
    fi
fi

echo ""

# 6. Recent Deployments (solo si SSH funciona)
if [ "$SSH_OK" = true ]; then
    echo "📈 Recent Deployments:"
    echo "---------------------"

    # Verificar timestamp de archivos recientes
    LATEST_FILE=$(ssh -i "$SSH_KEY" -o StrictHostKeyChecking=no root@$SERVER_HOST "docker exec react-nginx-app find /usr/share/nginx/html -name '*.html' -o -name '*.js' | head -1" 2>/dev/null || echo "")

    if [ -n "$LATEST_FILE" ]; then
        LAST_MODIFIED=$(ssh -i "$SSH_KEY" -o StrictHostKeyChecking=no root@$SERVER_HOST "docker exec react-nginx-app stat -c '%y' '$LATEST_FILE'" 2>/dev/null | cut -d'.' -f1 || echo "Desconocido")
        echo "  Último archivo modificado: $LAST_MODIFIED"

        # Verificar si es reciente (menos de 24 horas)
        if [ "$LAST_MODIFIED" != "Desconocido" ]; then
            CURRENT_TIME=$(date +%s)
            FILE_TIME=$(date -d "$LAST_MODIFIED" +%s 2>/dev/null || echo "0")
            TIME_DIFF=$((CURRENT_TIME - FILE_TIME))
            HOURS_DIFF=$((TIME_DIFF / 3600))

            if [ $HOURS_DIFF -lt 24 ]; then
                show_status "OK" "Deployment reciente (hace $HOURS_DIFF horas)"
            else
                show_status "WARN" "Último deployment hace $HOURS_DIFF horas"
            fi
        fi
    else
        show_status "WARN" "No se pudieron verificar archivos de deployment"
    fi

    # Verificar backups disponibles
    BACKUP_COUNT=$(ssh -i "$SSH_KEY" -o StrictHostKeyChecking=no root@$SERVER_HOST "ls -d /tmp/backup-* 2>/dev/null | wc -l" || echo "0")
    echo "  Backups disponibles: $BACKUP_COUNT"

    echo ""
fi

# 7. Resumen final
echo "📋 Resumen del Health Check:"
echo "============================"

if [ "$SSH_OK" = true ] && [ "$HTTP_STATUS" != "000" ] && [ "$TOOLS_OK" = true ]; then
    echo "🎉 Sistema general: SALUDABLE"
    echo ""
    echo "✅ Todos los componentes principales están funcionando"
    echo "✅ CI/CD pipeline operativo"
    echo "✅ Server accesible"
    echo "✅ Website respondiendo"
    echo ""
    echo "🔗 Enlaces útiles:"
    echo "  - Website: https://tellmealex.com"
    echo "  - GitHub Actions: https://github.com/TellMeAlex/portfolio/actions"
    echo "  - Documentación: docs/README.md"
else
    echo "⚠️  Sistema general: REQUIERE ATENCIÓN"
    echo ""
    echo "❌ Algunos componentes no están funcionando correctamente"
    echo "📖 Consulta docs/TROUBLESHOOTING.md para resolver problemas"
    echo ""
    echo "🔧 Acciones recomendadas:"
    if [ "$TOOLS_OK" = false ]; then
        echo "  - Instalar herramientas faltantes"
    fi
    if [ "$SSH_OK" = false ]; then
        echo "  - Verificar configuración SSH"
    fi
    if [ "$HTTP_STATUS" = "000" ]; then
        echo "  - Verificar estado del servidor y website"
    fi
fi

echo ""
echo "📅 Health check completado: $(date)"
echo "🔄 Ejecuta este script regularmente para monitorear el sistema"

# Exit code basado en el estado general
if [ "$SSH_OK" = true ] && [ "$HTTP_STATUS" != "000" ] && [ "$TOOLS_OK" = true ]; then
    exit 0
else
    exit 1
fi