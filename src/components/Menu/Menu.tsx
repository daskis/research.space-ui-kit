import cls from './Menu.module.scss';
import { IMenuProps } from './Menu.props.ts';
import { classNames } from '../../helpers';
import { CSSProperties, useMemo } from 'react';
import { Text } from '../Text';
import { useLocation } from 'react-router-dom';

export const Menu = (
    {
        size = 'medium',
        items,
        gap = 10,
        borderRadius = 5,
        color = 'primary',
        className,
        ...props
    }: IMenuProps,
) => {
    const style: CSSProperties = {
        gap: `${gap}px`,
    };
    const itemStyle: CSSProperties = {
        borderRadius: `${borderRadius}px`,
    };
    const textSize = useMemo((): 'h3' | 'h2' | 'h1' | 'h4' | 'h5' | 'h6' => {
        return size === 'small' ? 'h3' : size === 'large' ? 'h1' : 'h2';
    }, [size]);
    const { pathname } = useLocation();
    return (
        <ul
            style={style}
            {...props}
            className={classNames(cls.list, {}, [className])}
        >
            {items.map((item) => (
                <li
                    style={itemStyle}
                    className={classNames(cls.listItem, {
                        [cls.active]: pathname.includes(item.value),
                        [cls[color]]: color,
                    }, [])}
                >
                    <Text.Link
                        className={classNames(cls.link, {
                            [cls[size]]: size,
                        }, [])}
                        to={item.value}
                        color={pathname.includes(item.value) ? color : 'text'}
                        size={textSize}
                    >
                        {item.label}
                    </Text.Link>
                </li>
            ))}

        </ul>
    );
};

