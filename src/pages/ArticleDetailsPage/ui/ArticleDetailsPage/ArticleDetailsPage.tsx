import { FC, memo } from 'react'
import classNames from 'shared/lib/classNames/classNames';
import styles from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
    const { className } = props;

    return (
        <div className={classNames(styles.ArticleDetailsPage, {}, [className])}>
            ARTICLE_DETAILS_PAGE
        </div>
    );
};

export default memo(ArticleDetailsPage);