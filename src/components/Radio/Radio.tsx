import { RadioButton, IRadioButtonProps } from './RadioButton';
import { RadioGroup, IRadioGroupProps } from './RadioGroup';

export const Radio = {
    Button: (props: IRadioButtonProps) => <RadioButton {...props} />,
    Group: ({ children, ...props }: IRadioGroupProps) => (
        <RadioGroup
            {...props}
        >
            {children}
        </RadioGroup>
    ),
};
