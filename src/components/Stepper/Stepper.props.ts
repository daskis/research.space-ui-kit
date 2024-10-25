import { Colors, Sizes } from '@helpers';

export interface IStepItem {
    label: string;
    value: string;
}

export interface IStepperProps {
    items: IStepItem[];
    active: IStepItem | null;
    size?: Sizes;
    color?: Colors;
    onStepChange?: (item: IStepItem) => void;
}
