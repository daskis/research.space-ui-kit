import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import * as path from 'node:path';

const outputBase = {
    globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        'react/jsx-runtime': 'jsxRuntime',
        'classnames/bind': 'cn',
        classnames: 'classnames',
        'react-paginate': 'react-paginate',
    },
};

// Основная конфигурация Vite
export default defineConfig({
    plugins: [
        react(),
        dts({
            insertTypesEntry: true,
        }),
    ],
    resolve: {
        alias: {
            '@styles': path.resolve(__dirname, 'src/styles'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@hooks': path.resolve(__dirname, 'src/hooks'),
            '@helpers': path.resolve(__dirname, 'src/helpers'),
            '@providers': path.resolve(__dirname, 'src/providers'),
        },
    },
    define: {
        'process.env': {},
    },
    build: {
        emptyOutDir: true,
        outDir: './dist',
        lib: {
            name: 'uikit',
            entry: resolve(__dirname, 'src/index.ts'), // Укажите путь к вашему файлу входа
        },
        ssr: false, // Установите в false, если не используете SSR
        copyPublicDir: false,
        rollupOptions: {
            external: ['react', 'react-dom', 'styled-components', 'classnames'],
            input: resolve(__dirname, 'src/index.ts'), // Убедитесь, что у вас есть этот файл
            output: {
                dir: resolve(__dirname, 'dist'), // Папка для выходных файлов
                entryFileNames: '[name].[format].js', // Имена выходных файлов
                format: 'es',
                exports: 'named',
            },
        },
    },
});
