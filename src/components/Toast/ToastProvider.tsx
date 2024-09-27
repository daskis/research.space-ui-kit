import { CSSProperties, useCallback, useEffect, useMemo, useState } from 'react';
import cls from './Toast.module.scss';
import { IToastProps, Toast, ToastTime } from './Toast.props.ts';
import { setToastFunction } from './toast.ts';
import { classNames } from '../../helpers';
import { Text } from '../Text';

export const ToastProvider = (
    {
        size = 'medium',
        position = 'top',
        borderRadius = 5,
        time = ToastTime.LONG,
        className,
        children,
    }: IToastProps,
) => {
    const style: CSSProperties = {
        borderRadius: `${borderRadius}px`,
    };
    const textSize = useMemo((): 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' => {
        return size === 'small' ? 'h4' : size === 'large' ? 'h2' : 'h3';
    }, [size]);

    const [toasts, setToasts] = useState<Toast[]>([]);
    const addToast = useCallback((message: string, type: Toast['type'] = 'info') => {
        const newToast: Toast = {
            id: Math.random().toString(36).substr(2, 9),
            message,
            type,
        };
        setToasts((prevToasts) => [...prevToasts, newToast]);

        setTimeout(() => {
            setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== newToast.id));
        }, time === ToastTime.SHORT ? 1500 : 3000);
    }, [time]);

    useEffect(() => {
        setToastFunction(addToast);
    }, [addToast]);


    return (
        <>
            {children}
            <div
                className={classNames(cls.wrapper, {
                    [cls[position]]: position,
                }, [className])}>
                {toasts.map((toast) => (
                    <div
                        style={style}
                        key={toast.id}
                        className={classNames(cls.toast, {
                            [cls[size]]: size,
                            [cls[toast.type]]: toast.type,
                        }, [])}>
                        {toast.type === 'info'
                            &&
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 32 32">
                                <path
                                    d="M14 9.5c0-0.825 0.675-1.5 1.5-1.5h1c0.825 0 1.5 0.675 1.5 1.5v1c0 0.825-0.675 1.5-1.5 1.5h-1c-0.825 0-1.5-0.675-1.5-1.5v-1z"></path>
                                <path d="M20 24h-8v-2h2v-6h-2v-2h6v8h2z"></path>
                                <path
                                    d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13z"></path>
                            </svg>
                        }
                        {toast.type === 'success'
                            &&
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 20 20">
                                <path
                                    d="M2.93 17.070c-1.884-1.821-3.053-4.37-3.053-7.193 0-5.523 4.477-10 10-10 2.823 0 5.372 1.169 7.19 3.050l0.003 0.003c1.737 1.796 2.807 4.247 2.807 6.947 0 5.523-4.477 10-10 10-2.7 0-5.151-1.070-6.95-2.81l0.003 0.003zM15.66 15.66c1.449-1.449 2.344-3.45 2.344-5.66 0-4.421-3.584-8.004-8.004-8.004-2.21 0-4.211 0.896-5.66 2.344v0c-1.449 1.449-2.344 3.45-2.344 5.66 0 4.421 3.584 8.004 8.004 8.004 2.21 0 4.211-0.896 5.66-2.344v0zM6.7 9.29l2.3 2.31 4.3-4.3 1.4 1.42-5.7 5.68-3.7-3.7 1.4-1.42z"></path>
                            </svg>

                        }
                        {toast.type === 'warning'
                            &&
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 32 32">
                                <path
                                    d="M16 3c-3.472 0-6.737 1.352-9.192 3.808s-3.808 5.72-3.808 9.192c0 3.472 1.352 6.737 3.808 9.192s5.72 3.808 9.192 3.808c3.472 0 6.737-1.352 9.192-3.808s3.808-5.72 3.808-9.192c0-3.472-1.352-6.737-3.808-9.192s-5.72-3.808-9.192-3.808zM16 0v0c8.837 0 16 7.163 16 16s-7.163 16-16 16c-8.837 0-16-7.163-16-16s7.163-16 16-16zM14 22h4v4h-4zM14 6h4v12h-4z"></path>
                            </svg>

                        }
                        {toast.type === 'danger'
                            &&
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 32 32">
                                <path
                                    d="M16 3c-3.472 0-6.737 1.352-9.192 3.808s-3.808 5.72-3.808 9.192c0 3.472 1.352 6.737 3.808 9.192s5.72 3.808 9.192 3.808c3.472 0 6.737-1.352 9.192-3.808s3.808-5.72 3.808-9.192c0-3.472-1.352-6.737-3.808-9.192s-5.72-3.808-9.192-3.808zM16 0v0c8.837 0 16 7.163 16 16s-7.163 16-16 16c-8.837 0-16-7.163-16-16s7.163-16 16-16zM14 22h4v4h-4zM14 6h4v12h-4z"></path>
                            </svg>
                        }
                        <Text.Paragraph
                            color={toast.type}
                            size={textSize}
                        >
                            {toast.message}
                        </Text.Paragraph>
                    </div>
                ))}
            </div>
        </>
    );
};
