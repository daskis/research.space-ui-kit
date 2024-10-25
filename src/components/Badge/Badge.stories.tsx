import { Meta, StoryFn } from '@storybook/react';
import { Badge } from './Badge';
import { IBadgeProps } from './Badge.props';
import { ColorsArray, SizesArray } from '@helpers';
import { Avatar } from '@components';

export default {
    title: 'Components/Badge',
    component: Badge,
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
    },
} as Meta<typeof Badge>;

const Template: StoryFn<IBadgeProps> = (args) => (
    <Badge {...args}>
        <Avatar />
    </Badge>
);

export const DefaultBadge = Template.bind({});
DefaultBadge.args = {
    count: 10,
    size: 'medium',
    color: 'primary',
};
