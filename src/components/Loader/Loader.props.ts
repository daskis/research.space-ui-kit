import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface ILoaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    size?: "small" | "medium" | "large";
}