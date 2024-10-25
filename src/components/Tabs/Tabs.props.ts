import { Colors, Sizes } from '@helpers';
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface ITabProps {
    label: string;
    value: ReactNode;
}

export interface ITabsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    size?: Sizes;
    defaultIndex?: number;
    tabs: ITabProps[];
    color?: Colors;
    orientation?: 'vertical' | 'horizontal';
    justifyContent?: 'start' | 'center' | 'end';
    gap?: number;
}
