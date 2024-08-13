import cls from "./RadioButton.module.scss"
import {Text} from "@components";
import {IRadioButtonProps} from "./RadioButton.props.ts";
import {classNames} from "@helpers";

export const RadioButton = (
    {
        label,
        size = "h1",
        textColor = 'text',
        radioColor = "primary",
        fontFamily = "first",
        onChange,
        checked,
        bgColor = "bg",
        className,
        id,
        ...props
    }: IRadioButtonProps
) => {
    return (
        <div className={cls.wrapper}>
            <input
                {...props}
                type="radio"
                checked={checked}
                onChange={onChange}
                id={id}
                name={`${id}_radio`}
                className={classNames(cls.radio, {
                    // Text color
                    [cls.primary]: radioColor === "primary",
                    [cls.secondary]: radioColor === "secondary",
                    [cls.success]: radioColor === "success",
                    [cls.warning]: radioColor === "warning",
                    [cls.danger]: radioColor === "danger",
                    [cls.info]: radioColor === "info",
                    [cls.link]: radioColor === "link",
                    [cls.white]: radioColor === "white",
                    [cls.black]: radioColor === "black",
                    [cls.text]: radioColor === "text",

                    [cls.primary_bg]: bgColor === "primary",
                    [cls.secondary_bg]: bgColor === "secondary",
                    [cls.success_bg]: bgColor === "success",
                    [cls.warning_bg]: bgColor === "warning",
                    [cls.danger_bg]: bgColor === "danger",
                    [cls.info_bg]: bgColor === "info",
                    [cls.link_bg]: bgColor === "link",
                    [cls.white_bg]: bgColor === "white",
                    [cls.black_bg]: bgColor === "black",
                    [cls.bg_bg]: bgColor === "bg",
                    [cls.bgDark_bg]: bgColor === "bgDark",

                    // Size
                    [cls.h1]: size === "h1",
                    [cls.h2]: size === "h2",
                    [cls.h3]: size === "h3",
                    [cls.h4]: size === "h4",
                    [cls.h5]: size === "h5",
                    [cls.h6]: size === "h6",
                }, [className])}
            />

            <label htmlFor={id} className={cls.label}>
                <Text.Paragraph
                    size={size}
                    color={textColor}
                    fontFamily={fontFamily}
                    className={cls.label_text}
                >
                    {label}
                </Text.Paragraph>
            </label>
        </div>
    );
};

