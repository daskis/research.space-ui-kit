import { create } from '@storybook/theming';

export default create({
    base: 'dark',
    colorPrimary: '#1677ff',
    colorSecondary: '#722ed1',

    // UI
    appBg: '#1f1f1f', // цвет фона обёртки
    appPreviewBg: '#262626', // цвет фона предварительного просмотра
    appContentBg: '#1f1f1f', // цвет фона контента
    appBorderColor: '#262626',
    appBorderRadius: 4,

    // Typography
    textColor: '#ffffff',
    textInverseColor: '#000000',

    // Toolbar default and active colors
    barTextColor: '#aaaaaa',
    barSelectedColor: '#1677ff',
    barBg: '#262626',

    // Form colors
    inputBg: '#262626',
    inputBorder: '#aaaaaa',
    inputTextColor: '#ffffff',
    inputBorderRadius: 4,
});
