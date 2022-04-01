import React from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';

import 'nprogress/nprogress.css';
import { SidebarProvider } from './contexts/SidebarContext';

class NewDate extends Date {
  toString = (): string => this.toISOString();
}
/* eslint "no-extend-native": off */
Date.prototype.toString = new NewDate().toString;

ReactDOM.render(
  <HelmetProvider>
    <SidebarProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SidebarProvider>
  </HelmetProvider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
