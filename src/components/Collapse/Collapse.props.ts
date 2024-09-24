import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface ICollapseProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    size?: 'small' | 'medium' | 'large';
    title: string;
    children: ReactNode;
}