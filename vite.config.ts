import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigsPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tsconfigsPaths(), react()],
});
