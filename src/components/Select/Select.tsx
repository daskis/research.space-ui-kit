import { ISelectOneProps, SelectOne } from './SelectOne';
import { ISelectManyProps, SelectMany } from './SelectMany';

export const Select = {
    One: ({
              options,
              placeholder,
              selected,
              onChange,
              bgColor,
              borderColor,
              weight,
              fontFamily,
              textColor,
              size,
              borderRadius,
              onClose,
          }: ISelectOneProps) => (
        <SelectOne
            options={options}
            placeholder={placeholder}
            selected={selected}
            onChange={onChange}
            onClose={onClose}
            bgColor={bgColor}
            borderColor={borderColor}
            weight={weight}
            fontFamily={fontFamily}
            textColor={textColor}
            size={size}
            borderRadius={borderRadius}
        />
    ),
    Many: ({
               options,
               placeholder,
               selected,
               onChange,
               bgColor,
               borderColor,
               weight,
               fontFamily,
               textColor,
               size,
               borderRadius,
               onClose,
           }: ISelectManyProps) => (
        <SelectMany
            options={options}
            placeholder={placeholder}
            selected={selected}
            onChange={onChange}
            onClose={onClose}
            bgColor={bgColor}
            borderColor={borderColor}
            weight={weight}
            fontFamily={fontFamily}
            textColor={textColor}
            size={size}
            borderRadius={borderRadius}
        />
    ),
};