import { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Pagination } from './Pagination';
import { IPaginationProps } from './Pagination.props';
import { ColorsArray, SizesArray } from '@helpers';

export default {
    title: 'Components/Pagination',
    component: Pagination,
    tags: ['autodocs'],
    argTypes: {
        disabled: {
            control: false,
        },
        current: {
            control: false,
        },
        className: {
            control: false,
        },
        size: {
            control: { type: 'select' },
            options: SizesArray,
        },
        color: {
            control: { type: 'select' },
            options: ColorsArray,
        },
    },
} as Meta;

const Template: StoryFn<IPaginationProps> = (args: IPaginationProps) => {
    const [currentPage, setCurrentPage] = useState(args.current);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return <Pagination {...args} current={currentPage} onChange={handlePageChange} />;
};

export const Default = Template.bind({});
Default.args = {
    total: 10,
    current: 1,
    displayCount: 5,
    size: 'medium',
    color: 'primary',
    gap: 5,
    borderRadius: 5,
};
