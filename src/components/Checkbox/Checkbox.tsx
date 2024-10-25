import cls from './Checkbox.module.scss';
import { classNames } from '@helpers';
import { ICheckboxProps } from './Checkbox.props';

export const Checkbox = ({
    value,
    checked = false,
    onChange,
    color = 'primary',
    size = 'medium',
    className,
    ...props
}: ICheckboxProps) => {
    return (
        <label
            {...props}
            className={classNames(
                cls.checkbox,
                {
                    [cls[color]]: color,
                    [cls[size]]: size,
                    [cls.checked]: checked,
                },
                [className],
            )}
        >
            <input type="checkbox" checked={checked} onChange={() => onChange(value)} className={cls.input} />
            <span className={cls.label}>{value}</span>
        </label>
    );
};
