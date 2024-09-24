import cls from './CheckboxButton.module.scss';
import { ChangeEvent } from 'react';
import { classNames } from '@helpers';
import { ICheckboxButtonProps } from './CheckboxButton.props';

export const CheckboxButton = (
    {
        value,
        checked = false,
        onChange,
        children,
        gap,
        align,
        color,
        size,
        bgColor,
        className,
        id,
        ...props
    }: ICheckboxButtonProps) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(e);
        }
    };

    const style = {
        gap: `${gap}px`,
        alignItems: align,
    };

    return (
        <label
            className={classNames(cls.label, {
                // COLORS
                [cls.checked]: checked,
                [cls.primary]: color === 'primary',
                [cls.secondary]: color === 'secondary',
                [cls.success]: color === 'success',
                [cls.warning]: color === 'warning',
                [cls.danger]: color === 'danger',
                [cls.info]: color === 'info',
                [cls.link]: color === 'link',
                [cls.white]: color === 'white',
                [cls.black]: color === 'black',
                [cls.text]: color === 'text',
                // SIZES
                [cls.small]: size === 'small',
                [cls.medium]: size === 'medium',
                [cls.large]: size === 'large',
                // BG COLORS
                [cls.bg_bg]: bgColor === 'bg',
                [cls.bg_dark]: bgColor === 'bgDark',
            }, [className])}
            style={style}
        >
            <input
                type="checkbox"
                id={id}
                value={value}
                checked={checked}
                onChange={handleChange}
                className={classNames(cls.checkbox, {
                    // COLORS
                    [cls.primary]: color === 'primary',
                    [cls.secondary]: color === 'secondary',
                    [cls.success]: color === 'success',
                    [cls.warning]: color === 'warning',
                    [cls.danger]: color === 'danger',
                    [cls.info]: color === 'info',
                    [cls.link]: color === 'link',
                    [cls.white]: color === 'white',
                    [cls.black]: color === 'black',
                    [cls.text]: color === 'text',
                }, [])}
                {...props}
            />
            <span>{children}</span>
        </label>
    );
};
