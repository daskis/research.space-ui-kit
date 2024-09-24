import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Option } from '../Option';

export interface ISelectOneProps extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'onChange'> {
    selected: Option | null;
    options: Option[];
    placeholder: string;
    onChange: (selected: Option) => void;
    onClose?: () => void;
    color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'link' | 'white' | 'black' | 'text';
    fontFamily?: 'first' | 'second' | 'third';
    size?: 'small' | 'medium' | 'large';
    borderRadius?: number;
}