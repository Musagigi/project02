import { lazy, ReactNode, Suspense } from 'react';
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from 'react-router-dom';

import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';

import { ROUTES_MAP } from 'shared/constans/routing';

import { App } from '../App';

const EditEmployeePage = lazy(() => import('pages/EditEmployeePage'));
const AboutPage = lazy(() => import('pages/AboutPage'));

const suspense = (page: ReactNode, fallback = '...Загрузка') => (
  <Suspense fallback={fallback}>{page}</Suspense>
);

const routes: RouteObject[] = [
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
];

const router = createBrowserRouter(routes);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
