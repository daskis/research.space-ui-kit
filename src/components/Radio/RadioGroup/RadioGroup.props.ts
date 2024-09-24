import { ReactNode } from 'react';

export interface IRadioGroupProps {
    value: string | number;
    size?: 'small' | 'medium' | 'large';
    color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'link' | 'white' | 'black' | 'text';
    gap?: number;
    align?: 'start' | 'center' | 'end';
    bgColor?: 'bg' | 'bgDark';
    onChange: (value: string) => void;
    children: ReactNode;
    className?: string;
}