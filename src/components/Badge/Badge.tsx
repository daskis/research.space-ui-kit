import cls from './Badge.module.scss';
import { classNames } from '@helpers';
import { IBadgeProps } from './Badge.props.ts';
import { useMemo } from 'react';
import { Paragraph } from '@components';

export const Badge = ({
    count = 0,
    size = 'medium',
    color = 'primary',
    children,
    className,
    ...props
}: IBadgeProps) => {
    const textSize = useMemo<'h2' | 'h3' | 'h4'>(() => {
        return size === 'small' ? 'h4' : size === 'large' ? 'h2' : 'h3';
    }, [size]);

    return (
        <div {...props} className={classNames(cls.wrapper, {}, [])}>
            <div
                className={classNames(
                    cls.badge,
                    {
                        [cls[size]]: size,
                        [cls[color]]: color,
                    },
                    [className],
                )}
            >
                <Paragraph size={textSize} color="white">
                    {count}
                </Paragraph>
            </div>
            <div className={cls.body}>{children}</div>
        </div>
    );
};
