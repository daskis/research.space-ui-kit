import { Meta, StoryObj } from '@storybook/react';
import { ColorsArray, FontFamilyArray, SizesArray, TextSizesArray } from '@helpers';
import { ITextareaProps } from './Textarea.props';
import { Textarea } from './Textarea';

const meta: Meta<ITextareaProps> = {
    title: 'Components/Textarea',
    component: Textarea,
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
        maxRows: {
            control: { type: 'number' },
            min: 1,
            max: 10,
            step: 1,
        },
        className: {
            control: false,
        },
    },
};

export default meta;

type Story = StoryObj<ITextareaProps>;

export const Default: Story = {
    render: (args) => <Textarea {...args} />,
    args: {
        color: 'primary',
        value: '',
        fontFamily: 'first',
        textSize: 'h3',
        placeholder: 'Enter text...',
        onChange: (value) => console.log('Textarea value changed:', value),
        size: 'medium',
        borderRadius: 10,
        maxRows: 5,
    },
};
