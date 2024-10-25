import { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Stepper } from './Stepper';
import { IStepperProps, IStepItem } from './Stepper.props';
import { ColorsArray, SizesArray } from '@helpers';

export default {
    title: 'Components/Stepper',
    component: Stepper,
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
        active: {
            control: false,
        },
        items: {
            control: false,
        },
    },
} as Meta;

const Template: StoryFn<IStepperProps> = (args: IStepperProps) => {
    const [activeStep, setActiveStep] = useState<IStepItem | null>(args.active);

    const handleStepChange = (step: IStepItem) => {
        setActiveStep(step);
    };

    return <Stepper {...args} active={activeStep} onStepChange={handleStepChange} />;
};

export const Default = Template.bind({});
Default.args = {
    size: 'medium',
    color: 'primary',
    active: { label: 'Step 1', value: 'step-1' },
    items: [
        { label: 'Step 1', value: 'step-1' },
        { label: 'Step 2', value: 'step-2' },
        { label: 'Step 3', value: 'step-3' },
        { label: 'Step 4', value: 'step-4' },
    ],
};
