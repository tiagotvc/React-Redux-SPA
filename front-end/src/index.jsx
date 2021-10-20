import React from 'react';
import ReactDOM from 'react-dom';
import  Home  from './Layouts/Home';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './Styles/global-styles';




ReactDOM.render(
  <React.StrictMode>
     <ThemeProvider theme={theme}>
       <Home/>
       <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

