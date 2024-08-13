import {IRadioButtonProps, RadioButton} from "./RadioButton";
import {IRadioGroupProps, RadioGroup} from "./RadioGroup";

export const Radio = {
    Button: ({
                 label,
                 size,
                 textColor,
                 radioColor,
                 bgColor,
                 fontFamily,
                 checked,
                 id,
                 onChange,
                 ...props
             }: IRadioButtonProps) => (
        <RadioButton
            {...props}
            label={label}
            size={size}
            textColor={textColor}
            radioColor={radioColor}
            bgColor={bgColor}
            fontFamily={fontFamily}
            checked={checked}
            id={id}
            onChange={onChange}
        />
    ),
    Group: ({
                items,
                value,
                size,
                textColor,
                radioColor,
                bgColor,
                fontFamily,
                onChange,
                ...props
            }: IRadioGroupProps) => (
        <RadioGroup
            {...props}
            items={items}
            value={value}
            size={size}
            textColor={textColor}
            radioColor={radioColor}
            bgColor={bgColor}
            fontFamily={fontFamily}
            onChange={onChange}
        />
    ),
}