import { CheckboxButton } from './CheckboxButton';
import { CheckboxGroup } from './CheckboxGroup';
import { ICheckboxButtonProps } from './CheckboxButton.props';
import { ICheckboxGroupProps } from './CheckboxGroup.props';

export const Checkbox = {
    Button: (props: ICheckboxButtonProps) => <CheckboxButton {...props} />,
    Group: ({ children, ...props }: ICheckboxGroupProps) => (
        <CheckboxGroup {...props}>
            {children}
        </CheckboxGroup>
    ),
};
