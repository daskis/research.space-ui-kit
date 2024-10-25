import { StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';
import { SizesArray } from '@helpers';
import { Button } from '@components';

export default {
    title: 'Components/Tooltip',
    component: Tooltip,
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: { type: 'select' },
            options: SizesArray,
        },
        content: {
            control: { type: 'text' },
        },
        className: {
            control: false,
        },
        children: {
            control: false,
        },
    },
};

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
    args: {
        size: 'medium',
        content: 'This is a tooltip',
        children: <Button>Hover over me</Button>,
    },
};
