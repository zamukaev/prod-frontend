import { memo, useCallback } from 'react';

import { Select } from 'shared/ui/Select/Select';
import { Country } from '../model/types/country';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options = [
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Germany, content: Country.Germany },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
    const {
        className,
        value,
        onChange,
        readonly,
    } = props;

    const onChangeHandler = useCallback((country: string) => {
        onChange?.(country as Country);
    }, [onChange]);

    return (
        <Select
            className={className}
            label="Виберите страну"
            value={value}
            onChange={onChangeHandler}
            options={options}
            readonly={readonly}
        />
    );
});
