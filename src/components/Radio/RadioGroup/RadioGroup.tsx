import React, { cloneElement, isValidElement, ReactElement } from 'react';
import cls from './RadioGroup.module.scss';
import { classNames } from '@helpers';
import { IRadioGroupProps } from './RadioGroup.props.ts';
import { IRadioButtonProps } from '../RadioButton';

export const RadioGroup = (
    {
        value,
        color = 'primary',
        size = 'medium',
        onChange,
        bgColor = 'bg',
        gap = 0,
        align = 'start',
        children,
        className,
        ...props
    }: IRadioGroupProps) => {
    const handleChange = (newValue: string) => {
        onChange(newValue);
    };

    const renderChildren = () =>
        React.Children.map(children, (child) => {
            if (isValidElement(child) && (child as ReactElement<IRadioButtonProps>).props.value !== undefined) {
                return cloneElement(child as ReactElement<IRadioButtonProps>, {
                    color,
                    size,
                    bgColor,
                    gap,
                    align,
                    checked: (child as ReactElement<IRadioButtonProps>).props.value === value,
                    onChange: () => handleChange((child as ReactElement<IRadioButtonProps>).props.value!.toString()),
                });
            }
            return child;
        });

    return (
        <div
            className={classNames('', {}, [className])}
            {...props}
        >
            {renderChildren()}
        </div>
    );
};
