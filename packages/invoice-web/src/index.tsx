import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Soft UI Dashboard React Context Provider
import { SoftUIControllerProvider } from './context/context';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <SoftUIControllerProvider>
      <App />
    </SoftUIControllerProvider>
  </BrowserRouter>, document.getElementById('root'),
);
