import React, { useEffect } from 'react';
import { Navigate, useLocation, useRoutes } from 'react-router-dom';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import { CssBaseline } from '@mui/material';
import ThemeProvider from './theme/ThemeProvider';
import routes, { getRoutes, ROLES } from './router';
import { useAuth } from './libs/firebase';
import { useRedirects } from './services/RouteService';

const App = () => {
  const authx = useAuth();
  const content = authx.isSignedIn? useRoutes(getRoutes(ROLES.AUTH, routes)):useRoutes(getRoutes(ROLES.NO_AUTH, routes));
  return (
    <ThemeProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <CssBaseline />
        {content}
      </LocalizationProvider>
    </ThemeProvider>
  );
};
export default App;
