import { Dispatch, SetStateAction } from 'react';

export interface IAvatarProps {
    size?: 'small' | 'medium' | 'large';
    src?: string;
    edit?: boolean;
    onChange?: Dispatch<SetStateAction<File | undefined>>;
    value?: File;
    className?: string;
}
