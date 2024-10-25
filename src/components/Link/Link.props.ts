import { LinkProps } from 'react-router-dom';
import { Colors, FontFamily, TextSizes, Weights } from '@helpers';

export interface ILinkProps extends LinkProps {
    color?: Colors;
    size?: TextSizes;
    weight?: Weights;
    fontFamily?: FontFamily;
    to: string;
}
