import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface IRadioItem {
    label: string;
    value: string;
}

export interface IRadioGroupProps extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>, "onChange"> {
    items: IRadioItem[];
    value: string;
    gap?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    size?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    textColor?: "primary" | "secondary" | "success" | "warning" | "danger" | "info" | "link" | "white" | "black" | "text";
    radioColor?: "primary" | "secondary" | "success" | "warning" | "danger" | "info" | "link" | "white" | "black" | "text";
    bgColor?: "primary" | "secondary" | "success" | "warning" | "danger" | "info" | "link" | "white" | "black" | "bg" | "bgDark";
    fontFamily?: "first" | "second" | "third"
    onChange: (value: string) => void;
}