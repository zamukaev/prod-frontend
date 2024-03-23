import { Routes, Route } from 'react-router-dom';
import { Suspense, useCallback } from 'react';

import { AppRoutesProps, routerConfig } from 'shared/config/routerConfig/routerConfig';
import { PageLoader } from 'widgets/PageLoader';

import { RequireAuth } from './RequireAuth';

const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>
                <div className="app-wrapper">
                    {route.element}
                </div>
            </Suspense>
        );
        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
            />
        );
    }, []);

    return (
        <Routes>
            {Object.values(routerConfig).map(renderWithWrapper)}
        </Routes>
    );
};

export default AppRouter;
