import { IRadioButtonProps, RadioButton } from './RadioButton';
import { IRadioGroupProps, RadioGroup } from './RadioGroup';

export const Radio = {
    Button: (props: IRadioButtonProps) => (
        <RadioButton
            {...props}
            label={props.label}
            size={props.size}
            textColor={props.textColor}
            radioColor={props.radioColor}
            bgColor={props.bgColor}
            fontFamily={props.fontFamily}
            checked={props.checked}
            id={props.id}
            onChange={props.onChange}
        />
    ),
    Group: (props: IRadioGroupProps) => (
        <RadioGroup
            {...props}
            items={props.items}
            value={props.value}
            size={props.size}
            textColor={props.textColor}
            radioColor={props.radioColor}
            bgColor={props.bgColor}
            fontFamily={props.fontFamily}
            onChange={props.onChange}
        />
    ),
};
