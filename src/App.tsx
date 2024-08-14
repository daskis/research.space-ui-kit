import { useState } from 'react';
import { Checkbox } from './components';

const items = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
];

function App() {
    const [selectedValues, setSelectedValues] = useState<string[]>([]);

    const handleCheckboxChange = (values: string[]) => {
        setSelectedValues(values);
    };

    return (
        <div>
            <Checkbox.Group
                size="h2"
                checkboxColor="secondary"
                items={items}
                values={selectedValues}
                onChange={handleCheckboxChange} />
        </div>
    );
}

export default App;
