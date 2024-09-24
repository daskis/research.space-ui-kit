export interface IPaginationProps {
    total: number;
    current: number;
    gap?: number;
    borderRadius?: number;
    onChange: (page: number) => void;
    color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'link' | 'white' | 'black' | 'text';
    size?: 'small' | 'medium' | 'large';
    displayCount?: number;  // Новый пропс для отображения количества кнопок
    disabled?: boolean;
    className?: string;
}