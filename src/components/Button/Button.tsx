import {IconButton, IIconButtonProps} from "./IconButton";
import {FilledButton, IFilledButtonProps} from "./FilledButton";
import {DashedButton, IDashedButtonProps} from "./DashedButton";

export const Button = {
    Icon: ({
               isLoading,
               color,
               size,
               borderSize,
               borderRadius,
               icon,
               iconPosition,
               iconColor,
               ...props
           }: IIconButtonProps) => (
        <IconButton
            isLoading={isLoading}
            color={color}
            size={size}
            borderSize={borderSize}
            borderRadius={borderRadius}
            icon={icon}
            iconPosition={iconPosition}
            iconColor={iconColor}
            {...props} // Pass additional props to the IconButton
        />
    ),
    Filled: ({
                 size,
                 borderRadius,
                 color,
                 borderSize,
                 isLoading,
                 children,
                 ...props
             }: IFilledButtonProps) => (
        <FilledButton
            size={size}
            borderRadius={borderRadius}
            color={color}
            borderSize={borderSize}
            isLoading={isLoading}
            {...props}
        >
            {children}
        </FilledButton>
    ),
    Dashed: ({
                 size,
                 borderRadius,
                 color,
                 borderSize,
                 isLoading,
                 children,
                 ...props
             }: IDashedButtonProps) => (
        <DashedButton
            size={size}
            borderRadius={borderRadius}
            color={color}
            borderSize={borderSize}
            isLoading={isLoading}
            {...props}
        >
            {children}
        </DashedButton>
    )
};
