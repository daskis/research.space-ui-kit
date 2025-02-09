import React, { useCallback, useEffect, useRef } from 'react';
import cls from './Modal.module.scss';
import { IModalProps } from './Modal.props';
import { classNames } from '@helpers';
import { createPortal } from 'react-dom';

export const Modal = ({ isOpen, setOpen, children, borderRadius = 10, className, ...props }: IModalProps) => {
    const modalBodyRef = useRef<HTMLDivElement>(null);

    const handleClose = useCallback(() => {
        setOpen(false);
    }, [setOpen]);

    const handleWrapperClick = useCallback(
        (event: React.MouseEvent<HTMLDivElement>) => {
            if (modalBodyRef.current && !modalBodyRef.current.contains(event.target as Node)) {
                handleClose();
            }
        },
        [handleClose],
    );

    useEffect(() => {
        if (isOpen) {
            document.documentElement.style.overflowY = 'hidden';
        } else {
            document.documentElement.style.overflowY = 'auto';
        }
    }, [isOpen]);

    useEffect(() => {
        const handleEscKeyPress = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                handleClose();
            }
        };
        if (isOpen) {
            document.addEventListener('keydown', handleEscKeyPress);
        } else {
            document.removeEventListener('keydown', handleEscKeyPress);
        }
        return () => {
            document.removeEventListener('keydown', handleEscKeyPress);
        };
    }, [isOpen, handleClose]);

    const style = {
        borderRadius: `${borderRadius}px`,
    };

    return createPortal(
        <div onClick={handleWrapperClick} className={classNames(cls.wrapper, { [cls.hide]: !isOpen }, [])}>
            <div ref={modalBodyRef} {...props} style={style} className={classNames(cls.body, {}, [className])}>
                <span onClick={handleClose} className={cls.close}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z"></path>
                    </svg>
                </span>
                <div className={cls.content}>{children}</div>
            </div>
        </div>,
        document.querySelector('body') as HTMLElement,
    );
};
