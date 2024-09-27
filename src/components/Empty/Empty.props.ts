import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IEmptyProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    title?: string;
    size?: 'small' | 'medium' | 'large';
}