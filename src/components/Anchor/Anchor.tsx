import cls from './Anchor.module.scss';
import { classNames } from '@helpers';
import { IAnchorProps } from './Anchor.props.ts';

export const Anchor = ({
    color = 'text',
    size = 'h3',
    weight = 'fontRegular',
    fontFamily = 'first',
    href,
    className,
    children,
    ...props
}: IAnchorProps) => {
    return (
        <a
            {...props}
            href={href}
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
        </a>
    );
};
