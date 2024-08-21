export interface Option {
    label: string;
    value: string;
}

export interface OptionElProps {
    bgColor?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'link' | 'white' | 'black' | 'bg' | 'bgDark';
    weight?: '100' | '300' | '400' | '500' | '700' | '900';
    fontFamily?: 'first' | 'second' | 'third';
    textColor?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'link' | 'white' | 'black' | 'text';
    option: Option;
    active?: boolean;
    size: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    borderColor?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'link' | 'white' | 'black' | 'bg' | 'bgDark';
    borderRadius?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    onClick: (value: Option) => void;
}