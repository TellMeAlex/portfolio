# Multi-stage Dockerfile for production deployment
# Stage 1: Builder - Compiles React application with all dependencies
# Stage 2: Runtime - Node server: static files + /api/ask chatbot endpoint
#
# Optimizations:
# - Multi-stage build: dev toolchain never reaches the runtime image
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

# No build deps needed: our deps (react + vite + typescript + eslint) are
# all pure JS. The previous `apt-get install python3 make g++` was leftover
# from a template; skipping it avoids touching deb.debian.org during build
# (works around overlay-network DNS flakiness on the host).

# Copy package management files first for better Docker layer caching
# This allows Docker to cache the node_modules layer if dependencies haven't changed
COPY package.json package-lock.json ./

# Install all dependencies (production + development needed for build)
# First install Rollup's native binary explicitly due to npm optional deps bug
# See: https://github.com/npm/cli/issues/4828
RUN npm install @rollup/rollup-linux-x64-gnu --no-save --legacy-peer-deps && \
    npm ci

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
# Node runtime (instead of nginx) so the same container can serve the static
# build AND the `/api/ask` chatbot endpoint. server/index.mjs reproduces the
# caching, compression and security headers the old nginx.conf applied.
FROM node:25-slim

ENV NODE_ENV=production
# The container keeps listening on :80 so the existing Dokploy/Traefik routing
# needs no change. Binding a privileged port means running as root; to run as
# the unprivileged `node` user instead, set PORT=8080, add `USER node` below and
# point the Dokploy application port at 8080.
ENV PORT=80

WORKDIR /app

# Runtime dependencies only (the Anthropic SDK; React is bundled into dist/)
COPY package.json package-lock.json ./
RUN npm ci --omit=dev --ignore-scripts && npm cache clean --force

# Built application + the server
COPY --from=builder /app/dist ./dist
COPY server ./server

EXPOSE 80

# Health check hits the server's /health endpoint (no curl/wget needed)
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD node -e "fetch('http://127.0.0.1:'+process.env.PORT+'/health').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"

# ANTHROPIC_API_KEY is injected at runtime (Dokploy → Environment). Without it
# the chatbot answers with a demo message instead of calling the API.
CMD ["node", "server/index.mjs"]
