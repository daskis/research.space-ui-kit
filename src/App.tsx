import { SelectMany, SelectOne } from '@components/Select';
import cls from './App.module.scss';
import { DatePicker, ThemeSwitcher } from '@components';
import { Option } from '@components/Select/Option';
import { useState } from 'react';

const App = () => {
    const list: Option[] = [
        {
            label: '1',
            value: '1',
        },
        {
            label: '2',
            value: '2',
        },
    ];
    const [selected, setSelected] = useState<Option[] | null>(null);
    return (
        <div className={cls.list}>
            <ThemeSwitcher />
            <SelectMany
                size="small"
                borderRadius={5}
                placeholder="Выберите значение"
                selected={selected}
                onChange={setSelected}
                options={list}
            />
        </div>
    );
};

export default App;
