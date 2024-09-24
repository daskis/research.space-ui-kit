import cls from './OptionEl.module.scss';
import { CSSProperties, type MouseEventHandler, useEffect, useRef } from 'react';
import { OptionElProps } from './OptionEl.props.ts';
import { Option as OptionItem } from './OptionEl.props.ts';
import { classNames } from '@helpers';
import { Text } from '@components';


export const OptionEl = (
    {
        option,
        fontFamily = 'first',
        size,
        color,
        active = false,
        borderRadius,
        onClick,
    }: OptionElProps) => {
    const optionRef = useRef<HTMLLIElement>(null);

    const handleClick = (
        clickedValue: OptionItem,
    ): MouseEventHandler<HTMLLIElement> => () => {
        onClick(clickedValue);
    };

    useEffect(() => {
        const optionCurrent = optionRef.current;
        if (!optionCurrent) return;
        const handleEnterKeyDown = (event: KeyboardEvent) => {
            if (document.activeElement === optionCurrent && event.key === 'Enter') {
                onClick(option);
            }
        };

        optionCurrent.addEventListener('keydown', handleEnterKeyDown);
        return () => {
            optionCurrent.removeEventListener('keydown', handleEnterKeyDown);
        };
    }, [option.value, onClick, option]);

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
        <li
            className={classNames(cls.option, {
                [cls.active]: active,

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

                [cls.fontFirst]: fontFamily === 'first',
                [cls.fontSecond]: fontFamily === 'second',
                [cls.fontThird]: fontFamily === 'third',
            }, [])}
            value={option.value}
            onClick={handleClick(option)}
            tabIndex={0}
            ref={optionRef}
            style={style}
        >
            <Text.Paragraph
                size={textSize()}
                color="text"
                fontFamily={fontFamily}
            >
                {option.label}
            </Text.Paragraph>
        </li>
    );
};
