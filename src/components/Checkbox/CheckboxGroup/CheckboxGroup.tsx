import React, { cloneElement, isValidElement, ReactElement } from 'react';
import cls from './CheckboxGroup.module.scss';
import { classNames } from '@helpers';
import { ICheckboxGroupProps } from './CheckboxGroup.props';
import { ICheckboxButtonProps } from '../CheckboxButton';

export const CheckboxGroup = ({
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
                              }: ICheckboxGroupProps) => {
    const handleChange = (newValue: string) => {
        onChange((prevValues) => {
            const isChecked = prevValues.includes(newValue);
            return isChecked
                ? prevValues.filter(item => item !== newValue)
                : [...prevValues, newValue];
        });
    };

    const renderChildren = () =>
        React.Children.map(children, (child) => {
            if (isValidElement(child) && (child as ReactElement<ICheckboxButtonProps>).props.value !== undefined) {
                return cloneElement(child as ReactElement<ICheckboxButtonProps>, {
                    color,
                    size,
                    bgColor,
                    gap,
                    align,
                    checked: value.includes((child as ReactElement<ICheckboxButtonProps>).props.value),
                    onChange: () => handleChange((child as ReactElement<ICheckboxButtonProps>).props.value!.toString()),
                });
            }
            return child;
        });

    return (
        <div
            className={classNames("", {}, [className])}
            {...props}
        >
            {renderChildren()}
        </div>
    );
};
