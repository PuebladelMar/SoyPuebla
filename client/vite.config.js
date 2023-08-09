import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  env: {
    VITE_REACT_APP_CLERK_PUBLISHABLE_KEY: process.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY
  }
})
