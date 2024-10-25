import { Sizes, TextSizes } from '@helpers';
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface ICollapseProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    size?: Sizes;
    title: string;
    titleSize: TextSizes;
    children: ReactNode;
}
