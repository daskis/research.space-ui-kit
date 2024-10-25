import cls from './SelectMany.module.scss';
import { useState, useEffect, useRef, CSSProperties, MouseEventHandler } from 'react';
import { Option, OptionEl } from '../Option';
import { ISelectManyProps } from './SelectMany.props.ts';
import { classNames } from '@helpers';
import { Paragraph } from '@components';

export const SelectMany = ({
    options,
    placeholder,
    selected = [],
    onChange,
    size = 'medium',
    fontFamily = 'first',
    borderRadius = 5,
    color = 'primary',
    onClose,
    className,
    ...props
}: ISelectManyProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const rootRef = useRef<HTMLDivElement>(null);
    const placeholderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
                if (isOpen) {
                    onClose?.();
                }
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

    const handleOptionClick = (option: Option) => {
        const newSelected = selected?.some((sel) => sel.value === option.value)
            ? selected?.filter((sel) => sel.value !== option.value) // Remove if already selected
            : [...(selected ?? []), option]; // Add if not selected

        onChange?.(newSelected);
    };

    const handleIconClick = (option: Option, event: React.MouseEvent) => {
        event.stopPropagation(); // Prevent click from bubbling up
        if (selected) {
            const newSelected = selected.filter((sel) => sel.value !== option.value);
            onChange?.(newSelected);
        }
    };

    const handlePlaceholderClick: MouseEventHandler<HTMLDivElement> = () => {
        setIsOpen((prev) => !prev);
    };

    const style: CSSProperties = {
        borderRadius: `${borderRadius}px`,
    };

    const textSize = (): 'h3' | 'h2' | 'h1' | 'h4' | 'h5' | 'h6' => {
        switch (size) {
            case 'small':
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
        <div {...props} className={cls.wrapper} ref={rootRef}>
            <div
                style={style}
                className={classNames(
                    cls.placeholder,
                    {
                        [cls.active]: isOpen,
                        [cls[color]]: color,
                        [cls[size]]: size,
                    },
                    [className],
                )}
                onClick={handlePlaceholderClick}
                role="button"
                tabIndex={0}
                ref={placeholderRef}
            >
                {!selected?.length && (
                    <Paragraph size={textSize()} color="text" fontFamily={fontFamily}>
                        {placeholder}
                    </Paragraph>
                )}

                {selected && selected?.length > 0 && (
                    <ul className={cls.selectedList}>
                        {selected?.map((opt) => (
                            <li key={opt.value} style={style} className={cls.selectedListItem}>
                                <Paragraph size={textSize()} color="text" fontFamily={fontFamily}>
                                    {opt.label}
                                </Paragraph>
                                <span className={cls.icon} onClick={(event) => handleIconClick(opt, event)}>
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z"></path>
                                    </svg>
                                </span>
                            </li>
                        ))}
                    </ul>
                )}

                <div className={classNames(cls.arrow, { [cls.active]: isOpen }, [])}>
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                    </svg>
                </div>
            </div>
            <ul
                style={style}
                className={classNames(
                    cls.select,
                    {
                        [cls[color]]: color,
                        [cls[size]]: size,
                        [cls.visible]: isOpen,
                    },
                    [],
                )}
                data-testid="selectDropdown"
            >
                {options.map((option) => (
                    <OptionEl
                        {...option}
                        size={size}
                        color={color}
                        active={selected?.some((sel) => sel.value === option.value)}
                        borderRadius={borderRadius}
                        key={option.value}
                        option={option}
                        onClick={() => handleOptionClick(option)}
                    />
                ))}
            </ul>
        </div>
    );
};
