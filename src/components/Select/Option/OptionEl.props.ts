export interface Option {
    label: string;
    value: string;
}

export interface OptionElProps {
    color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'link' | 'white' | 'black' | 'text';
    fontFamily?: 'first' | 'second' | 'third';
    size?: 'small' | 'medium' | 'large';
    borderRadius?: number;
    option: Option;
    active?: boolean;
    onClick: (value: Option) => void;
}