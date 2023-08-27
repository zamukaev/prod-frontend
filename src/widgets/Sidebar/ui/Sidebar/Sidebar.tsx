import { FC, useState } from 'react';

import { useTranslation } from 'react-i18next';
import classNames from 'shared/lib/classNames/classNames';

import { Button, LangSwitcher, ThemeSwitcher } from 'shared/ui';
import styles from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();

    const [collapsed, setCollapsed] = useState<boolean>(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={
                classNames(
                    styles.Sidebar,
                    { [styles.collapsed]: collapsed },
                    [className],
                )
            }
        >

            <Button data-testid="toggle-btn" onClick={onToggle}>{t('тоггле')}</Button>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={styles.lang} />
            </div>
        </div>
    );
};
