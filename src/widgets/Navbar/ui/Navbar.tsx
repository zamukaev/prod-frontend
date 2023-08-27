import { FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui';
import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    return (
        <div className={classNames(styles.Navbar, {}, [className])}>
            <div className={styles.links}>
                <AppLink
                    theme={AppLinkTheme.PRIMARY}
                    className={styles.mainLink}
                    to="/"
                >
                    {t('Главная страница')}

                </AppLink>
                <AppLink
                    theme={AppLinkTheme.PRIMARY}
                    to="/about"
                >
                    {t('О сайте')}
                </AppLink>
            </div>
        </div>
    );
};
