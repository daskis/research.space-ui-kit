import cls from './Switch.module.scss';
import { ISwitchProps } from './Switch.props.ts';
import { classNames } from '@helpers';

export const Switch = ({ size = 'medium', color = 'primary', checked, onChange }: ISwitchProps) => {
    return (
        <button
            onClick={() => onChange(!checked)}
            className={classNames(
                cls.wrapper,
                {
                    [cls.checked]: checked,
                    [cls[color]]: color,
                    [cls[size]]: size,
                },
                [],
            )}
        />
    );
};
