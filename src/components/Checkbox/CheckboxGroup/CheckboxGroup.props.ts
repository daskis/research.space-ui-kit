import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ICheckboxItem {
    label: string;
    value: string;
}

export interface ICheckboxGroupProps extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>, 'onChange'> {
    items: ICheckboxItem[];
    values: string[];
    gap?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    textColor?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'link' | 'white' | 'black' | 'text';
    checkboxColor?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'link' | 'white' | 'black' | 'text';
    bgColor?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'link' | 'white' | 'black' | 'bg' | 'bgDark';
    fontFamily?: 'first' | 'second' | 'third';
    onChange: (values: string[]) => void; // Changed to match the updated type
}
