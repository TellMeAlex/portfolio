import { defineConfig, type Plugin } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'
import { handleAsk } from './server/ask.mjs'

/**
 * Mounts the production `/api/ask` handler on the dev/preview servers so the
 * chatbot works under `npm run dev` (live with ANTHROPIC_API_KEY, demo without).
 */
const askApiPlugin = (): Plugin => ({
  name: 'tellmealex-ask-api',
  configureServer(server) {
    server.middlewares.use('/api/ask', (req, res) => {
      void handleAsk(req, res)
    })
  },
  configurePreviewServer(server) {
    server.middlewares.use('/api/ask', (req, res) => {
      void handleAsk(req, res)
    })
  },
})

export default defineConfig({
  plugins: [react(), askApiPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(path.dirname(fileURLToPath(import.meta.url)), './src'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: id => {
          // Vendor chunk for React libraries
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor'
            }
          }
        },
      },
    },
    chunkSizeWarningLimit: 500,
  },
  server: {
    port: 3000,
    open: true,
  },
  preview: {
    port: 3000,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
  },
})
