import { Meta, StoryObj } from '@storybook/react';
import { ColorsArray, WeightsArray, FontFamilyArray, TextSizesArray } from '@helpers';
import { Heading } from './Heading';
import { IHeadingProps } from './Heading.props';

const meta: Meta<IHeadingProps> = {
    title: 'Components/Text/Heading',
    component: Heading,
    tags: ['autodocs'],
    argTypes: {
        color: {
            control: { type: 'select' },
            options: ColorsArray,
        },
        size: {
            options: TextSizesArray,
        },
        weight: {
            control: { type: 'select' },
            options: WeightsArray,
        },
        fontFamily: {
            control: { type: 'select' },
            options: FontFamilyArray,
        },
        className: {
            control: false,
        },
    },
};

export default meta;

type Story = StoryObj<IHeadingProps>;

export const Default: Story = {
    render: (args) => {
        try {
            return (
                <Heading size={args.size} weight={args.weight} color={args.color} fontFamily={args.fontFamily}>
                    example
                </Heading>
            );
        } catch (error) {
            console.error('Error rendering Heading:', error);
            return <p>Error loading heading component.</p>;
        }
    },
    args: {
        color: 'text',
        size: 'h3',
        weight: 'fontRegular',
        fontFamily: 'first',
    },
};
