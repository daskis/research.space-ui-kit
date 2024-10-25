import { Colors, Sizes } from '@helpers';

export interface IPaginationProps {
    total: number;
    current: number;
    gap?: number;
    borderRadius?: number;
    onChange: (page: number) => void;
    color?: Colors;
    size?: Sizes;
    displayCount?: number; // Новый пропс для отображения количества кнопок
    disabled?: boolean;
    className?: string;
}
