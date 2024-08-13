import cls from './Heading.module.scss';
import {IHeadingProps} from "./Heading.props.ts";
import {classNames} from '@helpers';

export const Heading = (
    {
        color = "text",
        size = "h6",
        weight = "400",
        fontFamily = "first",
        children,
        className,
        ...props
    }: IHeadingProps) => {
    switch (size) {
        case "h1":
            return (
                <h1
                    {...props}
                    className={classNames(cls.heading, {
                        // ЦВЕТА
                        [cls.primary]: color === "primary",
                        [cls.secondary]: color === "secondary",
                        [cls.success]: color === "success",
                        [cls.warning]: color === "warning",
                        [cls.danger]: color === "danger",
                        [cls.info]: color === "info",
                        [cls.link]: color === "link",
                        [cls.white]: color === "white",
                        [cls.black]: color === "black",
                        [cls.text]: color === "text",

                        // РАЗМЕРЫ
                        [cls.h1]: size === "h1",

                        // ВЕС
                        [cls.fontBlack]: weight === "900",
                        [cls.fontBold]: weight === "700",
                        [cls.fontMedium]: weight === "500",
                        [cls.fontRegular]: weight === "400",
                        [cls.fontLight]: weight === "300",
                        [cls.fontThin]: weight === "100",

                        // ШРИФТ
                        [cls.fontFirst]: fontFamily === "first",
                        [cls.fontSecond]: fontFamily === "second",
                        [cls.fontThird]: fontFamily === "third",
                    }, [className])}
                >
                    {children}
                </h1>
            );
        case "h2":
            return (
                <h2
                    {...props}
                    className={classNames(cls.heading, {
                        // ЦВЕТА
                        [cls.primary]: color === "primary",
                        [cls.secondary]: color === "secondary",
                        [cls.success]: color === "success",
                        [cls.warning]: color === "warning",
                        [cls.danger]: color === "danger",
                        [cls.info]: color === "info",
                        [cls.link]: color === "link",
                        [cls.white]: color === "white",
                        [cls.black]: color === "black",
                        [cls.text]: color === "text",

                        // РАЗМЕРЫ
                        [cls.h2]: size === "h2",

                        // ВЕС
                        [cls.fontBlack]: weight === "900",
                        [cls.fontBold]: weight === "700",
                        [cls.fontMedium]: weight === "500",
                        [cls.fontRegular]: weight === "400",
                        [cls.fontLight]: weight === "300",
                        [cls.fontThin]: weight === "100",

                        // ШРИФТ
                        [cls.fontFirst]: fontFamily === "first",
                        [cls.fontSecond]: fontFamily === "second",
                        [cls.fontThird]: fontFamily === "third",
                    }, [className])}
                >
                    {children}
                </h2>
            );
        case "h3":
            return (
                <h3
                    {...props}
                    className={classNames(cls.heading, {
                        // ЦВЕТА
                        [cls.primary]: color === "primary",
                        [cls.secondary]: color === "secondary",
                        [cls.success]: color === "success",
                        [cls.warning]: color === "warning",
                        [cls.danger]: color === "danger",
                        [cls.info]: color === "info",
                        [cls.link]: color === "link",
                        [cls.white]: color === "white",
                        [cls.black]: color === "black",
                        [cls.text]: color === "text",

                        // РАЗМЕРЫ
                        [cls.h3]: size === "h3",

                        // ВЕС
                        [cls.fontBlack]: weight === "900",
                        [cls.fontBold]: weight === "700",
                        [cls.fontMedium]: weight === "500",
                        [cls.fontRegular]: weight === "400",
                        [cls.fontLight]: weight === "300",
                        [cls.fontThin]: weight === "100",

                        // ШРИФТ
                        [cls.fontFirst]: fontFamily === "first",
                        [cls.fontSecond]: fontFamily === "second",
                        [cls.fontThird]: fontFamily === "third",
                    }, [className])}
                >
                    {children}
                </h3>
            );
        case "h4":
            return (
                <h4
                    {...props}
                    className={classNames(cls.heading, {
                        // ЦВЕТА
                        [cls.primary]: color === "primary",
                        [cls.secondary]: color === "secondary",
                        [cls.success]: color === "success",
                        [cls.warning]: color === "warning",
                        [cls.danger]: color === "danger",
                        [cls.info]: color === "info",
                        [cls.link]: color === "link",
                        [cls.white]: color === "white",
                        [cls.black]: color === "black",
                        [cls.text]: color === "text",

                        // РАЗМЕРЫ
                        [cls.h4]: size === "h4",

                        // ВЕС
                        [cls.fontBlack]: weight === "900",
                        [cls.fontBold]: weight === "700",
                        [cls.fontMedium]: weight === "500",
                        [cls.fontRegular]: weight === "400",
                        [cls.fontLight]: weight === "300",
                        [cls.fontThin]: weight === "100",

                        // ШРИФТ
                        [cls.fontFirst]: fontFamily === "first",
                        [cls.fontSecond]: fontFamily === "second",
                        [cls.fontThird]: fontFamily === "third",
                    }, [className])}
                >
                    {children}
                </h4>
            );
        case "h5":
            return (
                <h5
                    {...props}
                    className={classNames(cls.heading, {
                        // ЦВЕТА
                        [cls.primary]: color === "primary",
                        [cls.secondary]: color === "secondary",
                        [cls.success]: color === "success",
                        [cls.warning]: color === "warning",
                        [cls.danger]: color === "danger",
                        [cls.info]: color === "info",
                        [cls.link]: color === "link",
                        [cls.white]: color === "white",
                        [cls.black]: color === "black",
                        [cls.text]: color === "text",

                        // РАЗМЕРЫ
                        [cls.h5]: size === "h5",

                        // ВЕС
                        [cls.fontBlack]: weight === "900",
                        [cls.fontBold]: weight === "700",
                        [cls.fontMedium]: weight === "500",
                        [cls.fontRegular]: weight === "400",
                        [cls.fontLight]: weight === "300",
                        [cls.fontThin]: weight === "100",

                        // ШРИФТ
                        [cls.fontFirst]: fontFamily === "first",
                        [cls.fontSecond]: fontFamily === "second",
                        [cls.fontThird]: fontFamily === "third",
                    }, [className])}
                >
                    {children}
                </h5>
            );
        case "h6":
            return (
                <h6
                    {...props}
                    className={classNames(cls.heading, {
                        // ЦВЕТА
                        [cls.primary]: color === "primary",
                        [cls.secondary]: color === "secondary",
                        [cls.success]: color === "success",
                        [cls.warning]: color === "warning",
                        [cls.danger]: color === "danger",
                        [cls.info]: color === "info",
                        [cls.link]: color === "link",
                        [cls.white]: color === "white",
                        [cls.black]: color === "black",
                        [cls.text]: color === "text",

                        // РАЗМЕРЫ
                        [cls.h6]: size === "h6",

                        // ВЕС
                        [cls.fontBlack]: weight === "900",
                        [cls.fontBold]: weight === "700",
                        [cls.fontMedium]: weight === "500",
                        [cls.fontRegular]: weight === "400",
                        [cls.fontLight]: weight === "300",
                        [cls.fontThin]: weight === "100",

                        // ШРИФТ
                        [cls.fontFirst]: fontFamily === "first",
                        [cls.fontSecond]: fontFamily === "second",
                        [cls.fontThird]: fontFamily === "third",
                    }, [className])}
                >
                    {children}
                </h6>
            );
        default:
            return null;
    }
};

