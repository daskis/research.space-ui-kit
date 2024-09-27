import { ReactNode } from 'react';

export type ToastType = 'info' | 'success' | 'danger' | 'warning';

export enum ToastTime {
    SHORT = 'short',
    LONG = 'long',
}


export interface Toast {
    id: string;
    message: string;
    type: ToastType;
}

export interface IToastProps {
    size?: 'small' | 'medium' | 'large';
    position?: 'top' | 'top-left' | 'top-right' | 'bottom' | 'bottom-left' | 'bottom-right';
    className?: string;
    time?: ToastTime;
    borderRadius?: number;
    children: ReactNode;
}