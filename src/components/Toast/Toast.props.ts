import { Sizes } from '@helpers';
import { ReactNode } from 'react';

export type ToastType = 'info' | 'success' | 'danger' | 'warning';

export type ToastTime = 'long' | 'short';

export const ToastTimeArray: ToastTime[] = ['long', 'short'];

export interface Toast {
    id: string;
    message: string;
    type: ToastType;
}

export interface IToastProps {
    size?: Sizes;
    position?: 'top' | 'top-left' | 'top-right' | 'bottom' | 'bottom-left' | 'bottom-right';
    className?: string;
    time?: ToastTime;
    borderRadius?: number;
    children: ReactNode;
}
