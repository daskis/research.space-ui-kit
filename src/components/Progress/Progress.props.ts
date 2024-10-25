import { Colors, Sizes } from '@helpers';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IProgressProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    variant?: 'line' | 'round';
    size?: Sizes;
    color?: Colors;
    percent: number;
}
