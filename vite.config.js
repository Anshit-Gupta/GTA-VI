import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
  
  return {
    plugins: [react(), tailwindcss()],
    build: {
      outDir: 'dist',
    },
    base: isGitHubPages ? '/GTA-VI/' : './',
  }
})
