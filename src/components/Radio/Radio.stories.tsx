import { useState } from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { Radio } from './Radio';
import { IRadioProps } from './Radio.props';
import { ColorsArray, SizesArray } from '@helpers';

const meta: Meta<IRadioProps> = {
    title: 'Components/Radio',
    component: Radio,
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
        isSelected: {
            control: { type: 'boolean' },
            defaultValue: false,
        },
        onChange: { action: 'changed' },
    },
};

type OptionType = {
    label: string;
    value: string | number;
};
type Story = StoryObj<IRadioProps>;

export default meta;

const Template: StoryFn<IRadioProps> = (args) => {
    const [selectedValue, setSelectedValue] = useState<string | number>(args.value);

    const list: OptionType[] = [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
    ];

    const handleChange = (value: string | number) => {
        setSelectedValue(value);
        args.onChange(value);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {list.map((item) => (
                <Radio
                    {...args}
                    key={item.value}
                    label={item.label}
                    value={item.value}
                    isSelected={item.value === selectedValue}
                    onChange={handleChange}
                />
            ))}
        </div>
    );
};

export const DefaultRadio = Template.bind({});
DefaultRadio.args = {
    color: 'primary',
    size: 'medium',
    isSelected: false,
    onChange: (value) => console.log('Input value changed:', value),
};
