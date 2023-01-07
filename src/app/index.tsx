import { Suspense, lazy, type FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import LayoutMain from '@/layouts';
import useTheme from '@/hooks/use-theme';

const HomePage = lazy(async () => await import('@/pages/home'));
const NotFoundPage = lazy(async () => await import('@/pages/404'));

const App: FC = () => {
    useTheme();

    return (
        <Suspense fallback={undefined}>
            <Routes>
                <Route element={<LayoutMain />} path="/">
                    <Route element={<HomePage />} index />
                </Route>
                <Route element={<NotFoundPage />} path="/404" />
                <Route element={<Navigate to="/404" />} path="*" />
            </Routes>
        </Suspense>
    );
};

export default App;
