import { Colors, Sizes } from '@helpers';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IBadgeProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    count?: number;
    size?: Sizes;
    color?: Colors;
}
