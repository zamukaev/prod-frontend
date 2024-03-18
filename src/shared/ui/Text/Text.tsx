import { FC, memo } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import styles from './Text.module.scss';

export enum ThemeText {
    PRIMARY = 'primary',
    ERROR = 'error',
}
export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center'
}
interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: ThemeText;
    align?: TextAlign;
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        title,
        theme = ThemeText.PRIMARY,
        align = TextAlign.LEFT,
    } = props;

    return (
        <div className={classNames(styles.Text, {}, [className, styles[theme], styles[align]])}>
            {title && <p className={styles.title}>{title}</p>}
            {text && <p className={styles.text}>{text}</p>}
        </div>
    );
});
