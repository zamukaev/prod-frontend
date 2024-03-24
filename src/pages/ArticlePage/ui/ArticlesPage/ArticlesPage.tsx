import { FC, memo } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import styles from './ArticlesPage.module.scss';

interface ArticlePageProps {
    className?: string;
}
const ArticlesPage: FC<ArticlePageProps> = (props) => {
    const { className } = props;

    return (
        <div className={classNames(styles.ArticlePage, {}, [className])}>
            ARTICLE_PAGE
        </div>
    );
};

export default memo(ArticlesPage);
