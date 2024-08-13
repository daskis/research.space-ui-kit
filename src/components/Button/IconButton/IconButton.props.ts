import {ButtonHTMLAttributes, DetailedHTMLProps} from "react";

export interface IIconButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    isLoading?: boolean;
    color?: "primary" | "secondary" | "success" | "warning" | "danger" | "info" | "link" | "white" | "black" | "inherit";
    size?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    borderSize?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    borderRadius?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    icon: string;
    iconPosition?: "left" | "right";
    iconColor?: "primary" | "secondary" | "success" | "warning" | "danger" | "info" | "link" | "white" | "black";
}
