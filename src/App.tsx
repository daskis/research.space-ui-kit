import cls from './App.module.scss';
import { ThemeSwitcher } from '@components';

const App = () => {
    return (
        <div className={cls.list}>
            <ThemeSwitcher />
        </div>
    );
};

export default App;