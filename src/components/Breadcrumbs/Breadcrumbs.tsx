import cls from './Breadcrumbs.module.scss';
import { classNames } from '@helpers';
import { IBreadcrumbsProps } from './Breadcrumbs.props';
import { CSSProperties, useMemo } from 'react';
import { Link, Paragraph } from '@components';

export const Breadcrumbs = ({
    size = 'medium',
    gap = 10,
    breadcrumbs,
    borderRadius = 5,
    className,
    ...props
}: IBreadcrumbsProps) => {
    const textSize = useMemo<'h1' | 'h2' | 'h3'>(() => {
        return size === 'small' ? 'h3' : size === 'large' ? 'h2' : 'h3';
    }, [size]);

    const listStyle: CSSProperties = useMemo(
        () => ({
            gap: `${gap}px`,
            display: 'flex',
            alignItems: 'center',
        }),
        [gap],
    );

    const itemStyle: CSSProperties = useMemo(
        () => ({
            borderRadius: `${borderRadius}px`,
        }),
        [borderRadius],
    );

    return (
        <ul {...props} style={listStyle} className={classNames(cls.wrapper, {}, [className])}>
            {breadcrumbs.map((item, index) => (
                <>
                    <li
                        key={item.label}
                        style={itemStyle}
                        className={classNames(
                            cls.item,
                            {
                                [cls.small]: size === 'small',
                                [cls.medium]: size === 'medium',
                                [cls.large]: size === 'large',
                            },
                            [],
                        )}
                    >
                        <Link size={textSize} color="text" to={item.value} className={cls.link}>
                            {item.label}
                        </Link>
                    </li>
                    {index < breadcrumbs.length - 1 && (
                        <li key={index} className={cls.separator}>
                            <Paragraph size={textSize} color="text" className={cls.separator}>
                                /
                            </Paragraph>
                        </li>
                    )}
                </>
            ))}
        </ul>
    );
};
