import cls from './Picker.module.scss';
import { CSSProperties, useMemo, useState } from 'react';
import { CalendarType, IPickerProps } from './Picker.props.ts';
import { Text, Years, Days, Months } from '@components';
import dayjs, { Dayjs } from 'dayjs';
import { classNames } from '@helpers';

export const Picker = (
    {
        size = 'medium',
        color = 'primary',
        onEnd,
        borderRadius = 10,
    }: IPickerProps) => {
    const [currentTab, setCurrentTab] = useState<CalendarType>(CalendarType.DAYS);
    const [step] = useState<number>(0);
    const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear());
    const [selectedMonth, setSelectedMonth] = useState<number>(dayjs().month());
    const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs());

    const textSize = useMemo((): 'h3' | 'h2' | 'h1' | 'h4' | 'h5' | 'h6' => {
        return size === 'small' ? 'h3' : size === 'large' ? 'h1' : 'h2';
    }, [size]);

    const style: CSSProperties = {
        borderRadius: `${borderRadius}px`,
    };

    const handleYearChange = (delta: number) => {
        setSelectedYear(prev => prev + delta);
    };

    const handleMonthChange = (delta: number) => {
        setSelectedMonth(prev => {
            const newMonth = prev + delta;
            if (newMonth < 0) {
                setSelectedYear(prevYear => prevYear - 1);
                return 11;
            } else if (newMonth > 11) {
                setSelectedYear(prevYear => prevYear + 1);
                return 0;
            }
            return newMonth;
        });
    };

    const handleDateChange = (day: Dayjs) => {
        setSelectedDate(day);
        if (onEnd) {
            onEnd(day.format('DD.MM.YYYY'));
        }
    };

    return (
        <div style={style} className={cls.wrapper}>
            <div className={cls.heading}>
                <div className={cls.buttonWrapper}>
                    <button onClick={() => handleYearChange(-1)} className={classNames(cls.btn, {
                        [cls[size]]: size,
                    }, [cls.year])}>
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 24 24">
                            <path d="M17.422 16.594l-1.406 1.406-6-6 6-6 1.406 1.406-4.594 4.594z"></path>
                            <path d="M12.422 16.594l-1.406 1.406-6-6 6-6 1.406 1.406-4.594 4.594z"></path>
                        </svg>
                    </button>
                    <button onClick={() => handleMonthChange(-1)} className={classNames(cls.btn, {
                        [cls[size]]: size,
                    }, [cls.month])}>
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 24 24">
                            <path d="M15.422 16.594l-1.406 1.406-6-6 6-6 1.406 1.406-4.594 4.594z"></path>
                        </svg>
                    </button>
                </div>
                <div className={cls.date}>
                    <button onClick={() => setCurrentTab(CalendarType.YEARS)} className={cls.btn}>
                        <Text.Paragraph size={textSize}>
                            {selectedYear}
                        </Text.Paragraph>
                    </button>
                    <button onClick={() => setCurrentTab(CalendarType.MONTHS)} className={cls.btn}>
                        <Text.Paragraph size={textSize}>
                            {dayjs().month(selectedMonth).format('MMMM').slice(0, 3)}
                        </Text.Paragraph>
                    </button>
                </div>
                <div className={cls.buttonWrapper}>
                    <button onClick={() => handleMonthChange(1)} className={classNames(cls.btn, {
                        [cls[size]]: size,
                    }, [cls.month])}>
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 24 24">
                            <path d="M8.578 16.594l4.594-4.594-4.594-4.594 1.406-1.406 6 6-6 6z"></path>
                        </svg>
                    </button>
                    <button onClick={() => handleYearChange(1)} className={classNames(cls.btn, {
                        [cls[size]]: size,
                    }, [cls.year])}>
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 24 24">
                            <path d="m10.578 16.594l4.594-4.594-4.594-4.594 1.406-1.406 6 6-6 6z"></path>
                            <path d="M5.578 16.594l4.594-4.594-4.594-4.594 1.406-1.406 6 6-6 6z"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div className={cls.body}>
                {currentTab === CalendarType.YEARS && (
                    <Years
                        size={size}
                        value={selectedYear}
                        step={step}
                        onChange={(year) => {
                            setSelectedYear(year);
                            setCurrentTab(CalendarType.MONTHS);
                        }}
                        color={color} />
                )}
                {currentTab === CalendarType.MONTHS && (
                    <Months
                        size={size}
                        value={selectedMonth} onChange={(index) => {
                        setSelectedMonth(index);
                        setCurrentTab(CalendarType.DAYS);
                    }} color={color} />
                )}
                {currentTab === CalendarType.DAYS && (
                    <Days
                        size={size}
                        year={selectedYear}
                        month={selectedMonth}
                        value={selectedDate}
                        onChange={handleDateChange}
                        onMonthChange={(newMonth, newYear) => {
                            setSelectedMonth(newMonth);
                            setSelectedYear(newYear);
                        }}
                        color={color}
                    />
                )}
            </div>
        </div>
    );
};
