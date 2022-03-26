import React from 'react';
// Soft UI Dashboard React icons
import Document from './components/Icons/Document';
import ConvertPage from './pages/convert/ConvertPage';
import MainPage from './pages/main/MainPage';

const routes = [
    {
        type: 'collapse',
        name: 'Dashboard',
        key: 'dashboard',
        route: '/dashboard',
        icon: <Document size="12px" />,
        component: <MainPage />,
        noCollapse: true,
    },
    {
        type: 'collapse',
        name: 'Dashboard',
        key: 'dashboard',
        route: '/convert',
        icon: <Document size="12px" />,
        component: <ConvertPage />,
        noCollapse: true,
      },
];

export default routes;
