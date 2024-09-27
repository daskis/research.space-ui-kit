import cls from './Empty.module.scss';
import { IEmptyProps } from './Empty.props.ts';
import { classNames } from '@helpers';
import { Text } from '@components';
import { useMemo } from 'react';

export const Empty = (
    {
        title,
        size = 'medium',
        className,
        ...props
    }: IEmptyProps,
) => {
    const textSize = useMemo((): 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' => {
        return size === 'small' ? 'h3' : size === 'large' ? 'h1' : 'h2';
    }, [size]);

    return (
        <div
            {...props}
            className={classNames(cls.wrapper, {
                [cls[size]]: size,
            }, [className])}
        >
            <svg className={cls.icon} viewBox="0 0 64 41" xmlns="http://www.w3.org/2000/svg">
                <g transform="translate(0 1)" fill="none" fillRule="evenodd">
                    <ellipse fill="#f5f5f5" cx="32" cy="33" rx="32" ry="7"></ellipse>
                    <g fillRule="nonzero" stroke="#d9d9d9">
                        <path
                            d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"></path>
                        <path
                            d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z"
                            fill="#fafafa"></path>
                    </g>
                </g>
            </svg>

            {title &&
                <Text.Paragraph
                    size={textSize}
                    color="text"
                    className={cls.title}
                >
                    {title}
                </Text.Paragraph>
            }
        </div>
    );
};

