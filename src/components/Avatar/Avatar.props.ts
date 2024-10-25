import { Sizes } from '@helpers';
import { Dispatch, SetStateAction } from 'react';

export interface IAvatarProps {
    size?: Sizes;
    src?: string;
    edit?: boolean;
    onChange?: Dispatch<SetStateAction<File | undefined>>;
    value?: File;
    className?: string;
}
