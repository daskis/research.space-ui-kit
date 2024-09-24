import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export interface IThemeSwitcherProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    size?: 'small' | 'medium' | 'large';
}