import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import path from 'path';

type ViteConfig = {
  mode: string;
  command: string;
};

// https://vitejs.dev/config/
export default (args: ViteConfig) => {
  const generateScopedName =
    args.mode === 'production' ? '[hash:base64:6]' : '[local]__[hash:base64:3]';

  return defineConfig({
    plugins: [react()],
    resolve: {
      alias: {
        app: path.resolve(__dirname, '/src/app'),
        components: path.resolve(__dirname, '/src/components'),
        pages: path.resolve(__dirname, '/src/pages'),
      },
    },
    css: {
      devSourcemap: true,
      postcss: {
        plugins: [autoprefixer],
      },
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
      modules: {
        localsConvention: 'camelCase',
        generateScopedName,
      },
    },
  });
};
