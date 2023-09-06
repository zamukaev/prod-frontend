/* eslint-disable max-len */
import { FC, useCallback, useState } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import { useTranslation } from 'react-i18next';
import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = (props) => {
    const { className } = props;
    const [isAuthModal, setIsAuthModal] = useState(false);
    const { t } = useTranslation();

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);
    return (
        <div className={classNames(styles.Navbar, {}, [className])}>
            <Button theme={ThemeButton.CLEARINVERTED} onClick={onToggleModal} className={styles.links}>
                {t('Войти')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                {t('Lorem ipsum dolor sit amet consectetur adipisicing elit.Enim consectetur aperiam voluptate modi nesciunt hic distinctio facere porro illo assumenda, deserunt odit earum eligendi corrupti voluptas doloremque deleniti, minima ex?')}
            </Modal>
        </div>
    );
};
