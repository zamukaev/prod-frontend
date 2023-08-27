import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';

import { routerConfig } from 'shared/config/routerConfig/routerConfig';
import { PageLoader } from 'widgets/PageLoader';

const AppRouter = () => (
    <Suspense fallback={<PageLoader />}>
        <Routes>
            {Object.values(routerConfig).map(({ element, path }) => (
                <Route path={path} element={<div className="app-wrapper">{element}</div>} />
            ))}
        </Routes>
    </Suspense>
);

export default AppRouter;
