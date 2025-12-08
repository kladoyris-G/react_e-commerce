import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,       // listen on 0.0.0.0 so the host can reach the dev server
    port: 3000,       // container port we will expose
    strictPort: true,
    watch: {
      usePolling: true, // required on many Docker setups so Vite notices edits
      interval: 1000    // optional: reduces CPU on some systems
    }
  }
})
