import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// IMPORTANTE: 'base' debe ser el nombre de tu repositorio en GitHub
export default defineConfig({
  base: '/portafolio/',
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test/setup.js',
    coverage: { provider: 'v8', include: ['src/**/*.{js,jsx}'], exclude: ['src/main.jsx', 'src/test/**'] }
  }
})
