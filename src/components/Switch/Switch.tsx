import cls from './Switch.module.scss';
import { ISwitchProps } from './Switch.props.ts';
import { classNames } from '@helpers';

export const Switch = (
    {
        size = 'medium',
        color = 'primary',
        checked,
        onChange,
    }: ISwitchProps,
) => {
    return (
        <button
            onClick={() => onChange(!checked)}
            className={classNames(cls.wrapper, {
                [cls.checked]: checked,
                [cls.primary]: color === 'primary',
                [cls.secondary]: color === 'secondary',
                [cls.success]: color === 'success',
                [cls.warning]: color === 'warning',
                [cls.danger]: color === 'danger',
                [cls.info]: color === 'info',
                [cls.link]: color === 'link',
                [cls.white]: color === 'white',
                [cls.black]: color === 'black',
                [cls.text]: color === 'text',

                [cls.small]: size === 'small',
                [cls.medium]: size === 'medium',
                [cls.large]: size === 'large',
            }, [])} />

    );
};

