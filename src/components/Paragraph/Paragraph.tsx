import cls from './Paragraph.module.scss';
import { IParagraphProps } from './Paragraph.props.ts';
import { classNames } from '@helpers';
export const Paragraph = ({
    color = 'text',
    size = 'h3',
    weight = 'fontRegular',
    fontFamily = 'first',
    className,
    children,
    ...props
}: IParagraphProps) => {
    return (
        <p
            {...props}
            className={classNames(
                cls.paragraph,
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
        </p>
    );
};
