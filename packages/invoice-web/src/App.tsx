/* eslint @typescript-eslint/no-unused-vars: "off" */
import React, { useState } from 'react';
// react-router components
import {
 Routes, Route, Navigate, useLocation,
} from 'react-router-dom';

// @mui material components
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@devorgpl/invoice-web-assets/assets/theme';

import './App.css';
import TopBar from './components/top-bar/TopBar';
import { useSoftUIController } from './context/context';
import ConvertPage from './pages/convert/ConvertPage';
import routes from './routes';

function App(): React.ReactElement {
  const [controller, dispatch] = useSoftUIController();
  const {
 miniSidenav, direction, layout, openConfigurator, sidenavColor,
} = controller;
  // const [onMouseEnter, setOnMouseEnter] = useState(false);
  // const [rtlCache, setRtlCache] = useState(null);
  // const { pathname } = useLocation();

  const getRoutes = (allRoutes) => allRoutes.map((route) => {
    if (route.collapse) {
      return getRoutes(route.collapse);
    }

    if (route.route) {
      return <Route exact path={route.route} element={route.component} key={route.key} />;
    }

    return null;
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TopBar />
      <Routes>
        {getRoutes(routes)}
        <Route path="*" element={<Navigate to="/convert" />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
