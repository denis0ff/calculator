import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import Application from '@App/index';

import { store } from '@store/index';
import { theme, GlobalStyles } from '@theme/index';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <Application />
          <GlobalStyles />
        </Router>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
