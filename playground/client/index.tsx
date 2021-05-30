import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core';
import App from './App';
import theme from './theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root'),
);
