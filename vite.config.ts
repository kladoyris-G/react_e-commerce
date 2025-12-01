import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,       // listen on all network interfaces (0.0.0.0)
    port: 3000,       // matches your Docker port mapping
    strictPort: true, // optional: fail if port is busy
    hmr: {
      host: 'localhost', // ensures hot module reload works from host
      port: 3001         // optional: matches host port
    }
  }
})
