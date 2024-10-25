import cls from './Progress.module.scss';
import { IProgressProps } from './Progress.props';
import { FC, useMemo } from 'react';
import { TextSizes, classNames } from '@helpers';
import { Paragraph } from '@components';

export const Progress: FC<IProgressProps> = ({
    percent,
    size = 'medium',
    variant = 'line',
    color = 'primary',
    className,
    ...props
}) => {
    const textSize = useMemo<TextSizes>(() => {
        return size === 'small' ? 'h4' : size === 'large' ? 'h2' : 'h3';
    }, [size]);

    const progressStyle = {
        width: `${percent}%`,
    };

    const radius = 45;
    const circumference = 2 * Math.PI * radius;

    const strokeDashoffset = useMemo(() => {
        return circumference - (percent / 100) * circumference;
    }, [percent, circumference]);

    return (
        <div
            {...props}
            className={classNames(
                cls.wrapper,
                {
                    [cls[size]]: size,
                    [cls[variant]]: variant,
                    [cls[color]]: color,
                },
                [className],
            )}
        >
            {variant === 'line' && (
                <div className={cls.progressLine}>
                    <div className={cls.progressBar} style={progressStyle} />
                </div>
            )}

            {variant === 'round' && (
                <div className={cls.progressCircle}>
                    <svg fill="none" viewBox="0 0 100 100">
                        <circle className={cls.backgroundCircle} cx="50" cy="50" r="45" strokeWidth="10" />
                        <circle
                            className={classNames(
                                cls.foregroundCircle,
                                {
                                    [cls[color]]: color,
                                },
                                [],
                            )}
                            cx="50"
                            cy="50"
                            r="45"
                            style={{ transition: '0.3s all ease' }}
                            strokeWidth="10"
                            strokeDasharray={circumference}
                            strokeDashoffset={strokeDashoffset}
                        />
                    </svg>
                </div>
            )}

            <Paragraph className={cls.text} color="text" size={textSize}>
                {percent}%
            </Paragraph>
        </div>
    );
};
