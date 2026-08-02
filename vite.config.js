import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base path matches the existing GitHub Pages project site (/portfolio/).
// Adjust if the repo name or deployment path changes.
export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
})
