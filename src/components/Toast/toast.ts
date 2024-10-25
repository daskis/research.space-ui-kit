import { ToastType } from './Toast.props.ts';

let addToastFunction: (message: string, type?: ToastType) => void = () => {
    throw new Error('Toast function is not initialized. Make sure you are using a ToastProvider.');
};

export const setToastFunction = (fn: (message: string, type?: ToastType) => void) => {
    addToastFunction = fn;
};

export const toast = {
    info: (message: string) => addToastFunction(message, 'info'),
    success: (message: string) => addToastFunction(message, 'success'),
    danger: (message: string) => addToastFunction(message, 'danger'),
    warning: (message: string) => addToastFunction(message, 'warning'),
};
