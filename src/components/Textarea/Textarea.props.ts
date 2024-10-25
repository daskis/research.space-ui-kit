import { Colors, FontFamily, Sizes, TextSizes } from '@helpers';
import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export interface ITextareaProps
    extends Omit<
        DetailedHTMLProps<InputHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>,
        'size' | 'onChange'
    > {
    size?: Sizes;
    color?: Colors;
    borderRadius?: number;
    placeholder?: string;
    textSize?: TextSizes;
    value: string;
    fontFamily?: FontFamily;
    onChange: (value: string) => void;
    maxRows?: number;
}
