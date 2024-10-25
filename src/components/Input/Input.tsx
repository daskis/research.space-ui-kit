import cls from './Input.module.scss';
import { IInputProps } from './Input.props.ts';
import { ChangeEvent, useEffect, useState } from 'react';
import { classNames } from '@helpers';
import { useDebounce } from '@hooks';

export const Input = ({
    size = 'medium',
    borderRadius = 10,
    color = 'primary',
    fontFamily = 'first',
    placeholder = '',
    textSize = 'h3',
    value,
    className,
    onChange,
    ...props
}: IInputProps) => {
    const [inputValue, setInputValue] = useState<string>(value || '');
    const debouncedValue = useDebounce({ value: inputValue, delay: 300 });

    useEffect(() => {
        if (debouncedValue !== value) {
            onChange?.(debouncedValue);
        }
    }, [debouncedValue, onChange, value]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    useEffect(() => {
        setInputValue(value || '');
    }, [value]);

    return (
        <input
            {...props}
            placeholder={placeholder}
            style={{ borderRadius: `${borderRadius}px` }}
            value={inputValue}
            onChange={handleChange}
            className={classNames(
                cls.input,
                {
                    [cls[color]]: color,
                    [cls[size]]: size,
                    [cls[fontFamily]]: fontFamily,
                    [cls[textSize]]: textSize,
                },
                [className],
            )}
            {...props}
        />
    );
};
