import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  server: {
    host: true,
    port: 5173
  },
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'public/_headers',
          dest: '.' // This puts _headers directly into dist/
        }
      ]
    }), tailwindcss()
  ]
})
