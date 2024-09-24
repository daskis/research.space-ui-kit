import { FilledButton, IFilledButtonProps } from './FilledButton';
import { DashedButton, IDashedButtonProps } from './DashedButton';

export const Button = {

    Filled: ({
                 size,
                 borderRadius,
                 color,
                 isLoading,
                 children,
                 ...props
             }: IFilledButtonProps) => (
        <FilledButton
            size={size}
            borderRadius={borderRadius}
            color={color}
            isLoading={isLoading}
            {...props}
        >
            {children}
        </FilledButton>
    ),
    Dashed: (
        {
            size,
            borderRadius,
            color,
            isLoading,
            children,
            ...props
        }: IDashedButtonProps) => (
        <DashedButton
            size={size}
            borderRadius={borderRadius}
            color={color}
            isLoading={isLoading}
            {...props}
        >
            {children}
        </DashedButton>
    ),
};
