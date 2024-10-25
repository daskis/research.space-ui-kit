import React, { useMemo, useState } from 'react';
import cls from './Tooltip.module.scss';
import { ITooltipProps } from './Tooltip.props.ts';
import { TextSizes, classNames } from '@helpers';
import { Paragraph } from '@components';

export const Tooltip: React.FC<ITooltipProps> = ({ size = 'medium', content, className, children }) => {
    const [visible, setVisible] = useState(false);
    const handleMouseEnter = () => setVisible(true);
    const handleMouseLeave = () => setVisible(false);
    const handleTouchStart = () => setVisible(true);
    const textSize = useMemo<TextSizes>(() => {
        switch (size) {
            case 'small':
                return 'h5';
            case 'large':
                return 'h3';
            default:
                return 'h4';
        }
    }, [size]);
    return (
        <div
            className={classNames(cls.tooltipContainer, {}, [className])}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleMouseLeave}
        >
            {children}
            {visible && (
                <Paragraph
                    size={textSize}
                    color="text"
                    className={classNames(
                        cls.tooltip,
                        {
                            [cls[size]]: size,
                        },
                        [],
                    )}
                >
                    {content}
                </Paragraph>
            )}
        </div>
    );
};
