import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Colors, FontFamily, TextSizes, Weights } from '@helpers';

export interface IHeadingProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
    color?: Colors;
    size?: TextSizes;
    weight?: Weights;
    fontFamily?: FontFamily;
}
