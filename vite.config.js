import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' keeps asset paths relative, so the build works on
// username.github.io as well as on a project-repo subpath.
export default defineConfig({
  plugins: [react()],
  base: './',
});
