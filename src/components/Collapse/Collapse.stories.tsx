import { Meta, StoryObj } from '@storybook/react';
import { Collapse } from './Collapse';
import { ICollapseProps } from './Collapse.props';
import { SizesArray } from '@helpers';
import { Paragraph } from '@components/Paragraph';

export default {
    title: 'Components/Collapse',
    component: Collapse,
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: { type: 'select' },
            options: SizesArray,
        },
        title: {
            control: { type: 'text' },
            defaultValue: 'Collapse Title',
        },
        children: {
            table: { disable: true },
        },
        className: {
            control: false,
        },
    },
};

type Story = StoryObj<ICollapseProps>;

export const Default: Story = {
    render: (args) => {
        try {
            return (
                <Collapse {...args}>
                    <Paragraph>
                        This is the content inside the collapse component. It is visible when the collapse is open.
                    </Paragraph>
                </Collapse>
            );
        } catch (error) {
            console.error('Error rendering Collapse:', error);
            return <p>Error loading collapse component.</p>;
        }
    },
    args: {
        size: 'medium',
        title: 'Collapse Title',
        titleSize: 'h3',
    },
};
