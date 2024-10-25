import { Meta, StoryObj } from '@storybook/react';
import { ColorsArray, FontFamilyArray, SizesArray, TextSizesArray } from '@helpers';
import { IInputProps } from './Input.props';
import { Input } from './Input';

const meta: Meta<IInputProps> = {
    title: 'Components/Input',
    component: Input,
    tags: ['autodocs'],
    argTypes: {
        color: {
            control: { type: 'select' },
            options: ColorsArray,
        },
        size: {
            control: { type: 'select' },
            options: SizesArray,
        },
        fontFamily: {
            control: { type: 'select' },
            options: FontFamilyArray,
        },
        borderRadius: {
            control: { type: 'number' },
            min: 0,
            max: 50,
            step: 1,
            default: 10,
        },
        textSize: {
            control: { type: 'select' },
            options: TextSizesArray,
        },
        className: {
            control: false,
        },
    },
};

export default meta;

type Story = StoryObj<IInputProps>;

export const Default: Story = {
    render: (args) => <Input {...args} />,
    args: {
        color: 'primary',
        value: '',
        fontFamily: 'first',
        textSize: 'h3',
        placeholder: 'Label',
        onChange: (value) => console.log('Input value changed:', value),
        size: 'medium',
        borderRadius: 10,
    },
};
