import React, { Suspense, lazy } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';

import SuspenseLoader from './components/SuspenseLoader';
import TopMenuLayout from './layouts/TopMenuLayout';

const Loader = (Component) => (props) => (
  <Suspense fallback={<SuspenseLoader />}>
    <Component {...props} />
  </Suspense>
);

// Pages

const MainPage = Loader(lazy(() => import('./pages/main/MainPage')));

// ConvertPage

const ConvertPage = Loader(lazy(() => import('./pages/convert/ConvertPage')));
const UserSettings = Loader(lazy(() => import('./pages/usersettings')));

const routes: RouteObject[] = [
  {
    path: '*',
    element: <TopMenuLayout />,
    children: [
      {
        path: '',
        element: <Navigate
          to="/converter"
          replace
        />,
      },
      {
        path: 'overview',
        element: (
          <Navigate
            to="/"
            replace
          />
        ),
      },
      {
        path: 'status',
        children: [
          {
            path: '',
            element: (
              <Navigate
                to="404"
                replace
              />
            ),
          },
        ],
      },
      {
        path: '*',
        element: <ConvertPage />,
      },
    ],
  },
  {
    path: 'app',
    element: (
      <TopMenuLayout />
    ),
    children: [
      {
        path: '',
        element: (
          <Navigate
            to="/app/convert"
            replace
          />
        ),
      },
      {
        path: 'convert',
        element: <ConvertPage />,
      },
      {
        path: 'usersettings',
        element: <UserSettings />,
      },
    ],
  },
];

export default routes;
