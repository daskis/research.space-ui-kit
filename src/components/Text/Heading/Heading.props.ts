import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IHeadingProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
    color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'link' | 'white' | 'black' | 'text';
    size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    weight?: '100' | '300' | '400' | '500' | '700' | '900';
    fontFamily?: 'first' | 'second' | 'third';
}
