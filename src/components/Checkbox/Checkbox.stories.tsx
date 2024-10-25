import { Meta, StoryFn } from '@storybook/react';
import { ColorsArray, SizesArray } from '@helpers';
import { ICheckboxProps } from './Checkbox.props';
import { Checkbox } from './Checkbox';
import { useState } from 'react';

const meta: Meta<ICheckboxProps> = {
    title: 'Components/Checkbox',
    component: Checkbox,
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
        checked: {
            table: {
                disable: true,
            },
        },
        onChange: { action: 'changed' },
        label: { table: { disable: true } },
        value: { table: { disable: true } },
    },
};

export default meta;

const Template: StoryFn<ICheckboxProps> = (args) => {
    const list = [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
    ];

    const [selectedValue, setSelectedValue] = useState<(string | number)[]>([]);

    const handleChange = (value: string | number) => {
        setSelectedValue((prev) => (prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]));
        args.onChange(value);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {list.map((item) => (
                <Checkbox
                    {...args}
                    key={item.value}
                    label={item.label}
                    value={item.value}
                    checked={selectedValue.includes(item.value)}
                    onChange={handleChange}
                />
            ))}
        </div>
    );
};

export const DefaultCheckbox = Template.bind({});
DefaultCheckbox.args = {
    color: 'primary',
    size: 'medium',
    checked: false,
    onChange: (value) => console.log('Checkbox value changed:', value),
};
