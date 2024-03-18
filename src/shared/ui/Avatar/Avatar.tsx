import { CSSProperties, FC, useMemo } from 'react';
import classNames from 'shared/lib/classNames/classNames';

import styles from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    alt?: string;
    size?: number;
}

export const Avatar: FC<AvatarProps> = (props) => {
    const {
        className,
        src,
        alt,
        size,
    } = props;

    const style = useMemo<CSSProperties>(() => ({
        width: size || 100,
        height: size || 100,
    }), [size]);

    return (
        <img
            style={style}
            src={src}
            alt={alt}
            className={classNames(styles.Avatar, {}, [className])}
        />
    );
};
