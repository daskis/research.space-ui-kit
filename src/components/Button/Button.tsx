import cls from './Button.module.scss';
import { IButtonProps } from './Button.props.ts';
import { FC, useRef, useMemo } from 'react';
import { classNames } from '@helpers';

export const Button: FC<IButtonProps> = ({
    size = 'medium',
    borderRadius = 10,
    color = 'primary',
    borderColor = 'primary',
    disabled = false,
    className,
    isLoading = false,
    children,
    ...props
}) => {
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    const buttonStyle = useMemo(() => {
        if (buttonRef.current) {
            const { width, height } = buttonRef.current.getBoundingClientRect();
            return {
                width: isLoading ? `${width}px` : 'auto',
                height: isLoading ? `${height}px` : 'auto',
                borderRadius,
            };
        }
        return { borderRadius };
    }, [isLoading, borderRadius]);

    return (
        <button
            ref={buttonRef}
            {...props}
            disabled={isLoading || disabled}
            style={buttonStyle}
            className={classNames(
                cls.button,
                {
                    [cls[color]]: color,
                    [cls[size]]: size,
                    [cls[`border-${borderColor}`]]: borderColor,
                    [cls.loading]: isLoading,
                },
                [className],
            )}
        >
            {isLoading ? (
                <svg width="20px" height="20px" version="1.1" id="L9" viewBox="25 25 50 50" xmlSpace="preserve">
                    <path
                        fill="#fff"
                        d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
                    >
                        <animateTransform
                            attributeName="transform"
                            attributeType="XML"
                            type="rotate"
                            dur="1s"
                            from="0 50 50"
                            to="360 50 50"
                            repeatCount="indefinite"
                        />
                    </path>
                </svg>
            ) : (
                <>{children}</>
            )}
        </button>
    );
};
