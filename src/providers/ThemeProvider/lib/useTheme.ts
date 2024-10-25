import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, UseThemeResult } from './types';
import { ThemeContent } from './ThemeContent.ts';


export function useTheme(): UseThemeResult {
    const { theme = Theme.LIGHT, setTheme } = useContext(ThemeContent); // Устанавливаем значение по умолчанию
    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        if (setTheme) {
            setTheme(newTheme);
        }
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return { theme, toggleTheme };
}
