import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  createMuiTheme
} from '@material-ui/core';

import './index.scss';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "Google Sans",
      "Roboto",
      "arial",
      "sans-serif"
    ].join(','),
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>, document.getElementById('devfest2k19'));
