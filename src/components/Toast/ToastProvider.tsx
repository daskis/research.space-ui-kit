import { CSSProperties, useCallback, useEffect, useMemo, useState } from 'react';
import cls from './Toast.module.scss';
import { IToastProps, Toast } from './Toast.props.ts';
import { setToastFunction } from './toast.ts';
import { TextSizes, classNames } from '../../helpers';
import { Paragraph } from '@components';
import { createPortal } from 'react-dom';

export const ToastProvider = ({
    size = 'medium',
    position = 'top',
    borderRadius = 5,
    time = 'long',
    className,
    children,
}: IToastProps) => {
    const style: CSSProperties = {
        borderRadius: `${borderRadius}px`,
    };
    const textSize = useMemo<TextSizes>(() => {
        return size === 'small' ? 'h4' : size === 'large' ? 'h2' : 'h3';
    }, [size]);

    const [toasts, setToasts] = useState<Toast[]>([]);
    const addToast = useCallback(
        (message: string, type: Toast['type'] = 'info') => {
            const newToast: Toast = {
                id: Math.random().toString(36).substr(2, 9),
                message,
                type,
            };
            setToasts((prevToasts) => [...prevToasts, newToast]);

            setTimeout(
                () => {
                    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== newToast.id));
                },
                time === 'short' ? 1500 : 3000,
            );
        },
        [time],
    );

    useEffect(() => {
        setToastFunction(addToast);
    }, [addToast]);

    return (
        <>
            {children}
            {createPortal(
                <div
                    className={classNames(
                        cls.wrapper,
                        {
                            [cls[position]]: position,
                        },
                        [className],
                    )}
                >
                    {toasts.map((toast) => (
                        <div
                            style={style}
                            key={toast.id}
                            className={classNames(
                                cls.toast,
                                {
                                    [cls[size]]: size,
                                    [cls[toast.type]]: toast.type,
                                },
                                [],
                            )}
                        >
                            <Paragraph color={toast.type} size={textSize}>
                                {toast.message}
                            </Paragraph>
                        </div>
                    ))}
                </div>,
                document.querySelector('body') as HTMLElement,
            )}
        </>
    );
};
