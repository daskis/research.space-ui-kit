import { useState } from 'react';
import { Select, Option } from '@components';

const list = [
    { 'label': 'янв', 'value': '01' },
    { 'label': 'фев', 'value': '02' },
    { 'label': 'мар', 'value': '03' },
    { 'label': 'апр', 'value': '04' },
    { 'label': 'май', 'value': '05' },
    { 'label': 'июн', 'value': '06' },
    { 'label': 'июл', 'value': '07' },
    { 'label': 'авг', 'value': '08' },
    { 'label': 'сен', 'value': '09' },
    { 'label': 'окт', 'value': '10' },
    { 'label': 'ноя', 'value': '11' },
    { 'label': 'дек', 'value': '12' },
];

function App() {
    const [selectedMonths, setSelectedMonths] = useState<Option[]>([]);

    const handleMonthsSelect = (value: Option) => {
        setSelectedMonths((prevState) =>
            prevState.some((item) => item.value === value.value)
                ? prevState.filter((item) => item.value !== value.value)
                : [...prevState, value],
        );
    };

    return (
        <div>
            <Select.Many
                tagSize="h4"
                tagBgColor="secondary"
                tagColor="secondary"
                tagRadius="h1"
                size={'h1'}
                options={list}
                borderColor="secondary"
                selected={selectedMonths}
                onChange={handleMonthsSelect}
                placeholder="Выберите месяцы"
            />
        </div>
    );
}

export default App;
