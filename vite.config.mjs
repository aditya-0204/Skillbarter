import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // We no longer need the conditional 'base' path for Vercel.
  // Vercel handles this automatically.
})