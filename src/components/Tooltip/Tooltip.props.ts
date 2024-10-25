import { Sizes } from '@helpers';
import { ReactNode } from 'react';

export interface ITooltipProps {
    size?: Sizes;
    content: string;
    className?: string;
    children: ReactNode;
}
