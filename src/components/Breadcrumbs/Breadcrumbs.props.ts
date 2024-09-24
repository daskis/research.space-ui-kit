import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IBreadcrumb {
    label: string;
    value: string;
}

export interface IBreadcrumbsProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
    size?: 'small' | 'medium' | 'large';
    gap?: number;
    borderRadius?: number;
    breadcrumbs: IBreadcrumb[];
}