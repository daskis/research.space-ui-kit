import { Meta, StoryObj } from '@storybook/react';
import { IParagraphProps } from './Paragraph.props.ts';
import { Paragraph } from './Paragraph.tsx';
import { ColorsArray, WeightsArray, FontFamilyArray, TextSizesArray } from '@helpers';

const meta: Meta<IParagraphProps> = {
    title: 'Components/Text/Paragraph',
    component: Paragraph,
    tags: ['autodocs'],
    argTypes: {
        color: {
            control: { type: 'select' },
            options: ColorsArray,
        },
        size: {
            control: { type: 'select' },
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

type Story = StoryObj<IParagraphProps>;

export const Default: Story = {
    render: (args) => {
        try {
            return (
                <Paragraph size={args.size} weight={args.weight} color={args.color} fontFamily={args.fontFamily}>
                    example
                </Paragraph>
            );
        } catch (error) {
            console.error('Error rendering Paragraph:', error);
            return <p>Error loading paragraph component.</p>;
        }
    },
    args: {
        color: 'text',
        size: 'h3',
        weight: 'fontRegular',
        fontFamily: 'third',
    },
};
