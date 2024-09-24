import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export interface IFilledButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    isLoading?: boolean;
    color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'link' | 'white' | 'black' | 'inherit';
    size?: 'small' | 'medium' | 'large';
    borderRadius?: number;
}