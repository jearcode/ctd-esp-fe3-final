import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Escucha en todas las IPs locales (para acceder desde otro dispositivo en la misma red)
    port: 3000,      // Cambia el puerto (ej: 3000, 8080, etc.)
  }
})
