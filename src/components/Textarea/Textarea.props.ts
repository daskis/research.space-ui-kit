import { DetailedHTMLProps, Dispatch, InputHTMLAttributes, SetStateAction } from 'react';
import { FieldError } from 'react-hook-form';

export interface ITextareaProps extends Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>,
    'size' | 'onChange'
> {
    label: string;
    size?: 'small' | 'medium' | 'large';
    color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'link' | 'white' | 'black' | 'text';
    borderRadius?: number;
    error?: FieldError | undefined;
    value: string;
    fontFamily?: 'first' | 'second' | 'third';
    onChange: Dispatch<SetStateAction<string>>;
    maxRows?: number;
}