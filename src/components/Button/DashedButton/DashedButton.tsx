import {classNames} from '@helpers';
import cls from './DashedButton.module.scss';
import {IDashedButtonProps} from "./DashedButton.props.ts";
import {FC} from "react";

export const DashedButton: FC<IDashedButtonProps> = (
    {
        size = "h6",
        borderRadius = "h6",
        color = "primary",
        borderSize = "h6",
        className,
        isLoading,
        children,
        ...props
    },
) => {
    return (
        <button
            disabled={isLoading}
            {...props}
            className={classNames(cls.button, {
                // Background color
                [cls.primary]: color === "primary",
                [cls.secondary]: color === "secondary",
                [cls.success]: color === "success",
                [cls.warning]: color === "warning",
                [cls.danger]: color === "danger",
                [cls.info]: color === "info",
                [cls.link]: color === "link",
                [cls.white]: color === "white",
                [cls.black]: color === "black",

                // Size
                [cls.h1]: size === "h1",
                [cls.h2]: size === "h2",
                [cls.h3]: size === "h3",
                [cls.h4]: size === "h4",
                [cls.h5]: size === "h5",
                [cls.h6]: size === "h6",

                // Border size
                [cls.border_h1]: borderSize === "h1",
                [cls.border_h2]: borderSize === "h2",
                [cls.border_h3]: borderSize === "h3",
                [cls.border_h4]: borderSize === "h4",
                [cls.border_h5]: borderSize === "h5",
                [cls.border_h6]: borderSize === "h6",

                // Border radius
                [cls.borderH1]: borderRadius === "h1",
                [cls.borderH2]: borderRadius === "h2",
                [cls.borderH3]: borderRadius === "h3",
                [cls.borderH4]: borderRadius === "h4",
                [cls.borderH5]: borderRadius === "h5",
                [cls.borderH6]: borderRadius === "h6",

            }, [className])}
        >
            {isLoading
                ?
                <svg version="1.1" id="L9" xmlns="http://www.w3.org/2000/svg"
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
                            repeatCount="indefinite"/>
                    </path>
                </svg>
                : <>{children}</>
            }
        </button>
    );
};
