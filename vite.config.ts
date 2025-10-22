import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

export default defineConfig({
  plugins: [react()],
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

          // Feature-based chunks for lazy-loaded components
          if (id.includes('/features/experience')) {
            return 'experience'
          }
          if (id.includes('/features/projects')) {
            return 'projects'
          }
          if (id.includes('/features/skills')) {
            return 'skills'
          }
          if (id.includes('/features/stats')) {
            return 'stats'
          }

          // Core UI chunk for shared components
          if (id.includes('/core/ui')) {
            return 'ui'
          }
        },
      },
    },
    // Chunk size warnings
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
