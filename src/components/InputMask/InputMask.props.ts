import { DetailedHTMLProps, Dispatch, InputHTMLAttributes, SetStateAction } from 'react';
import { Replacement } from '@react-input/mask';
import { FieldError } from 'react-hook-form';

export interface IInputMaskProps extends Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    'size' | 'onChange'
> {
    label?: string;
    value: string;
    size?: 'small' | 'medium' | 'large';
    color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'link' | 'white' | 'black' | 'text';
    borderRadius?: number;
    fontFamily?: 'first' | 'second' | 'third';
    mask: string;
    replacement: string | Replacement | undefined;
    showMask?: boolean;
    separate?: boolean;
    error?: FieldError | undefined;
    onChange: Dispatch<SetStateAction<string>>;
}