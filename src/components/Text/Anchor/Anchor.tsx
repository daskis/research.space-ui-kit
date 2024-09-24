import cls from './Anchor.module.scss';
import { classNames } from '@helpers';
import { IAnchorProps } from './Anchor.props.ts';

export const Anchor = (
    {
        color = 'link',
        size = 'h6',
        weight = '400',
        fontFamily = 'first',
        className,
        children,
        ...props
    }: IAnchorProps) => {
    return (
        <a
            {...props}
            className={classNames(cls.a, {
                // ЦВЕТА
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
                [cls.h1]: size === 'h1',
                [cls.h2]: size === 'h2',
                [cls.h3]: size === 'h3',
                [cls.h4]: size === 'h4',
                [cls.h5]: size === 'h5',
                [cls.h6]: size === 'h6',

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
            }, [className])}
        >
            {children}
        </a>
    );
};

