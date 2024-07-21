import { FC, memo } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
    const { className } = props;
    const { id } = useParams();
    const { t } = useTranslation('article-details');

    if (!id) {
        return (
            <div className={classNames(styles.ArticleDetailsPage, {}, [className])}>
                {t('statya-ne-naidena')}
            </div>
        );
    }

    return (
        <div className={classNames(styles.ArticleDetailsPage, {}, [className])}>
            <ArticleDetails id={id} />
        </div>
    );
};

export default memo(ArticleDetailsPage);
