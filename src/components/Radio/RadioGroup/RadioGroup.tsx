import cls from "./RadioGroup.module.scss"
import {IRadioGroupProps} from "./RadioGroup.props.ts";
import {classNames} from "@helpers";
import {RadioButton} from "../RadioButton";
import {ChangeEvent} from "react";

export const RadioGroup = (
    {
        onChange,
        fontFamily,
        radioColor,
        size,
        value,
        items,
        textColor,
        gap = "h6",
        bgColor,
        className,
        ...props
    }: IRadioGroupProps
) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.id);
    };
    return (
        <ul
            {...props}
            className={classNames(cls.list, {
                [cls.h1]: gap === "h1",
                [cls.h2]: gap === "h2",
                [cls.h3]: gap === "h3",
                [cls.h4]: gap === "h4",
                [cls.h5]: gap === "h5",
                [cls.h6]: gap === "h6",
            }, [className])}
        >
            {items.map((item) => (
                <li
                    className={cls.listItem}
                    key={item.value}
                >
                    <RadioButton
                        fontFamily={fontFamily}
                        radioColor={radioColor}
                        size={size}
                        textColor={textColor}
                        bgColor={bgColor}
                        label={item.label}
                        checked={item.value === value}
                        id={item.value}
                        onChange={handleChange}
                    />
                </li>
            ))}
        </ul>
    );
};

