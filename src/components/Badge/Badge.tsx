import cls from './Badge.module.scss';
import { classNames } from '@helpers';
import { IBadgeProps } from './Badge.props.ts';
import { Text } from '../Text';
import { useMemo } from 'react';

export const Badge = (
    {
        count = 0,
        size = 'medium',
        color = 'primary',
        children,
        className,
        ...props
    }: IBadgeProps,
) => {
    const textSize = useMemo((): 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' => {
        return size === 'small' ? 'h4' : size === 'large' ? 'h2' : 'h3';
    }, [size]);

    return (
        <div
            {...props}
            className={classNames(cls.wrapper, {}, [])}>
            <div
                className={classNames(cls.badge, {
                    [cls[size]]: size,
                    [cls[color]]: color,
                }, [className])}
            >
                <Text.Paragraph
                    size={textSize}
                    color="white"
                >
                    {count}
                </Text.Paragraph>
            </div>
            <div className={cls.body}>
                {children}
            </div>
        </div>
    );
};

