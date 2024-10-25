import { StoryObj } from '@storybook/react';
import { ColorsArray, SizesArray } from '@helpers';
import { DatePicker } from './DatePicker';
import { IDatePickerProps } from './DatePicker.props';

export default {
    title: 'Components/DatePicker',
    component: DatePicker,
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: { type: 'select' },
            options: SizesArray,
        },
        color: {
            control: { type: 'select' },
            options: ColorsArray,
        },
        className: {
            control: false,
        },
    },
};

type Story = StoryObj<IDatePickerProps>;

export const Default: Story = {
    render: (args) => {
        return (
            <>
                <DatePicker {...args} />
            </>
        );
    },
    args: {
        size: 'medium',
        color: 'primary',
        onEnd: (date) => console.log('selected date', date),
    },
};
