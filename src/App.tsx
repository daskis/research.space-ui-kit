import {useState} from "react";
import {Textarea} from "@components";
import {Radio, ThemeSwitcher} from "@components";

function App() {
    const [value, setValue] = useState<string>("")
    const items = [
        {
            value: "aboba1",
            label: "aboba1",
        },
        {
            value: "aboba2",
            label: "aboba2",
        },
        {
            value: "aboba3",
            label: "aboba3",
        },
    ]
    const [selectedOption, setSelectedOption] = useState(items[0].value);

    const handleChange = (value: string) => {
        setSelectedOption(value);
    };
    return (
        <div>
            <Textarea
                borderColor="secondary"
                size="h1"
                label={"12"} value={value} onChange={(e) => {
                setValue(e.target.value)
            }}/>
            <ThemeSwitcher/>
            <Radio.Group
                radioColor="secondary"
                items={items}
                value={selectedOption}
                size="h1"
                onChange={handleChange}
            />

        </div>
    )
}

export default App
