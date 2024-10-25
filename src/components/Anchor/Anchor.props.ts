import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';
import { Colors, FontFamily, TextSizes, Weights } from '@helpers';

export interface IAnchorProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
    color?: Colors;
    size?: TextSizes;
    weight?: Weights;
    fontFamily?: FontFamily;
    href: string;
}
