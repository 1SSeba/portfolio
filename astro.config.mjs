import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [
    tailwind(),
    react()
  ],
  // Configuración opcional para el sitio
  site: 'https://tu-portfolio.com',
  // Habilitar TypeScript en modo estricto
  typescript: {
    strict: true
  }
});