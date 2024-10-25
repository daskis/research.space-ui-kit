import { ReactNode, useMemo, useState, useEffect } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContent } from '../lib';
import { classNames } from '@helpers';

const getPreferredTheme = (): Theme => {
    const theme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);
    if (theme) {
        return theme as Theme;
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, Theme.DARK);
        return Theme.DARK;
    } else {
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, Theme.LIGHT);
        return Theme.LIGHT;
    }
};

type ThemeProps = {
    theme?: Theme;
    children: ReactNode;
};

export const ThemeProvider = ({ theme: _theme, children }: ThemeProps) => {
    const [theme, setTheme] = useState<Theme>(_theme || getPreferredTheme());
    useEffect(() => {
        if (_theme) {
            setTheme(_theme);
            localStorage.setItem(LOCAL_STORAGE_THEME_KEY, _theme);
        }
    }, [_theme]);
    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme],
    );

    return (
        <ThemeContent.Provider value={defaultProps}>
            <div className={classNames('app', {}, [theme])}>{children}</div>
        </ThemeContent.Provider>
    );
};
