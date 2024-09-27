import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IMenuItems {
    label: string;
    value: string;
}

export interface IMenuProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
    items: IMenuItems[];
    size?: 'small' | 'medium' | 'large';
    gap?: number;
    borderRadius?: number;
    color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'link' | 'white' | 'black' | 'text';
}