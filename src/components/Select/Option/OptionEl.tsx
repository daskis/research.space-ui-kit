import cls from './OptionEl.module.scss';
import { type MouseEventHandler, useEffect, useRef } from 'react';
import { OptionElProps } from './OptionEl.props.ts';
import { Option as OptionItem } from './OptionEl.props.ts';
import { classNames } from '@helpers';
import { Text } from '../../Text';


export const OptionEl = (
    {
        option,
        bgColor = 'white',
        weight = '400',
        fontFamily = 'first',
        size,
        textColor = 'text',
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

    return (
        <li
            className={classNames(cls.option, {
                [cls.active]: active,

                [cls.primary]: textColor === 'primary',
                [cls.secondary]: textColor === 'secondary',
                [cls.success]: textColor === 'success',
                [cls.warning]: textColor === 'warning',
                [cls.danger]: textColor === 'danger',
                [cls.info]: textColor === 'info',
                [cls.link]: textColor === 'link',
                [cls.white]: textColor === 'white',
                [cls.black]: textColor === 'black',

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
                // РАЗМЕРЫ
                [cls.h1]: size === 'h1',
                [cls.h2]: size === 'h2',
                [cls.h3]: size === 'h3',
                [cls.h4]: size === 'h4',
                [cls.h5]: size === 'h5',
                [cls.h6]: size === 'h6',

                // Border radius
                [cls.borderH1]: borderRadius === 'h1',
                [cls.borderH2]: borderRadius === 'h2',
                [cls.borderH3]: borderRadius === 'h3',
                [cls.borderH4]: borderRadius === 'h4',
                [cls.borderH5]: borderRadius === 'h5',
                [cls.borderH6]: borderRadius === 'h6',
                // ВЕС
                [cls.fontBlack]: weight === '900',
                [cls.fontBold]: weight === '700',
                [cls.fontMedium]: weight === '500',
                [cls.fontRegular]: weight === '400',
                [cls.fontLight]: weight === '300',
                [cls.fontThin]: weight === '100',

                // ШРИФТ
                [cls.fontFirst]: fontFamily === 'first',
                [cls.fontSecond]: fontFamily === 'second',
                [cls.fontThird]: fontFamily === 'third',
            }, [])}
            value={option.value}
            onClick={handleClick(option)}
            tabIndex={0}
            ref={optionRef}
        >
            <Text.Paragraph
                size={size}
                color={textColor}
                weight={weight}
                fontFamily={fontFamily}
            >
                {option.label}
            </Text.Paragraph>
        </li>
    );
};
