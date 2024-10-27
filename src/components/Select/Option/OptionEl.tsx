import cls from './OptionEl.module.scss';
import { CSSProperties, type MouseEventHandler, useEffect, useRef } from 'react';
import { OptionElProps } from './OptionEl.props.ts';
import { Option as OptionItem } from './OptionEl.props.ts';
import { classNames } from '@helpers';
import { Paragraph } from '@components';

export const OptionEl = ({
    option,
    fontFamily = 'first',
    size = 'medium',
    color = 'primary',
    active = false,
    borderRadius,
    onClick,
}: OptionElProps) => {
    const optionRef = useRef<HTMLLIElement>(null);

    useEffect(() => {
        console.log(active);
    }, [active]);
    const handleClick =
        (clickedValue: OptionItem): MouseEventHandler<HTMLLIElement> =>
        () => {
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
        <li
            className={classNames(
                cls.option,
                {
                    [cls.active]: active,

                    [cls[size]]: size,
                    [cls[color]]: color,

                    [cls.fontFirst]: fontFamily === 'first',
                    [cls.fontSecond]: fontFamily === 'second',
                    [cls.fontThird]: fontFamily === 'third',
                },
                [],
            )}
            value={option.value}
            onClick={handleClick(option)}
            tabIndex={0}
            ref={optionRef}
            style={style}
        >
            <Paragraph size={textSize()} color="text" fontFamily={fontFamily}>
                {option.label}
            </Paragraph>
        </li>
    );
};
