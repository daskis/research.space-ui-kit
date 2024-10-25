import cls from './Stepper.module.scss';
import { FC, useMemo } from 'react';
import { IStepperProps } from './Stepper.props.ts';
import { TextSizes, classNames } from '@helpers';
import { Paragraph } from '@components';

export const Stepper: FC<IStepperProps> = ({ items, active, size = 'medium', color = 'primary', onStepChange }) => {
    const textSize = useMemo<TextSizes>(() => {
        return size === 'small' ? 'h5' : size === 'large' ? 'h3' : 'h4';
    }, [size]);

    const activeIndex = items.findIndex((item) => item.value === active?.value);

    return (
        <ul className={classNames(cls.list, { [cls[size]]: size })}>
            {items.map((item, index) => {
                const isActive = index <= activeIndex; // Элементы до активного тоже активные
                return (
                    <>
                        <li
                            key={item.value}
                            className={classNames(cls.listItem, {
                                [cls.active]: isActive,
                            })}
                            onClick={() => onStepChange?.(item)}
                        >
                            <Paragraph
                                size={textSize}
                                color="white"
                                className={classNames(cls.index, {
                                    [cls.active]: isActive,
                                    [cls[color]]: color,
                                    [cls[size]]: size,
                                })}
                            >
                                {index + 1}
                            </Paragraph>
                            <Paragraph size={textSize} color={isActive ? color : 'text'} className={cls.text}>
                                {item.label}
                            </Paragraph>
                        </li>
                        {index !== items.length - 1 && <li className={cls.line} />}
                    </>
                );
            })}
        </ul>
    );
};
