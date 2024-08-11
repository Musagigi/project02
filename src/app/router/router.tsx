import { lazy, ReactNode, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { App } from '../App';
import { NotFoundPage } from 'pages/NotFoundPage';
import { MainPage } from 'pages/MainPage';

import { ROUTES_MAP } from 'shared/constans/routing';

const EditEmployeePage = lazy(() => import('pages/EditEmployeePage'));
const AboutPage = lazy(() => import('pages/AboutPage'));

const suspense = (page: ReactNode, fallback = '...Загрузка') => (
  <Suspense fallback={fallback}>{page}</Suspense>
);

export const router = createBrowserRouter([
  {
    path: ROUTES_MAP.main.path,
    element: <App />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: ROUTES_MAP.editEmployee.path,
        element: suspense(<EditEmployeePage />),
      },
      {
        path: ROUTES_MAP.about.path,
        element: suspense(<AboutPage />),
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
