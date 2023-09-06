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
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className, theme, square, size, children, ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [styles.square]: square,
    };

    return (
        <button
            type="button"
            className={
                classNames(styles.Button, mods, [className, styles[theme], styles[size]])
            }
            {...otherProps}
        >
            {children}
        </button>
    );
};
