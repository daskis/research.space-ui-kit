import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Colors, FontFamily, TextSizes, Weights } from '@helpers';

export interface IParagraphProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    color?: Colors;
    size?: TextSizes;
    weight?: Weights;
    fontFamily?: FontFamily;
}
