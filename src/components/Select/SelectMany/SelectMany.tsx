import cls from './SelectMany.module.scss';
import { useState, useEffect, useRef } from 'react';
import type { MouseEventHandler } from 'react';
import { Option, OptionEl } from '../Option';
import { ISelectManyProps } from './SelectMany.props.ts';
import { classNames } from '@helpers';
import { Text } from '@components';
import { Tag } from '../../Tag';

export const SelectMany = (
    {
        options,
        placeholder,
        selected = [],
        onChange,
        bgColor = 'bg',
        borderColor = 'primary',
        textColor = 'text',
        size = 'h3',
        weight = '400',
        fontFamily = 'first',
        borderRadius = 'h6',
        onClose,
        tagRadius = 'h3',
        tagBgColor = 'primary',
        tagSize = 'h3',
        tagColor = 'text',
        className,
        ...props
    }: ISelectManyProps) => {
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

    return (
        <div
            {...props}
            className={classNames(cls.selectWrapper, {
                // ЦВЕТА
                [cls.primary]: bgColor === 'primary',
                [cls.secondary]: bgColor === 'secondary',
                [cls.success]: bgColor === 'success',
                [cls.warning]: bgColor === 'warning',
                [cls.danger]: bgColor === 'danger',
                [cls.info]: bgColor === 'info',
                [cls.link]: bgColor === 'link',
                [cls.white]: bgColor === 'white',
                [cls.black]: bgColor === 'black',


                [cls.border_primary]: borderColor === 'primary',
                [cls.border_secondary]: borderColor === 'secondary',
                [cls.border_success]: borderColor === 'success',
                [cls.border_warning]: borderColor === 'warning',
                [cls.border_danger]: borderColor === 'danger',
                [cls.border_info]: borderColor === 'info',
                [cls.border_link]: borderColor === 'link',
                [cls.border_white]: borderColor === 'white',
                [cls.border_black]: borderColor === 'black',


                [cls.bg_primary]: bgColor === 'primary',
                [cls.bg_secondary]: bgColor === 'secondary',
                [cls.bg_success]: bgColor === 'success',
                [cls.bg_warning]: bgColor === 'warning',
                [cls.bg_danger]: bgColor === 'danger',
                [cls.bg_info]: bgColor === 'info',
                [cls.bg_link]: bgColor === 'link',
                [cls.bg_white]: bgColor === 'white',
                [cls.bg_black]: bgColor === 'black',
                [cls.bg_bgDark]: bgColor === 'bg',
                [cls.bg_bg]: bgColor === 'bgDark',

                // Border radius
                [cls.borderH1]: borderRadius === 'h1',
                [cls.borderH2]: borderRadius === 'h2',
                [cls.borderH3]: borderRadius === 'h3',
                [cls.borderH4]: borderRadius === 'h4',
                [cls.borderH5]: borderRadius === 'h5',
                [cls.borderH6]: borderRadius === 'h6',
            }, [className])}
            ref={rootRef}
        >
            <div className={cls.info}

                 onClick={handlePlaceHolderClick}
                 role="button"
                 tabIndex={0}
                 ref={placeholderRef}
            >
                <div
                    className={classNames(cls.placeholder, {
                        // РАЗМЕРЫ
                        [cls.h1]: size === 'h1',
                        [cls.h2]: size === 'h2',
                        [cls.h3]: size === 'h3',
                        [cls.h4]: size === 'h4',
                        [cls.h5]: size === 'h5',
                        [cls.h6]: size === 'h6',
                    }, [])}
                >

                    {selected?.length ? selected?.map((item) => (
                            <Tag
                                clickable={true}
                                onClick={() => onChange ? onChange(item) : null}
                                key={item.value}
                                size={tagSize}
                                borderRadius={tagRadius}
                                textColor={tagColor}
                                bgColor={tagBgColor}
                            >
                                {item.label}
                            </Tag>
                        )) :
                        <Text.Paragraph
                            size={size}
                            color={textColor}
                            weight={weight}
                            fontFamily={fontFamily}
                        >
                            {placeholder}
                        </Text.Paragraph>
                    }
                </div>
                <div className={classNames(cls.arrow, {
                    [cls.active]: isOpen,
                    // ЦВЕТА
                    [cls.primary]: textColor === 'primary',
                    [cls.secondary]: textColor === 'secondary',
                    [cls.success]: textColor === 'success',
                    [cls.warning]: textColor === 'warning',
                    [cls.danger]: textColor === 'danger',
                    [cls.info]: textColor === 'info',
                    [cls.link]: textColor === 'link',
                    [cls.white]: textColor === 'white',
                    [cls.black]: textColor === 'black',
                    [cls.text]: textColor === 'text',

                    // РАЗМЕРЫ
                    [cls.h1]: size === 'h1',
                    [cls.h2]: size === 'h2',
                    [cls.h3]: size === 'h3',
                    [cls.h4]: size === 'h4',
                    [cls.h5]: size === 'h5',
                    [cls.h6]: size === 'h6',

                }, [])}>
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path
                            d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                    </svg>

                </div>
            </div>
            {isOpen && (
                <ul className={classNames(cls.select, {
                    [cls.active]: isOpen,
                    [cls.bg_primary]: bgColor === 'primary',
                    [cls.bg_secondary]: bgColor === 'secondary',
                    [cls.bg_success]: bgColor === 'success',
                    [cls.bg_warning]: bgColor === 'warning',
                    [cls.bg_danger]: bgColor === 'danger',
                    [cls.bg_info]: bgColor === 'info',
                    [cls.bg_link]: bgColor === 'link',
                    [cls.bg_white]: bgColor === 'white',
                    [cls.bg_black]: bgColor === 'black',
                    [cls.bg_bgDark]: bgColor === 'bg',
                    [cls.bg_bg]: bgColor === 'bgDark',

                    [cls.borderH1]: borderRadius === 'h1',
                    [cls.borderH2]: borderRadius === 'h2',
                    [cls.borderH3]: borderRadius === 'h3',
                    [cls.borderH4]: borderRadius === 'h4',
                    [cls.borderH5]: borderRadius === 'h5',
                    [cls.borderH6]: borderRadius === 'h6',

                    [cls.border_primary]: borderColor === 'primary',
                    [cls.border_secondary]: borderColor === 'secondary',
                    [cls.border_success]: borderColor === 'success',
                    [cls.border_warning]: borderColor === 'warning',
                    [cls.border_danger]: borderColor === 'danger',
                    [cls.border_info]: borderColor === 'info',
                    [cls.border_link]: borderColor === 'link',
                    [cls.border_white]: borderColor === 'white',
                    [cls.border_black]: borderColor === 'black',
                }, [])} data-testid="selectDropdown">
                    {options.map((option) => (
                        <OptionEl
                            size={size}
                            active={selected?.some((item) => item.value === option.value)}
                            borderRadius={borderRadius}
                            textColor={textColor}
                            fontFamily={fontFamily}
                            bgColor={bgColor}
                            weight={weight}
                            key={option.value}
                            option={option}
                            onClick={handleOptionClick}
                        />
                    ))}
                </ul>
            )}
        </div>
    );
};

