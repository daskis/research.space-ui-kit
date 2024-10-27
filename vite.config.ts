import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';

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
            '@styles': resolve(__dirname, 'src/styles'),
            '@components': resolve(__dirname, 'src/components'),
            '@hooks': resolve(__dirname, 'src/hooks'),
            '@helpers': resolve(__dirname, 'src/helpers'),
            '@providers': resolve(__dirname, 'src/providers'),
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
            formats: ['es', 'cjs'], // Поддерживаемые форматы
            fileName: (format) => `index.${format}.js`, // Имена выходных файлов
        },
        ssr: false,
        rollupOptions: {
            external: ['react', 'react-dom', 'styled-components', 'classnames'],
            output: {
                globals: outputBase.globals,
                entryFileNames: '[name].[format].js',
                format: 'es',
                exports: 'named',
            },
        },
    },
});
