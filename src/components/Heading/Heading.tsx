import cls from './Heading.module.scss';
import { IHeadingProps } from './Heading.props.ts';
import { classNames } from '@helpers';

export const Heading = ({
    color = 'text',
    size = 'h3',
    weight = 'fontRegular',
    fontFamily = 'first',
    className,
    children,
    ...props
}: IHeadingProps) => {
    switch (size) {
        case 'h1':
            return (
                <h1
                    {...props}
                    className={classNames(
                        cls.heading,
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
                </h1>
            );
        case 'h2':
            return (
                <h2
                    {...props}
                    className={classNames(
                        cls.heading,
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
                </h2>
            );
        case 'h3':
            return (
                <h3
                    {...props}
                    className={classNames(
                        cls.heading,
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
                </h3>
            );
        case 'h4':
            return (
                <h4
                    {...props}
                    className={classNames(
                        cls.heading,
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
                </h4>
            );
        case 'h5':
            return (
                <h5
                    {...props}
                    className={classNames(
                        cls.heading,
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
                </h5>
            );
        case 'h6':
            return (
                <h6
                    {...props}
                    className={classNames(
                        cls.heading,
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
                </h6>
            );
        default:
            return null;
    }
};
