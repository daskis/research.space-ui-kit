import { IFlexProps } from './Flex.props.ts';
import { CSSProperties, useMemo } from 'react';

export const Flex = (
    {
        direction = 'row',
        justify = 'flex-start',
        align = 'center',
        wrap = 'wrap',
        gap = 10,
        className,
        children,
        ...props
    }: IFlexProps,
) => {
    const style: CSSProperties = useMemo(() => {
        return {
            width: '100%',
            display: 'flex',
            flexDirection: direction,
            justifyContent: justify,
            alignItems: align,
            flexWrap: wrap,
            gap: `${gap}px`,
        };
    }, [direction, justify, align, wrap, gap]);
    return (
        <div
            {...props}
            className={className}
            style={style}
        >
            {children}
        </div>
    );
};

