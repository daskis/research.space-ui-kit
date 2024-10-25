import cls from './Textarea.module.scss';
import { ChangeEvent, CSSProperties, useEffect, useState } from 'react';
import { classNames } from '@helpers';
import { useDebounce } from '@hooks';
import { ITextareaProps } from './Textarea.props.ts';

export const Textarea = ({
    size = 'medium',
    borderRadius = 10,
    color = 'primary',
    fontFamily = 'first',
    value,
    textSize = 'h3',
    className,
    maxRows = 5,
    onChange,
    ...props
}: ITextareaProps) => {
    const [inputValue, setInputValue] = useState<string>(value || '');
    const debouncedValue = useDebounce({ value: inputValue, delay: 300 });
    const [rows, setRows] = useState(1);

    useEffect(() => {
        if (debouncedValue !== value) {
            onChange(debouncedValue);
        }
    }, [debouncedValue, onChange, value]);

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setInputValue(event.target.value);
        console.log(event.target);

        adjustRows(event.target);
    };

    const adjustRows = (target: HTMLTextAreaElement) => {
        const currentRows = Math.floor(target.scrollHeight / 24);
        setRows(Math.min(currentRows, maxRows));
    };

    useEffect(() => {
        setInputValue(value || '');
    }, [value]);

    const style: CSSProperties = {
        borderRadius: `${borderRadius}px`,
        resize: 'none',
    };

    return (
        <textarea
            style={style}
            {...props}
            value={inputValue}
            onChange={handleChange}
            rows={rows}
            className={classNames(
                cls.textarea,
                {
                    [cls[color]]: color,
                    [cls[size]]: size,
                    [cls[fontFamily]]: fontFamily,
                    [cls[textSize]]: textSize,
                },
                [className],
            )}
        />
    );
};
