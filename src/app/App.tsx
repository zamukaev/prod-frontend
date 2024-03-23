import { Suspense, useEffect } from 'react';

import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import classNames from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { userActions } from 'entities/User';
import { useSelector } from 'react-redux';
import { getUserInited } from 'entities/User/model/selectors/getUserInited';

function App() {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();
    const inited = useSelector(getUserInited);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app', { hover: true }, [])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    {inited && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
}

export default App;
