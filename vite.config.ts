import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { extname, relative, resolve } from 'path';
import { fileURLToPath } from 'node:url';
import { glob } from 'glob';
import react from '@vitejs/plugin-react';
import * as path from 'node:path';

const pathsToInclude = ['src/components/**/*.{ts,tsx}', 'src/hooks/**/*.{ts,tsx}', 'src/helpers/**/*.{ts,tsx}', 'src/providers/**/*.{ts,tsx}', 'src/styles/**/*.{css,scss}'];
const entries = Object.fromEntries(
    pathsToInclude
        .flatMap(pattern => glob.sync(pattern))
        .map(file => [
            relative('src', file.slice(0, file.length - extname(file).length)),
            fileURLToPath(new URL(file, import.meta.url)),
        ]),
);

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

// https://vitejs.dev/config/
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
            entry: resolve(__dirname, 'src/index.ts'),
        },
        ssr: true,
        copyPublicDir: false,
        // https://vitejs.dev/config/build-options.html#build-rollupoptions
        rollupOptions: {
            external: ['react', 'react-dom', 'styled-components', 'classnames'],
            input: entries,
            output: [
                {
                    ...outputBase,
                    exports: 'named',
                    format: 'cjs',
                    esModule: true,
                },
                {
                    ...outputBase,
                    exports: 'named',
                    format: 'esm',
                    interop: 'esModule',
                },
            ],
            plugins: [],
        },
    },
});
