import { StoryObj } from '@storybook/react';
import { ThemeSwitcher } from './ThemeSwitcher';
import { SizesArray } from '@helpers';
import { IThemeSwitcherProps } from './ThemeSwitcher.props';

export default {
    title: 'Components/ThemeSwitcher',
    component: ThemeSwitcher,
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: { type: 'select' },
            options: SizesArray,
        },
        className: {
            control: false,
        },
    },
};

type Story = StoryObj<IThemeSwitcherProps>;

export const Default: Story = {
    args: {
        size: 'medium',
        className: '',
    },
};
