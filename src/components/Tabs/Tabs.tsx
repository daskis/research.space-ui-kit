import { useState, useRef, useEffect, useCallback, useMemo, CSSProperties } from 'react';
import cls from './Tabs.module.scss';
import { ITabsProps } from './Tabs.props';
import { classNames } from '@helpers';
import { Paragraph } from '@components';

export const Tabs = ({
    tabs,
    defaultIndex = 0,
    size = 'medium',
    color = 'primary',
    orientation = 'horizontal',
    gap = 10,
    justifyContent = 'start',
    className,
    ...props
}: ITabsProps) => {
    const [selectedIndex, setSelectedIndex] = useState<number>(defaultIndex);
    const [lineStyle, setLineStyle] = useState({});
    const tabListRef = useRef<HTMLUListElement | null>(null);

    const textSize = useMemo((): 'h3' | 'h2' | 'h1' | 'h4' | 'h5' | 'h6' => {
        return size === 'small' ? 'h3' : size === 'large' ? 'h1' : 'h2';
    }, [size]);

    const updateLinePosition = useCallback(
        (index: number) => {
            const tabList = tabListRef.current;
            if (tabList) {
                const selectedTab = tabList.children[index] as HTMLElement;
                if (selectedTab) {
                    setLineStyle(
                        orientation === 'horizontal'
                            ? {
                                  width: selectedTab.offsetWidth,
                                  left: selectedTab.offsetLeft,
                                  height: 2,
                                  bottom: 0,
                              }
                            : {
                                  width: 2,
                                  height: selectedTab.offsetHeight,
                                  right: 0,
                                  top: selectedTab.offsetTop,
                              },
                    );
                }
            }
        },
        [orientation],
    );

    const handleKeyDown = useCallback(
        (e: React.KeyboardEvent, index: number) => {
            const { key } = e;
            const nextIndex = () => (index + 1) % tabs.length;
            const prevIndex = () => (index - 1 + tabs.length) % tabs.length;

            if (key === 'ArrowRight' || key === 'ArrowDown') {
                setSelectedIndex(nextIndex);
            } else if (key === 'ArrowLeft' || key === 'ArrowUp') {
                setSelectedIndex(prevIndex);
            } else if (key === 'Enter') {
                setSelectedIndex(index);
            }
        },
        [tabs.length],
    );

    useEffect(() => {
        updateLinePosition(selectedIndex);
    }, [selectedIndex, updateLinePosition, justifyContent]);

    const listStyle: CSSProperties = useMemo(
        () => ({
            flexDirection: orientation === 'horizontal' ? 'row' : 'column',
            gap: `${gap}px`,
            justifyContent,
        }),
        [orientation, gap, justifyContent],
    );

    const wrapperStyle: CSSProperties = useMemo(
        () => ({
            flexDirection: orientation === 'horizontal' ? 'column' : 'row',
        }),
        [orientation],
    );

    return (
        <div className={cls.wrapper} style={wrapperStyle} {...props}>
            <ul
                style={listStyle}
                ref={tabListRef}
                className={classNames(cls.list, { [cls.vertical]: orientation === 'vertical' }, [className])}
            >
                {tabs.map((item, index) => (
                    <li
                        key={item.label}
                        tabIndex={0}
                        className={classNames(
                            cls.listItem,
                            {
                                [cls.active]: selectedIndex === index,
                                [cls[size]]: size,
                                [cls[color]]: color,
                            },
                            [],
                        )}
                        onClick={() => setSelectedIndex(index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                    >
                        <Paragraph
                            className={cls.label}
                            color={selectedIndex === index ? color : 'text'}
                            size={textSize}
                        >
                            {item.label}
                        </Paragraph>
                    </li>
                ))}
                <div
                    className={classNames(
                        cls.line,
                        {
                            [cls.horizontal]: orientation === 'horizontal',
                            [cls.vertical]: orientation === 'vertical',
                            [cls[color]]: color,
                        },
                        [],
                    )}
                    style={lineStyle}
                />
            </ul>
            {tabs[selectedIndex].value}
        </div>
    );
};
