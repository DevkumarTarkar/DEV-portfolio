import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const isVercel = process.env.VERCEL === '1'
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true'

// https://vite.dev/config/
export default defineConfig({
  base: isVercel ? '/' : (isGitHubPages ? '/DEV-portfolio/' : '/'),
  plugins: [react()],
})
