import { Meta, StoryFn } from '@storybook/react';
import { ToastProvider } from './ToastProvider';
import { Button } from '@components';
import { toast } from './toast';
import { SizesArray } from '@helpers';
import { ToastTimeArray } from './Toast.props';

const meta: Meta = {
    title: 'Components/ToastProvider',
    tags: ['autodocs'],
    component: ToastProvider,
    argTypes: {
        className: {
            control: false,
        },
        size: {
            control: { type: 'select' },
            options: SizesArray,
        },
        time: {
            control: { type: 'select' },
            options: ToastTimeArray,
        },
        children: {
            control: false,
        },
    },
};

export default meta;

// Template for the ToastProvider story
const Template: StoryFn = (args) => (
    <ToastProvider {...args}>
        <DemoComponent />
    </ToastProvider>
);

// Demo component to trigger toasts
const DemoComponent = () => {
    const handleShowToast = (type: string) => {
        switch (type) {
            case 'info':
                toast.info('This is an info message!');
                break;
            case 'success':
                toast.success('This is a success message!');
                break;
            case 'danger':
                toast.danger('This is a danger message!');
                break;
            case 'warning':
                toast.warning('This is a warning message!');
                break;
            default:
                break;
        }
    };

    return (
        <div>
            <Button onClick={() => handleShowToast('info')}>Show Info Toast</Button>
            <Button onClick={() => handleShowToast('success')}>Show Success Toast</Button>
            <Button onClick={() => handleShowToast('danger')}>Show Danger Toast</Button>
            <Button onClick={() => handleShowToast('warning')}>Show Warning Toast</Button>
        </div>
    );
};

// Story instances with default args
export const Default = Template.bind({});
Default.args = {
    size: 'medium',
    position: 'top',
    borderRadius: 5,
    time: 'long',
};
