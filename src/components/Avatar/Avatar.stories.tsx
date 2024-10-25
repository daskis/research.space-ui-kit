import { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import { IAvatarProps } from './Avatar.props';
import { SizesArray } from '@helpers';

const meta: Meta<IAvatarProps> = {
    title: 'Components/Avatar',
    component: Avatar,
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: { type: 'select' },
            options: SizesArray,
        },
        edit: {
            control: { type: 'boolean' },
        },
        src: {
            control: false,
        },
        onChange: { table: { disable: true } },
        className: { control: false },
        value: { control: false },
    },
};

export default meta;
type Story = StoryObj<IAvatarProps>;

export const Default: Story = {
    args: {
        size: 'medium',
        src: '',
        edit: false,
    },
};
