import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Option } from '../Option';
import { Colors, FontFamily, Sizes } from '@helpers';

export interface ISelectOneProps
    extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'onChange'> {
    selected: Option | null;
    options: Option[];
    placeholder: string;
    onChange: (selected: Option) => void;
    onClose?: () => void;
    color?: Colors;
    fontFamily?: FontFamily;
    size?: Sizes;
    borderRadius?: number;
}
