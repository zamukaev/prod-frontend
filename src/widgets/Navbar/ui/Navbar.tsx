import { FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';

import { AppLink, AppLinkTheme } from 'shared/ui';
import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = (props) => {
    const { className } = props;

    return (
        <div className={classNames(styles.Navbar, {}, [className])}>
            <div className={styles.links}>
                /
            </div>
        </div>
    );
};
