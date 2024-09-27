import cls from './Months.module.scss';
import { IMonthsProps } from './Months.props';
import { Text } from '@components';
import { classNames } from '@helpers';
import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import 'dayjs/locale/ru';
import { useMemo } from 'react';

dayjs.locale('ru');
dayjs.extend(localeData);

export const Months = (
    {
        value,
        onChange,
        size = 'medium',
        color = 'primary',
    }: IMonthsProps) => {
    const months = dayjs.monthsShort();
    const currentMonthIndex = dayjs().month();

    const textSize = useMemo(() => {
        switch (size) {
            case 'small':
                return 'h3';
            case 'large':
                return 'h1';
            default:
                return 'h2';
        }
    }, [size]);

    return (
        <div className={cls.wrapper}>
            {months.map((month, index) => (
                <button
                    key={index}
                    onClick={() => onChange?.(index)}
                    className={classNames(cls.btn, {
                        [cls[color]]: color,
                        [cls.selected]: value === index,
                        [cls.today]: index === currentMonthIndex,
                    })}
                >
                    <Text.Paragraph size={textSize}>{month.split('.')[0]}</Text.Paragraph>
                </button>
            ))}
        </div>
    );
};
