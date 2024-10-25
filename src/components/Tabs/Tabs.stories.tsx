import { StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';
import { SizesArray, ColorsArray } from '@helpers';

export default {
    title: 'Components/Tabs',
    component: Tabs,
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
        orientation: {
            control: { type: 'select' },
            options: ['horizontal', 'vertical'],
        },
        justifyContent: {
            control: { type: 'select' },
            options: ['start', 'center', 'end'],
        },
        gap: {
            control: { type: 'number' },
        },
        defaultIndex: {
            control: { type: 'number' },
        },
        className: {
            control: false,
        },
        tabs: {
            control: false,
        },
    },
};

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
    args: {
        size: 'medium',
        color: 'primary',
        orientation: 'horizontal',
        gap: 10,
        justifyContent: 'start',
        defaultIndex: 0,
        tabs: [
            { label: 'Tab 1', value: <div>Content of Tab 1</div> },
            { label: 'Tab 2', value: <div>Content of Tab 2</div> },
            { label: 'Tab 3', value: <div>Content of Tab 3</div> },
        ],
    },
};
