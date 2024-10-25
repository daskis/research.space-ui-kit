import cls from './Collapse.module.scss';
import { ICollapseProps } from './Collapse.props.ts';
import { classNames } from '@helpers';
import { Heading } from '@components';
import { useState } from 'react';

export const Collapse = ({
    size = 'medium',
    title,
    titleSize = 'h3',
    children,
    className,
    ...props
}: ICollapseProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            setIsOpen(!isOpen);
        }
    };

    return (
        <div
            {...props}
            className={classNames(
                cls.wrapper,
                {
                    [cls[size]]: size,
                },
                [className],
            )}
        >
            <div
                tabIndex={0}
                role="button"
                aria-expanded={isOpen}
                onClick={() => setIsOpen(!isOpen)}
                onKeyDown={handleKeyPress}
                className={cls.heading}
            >
                <Heading color="text" size={titleSize}>
                    {title}
                </Heading>
                <div
                    className={classNames(
                        cls.arrow,
                        {
                            [cls.active]: isOpen,
                        },
                        [],
                    )}
                >
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                    </svg>
                </div>
            </div>
            <div
                className={classNames(
                    cls.content,
                    {
                        [cls.close]: !isOpen,
                    },
                    [],
                )}
            >
                {children}
            </div>
        </div>
    );
};
