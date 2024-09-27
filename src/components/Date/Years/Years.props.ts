export interface IYearsProps {
    color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'link' | 'white' | 'black' | 'text';
    size?: 'small' | 'medium' | 'large';
    value: number;
    step: number;
    onChange: (value: number) => void;
}