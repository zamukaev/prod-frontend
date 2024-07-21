import { FC, useEffect } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById';
import { useSelector } from 'react-redux';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from 'entities/Article/model/selectors/articleDetails';
import { Text, TextAlign, ThemeText } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import styles from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
    className?: string;
    id: string;
}
const reducers: ReducerList = {
    articleDetails: articleDetailsReducer,
};
export const ArticleDetails = (props: ArticleDetailsProps) => {
    const {
        className,
        id,
    } = props;
    const { t } = useTranslation('article-details');
    const dispatch = useAppDispatch();
    const article = useSelector(getArticleDetailsData);
    const isLoading = useSelector(getArticleDetailsIsLoading);

    const error = useSelector(getArticleDetailsError);

    useEffect(() => {
        dispatch(fetchArticleById(id));
    }, [dispatch, id]);

    let content;

    if (isLoading) {
        content = (
            <div>
                <Skeleton className={styles.avatar} width={200} height={200} border="50%" />
                <Skeleton className={styles.title} width={300} height={32} />
                <Skeleton className={styles.skeleton} width={600} height={24} />
                <Skeleton className={styles.skeleton} width="100%" height={200} />
                <Skeleton className={styles.skeleton} width="100%" height={200} />
            </div>
        );
    } else if (error) {
        content = (
            <Text
                theme={ThemeText.ERROR}
                align={TextAlign.CENTER}
                title={t('proizoshla-oshibka-pri-zagruzke-stati')}
            />
        );
    } else {
        content = (
            <div>
                {t('article-details')}
            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(styles.ArticleDetails, {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>
    );
};
