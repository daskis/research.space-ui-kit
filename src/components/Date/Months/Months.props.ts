export interface IMonthsProps {
    value: number;
    color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'link' | 'white' | 'black' | 'text';
    size?: 'small' | 'medium' | 'large';
    onChange: (index: number) => void;
}
