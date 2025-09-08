import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => {
  const isBuild = command === 'build';
  return {
    plugins: [react()],
    // This line makes your code work in both places
    base: isBuild ? "/Skillbarter/" : "/",
  }
})