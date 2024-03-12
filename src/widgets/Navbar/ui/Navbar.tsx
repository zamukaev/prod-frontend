/* eslint-disable max-len */
import { memo, useCallback, useState } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUsername';

import { useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo((props: NavbarProps) => {
    const { className } = props;
    const [isAuthModal, setIsAuthModal] = useState(false);
    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData);
    const dispatch = useAppDispatch();

    const closeModalHandler = useCallback(() => {
        setIsAuthModal(false);
    }, []);
    const showModalHandler = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const logoutHandler = useCallback(() => {
        console.log('logout');
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <div className={classNames(styles.Navbar, {}, [className])}>
                <Button theme={ThemeButton.CLEARINVERTED} onClick={logoutHandler} className={styles.links}>
                    {t('Выйти')}
                </Button>
            </div>
        );
    }
    return (
        <div className={classNames(styles.Navbar, {}, [className])}>
            <Button theme={ThemeButton.CLEARINVERTED} onClick={showModalHandler} className={styles.links}>
                {t('Войти')}
            </Button>
            <LoginModal isOpen={isAuthModal} onClose={closeModalHandler} />
        </div>
    );
});
