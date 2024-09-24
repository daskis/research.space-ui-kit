import { Dispatch, SetStateAction } from 'react';

export interface ISwitchProps {
    size?: 'small' | 'medium' | 'large';
    color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'link' | 'white' | 'black' | 'text';
    checked: boolean;
    onChange: Dispatch<SetStateAction<boolean>>;
}