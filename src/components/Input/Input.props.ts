import { DetailedHTMLProps, Dispatch, InputHTMLAttributes, SetStateAction } from 'react';
import { FieldError } from 'react-hook-form';

export interface IInputProps extends Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    'size' | 'onChange'
> {
    label: string;
    value: string;
    size?: 'small' | 'medium' | 'large';
    color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'link' | 'white' | 'black' | 'text';
    borderRadius?: number;
    error?: FieldError | undefined;
    fontFamily?: 'first' | 'second' | 'third';
    onChange: Dispatch<SetStateAction<string>>;
}