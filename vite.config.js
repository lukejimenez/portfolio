import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/portfolio/', // ← REPLACE with your repo name when deploying to GitHub Pages
  plugins: [react()]
})
