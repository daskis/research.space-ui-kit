import cls from './CheckboxButton.module.scss';
import { Text } from '@components';
import { ICheckboxButtonProps } from './CheckboxButton.props';
import { classNames } from '@helpers';

export const CheckboxButton = ({
                                   label,
                                   size = 'h1',
                                   textColor = 'text',
                                   checkboxColor = 'primary',
                                   fontFamily = 'first',
                                   onChange,
                                   checked,
                                   bgColor = 'bg',
                                   className,
                                   id,
                                   ...props
                               }: ICheckboxButtonProps) => {
    return (
        <div className={cls.wrapper}>
            <input
                {...props}
                type="checkbox"
                checked={checked}
                onChange={onChange}
                id={id}
                className={classNames(cls.checkbox, {
                    // Checkbox color
                    [cls.primary]: checkboxColor === 'primary',
                    [cls.secondary]: checkboxColor === 'secondary',
                    [cls.success]: checkboxColor === 'success',
                    [cls.warning]: checkboxColor === 'warning',
                    [cls.danger]: checkboxColor === 'danger',
                    [cls.info]: checkboxColor === 'info',
                    [cls.link]: checkboxColor === 'link',
                    [cls.white]: checkboxColor === 'white',
                    [cls.black]: checkboxColor === 'black',
                    [cls.text]: checkboxColor === 'text',

                    [cls.primary_bg]: bgColor === 'primary',
                    [cls.secondary_bg]: bgColor === 'secondary',
                    [cls.success_bg]: bgColor === 'success',
                    [cls.warning_bg]: bgColor === 'warning',
                    [cls.danger_bg]: bgColor === 'danger',
                    [cls.info_bg]: bgColor === 'info',
                    [cls.link_bg]: bgColor === 'link',
                    [cls.white_bg]: bgColor === 'white',
                    [cls.black_bg]: bgColor === 'black',
                    [cls.bg_bg]: bgColor === 'bg',
                    [cls.bgDark_bg]: bgColor === 'bgDark',

                    // Size
                    [cls.h1]: size === 'h1',
                    [cls.h2]: size === 'h2',
                    [cls.h3]: size === 'h3',
                    [cls.h4]: size === 'h4',
                    [cls.h5]: size === 'h5',
                    [cls.h6]: size === 'h6',
                }, [className])}
            />

            <label htmlFor={id} className={cls.label}>
                <Text.Paragraph
                    size={size}
                    color={textColor}
                    fontFamily={fontFamily}
                    className={cls.label_text}
                >
                    {label}
                </Text.Paragraph>
            </label>
        </div>
    );
};
