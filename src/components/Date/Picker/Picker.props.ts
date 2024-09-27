export enum CalendarType {
    YEARS = 'years',
    MONTHS = 'months',
    DAYS = 'days',
}

export interface IPickerProps {
    color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'link' | 'white' | 'black' | 'text';
    size?: 'small' | 'medium' | 'large';
    borderRadius?: number;
    onEnd: (date: string) => void;
}