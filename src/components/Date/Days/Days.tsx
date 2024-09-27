import cls from './Days.module.scss';
import { IDaysProps } from './Days.props';
import { Text } from '@components';
import { classNames } from '@helpers';
import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/ru';
import weekday from 'dayjs/plugin/weekday';
import localeData from 'dayjs/plugin/localeData';
import isToday from 'dayjs/plugin/isToday';
import { useMemo } from 'react';

dayjs.locale('ru');
dayjs.extend(weekday);
dayjs.extend(localeData);
dayjs.extend(isToday);

export const Days = (
    {
        year,
        month,
        value,
        size = 'medium',
        onChange,
        onMonthChange, // Added prop to notify parent of month changes
        color = 'primary',
    }: IDaysProps & { onMonthChange?: (newMonth: number, newYear: number) => void }) => {
    const daysOfWeek = dayjs.weekdaysShort(true); // Get short names of weekdays (starting from Monday)
    const startOfMonth = dayjs().year(year).month(month).startOf('month');
    const endOfMonth = dayjs().year(year).month(month).endOf('month');

    const textSize = useMemo((): 'h3' | 'h2' | 'h1' | 'h4' | 'h5' | 'h6' => {
        return size === 'small' ? 'h3' : size === 'large' ? 'h1' : 'h2';
    }, [size]);
    const renderDaysOfWeek = () => {
        return daysOfWeek.map((day, index) => (
            <div key={index} className={cls.weekday}>
                <Text.Paragraph
                    color={index > 4 ? 'danger' : 'text'}
                    size={textSize}>{day.slice(0, 2)}</Text.Paragraph>
            </div>
        ));
    };

    const renderDays = () => {
        const days: Dayjs[] = [];

        // Days from previous month to fill the first week
        for (let i = startOfMonth.weekday() - 1; i >= 0; i--) {
            days.push(startOfMonth.subtract(i + 1, 'day'));
        }

        // Current month days
        for (let day = 1; day <= endOfMonth.date(); day++) {
            days.push(dayjs().year(year).month(month).date(day));
        }

        // Days from the next month to fill the last week
        for (let i = 1; days.length % 7 !== 0; i++) {
            days.push(endOfMonth.add(i, 'day'));
        }

        return days.map((day, index) => (
            <button
                key={index}
                onClick={() => {
                    if (!day.isSame(startOfMonth, 'month')) {
                        // Change selected day and potentially change the month
                        const newMonth = day.month();
                        const newYear = day.year();
                        onMonthChange?.(newMonth, newYear); // Notify parent for month change
                    }
                    onChange(day); // Change selected day
                }}
                className={classNames(cls.btn, {
                    [cls[color]]: color,
                    [cls.selected]: value && value.isSame(day, 'day'),
                    [cls.otherMonth]: !day.isSame(startOfMonth, 'month'),
                    [cls.today]: day.isToday(),
                })}
            >
                <Text.Paragraph size={textSize}>{day.date()}</Text.Paragraph>
            </button>
        ));
    };

    return (
        <div className={cls.wrapper}>
            <div className={cls.daysOfWeek}>{renderDaysOfWeek()}</div>
            <div className={cls.days}>{renderDays()}</div>
        </div>
    );
};
