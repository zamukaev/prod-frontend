import { CSSProperties, FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import styles from './Skeleton.module.scss';

interface SkeletonProps {
    className?: string;
    height?: string | number;
    width?: string | number;
    border?: string;
}

export const Skeleton: FC<SkeletonProps> = (props) => {
    const {
        className,
        width,
        height,
        border,
    } = props;

    const cssStyles: CSSProperties = {
        width,
        height,
        borderRadius: border,
    };

    return (
        <div
            style={cssStyles}
            className={classNames(styles.Skeleton, {}, [className])}
        >
        </div>
    );
};
