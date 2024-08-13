import cls from './Input.module.scss';
import {IInputProps} from "./Input.props.ts";
import {ChangeEvent, useEffect, useState} from "react";
import {classNames} from '@helpers';
import {Text} from "@components";
import {useDebounce} from '@hooks';

export const Input = (
    {
        size = "h6",
        borderRadius = "h6",
        borderSize = "h6",
        bgColor = "bg",
        textColor = "text",
        borderColor = "primary",
        fontFamily = "first",
        label,
        value,
        className,
        onChange,
        ...props
    }: IInputProps) => {
    const [inputValue, setInputValue] = useState<string>(value || '');
    const debouncedValue = useDebounce({value: inputValue, delay: 300});

    useEffect(() => {
        if (debouncedValue !== value) {
            onChange({target: {value: debouncedValue}} as ChangeEvent<HTMLInputElement>);
        }
    }, [debouncedValue, onChange, value]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    useEffect(() => {
        setInputValue(value || '');
    }, [value]);

    return (
        <div className={cls.wrapper}>
            <input
                {...props}
                value={inputValue}
                onChange={handleChange}
                className={classNames(cls.input, {
                    // Background color
                    [cls.bg_color]: bgColor === "bg",
                    [cls.bg_dark_color]: bgColor === "bgDark",
                    [cls.bg_inherit]: bgColor === "inherit",

                    // Text color
                    [cls.primary]: textColor === "primary",
                    [cls.secondary]: textColor === "secondary",
                    [cls.success]: textColor === "success",
                    [cls.warning]: textColor === "warning",
                    [cls.danger]: textColor === "danger",
                    [cls.info]: textColor === "info",
                    [cls.link]: textColor === "link",
                    [cls.white]: textColor === "white",
                    [cls.black]: textColor === "black",
                    [cls.text]: textColor === "text",


                    // Border color
                    [cls.border_primary]: borderColor === "primary",
                    [cls.border_secondary]: borderColor === "secondary",
                    [cls.border_success]: borderColor === "success",
                    [cls.border_warning]: borderColor === "warning",
                    [cls.border_danger]: borderColor === "danger",
                    [cls.border_info]: borderColor === "info",
                    [cls.border_link]: borderColor === "link",
                    [cls.border_white]: borderColor === "white",
                    [cls.border_black]: borderColor === "black",


                    // Size
                    [cls.h1]: size === "h1",
                    [cls.h2]: size === "h2",
                    [cls.h3]: size === "h3",
                    [cls.h4]: size === "h4",
                    [cls.h5]: size === "h5",
                    [cls.h6]: size === "h6",

                    // Border radius
                    [cls.border_radius_h1]: borderRadius === "h1",
                    [cls.border_radius_h2]: borderRadius === "h2",
                    [cls.border_radius_h3]: borderRadius === "h3",
                    [cls.border_radius_h4]: borderRadius === "h4",
                    [cls.border_radius_h5]: borderRadius === "h5",
                    [cls.border_radius_h6]: borderRadius === "h6",

                    // Border size
                    [cls.border_size_h1]: borderSize === "h1",
                    [cls.border_size_h2]: borderSize === "h2",
                    [cls.border_size_h3]: borderSize === "h3",
                    [cls.border_size_h4]: borderSize === "h4",
                    [cls.border_size_h5]: borderSize === "h5",
                    [cls.border_size_h6]: borderSize === "h6",

                    // Font family
                    [cls.font_first]: fontFamily === "first",
                    [cls.font_second]: fontFamily === "second",
                    [cls.font_third]: fontFamily === "third",
                }, [className])}
                {...props}
            />
            <Text.Paragraph
                className={cls.label}
                size={size}
                color={textColor}
                fontFamily={fontFamily}
            >
                {label}
            </Text.Paragraph>
        </div>
    );
};
