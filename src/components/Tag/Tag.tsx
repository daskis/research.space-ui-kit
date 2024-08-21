import cls from './Tag.module.scss';
import { ITagProps } from './Tag.props.ts';
import { classNames } from '@helpers';
import { Text } from '../Text';

export const Tag = (
    {
        bgColor = 'primary',
        textColor = 'text',
        size = 'h3',
        weight = '400',
        fontFamily = 'first',
        borderRadius = 'h6',
        clickable = false,
        className,
        children,
        ...props
    }: ITagProps,
) => {
    return (
        <div
            {...props}
            className={classNames(cls.tag, {
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
                [cls.bg]: bgColor === 'bg',
                [cls.bgDark]: bgColor === 'bgDark',
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

                [cls.clickable]: clickable,
            }, [className])}>
            <Text.Paragraph
                size={size}
                weight={weight}
                color={textColor}
                fontFamily={fontFamily}
            >
                {children}
            </Text.Paragraph>
        </div>
    );
};

