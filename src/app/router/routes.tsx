import { lazy, ReactNode, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { App } from '../App';

const MainPage = lazy(() => import('pages/MainPage'));

const suspense = (page: ReactNode, fallback = '...Загрузка') => (
  <Suspense fallback={fallback}>{page}</Suspense>
);

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: suspense(<MainPage />),
      },
    ],
  },
]);
