import React from 'react';

export interface ICheckboxButtonProps {
    value: string;
    checked?: boolean;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    size?: 'small' | 'medium' | 'large';
    color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'link' | 'white' | 'black' | 'text';
    gap?: number;
    align?: 'start' | 'center' | 'end';
    bgColor?: 'bg' | 'bgDark';
    className?: string;
    id?: string;
    children?: React.ReactNode;
}
