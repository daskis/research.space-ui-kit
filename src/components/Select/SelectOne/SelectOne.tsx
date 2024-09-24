import cls from './SelectOne.module.scss';
import { useState, useEffect, useRef, CSSProperties } from 'react';
import type { MouseEventHandler } from 'react';
import { Option, OptionEl } from '../Option';
import { ISelectOneProps } from './SelectOne.props.ts';
import { classNames } from '@helpers';
import { Text } from '@components';

export const SelectOne = (
    {
        options,
        placeholder,
        selected,
        onChange,
        size = 'medium',
        fontFamily = 'first',
        borderRadius = 5,
        color = 'primary',
        onClose,
        className,
        ...props
    }: ISelectOneProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const rootRef = useRef<HTMLDivElement>(null);
    const placeholderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            const { target } = event;
            if (target instanceof Node && !rootRef.current?.contains(target)) {
                isOpen && onClose?.();
                setIsOpen(false);
            }
        };

        window.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('click', handleClick);
        };
    }, [isOpen, onClose]);

    useEffect(() => {
        const placeholderEl = placeholderRef.current;
        if (!placeholderEl) return;

        const handleEnterKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Enter') {
                setIsOpen((prev) => !prev);
            }
        };
        placeholderEl.addEventListener('keydown', handleEnterKeyDown);

        return () => {
            placeholderEl.removeEventListener('keydown', handleEnterKeyDown);
        };
    }, []);

    const handleOptionClick = (value: Option) => {
        setIsOpen(false);
        if (onChange) {
            onChange(value);
        }
    };
    const handlePlaceHolderClick: MouseEventHandler<HTMLDivElement> = () => {
        setIsOpen((prev) => !prev);
    };

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
    return (
        <div
            {...props}
            className={cls.wrapper}
            ref={rootRef}
        >
            <div
                style={style}
                className={classNames(cls.placeholder, {
                    [cls.active]: isOpen,

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

                    [cls.small]: size === 'small',
                    [cls.medium]: size === 'medium',
                    [cls.large]: size === 'large',
                }, [className])}
                onClick={handlePlaceHolderClick}
                role="button"
                tabIndex={0}
                ref={placeholderRef}
            >
                <Text.Paragraph
                    size={textSize()}
                    color="text"
                    fontFamily={fontFamily}
                >
                    {selected?.label || placeholder}
                </Text.Paragraph>
                <div className={classNames(cls.arrow, {
                    [cls.active]: isOpen,
                }, [])}>
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path
                            d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                    </svg>
                </div>
            </div>
            <ul
                style={style}
                className={classNames(cls.select, {
                    [cls.small]: size === 'small',
                    [cls.medium]: size === 'medium',
                    [cls.large]: size === 'large',

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

                    [cls.visible]: isOpen, // Add visible class when dropdown is open
                }, [])}
                data-testid="selectDropdown"
            >
                {options.map((option) => (
                    <OptionEl
                        {...option}
                        size={size}
                        color={color}
                        active={selected === option}
                        borderRadius={borderRadius}
                        key={option.value}
                        option={option}
                        onClick={handleOptionClick}
                    />
                ))}
            </ul>
        </div>
    );
};

