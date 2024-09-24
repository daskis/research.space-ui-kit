import { ISelectOneProps, SelectOne } from './SelectOne';
import { ISelectManyProps, SelectMany } from './SelectMany';

export const Select = {
    One: (props: ISelectOneProps) => (
        <SelectOne
            {...props}
        />
    ),
    Many: (props: ISelectManyProps) => (
        <SelectMany
            {...props}
        />
    ),
};