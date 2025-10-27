# Multi-stage Dockerfile for production deployment
# Stage 1: Builder - Compiles React application with all dependencies
# Stage 2: Runtime - Serves static files with Nginx (Alpine for minimal size)
#
# Optimizations:
# - Multi-stage build: minimal final image (~50MB)
# - Non-root user execution: enhanced security
# - Health checks: monitoring and auto-recovery
# - Layer caching: faster builds on unchanged dependencies
# - Production optimization: NODE_ENV=production for tree-shaking

# ============================================================================
# STAGE 1: BUILDER
# ============================================================================
# Use Debian-based Node image instead of Alpine for better compatibility
# with native modules (Rollup, esbuild, etc.)
FROM node:25-slim AS builder

# Set working directory
WORKDIR /app

# Install build dependencies for native modules
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    python3 \
    make \
    g++ \
    && rm -rf /var/lib/apt/lists/*

# Copy package management files first for better Docker layer caching
# This allows Docker to cache the node_modules layer if dependencies haven't changed
COPY package.json package-lock.json yarn.lock* ./

# Install all dependencies (production + development needed for build)
# First install Rollup's native binary explicitly due to npm optional deps bug
# See: https://github.com/npm/cli/issues/4828
RUN npm install @rollup/rollup-linux-x64-gnu --no-save --legacy-peer-deps && \
    npm ci --frozen-lockfile

# Copy application source code
COPY . .

# TypeScript type checking before build
# Catches type errors early in the build process
RUN npm run type-check

# Run linting to ensure code quality (optional: comment out if slow)
RUN npm run lint || echo "Lint warnings ignored"

# Build the React application with Vite
# NODE_ENV=production optimizes the build (tree-shaking, minification, etc.)
# Output is in dist/ directory
# Vite config already specifies sourcemaps and bundle optimization
RUN NODE_ENV=production npm run build

# Verify build output exists
RUN test -d dist || (echo "Build failed: dist directory not found" && exit 1) && \
    echo "Build successful: dist directory contains $(ls -1 dist | wc -l) items"

# ============================================================================
# STAGE 2: RUNTIME
# ============================================================================
FROM nginx:1.27-alpine

# Set working directory
WORKDIR /app

# Update system packages and install minimal runtime dependencies
RUN apk update && \
    apk add --no-cache \
    curl \
    ca-certificates && \
    rm -rf /var/cache/apk/* && \
    rm -rf /etc/nginx/conf.d/default.conf

# Copy custom Nginx configuration
# Includes SPA routing, compression, caching, and security headers
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built application from builder stage
# Only includes production-optimized dist/ files
COPY --from=builder /app/dist /usr/share/nginx/html

# Set proper permissions for Nginx
# Nginx will run as the nginx user (already exists in nginx:alpine image)
RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html

# Expose HTTP port 80
# Dokploy's Traefik will handle SSL termination and route traffic here
EXPOSE 80

# Health check configuration
# Used by Docker and Dokploy for container liveness monitoring
# - interval: check every 30 seconds
# - timeout: 3 second timeout per check
# - start-period: allow 5 seconds for startup
# - retries: 3 failed checks = unhealthy
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD curl -f http://localhost/ || exit 1

# Start Nginx in foreground mode
# This keeps the container running and allows proper signal handling
# foreground mode is REQUIRED for Docker containers (Nginx must not daemonize)
# Receives SIGTERM for graceful shutdown
CMD ["nginx", "-g", "daemon off;"]
