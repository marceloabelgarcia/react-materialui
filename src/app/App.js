import { ThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import Routes from './routes';
import store from './store';
import theme from './theme';

import './i18n';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <HashRouter>
          <Routes />
        </HashRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
