import cls from './RadioButton.module.scss';
import { ChangeEvent } from 'react';
import { classNames } from '@helpers';
import { IRadioButtonProps } from './RadioButton.props.ts';

export const RadioButton = (
    {
        value,
        checked = false,
        onChange,
        children,
        gap,
        align,
        color,
        size,
        bgColor = 'bg',
        className,
        id,
        ...props
    }: IRadioButtonProps) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(e);
        }
    };
    const style = {
        gap: `${gap}px`, // Добавление gap через inline стиль
        alignItems: align,
    };

    return (
        <label className={classNames(cls.label, {
            [cls.checked]: checked,
            // COLOR
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
            // BG COLOR
            [cls.bg_bg]: bgColor === 'bg',
            [cls.bg_dark]: bgColor === 'bgDark',
        }, [className])}
               style={style}
        >
            <input
                type="radio"
                id={id}
                value={value}
                checked={checked}
                onChange={handleChange}
                className={cls.radio}
                {...props}
            />
            <span>
                  {children}
            </span>
        </label>
    );
};
