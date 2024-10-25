import { Meta, StoryObj } from '@storybook/react';
import { ColorsArray, SizesArray } from '@helpers';
import { IButtonProps } from './Button.props';
import { Button } from './Button';
import { Paragraph } from '@components/Paragraph';

const meta: Meta<IButtonProps> = {
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        color: {
            control: { type: 'select' },
            options: ColorsArray,
        },
        borderColor: {
            control: { type: 'select' },
            options: ColorsArray,
        },
        size: {
            control: { type: 'select' },
            options: SizesArray,
        },
        borderRadius: {
            control: { type: 'number' },
            min: 0,
            max: 50,
            step: 1,
            default: 10,
        },
        isLoading: {
            control: { type: 'boolean' },
            default: false,
        },
        disabled: {
            control: { type: 'boolean' },
            default: false,
        },

        className: {
            control: false,
        },
    },
};

export default meta;

type Story = StoryObj<IButtonProps>;

export const Default: Story = {
    render: (args) => {
        try {
            return (
                <Button {...args}>
                    <Paragraph>Button</Paragraph>
                </Button>
            );
        } catch (error) {
            console.error('Error rendering Heading:', error);
            return <p>Error loading heading component.</p>;
        }
    },
    args: {
        color: 'primary',
        size: 'medium',
        borderColor: 'primary',
        borderRadius: 10,
        isLoading: false,
        disabled: false,
    },
};
