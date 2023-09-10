/* eslint-disable max-len */
import { FC, useCallback, useState } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUsername';
import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = (props) => {
    const { className } = props;
    const [isAuthModal, setIsAuthModal] = useState(false);
    const { t } = useTranslation();

    const closeModalHandler = useCallback(() => {
        setIsAuthModal(false);
    }, []);
    const showModalHandler = useCallback(() => {
        setIsAuthModal(true);
    }, []);
    return (
        <div className={classNames(styles.Navbar, {}, [className])}>
            <Button theme={ThemeButton.CLEARINVERTED} onClick={showModalHandler} className={styles.links}>
                {t('Войти')}
            </Button>
            <LoginModal isOpen={isAuthModal} onClose={closeModalHandler} />
        </div>
    );
};
