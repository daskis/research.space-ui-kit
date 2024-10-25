import { StoryObj } from '@storybook/react';
import { ISwitchProps, Switch } from '@components';
import { SizesArray } from '@helpers';
import { useState } from 'react';

export default {
    title: 'Components/Switch',
    component: Switch,
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: { type: 'select' },
            options: SizesArray,
        },
        onChange: {
            control: { type: 'boolean', disable: true },
        },
        checked: {
            control: { type: 'boolean', disable: true },
            defaultValue: false,
        },
        className: {
            control: false,
        },
    },
};

type Story = StoryObj<ISwitchProps>;

export const Default: Story = {
    render: (args) => {
        const [checked, setChecked] = useState<boolean>(args.checked);

        const handleChange = (newChecked: boolean) => {
            setChecked(newChecked);
        };

        return <Switch {...args} checked={checked} onChange={handleChange} />;
    },
    args: {
        checked: false,
        onChange: (checked) => console.log('Checked:', checked),
        size: 'medium',
        color: 'primary',
    },
};
