import * as path from 'node:path';
import { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-onboarding',
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@chromatic-com/storybook',
        '@storybook/addon-interactions',
        '@storybook/addon-docs',
        'storybook-dark-mode',
    ],
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },
    viteFinal: (config) => {
        return {
            ...config,
            resolve: {
                alias: [
                    {
                        find: '@styles',
                        replacement: path.resolve(__dirname, '../src/styles'),
                    },
                    {
                        find: '@components',
                        replacement: path.resolve(__dirname, '../src/components'),
                    },
                    {
                        find: '@hooks',
                        replacement: path.resolve(__dirname, '../src/hooks'),
                    },
                    {
                        find: '@helpers',
                        replacement: path.resolve(__dirname, '../src/helpers'),
                    },
                    {
                        find: '@providers',
                        replacement: path.resolve(__dirname, '../src/providers'),
                    },
                ],
            },
        };
    },
};

export default config;
