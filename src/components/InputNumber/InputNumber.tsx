import cls from './InputNumber.module.scss';
import { classNames } from '@helpers';
import { IInputNumberProps } from './InputNumber.props';
import { CSSProperties, useMemo, useEffect, useState } from 'react';
import { Text } from '@components';
import { useDebounce } from '@hooks';

export const InputNumber = (
    {
        value,
        max,
        min = 0,
        color = 'primary',
        size = 'medium',
        borderRadius = 10,
        onChange,
        className,
        ...props
    }: IInputNumberProps) => {
    const [internalValue, setInternalValue] = useState<number>(value);

    // Debounced value to control the rate of onChange firing
    const debouncedValue = useDebounce({ value: internalValue.toString(), delay: 200 });

    useEffect(() => {
        const numValue = parseFloat(debouncedValue);
        if (!isNaN(numValue)) {
            onChange(numValue);
        }
    }, [debouncedValue, onChange]);

    // Function to handle input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseFloat(e.target.value);
        if (!isNaN(newValue) && (min === undefined || newValue >= min) && (max === undefined || newValue <= max)) {
            setInternalValue(newValue);
        }
    };

    // Function to increment the value
    const increment = () => {
        if (max === undefined || internalValue < max) {
            setInternalValue(prev => prev + 1);
        }
    };

    // Function to decrement the value
    const decrement = () => {
        if (min === undefined || internalValue > min) {
            setInternalValue(prev => prev - 1);
        }
    };

    const textSize = useMemo((): 'h3' | 'h2' | 'h1' | 'h4' | 'h5' | 'h6' => {
        return size === 'small' ? 'h3' : size === 'large' ? 'h1' : 'h2';
    }, [size]);

    const style: CSSProperties = {
        borderRadius: `${borderRadius}px`,
    };

    return (
        <div
            style={style}
            {...props}
            className={classNames(
                cls.wrapper,
                {
                    [cls[size]]: size,
                    [cls[color]]: color,
                },
                [className],
            )}
        >
            <button
                style={style}
                className={cls.btn} onClick={decrement} disabled={min !== undefined && internalValue <= min}>
                <Text.Paragraph color="text" size={textSize}>
                    -
                </Text.Paragraph>
            </button>
            <input
                className={classNames(cls.input, { [cls[textSize]]: textSize }, [])}
                type="number"
                value={internalValue}
                onChange={handleChange}
            />
            <button
                style={style}
                className={cls.btn} onClick={increment} disabled={max !== undefined && internalValue >= max}>
                <Text.Paragraph color="text" size={textSize}>
                    +
                </Text.Paragraph>
            </button>
        </div>
    );
};
