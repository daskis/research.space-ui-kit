import cls from './CheckboxGroup.module.scss';
import { ICheckboxGroupProps, ICheckboxItem } from './CheckboxGroup.props.ts';
import { classNames } from '@helpers';
import { CheckboxButton } from '../CheckboxButton';
import { ChangeEvent } from 'react';

export const CheckboxGroup = (
    {
        onChange,
        fontFamily,
        checkboxColor,
        size,
        values,
        items,
        textColor,
        gap = 'h6',
        bgColor,
        className,
        ...props
    }: ICheckboxGroupProps
) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { id, checked } = e.target;
        const newValue = id;

        // Update the values based on whether the checkbox is checked or not
        const newValues = checked
            ? [...values, newValue]
            : values.filter(val => val !== newValue);

        // Call the provided onChange function with the updated values
        onChange(newValues);
    };

    return (
        <ul
            {...props}
            className={classNames(cls.list, {
                [cls.h1]: gap === 'h1',
                [cls.h2]: gap === 'h2',
                [cls.h3]: gap === 'h3',
                [cls.h4]: gap === 'h4',
                [cls.h5]: gap === 'h5',
                [cls.h6]: gap === 'h6',
            }, [className])}
        >
            {items.map((item: ICheckboxItem) => (
                <li
                    className={cls.listItem}
                    key={item.value}
                >
                    <CheckboxButton
                        fontFamily={fontFamily}
                        checkboxColor={checkboxColor}
                        size={size}
                        textColor={textColor}
                        bgColor={bgColor}
                        label={item.label}
                        checked={values.includes(item.value)}
                        id={item.value}
                        onChange={handleChange}
                    />
                </li>
            ))}
        </ul>
    );
};
