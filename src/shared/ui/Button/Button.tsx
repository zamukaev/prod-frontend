import { ButtonHTMLAttributes, FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import styles from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    CLEARINVERTED = 'clearInverted',
    OUTLINE = 'outline',
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
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className, theme, square, size, disabled, children, ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
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
};
