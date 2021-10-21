// Library imports
import React from 'react';
import ReactDOM from 'react-dom';
// Layouts imports
import  Home  from './layouts/Home';
// Theme and styles imports
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global-styles";
import { theme } from "./styles/theme";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import serviceOrdersReducer from './features/serviceOrders';
import dateFilterReducer from './features/dateFilter';

const store = configureStore({
  reducer: {
    serviceOrders: serviceOrdersReducer,
    dateFilter: dateFilterReducer,

  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Home/>
        <GlobalStyles />
    </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);