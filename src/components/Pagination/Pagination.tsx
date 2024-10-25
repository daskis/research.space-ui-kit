import { CSSProperties, useMemo } from 'react';
import cls from './Pagination.module.scss';
import { classNames } from '@helpers';
import { IPaginationProps } from './Pagination.props.ts';
import { Paragraph } from '@components';

export const Pagination = ({
    total,
    current,
    onChange,
    gap = 5,
    color = 'primary',
    borderRadius = 5,
    size = 'medium',
    displayCount = 5,
    disabled = false,
    className,
}: IPaginationProps) => {
    const totalPages = total;

    const handleClick = (page: number) => {
        if (!disabled && page !== current) {
            onChange(page);
        }
    };

    const textSize = useMemo((): 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' => {
        return size === 'small' ? 'h4' : size === 'large' ? 'h2' : 'h3';
    }, [size]);

    const itemStyle: CSSProperties = useMemo(
        () => ({
            borderRadius: `${borderRadius}px`,
        }),
        [borderRadius],
    );

    const listStyle: CSSProperties = useMemo(
        () => ({
            gap: `${gap}px`,
        }),
        [gap],
    );

    const renderPaginationItems = useMemo(() => {
        const pages = [];
        const halfDisplayCount = Math.floor(displayCount / 2);
        let startPage = Math.max(1, current - halfDisplayCount);
        let endPage = Math.min(totalPages, current + halfDisplayCount);

        // Adjust start and end pages to ensure displayCount pages are shown
        if (endPage - startPage + 1 < displayCount) {
            if (startPage === 1) {
                endPage = Math.min(totalPages, startPage + displayCount - 1);
            } else {
                startPage = Math.max(1, endPage - displayCount + 1);
            }
        }

        // First page
        if (startPage > 1) {
            pages.push(
                <li
                    key={1}
                    style={itemStyle}
                    tabIndex={0} // Add tabIndex for keyboard navigation
                    className={classNames(
                        cls.pageItem,
                        {
                            [cls.active]: current === 1,
                            [cls.disabled]: disabled,
                            [cls.small]: size === 'small',
                            [cls.medium]: size === 'medium',
                            [cls.large]: size === 'large',
                            [cls[color]]: color,
                        },
                        [],
                    )}
                    onClick={() => handleClick(1)}
                    onKeyDown={(e) => e.key === 'Enter' && handleClick(1)} // Handle keyboard navigation
                >
                    <Paragraph color="text" size={textSize}>
                        1
                    </Paragraph>
                </li>,
            );
        }

        // Ellipsis before current pages
        if (startPage > 2) {
            pages.push(
                <li
                    style={itemStyle}
                    tabIndex={0} // Add tabIndex for keyboard navigation
                    className={classNames(
                        cls.pageItem,
                        {
                            [cls.disabled]: disabled,
                            [cls.small]: size === 'small',
                            [cls.medium]: size === 'medium',
                            [cls.large]: size === 'large',
                            [cls[color]]: color,
                        },
                        [],
                    )}
                    key="prev-ellipsis"
                    onClick={() => handleClick(startPage - 1)}
                    onKeyDown={(e) => e.key === 'Enter' && handleClick(startPage - 1)} // Handle keyboard navigation
                >
                    <Paragraph size={textSize}>...</Paragraph>
                </li>,
            );
        }

        // Page buttons
        for (let i = startPage; i <= endPage; i++) {
            pages.push(
                <li
                    style={itemStyle}
                    key={i}
                    tabIndex={0} // Add tabIndex for keyboard navigation
                    className={classNames(
                        cls.pageItem,
                        {
                            [cls.active]: i === current,
                            [cls.disabled]: disabled,
                            [cls.small]: size === 'small',
                            [cls.medium]: size === 'medium',
                            [cls.large]: size === 'large',
                            [cls[color]]: color,
                        },
                        [],
                    )}
                    onClick={() => handleClick(i)}
                    onKeyDown={(e) => e.key === 'Enter' && handleClick(i)} // Handle keyboard navigation
                >
                    <Paragraph color="text" size={textSize}>
                        {i}
                    </Paragraph>
                </li>,
            );
        }

        // Ellipsis after current pages
        if (endPage < totalPages - 1) {
            pages.push(
                <li
                    style={itemStyle}
                    tabIndex={0} // Add tabIndex for keyboard navigation
                    className={classNames(
                        cls.pageItem,
                        {
                            [cls.disabled]: disabled,
                            [cls.small]: size === 'small',
                            [cls.medium]: size === 'medium',
                            [cls.large]: size === 'large',
                            [cls[color]]: color,
                        },
                        [],
                    )}
                    key="next-ellipsis"
                    onClick={() => handleClick(endPage + 1)}
                    onKeyDown={(e) => e.key === 'Enter' && handleClick(endPage + 1)} // Handle keyboard navigation
                >
                    <Paragraph size={textSize}>...</Paragraph>
                </li>,
            );
        }

        // Last page
        if (endPage < totalPages) {
            pages.push(
                <li
                    style={itemStyle}
                    key={totalPages}
                    tabIndex={0} // Add tabIndex for keyboard navigation
                    className={classNames(
                        cls.pageItem,
                        {
                            [cls.active]: current === totalPages,
                            [cls.disabled]: disabled,
                            [cls.small]: size === 'small',
                            [cls.medium]: size === 'medium',
                            [cls.large]: size === 'large',
                            [cls[color]]: color,
                        },
                        [],
                    )}
                    onClick={() => handleClick(totalPages)}
                    onKeyDown={(e) => e.key === 'Enter' && handleClick(totalPages)} // Handle keyboard navigation
                >
                    <Paragraph color="text" size={textSize}>
                        {totalPages}
                    </Paragraph>
                </li>,
            );
        }

        return pages;
    }, [totalPages, current, displayCount, disabled]);

    return (
        <div
            style={listStyle}
            className={classNames(
                cls.pagination,
                {
                    [cls.disabled]: disabled,
                    [cls.small]: size === 'small',
                    [cls.medium]: size === 'medium',
                    [cls.large]: size === 'large',
                    [cls[color]]: color,
                },
                [className],
            )}
        >
            <button
                className={classNames(cls.arrow, {}, [cls.prev])}
                disabled={disabled || current === 1}
                onClick={() => handleClick(current - 1)}
                onKeyDown={(e) => e.key === 'Enter' && handleClick(current - 1)} // Handle keyboard navigation
                tabIndex={0} // Add tabIndex for keyboard navigation
            >
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M15.422 16.594l-1.406 1.406-6-6 6-6 1.406 1.406-4.594 4.594z"></path>
                </svg>
            </button>
            <ul style={listStyle} className={cls.pageList}>
                {renderPaginationItems}
            </ul>
            <button
                className={classNames(cls.arrow, {}, [cls.next])}
                disabled={disabled || current === totalPages}
                onClick={() => handleClick(current + 1)}
                onKeyDown={(e) => e.key === 'Enter' && handleClick(current + 1)} // Handle keyboard navigation
                tabIndex={0} // Add tabIndex for keyboard navigation
            >
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M8.578 16.594l4.594-4.594-4.594-4.594 1.406-1.406 6 6-6 6z"></path>
                </svg>
            </button>
        </div>
    );
};
