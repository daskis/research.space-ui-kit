import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Option } from '../Option';

export interface ISelectOneProps extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'onChange'> {
    selected: Option | null;
    options: Option[];
    placeholder?: string;
    onChange?: (selected: Option) => void;
    onClose?: () => void;

    bgColor?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'link' | 'white' | 'black' | 'bg' | 'bgDark';
    borderColor?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'link' | 'white' | 'black' | 'bg' | 'bgDark';
    weight?: '100' | '300' | '400' | '500' | '700' | '900';
    fontFamily?: 'first' | 'second' | 'third';
    textColor?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'link' | 'white' | 'black' | 'text';
    size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    borderRadius?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}