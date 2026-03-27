import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const rootDir = dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      input: {
        main: resolve(rootDir, 'index.html'),
        dcEnergyBenchmarking: resolve(
          rootDir,
          'dc-energy-benchmarking/index.html',
        ),
        dcBenchmarkingDeadlinesVerification: resolve(
          rootDir,
          'dc-benchmarking-deadlines-verification/index.html',
        ),
        dcEnergyBenchmarkingGuide: resolve(
          rootDir,
          'dc-energy-benchmarking-guide/index.html',
        ),
        dcBepsCompliance: resolve(
          rootDir,
          'dc-beps-compliance/index.html',
        ),
        dcEnergyBenchmarkingBepsGuide: resolve(
          rootDir,
          'dc-energy-benchmarking-beps-guide/index.html',
        ),
      },
      output: {
        manualChunks(id) {
          if (id.includes('@react-three/drei')) {
            return 'three-drei'
          }

          if (id.includes('@react-three/fiber')) {
            return 'three-fiber'
          }

          if (id.includes('node_modules/three')) {
            return 'three-core'
          }

          if (id.includes('gsap')) {
            return 'motion'
          }

          return undefined
        },
      },
    },
  },
})
