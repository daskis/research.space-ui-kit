import { classNames } from '@helpers';
import cls from './DashedButton.module.scss';
import { IDashedButtonProps } from './DashedButton.props.ts';
import { FC } from 'react';

export const DashedButton: FC<IDashedButtonProps> = (
    {
        size = 'medium',
        borderRadius = 10,
        color = 'primary',
        className,
        isLoading,
        children,
        ...props
    },
) => {

    const style = {
        borderRadius: `${borderRadius}px`, // Добавление gap через inline стиль
    };

    return (
        <button
            style={style}
            disabled={isLoading}
            {...props}
            className={classNames(cls.button, {
                // Background color
                [cls.primary]: color === 'primary',
                [cls.secondary]: color === 'secondary',
                [cls.success]: color === 'success',
                [cls.warning]: color === 'warning',
                [cls.danger]: color === 'danger',
                [cls.info]: color === 'info',
                [cls.link]: color === 'link',
                [cls.white]: color === 'white',
                [cls.black]: color === 'black',
                [cls.inherit]: color === 'inherit',

                // Size
                [cls.small]: size === 'small',
                [cls.medium]: size === 'medium',
                [cls.large]: size === 'large',
            }, [className])}
        >
            {isLoading
                ?
                <svg
                    className={cls.icon}
                    version="1.1" id="L9" xmlns="http://www.w3.org/2000/svg"
                     x="0px" y="0px"
                     viewBox="25 25 50 50" enableBackground="new 0 0 0 0" xmlSpace="preserve">
                    <path
                        fill="#fff"
                        d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
                        <animateTransform
                            attributeName="transform"
                            attributeType="XML"
                            type="rotate"
                            dur="1s"
                            from="0 50 50"
                            to="360 50 50"
                            repeatCount="indefinite" />
                    </path>
                </svg>
                : <>{children}</>
            }
        </button>
    );
};
