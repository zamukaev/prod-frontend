import { memo, useCallback } from 'react';
import { Currency } from 'entities/Currency/model/types/currency';
import { Select } from 'shared/ui/Select/Select';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

const options = [
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
    { value: Currency.RUB, content: Currency.RUB },
];

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const {
        className,
        value,
        onChange,
        readonly,
    } = props;

    const onChangeHandler = useCallback((currency: string) => {
        onChange?.(currency as Currency);
    }, [onChange]);

    return (
        <Select
            className={className}
            label="Виберите валюту"
            value={value}
            onChange={onChangeHandler}
            options={options}
            readonly={readonly}
        />
    );
});
