import { ButtonHTMLAttributes, FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import styles from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
    onClick?: () => void;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className, onClick, theme, children, ...otherProps
    } = props;
    return (
        <button
            onClick={onClick}
            type="button"
            className={classNames(styles.Button, {}, [className, styles[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
