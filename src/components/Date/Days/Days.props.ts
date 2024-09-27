import { Dayjs } from 'dayjs';

export interface IDaysProps {
    year: number;
    month: number;
    value?: Dayjs;
    color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'link' | 'white' | 'black' | 'text';
    size?: 'small' | 'medium' | 'large';
    onChange: (day: Dayjs) => void;
}
