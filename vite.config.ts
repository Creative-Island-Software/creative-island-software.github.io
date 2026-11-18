import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Sitio de usuario en GitHub Pages (bbastiann.github.io): se sirve desde la raíz, así que base = '/'.
export default defineConfig({
  base: '/',
  plugins: [react()],
})
