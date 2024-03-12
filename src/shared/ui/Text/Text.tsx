import { FC, memo } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import styles from './Text.module.scss';

export enum ThemeText {
    PRIMARY = 'primary',
    ERROR = 'error',
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: ThemeText;
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        title,
        theme = ThemeText.PRIMARY,
    } = props;

    return (
        <div className={classNames(styles.Text, {}, [className, styles[theme]])}>
            {title && <p className={styles.title}>{title}</p>}
            {text && <p className={styles.text}>{text}</p>}
        </div>
    );
});
