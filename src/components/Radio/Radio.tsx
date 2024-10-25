import { IRadioProps } from './Radio.props';
import cls from './Radio.module.scss';
import { classNames } from '@helpers';

export const Radio: React.FC<IRadioProps> = ({
    color = 'primary',
    size = 'medium',
    label,
    value,
    onChange,
    className,
    isSelected,
    ...props
}) => {
    return (
        <label
            {...props}
            className={classNames(
                cls.radio,
                {
                    [cls[size]]: size,
                    [cls[color]]: color,
                    [cls.checked]: isSelected,
                },
                [className],
            )}
        >
            <input type="radio" className={cls.input} checked={isSelected} onChange={() => onChange(value)} />
            <span className={cls.label}>{label}</span>
        </label>
    );
};
