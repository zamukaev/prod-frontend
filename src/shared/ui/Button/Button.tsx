import { ButtonHTMLAttributes, ReactNode, memo } from 'react';
import classNames, { Mods } from 'shared/lib/classNames/classNames';
import styles from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    CLEARINVERTED = 'clearInverted',
    OUTLINE = 'outline',
    OUTLINE_RED = 'outline_red',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
    children?: ReactNode,
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        theme = ThemeButton.OUTLINE,
        square,
        size = ButtonSize.M,
        disabled,
        children,
        ...otherProps
    } = props;

    const mods: Mods = {
        [styles.square]: square,
        [styles.disabled]: disabled,
    };

    return (
        <button
            type="button"
            className={
                classNames(styles.Button, mods, [className, styles[theme], styles[size]])
            }
            {...otherProps}
            disabled={disabled}
        >
            {children}
        </button>
    );
});
