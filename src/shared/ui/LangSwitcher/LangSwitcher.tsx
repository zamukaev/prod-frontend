import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import classNames from 'shared/lib/classNames/classNames';

interface LangSwitcherProps {
    className?: string;
    sort?: boolean;
}

export const LangSwitcher: FC<LangSwitcherProps> = (props) => {
    const { className, sort } = props;
    const { t, i18n } = useTranslation();
    const toggleLang = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'ne' : 'ru');
    };

    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={toggleLang}
            className={classNames('', {}, [className])}
        >
            {t(sort ? 'Короткий язык' : 'Язык')}
        </Button>
    );
};
