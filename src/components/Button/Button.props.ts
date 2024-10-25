import { Colors, Sizes } from '@helpers';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export interface IButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    color?: Colors;
    borderColor?: Colors;
    size?: Sizes;
    isLoading?: boolean;
    disabled?: boolean;
    borderRadius?: number;
}
