import cls from './Link.module.scss';
import { Link as RouterLink } from 'react-router-dom';
import { ILinkProps } from './Link.props.ts';
import { classNames } from '@helpers';
export const Link = ({
    color = 'link',
    size = 'h3',
    weight = 'fontRegular',
    fontFamily = 'first',
    to,
    className,
    children,
    ...props
}: ILinkProps) => {
    return (
        <RouterLink
            to={to}
            {...props}
            className={classNames(
                cls.a,
                {
                    [cls[color]]: color,
                    [cls[size]]: size,
                    [cls[weight]]: weight,
                    [cls[fontFamily]]: fontFamily,
                },
                [className],
            )}
        >
            {children}
        </RouterLink>
    );
};
