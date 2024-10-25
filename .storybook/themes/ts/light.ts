import { create } from '@storybook/theming';

export default create({
    base: 'light',
    colorPrimary: '#1677ff',  // Matches --primary
    colorSecondary: '#722ed1', // Matches --secondary

    // UI
    appBg: '#ffffff',         // Matches --bg
    appPreviewBg: '#f5f5f5', // цвет фона предварительного просмотра
    appContentBg: '#ffffff',  // Matches --bg-dark
    appBorderColor: '#ffffff', // Matches --gray
    appBorderRadius: 4,

    // Typography
    textColor: '#000000',      // Matches --text
    textInverseColor: '#ffffff', // Matches --text-invert

    // Toolbar default and active colors
    barTextColor: '#aaaaaa',   // Matches --gray
    barSelectedColor: '#1677ff',  // Matches --primary
    barBg: '#f5f5f5',          // Matches --bg-dark

    // Form colors
    inputBg: '#ffffff',        // Matches --bg
    inputBorder: '#aaaaaa',    // Matches --gray
    inputTextColor: '#000000', // Matches --text
    inputBorderRadius: 4,
});