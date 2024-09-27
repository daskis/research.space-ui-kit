import { ReactNode } from 'react';

export interface IFlexProps {
    direction?: 'row' | 'column';
    justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
    align?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
    wrap?: 'nowrap' | 'wrap';
    gap?: number;
    className?: string;
    children: ReactNode;
}