import {
    ChangeEvent,
    memo,
    useCallback,
    useMemo,
} from 'react';
import classNames, { Mods } from 'shared/lib/classNames/classNames';
import styles from './Select.module.scss';

interface SelectOptions {
    value: string;
    content: string;
}

interface SelectProps {
    className?: string;
    label?: string;
    options?: SelectOptions[];
    value?: string;
    onChange?: (value: string) => void;
    readonly?: boolean;
}

export const Select = memo((props: SelectProps) => {
    const {
        className,
        label,
        options,
        value,
        onChange,
        readonly,
    } = props;

    const mods: Mods = useMemo(() => ({
        [styles.readonly]: readonly,
    }), [readonly]);

    const onChangeHandler = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        onChange?.(value);
    }, [onChange]);

    const optionsList = useMemo(() => options?.map((opt) => (
        <option
            className={styles.option}
            key={opt.value}
            value={opt.value}
        >
            {opt.content}
        </option>
    )), [options]);

    return (
        <div className={classNames(styles.Wrapper, mods, [className])}>
            {label && (
                <span className={styles.label}>{label}</span>
            )}
            <select
                className={styles.select}
                value={value}
                onChange={onChangeHandler}
                disabled={readonly}
            >
                {optionsList}
            </select>
        </div>
    );
});
