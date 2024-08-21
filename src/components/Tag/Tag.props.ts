import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ITagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    bgColor?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'link' | 'white' | 'black' | 'bg' | 'bgDark';
    textColor?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'link' | 'white' | 'black' | 'text';
    size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    weight?: '100' | '300' | '400' | '500' | '700' | '900';
    fontFamily?: 'first' | 'second' | 'third';
    borderRadius?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    clickable?: boolean
}