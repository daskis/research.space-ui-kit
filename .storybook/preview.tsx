import React from 'react';
import '@styles/global.scss';
import type { Preview } from '@storybook/react';
import { Theme, ThemeProvider } from '../src/providers';
import { MemoryRouter } from 'react-router-dom';
import dark from './themes/ts/dark';
import light from './themes/ts/light';
import { useDarkMode } from 'storybook-dark-mode';
import './index.scss';

const preview: Preview = {
    parameters: {
        darkMode: {
            current: 'dark',
            dark: { ...dark },
            light: { ...light },
            stylePreview: true,
            darkClass: 'dark',
        },
        backgrounds: {
            values: [
                { name: 'Dark', value: '#262626' },
                { name: 'Light', value: '#ffffff' },
            ],
            default: 'dark',
        },
    },
    decorators: [
        (Story) => {
            const isDark = useDarkMode();

            return (
                <ThemeProvider theme={isDark ? Theme.DARK : Theme.LIGHT}>
                    <MemoryRouter initialEntries={['/']}>
                        <Story />
                    </MemoryRouter>
                </ThemeProvider>
            );
        },
    ],
};

export default preview;
