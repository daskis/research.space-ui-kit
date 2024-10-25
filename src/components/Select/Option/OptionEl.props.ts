import { Colors, FontFamily, Sizes } from '@helpers';

export interface Option {
    label: string;
    value: string;
}

export interface OptionElProps {
    color?: Colors;
    fontFamily?: FontFamily;
    size?: Sizes;
    borderRadius?: number;
    option: Option;
    active?: boolean;
    onClick: (value: Option) => void;
}
