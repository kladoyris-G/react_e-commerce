import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

export default defineConfig({
  plugins: [react()],
  // Keep Vite cache outside node_modules to avoid permission issues
  cacheDir: ".vite",
  server: {
    host: true,       // listen on 0.0.0.0 so the host can reach the dev server
    port: 3000,       // container port we will expose
    strictPort: true,
    watch: {
      usePolling: true, // required on many Docker setups so Vite notices edits
      interval: 1000    // optional: reduces CPU on some systems
    },
  },
   // aliases gia ta paths gia na mhn grafoyme olh thn ora ../../../
   // prepei na ta perasoyme kai sto tsconfig.app.json
   resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@services": path.resolve(__dirname, "src/services"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@models": path.resolve(__dirname, "src/models"),
      "@assets": path.resolve(__dirname, "src/assets")
    }
  }
})
