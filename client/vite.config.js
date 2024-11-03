import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api/v1': 'https://tail-gen.onrender.com', // Corrected to remove the extra 'http://'
    },
  },
  plugins: [react()],
})
