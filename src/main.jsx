import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from "react-router-dom";
import { createTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/core/styles';

import './index.css'

const theme = createTheme({
  palette: {
    primary: {
      main: '#eae7dc',
    },
    secondary: {
      main: '#f50057',
    },
  },
});
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
