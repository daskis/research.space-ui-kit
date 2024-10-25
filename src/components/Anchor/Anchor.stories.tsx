import { Meta, StoryObj } from '@storybook/react';
import { ColorsArray, WeightsArray, FontFamilyArray, TextSizesArray } from '@helpers';
import { IAnchorProps } from './Anchor.props';
import { Anchor } from './Anchor';

const meta: Meta<IAnchorProps> = {
    title: 'Components/Text/Anchor',
    component: Anchor,
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
        href: {
            control: false,
            description: 'The URL or path to link to.',
        },
        className: {
            control: false,
        },
    },
};

export default meta;

type Story = StoryObj<IAnchorProps>;

export const Default: Story = {
    render: (args) => {
        try {
            return (
                <Anchor
                    href={args.href}
                    size={args.size}
                    weight={args.weight}
                    color={args.color}
                    fontFamily={args.fontFamily}
                >
                    example
                </Anchor>
            );
        } catch (error) {
            console.error('Error rendering Anchor:', error);
            return <p>Error loading anchor component.</p>;
        }
    },
    args: {
        color: 'link',
        size: 'h3',
        weight: 'fontRegular',
        fontFamily: 'first',
        href: '/',
    },
};
