import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,  // ou '0.0.0.0' si tu veux accès réseau
    port: 5173          // fixe le port
  }
});
