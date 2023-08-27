import { FC } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import styles from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError: FC<PageErrorProps> = (props) => {
    const { className } = props;

    const { t } = useTranslation();

    const reloadPage = () => {
        window.location.reload();
    };
    return (
        <div className={classNames(styles.PageError, {}, [className])}>
            {t('Произошла не ожиданная ошибка!')}
            <button onClick={reloadPage} type="button">{t('Обнавить страницу')}</button>
        </div>
    );
};
