import { StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { IModalProps } from './Modal.props';
import { Paragraph } from '@components/Paragraph';
import { useState } from 'react';
import { Button } from '@components/Button';

export default {
    title: 'Components/Modal',
    component: Modal,
    tags: ['autodocs'],
    argTypes: {
        borderRadius: {
            control: { type: 'number' },
        },
        isOpen: {
            control: { type: 'boolean', disable: true },
        },
        className: {
            control: false,
        },
    },
};

type Story = StoryObj<IModalProps>;

export const Default: Story = {
    render: () => {
        const [isOpen, setIsOpen] = useState<boolean>(false);
        try {
            return (
                <>
                    <Button onClick={() => setIsOpen(true)}>
                        <Paragraph>Open</Paragraph>
                    </Button>
                    <Modal isOpen={isOpen} setOpen={setIsOpen}>
                        <Paragraph>123</Paragraph>
                    </Modal>
                </>
            );
        } catch (error) {
            console.error('Error rendering Collapse:', error);
            return <p>Error loading collapse component.</p>;
        }
    },
    args: {
        isOpen: false,
        setOpen: () => {},
        borderRadius: 10,
    },
};
