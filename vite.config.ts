import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './', // use relative paths for production
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
