import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';


export interface ITabProps {
    label: string;
    value: ReactNode;
}

export interface ITabsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    size?: 'small' | 'medium' | 'large';
    defaultIndex?: number;
    tabs: ITabProps[];
    color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'link' | 'white' | 'black' | 'text';
    orientation?: 'vertical' | 'horizontal';
    justifyContent?: 'start' | 'center' | 'end';
    gap?: number;
}