/// <reference types="vitest/config" />
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'
import { join, resolve } from 'node:path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

import { peerDependencies } from './package.json'

export default defineConfig({
  plugins: [react(), tailwindcss(), dts({ rollupTypes: true })],
  build: {
    target: 'esnext',
    minify: false,
    lib: {
      entry: resolve(__dirname, join('lib', 'index.ts')),
      fileName: 'index',
      cssFileName: 'style',
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      external: ['react/jsx-runtime', ...Object.keys(peerDependencies)]
    }
  }
})
