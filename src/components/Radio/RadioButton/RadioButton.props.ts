import {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from "react";

export interface IRadioButtonProps extends Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    'size' | 'onChange' | "value"
> {
    label: string;
    size?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    textColor?: "primary" | "secondary" | "success" | "warning" | "danger" | "info" | "link" | "white" | "black" | "text";
    radioColor?: "primary" | "secondary" | "success" | "warning" | "danger" | "info" | "link" | "white" | "black" | "text";
    bgColor?: "primary" | "secondary" | "success" | "warning" | "danger" | "info" | "link" | "white" | "black" | "bg" | "bgDark";
    fontFamily?: "first" | "second" | "third"
    checked: boolean;
    id: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}