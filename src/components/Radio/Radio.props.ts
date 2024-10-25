import { Colors, Sizes } from '@helpers';
import { DetailedHTMLProps, LabelHTMLAttributes, ReactNode } from 'react';

export interface IRadioProps
    extends Omit<DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, 'onChange'> {
    size?: Sizes;
    color?: Colors;
    label?: string | ReactNode;
    value: string | number;
    onChange: (value: string | number) => void;
    isSelected: boolean;
}
