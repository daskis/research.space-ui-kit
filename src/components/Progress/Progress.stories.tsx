import { Meta, StoryObj } from '@storybook/react';
import { Progress } from './Progress';
import { IProgressProps } from './Progress.props';
import { ColorsArray, SizesArray } from '@helpers';
import { useState } from 'react';
import { Button } from '@components/Button';

const meta: Meta<IProgressProps> = {
    title: 'Components/Progress',
    component: Progress,
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: {
                type: 'select',
                options: SizesArray,
            },
        },
        variant: {
            control: {
                type: 'select',
                options: ['line', 'round'],
            },
        },
        color: {
            control: {
                type: 'select',
                options: ColorsArray,
            },
        },
        percent: {
            control: false,
        },
    },
};

export default meta;

type Story = StoryObj<IProgressProps>;

export const Default: Story = {
    render: (args) => {
        const [percent, setPercent] = useState(50);

        const increasePercent = () => {
            setPercent((prev) => (prev + 10 > 100 ? 100 : prev + 10));
        };

        const decreasePercent = () => {
            setPercent((prev) => (prev - 10 < 0 ? 0 : prev - 10));
        };

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div style={{ display: 'flex', gap: 10 }}>
                    <Button onClick={decreasePercent}>-</Button>
                    <Button onClick={increasePercent}>+</Button>
                </div>
                <Progress {...args} percent={percent} />
            </div>
        );
    },
    args: {
        color: 'primary',
        size: 'medium',
        variant: 'line',
    },
};
