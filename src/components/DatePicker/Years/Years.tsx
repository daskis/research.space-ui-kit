import cls from './Years.module.scss';
import { useEffect, useMemo, useState } from 'react';
import dayjs from 'dayjs';
import { IYearsProps } from './Years.props';
import { Paragraph } from '@components';
import { classNames } from '@helpers';

export const Years = ({ value, size = 'medium', onChange, color = 'primary' }: IYearsProps) => {
    const [startYear, setStartYear] = useState<number>(Math.floor(value / 12) * 12); // Начальный год для отображения диапазона

    const textSize = useMemo((): 'h3' | 'h2' | 'h1' | 'h4' | 'h5' | 'h6' => {
        return size === 'small' ? 'h3' : size === 'large' ? 'h1' : 'h2';
    }, [size]);

    useEffect(() => {
        const newStartYear = Math.floor(value / 12) * 12;
        setStartYear(newStartYear);
    }, [value]);

    const renderYears = () => {
        return Array.from({ length: 15 }, (_, i) => {
            const year = startYear + i;
            return (
                <button
                    key={year}
                    onClick={() => onChange?.(year)}
                    className={classNames(
                        cls.btn,
                        {
                            [cls[color]]: color,
                            [cls.selected]: value === year,
                            [cls.today]: year === dayjs().year(),
                        },
                        [],
                    )}
                >
                    <Paragraph size={textSize}>{year}</Paragraph>
                </button>
            );
        });
    };

    return <div className={cls.wrapper}>{renderYears()}</div>;
};
