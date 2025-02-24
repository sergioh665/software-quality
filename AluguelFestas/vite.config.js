import { fileURLToPath, URL } from 'node:url';
import fs from 'fs';
import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  server: {
    // Desative HTTPS temporariamente
    // https: {
    //   key: fs.readFileSync(path.resolve(__dirname, 'localhost.key')),
    //   cert: fs.readFileSync(path.resolve(__dirname, 'localhost.crt'))
    // },
    port: 3000, // Defina a porta desejada aqui
    open: true, // Abre o navegador automaticamente
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
});