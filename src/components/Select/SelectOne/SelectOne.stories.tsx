import { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { SelectOne } from './SelectOne';
import { ISelectOneProps } from './SelectOne.props';
import { ColorsArray, SizesArray, FontFamilyArray } from '@helpers';
import { Option } from '../Option';

export default {
    title: 'Components/Select/SelectOne',
    component: SelectOne,
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
        options: {
            control: false,
        },
        selected: {
            control: false,
        },
        borderRadius: {
            control: { type: 'number' },
        },
    },
} as Meta;

const Template: StoryFn<ISelectOneProps> = (args) => {
    const [selected, setSelected] = useState<Option | null>(null);

    return (
        <div style={{ height: 200 }}>
            <SelectOne {...args} selected={selected} onChange={(value) => setSelected(value)} />
        </div>
    );
};

export const Default = Template.bind({});
Default.args = {
    placeholder: 'Select an option',
    selected: null,
    options: [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
    ],
    size: 'medium',
    color: 'primary',
    fontFamily: 'first',
    borderRadius: 5,
};
