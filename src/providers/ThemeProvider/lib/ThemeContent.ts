import { createContext } from 'react';
import { Theme, ThemeContentProps } from './types';

export const ThemeContent = createContext<ThemeContentProps>({
    theme: Theme.LIGHT,
    setTheme: undefined,
});
