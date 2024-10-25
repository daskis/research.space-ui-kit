import { Colors, Sizes } from '@helpers';
import { ReactNode, DetailedHTMLProps, LabelHTMLAttributes } from 'react';

export interface ICheckboxProps
    extends Omit<DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, 'onChange'> {
    size?: Sizes;
    color?: Colors;
    label?: string | ReactNode;
    value: string | number;
    onChange: (value: string | number) => void;
    checked: boolean;
}
