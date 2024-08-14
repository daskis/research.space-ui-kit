import { ICheckboxButtonProps, CheckboxButton } from './CheckboxButton';
import { ICheckboxGroupProps, CheckboxGroup } from './CheckboxGroup';

export const Checkbox = {
    Button: (props: ICheckboxButtonProps) => (
        <CheckboxButton {...props} />
    ),
    Group: (props: ICheckboxGroupProps) => (
        <CheckboxGroup {...props} />
    ),
};
