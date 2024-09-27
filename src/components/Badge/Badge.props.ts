import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IBadgeProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    count?: number;
    size?: 'small' | 'medium' | 'large';
    color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'black';
}