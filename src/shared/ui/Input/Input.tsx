import {
    InputHTMLAttributes, MutableRefObject, memo, useEffect, useMemo, useRef, useState,
} from 'react';
import classNames, { Mods } from 'shared/lib/classNames/classNames';
import styles from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps {
    className?: string;
    type?: string;
    value?: string | number;
    placeholder?: string,
    autofocus?: boolean;
    onChange?: (value: string) => void;
    readonly?: boolean;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        type = 'text',
        onChange,
        placeholder,
        autofocus,
        readonly,
        ...otherProps
    } = props;

    const ref = useRef() as MutableRefObject<HTMLInputElement>;
    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autofocus]);

    const onBlur = () => {
        setIsFocused(false);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const onSelect = (event: any) => {
        setCaretPosition(event.target.selectionStart || 0);
    };

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.value);
        setCaretPosition(event.target.value.length);
    };
    const isCaretVisible = isFocused && !readonly;
    const mods: Mods = {
        [styles.readonly]: readonly,
    };
    return (
        <div className={classNames(styles.InputWrapper, mods, [className])}>
            {placeholder
                && (
                    <div className={styles.placeholder}>
                        {`${placeholder}>`}
                    </div>
                )}
            <div className={styles.caretWrapper}>
                <input
                    ref={ref}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    type={type}
                    value={value}
                    onChange={changeHandler}
                    className={styles.input}
                    onSelect={onSelect}
                    readOnly={readonly}
                    {...otherProps}
                />
                {isCaretVisible
                    && (
                        <span
                            style={{ left: `${caretPosition * 9}px` }}
                            className={styles.caret}
                        >
                        </span>
                    )}
            </div>
        </div>
    );
});
