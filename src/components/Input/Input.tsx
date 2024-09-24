import cls from './Input.module.scss';
import { IInputProps } from './Input.props.ts';
import { ChangeEvent, CSSProperties, useEffect, useState } from 'react';
import { classNames } from '@helpers';
import { Text } from '@components';
import { useDebounce } from '@hooks';


export const Input = (
    {
        size = 'medium',
        borderRadius = 10,
        color = 'primary',
        fontFamily = 'first',
        label,
        error,
        value,
        className,
        onChange,
        ...props
    }: IInputProps) => {
    const [inputValue, setInputValue] = useState<string>(value || '');
    const debouncedValue = useDebounce({ value: inputValue, delay: 300 });

    useEffect(() => {
        if (debouncedValue !== value) {
            onChange(debouncedValue);
        }
    }, [debouncedValue, onChange, value]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    useEffect(() => {
        setInputValue(value || '');
    }, [value]);

    const style: CSSProperties = {
        borderRadius: `${borderRadius}px`, // Добавление gap через inline стиль
    };
    const textSize = (): 'h3' | 'h2' | 'h1' | 'h4' | 'h5' | 'h6' => {
        switch (size) {
            case'small':
                return 'h3';
            case 'medium':
                return 'h2';
            case 'large':
                return 'h1';
            default:
                return 'h2';
        }
    };
    const errorSize = (): 'h3' | 'h2' | 'h1' | 'h4' | 'h5' | 'h6' => {
        switch (size) {
            case'small':
                return 'h6';
            case 'medium':
                return 'h5';
            case 'large':
                return 'h4';
            default:
                return 'h2';
        }
    };

    return (
        <div className={cls.errorWrapper}>
            <div className={cls.wrapper}>
                <input
                    style={style}
                    {...props}
                    value={inputValue}
                    onChange={handleChange}
                    className={classNames(cls.input, {
                        // Text color
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

                        [cls.errorInput]: error !== undefined,

                        // Size
                        [cls.small]: size === 'small',
                        [cls.medium]: size === 'medium',
                        [cls.large]: size === 'large',

                        // Font family
                        [cls.font_first]: fontFamily === 'first',
                        [cls.font_second]: fontFamily === 'second',
                        [cls.font_third]: fontFamily === 'third',
                    }, [className])}
                    {...props}
                />
                {label &&
                    <Text.Paragraph
                        className={cls.label}
                        size={textSize()}
                        color="text"
                        fontFamily={fontFamily}
                    >
                        {label}
                    </Text.Paragraph>
                }
            </div>
            {error &&
                <div className={cls.error}>
                    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M0 8C0 3.58862 3.58862 0 8 0C12.4114 0 16 3.58862 16 8C16 12.4114 12.4114 16 8 16C3.58862 16 0 12.4114 0 8ZM11.3337 11.3343C11.6286 11.0392 11.6286 10.5624 11.3337 10.2673L9.06621 7.99987L11.3337 5.73249C11.6286 5.43737 11.6286 4.96057 11.3337 4.66546C11.0386 4.37048 10.5618 4.37048 10.2667 4.66546L7.99935 6.93298L5.73202 4.66546C5.43691 4.37048 4.96013 4.37048 4.66502 4.66546C4.37005 4.96057 4.37005 5.43737 4.66502 5.73249L6.93249 7.99987L4.66502 10.2673C4.37005 10.5624 4.37005 11.0392 4.66502 11.3343C4.81216 11.4814 5.00531 11.5553 5.19859 11.5553C5.39174 11.5553 5.58488 11.4814 5.73202 11.3343L7.99935 9.06676L10.2667 11.3343C10.4138 11.4814 10.607 11.5553 10.8001 11.5553C10.9934 11.5553 11.1865 11.4814 11.3337 11.3343Z"
                              fill="#CA352C" />
                    </svg>
                    <Text.Paragraph
                        color="danger"
                        size={errorSize()}
                        fontFamily={fontFamily}
                    >
                        {error.message}
                    </Text.Paragraph>
                </div>
            }
        </div>
    );
};
