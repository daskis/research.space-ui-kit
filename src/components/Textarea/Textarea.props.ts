import {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from "react";

export interface ITextareaProps extends Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>,
    'size' | 'onChange'
> {
    label: string;
    size?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    textColor?: "primary" | "secondary" | "success" | "warning" | "danger" | "info" | "link" | "white" | "black" | "text";
    borderColor?: "primary" | "secondary" | "success" | "warning" | "danger" | "info" | "link" | "white" | "black";
    bgColor?: "inherit" | "bg" | "bgDark";
    value: string;
    borderRadius?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    fontFamily?: "first" | "second" | "third"
    borderSize?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    maxRows?: number;
}