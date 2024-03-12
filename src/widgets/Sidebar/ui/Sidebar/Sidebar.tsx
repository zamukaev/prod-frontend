import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'shared/lib/classNames/classNames';

import { Button, ButtonSize, ThemeButton } from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';

import { SidebarItemList, SidebarItemType } from 'widgets/Sidebar/model/items';
import { SidebarItem } from '../SidebarItem/SidebarItem';

import styles from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo((props: SidebarProps) => {
    const { className } = props;
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const { t } = useTranslation();

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

            <Button
                data-testid="toggle-btn"
                onClick={onToggle}
                className={styles.collapsedBtn}
                theme={ThemeButton.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={styles.items}>
                {
                    SidebarItemList.map((item: SidebarItemType) => (
                        <SidebarItem
                            key={item.path}
                            item={item}
                            collapsed={collapsed}
                        />
                    ))
                }
            </div>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher sort={collapsed} className={styles.lang} />
            </div>
        </div>
    );
});
