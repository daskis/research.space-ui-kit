import { DetailedHTMLProps, Dispatch, HTMLAttributes, SetStateAction } from 'react';

export interface IModalProps extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'title'> {
    isOpen: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    borderRadius?: number;
}