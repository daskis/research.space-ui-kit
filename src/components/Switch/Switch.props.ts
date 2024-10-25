import { Colors, Sizes } from '@helpers';

export interface ISwitchProps {
    size?: Sizes;
    color?: Colors;
    checked: boolean;
    onChange: (checked: boolean) => void;
}
