import { Meta, StoryObj } from '@storybook/react';
import { ColorsArray, WeightsArray, FontFamilyArray, TextSizesArray } from '@helpers';
import { Link } from './Link';
import { ILinkProps } from './Link.props';

const meta: Meta<ILinkProps> = {
    title: 'Components/Text/Link',
    component: Link,
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
        to: {
            control: false,
            description: 'The URL or path to link to.',
        },
        className: {
            control: false,
        },
    },
};

export default meta;

type Story = StoryObj<ILinkProps>;

export const Default: Story = {
    render: (args) => {
        try {
            return (
                <Link
                    to={args.to}
                    size={args.size}
                    weight={args.weight}
                    color={args.color}
                    fontFamily={args.fontFamily}
                >
                    example
                </Link>
            );
        } catch (error) {
            console.error('Error rendering Link:', error);
            return <p>Error loading link component.</p>;
        }
    },
    args: {
        color: 'link',
        size: 'h3',
        weight: 'fontRegular',
        fontFamily: 'first',
        to: '/',
    },
};
