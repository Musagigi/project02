import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import { defineConfig } from 'vite';

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
        entities: path.resolve(__dirname, '/src/entities'),
        features: path.resolve(__dirname, '/src/features'),
        pages: path.resolve(__dirname, '/src/pages'),
        shared: path.resolve(__dirname, '/src/shared'),
        widgets: path.resolve(__dirname, '/src/widgets'),
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
