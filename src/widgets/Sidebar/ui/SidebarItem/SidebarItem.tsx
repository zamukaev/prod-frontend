import { memo } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

import { SidebarItemType } from 'widgets/Sidebar/model/items';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';

import styles from './SidebarItem.module.scss';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed?: boolean;
}

export const SidebarItem = memo((props: SidebarItemProps) => {
    const { collapsed, item } = props;
    const { t } = useTranslation();

    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }

    return (
        <AppLink
            theme={AppLinkTheme.PRIMARY}
            className={
                classNames(styles.item, { [styles.collapsed]: collapsed }, [])
            }
            to={item.path}
        >
            <item.Icon className={styles.icon} />
            <span className={styles.link}>
                {t(item.text)}
            </span>
        </AppLink>
    );
});
