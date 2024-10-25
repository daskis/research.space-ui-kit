import { Colors, Sizes } from '@helpers';

export enum CalendarType {
    YEARS = 'years',
    MONTHS = 'months',
    DAYS = 'days',
}

export interface IDatePickerProps {
    color?: Colors;
    size?: Sizes;
    borderRadius?: number;
    onEnd: (date: string) => void;
}
