import React, { Suspense, lazy } from 'react';
import { Navigate, Outlet, RouteObject } from 'react-router-dom';

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
const InvoicesPage = Loader(lazy(() => import('./pages/invoices/InvoicesPage')));
const InvoicePreviewPage = Loader(lazy(() => import('./pages/invoice-preview/InvoicePreviewPage')));
const InvoiceForm = Loader(lazy(() => import('./pages/invoice-form/InvoiceForm')));

export enum ROLES {NO_AUTH, AUTH}

export interface RouteObjectCustom extends RouteObject {
  roles?: ROLES[]
}

const noAuthRoutes: RouteObjectCustom[] = [
  {
    path: '*',
    element: <TopMenuLayout />,
    roles: [ROLES.NO_AUTH],
    children: [
      {
        path: '',
        element: <Navigate
          to="/converter"
          replace
        />,
      },
      {
        path: 'converter',
        element: (
          <ConvertPage />
        ),
      },
      {
        path: '*',
        element: <ConvertPage />,
      },
    ],
  },

];

const authRoutes: RouteObjectCustom[] = [
  {
    path: 'app',
    element: (
      <TopMenuLayout />
    ),
    roles: [ROLES.AUTH],
    children: [
      {
        path: '',
        element: (
          <Navigate
            to="/app/converter"
            replace
          />
        ),
      },
      {
        path: 'converter',
        element: <ConvertPage />,
      },
      {
        path: 'invoices',
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <InvoicesPage />,
          },
          {
            path: ':id',
            element: <InvoicePreviewPage />,
          },
          {
            path: 'edit/:id',
            element: <InvoiceForm />,
          },
          {
            path: 'new',
            element: <InvoiceForm />,
          }
        ],
      },
      {
        path: 'usersettings',
        element: <UserSettings />,
      },
    ],
  },
];

const noAuthRedirects: RouteObjectCustom[] = [
    {
    path: 'app',
    element: <TopMenuLayout />,
    roles: [ROLES.NO_AUTH],
    children: [
      {
        path: '*',
        element: <Navigate
          to="/"
          replace
        />,
      },
    ],
  },
];

const authRedirects: RouteObjectCustom[] = [
  {
    path: '*',
    element: <TopMenuLayout />,
    roles: [ROLES.AUTH],
    children: [
      {
        path: '',
        element: <Navigate
          to="/app/converter"
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
        element: <Navigate
          to="/app/converter"
          replace
        />,
      },
    ],
  },
];

const routes: RouteObjectCustom[] = noAuthRoutes.concat(authRoutes, noAuthRedirects, authRedirects);

export function getRoutes(role: ROLES, routes: RouteObjectCustom[]):RouteObjectCustom[] {
  return routes.filter((r) => r.roles && r.roles.includes(role));
}

export default routes;
