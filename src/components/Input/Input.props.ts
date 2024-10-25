import { Colors, FontFamily, Sizes, TextSizes } from '@helpers';
import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export interface IInputProps
    extends Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'size' | 'onChange'> {
    value?: string;
    placeholder?: string;
    borderRadius?: number;
    onChange?: (value: string) => void;
    size?: Sizes;
    textSize?: TextSizes;
    color?: Colors;
    fontFamily?: FontFamily;
}
