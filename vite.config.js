import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Warn when any single chunk exceeds 500 KB
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        // Split vendor libraries into their own chunk so they stay cached across deploys
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('framer-motion')) return 'vendor-framer';
            if (id.includes('gsap'))         return 'vendor-gsap';
            if (id.includes('react-dom'))    return 'vendor-react';
            if (id.includes('react-router')) return 'vendor-router';
            return 'vendor';
          }
        },
        // All assets (images, fonts, etc.) under assets/
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
  },
  // Images in src/assets are served lazily — no inline base64 blobs above 10 KB
  assetsInlineLimit: 10240,
})
