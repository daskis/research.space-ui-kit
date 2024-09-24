import cls from './App.module.scss';
import { Pagination, ThemeSwitcher } from './components';
import { useState } from 'react';

const App = () => {
    const [current, setCurrent] = useState<number>(1);
    return (
        <div className={cls.list}>
            <ThemeSwitcher />
            <Pagination
                total={500}
                current={current}
                onChange={(page) => setCurrent(page)}
                color="primary"
                size="small"
                disabled={false}
            />
            <Pagination
                total={500}
                current={current}
                onChange={(page) => setCurrent(page)}
                color="primary"
                size="medium"
                disabled={false}
            />
            <Pagination
                total={500}
                current={current}
                onChange={(page) => setCurrent(page)}
                color="secondary"
                size="large"
                disabled={false}
            />
        </div>
    );
};


export default App;