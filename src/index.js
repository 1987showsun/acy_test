/*
 *   Copyright (c) 2021 
 *   All rights reserved.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import './index.scss';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route } from "react-router-dom";

import store from "./redux/store";

import App from './app'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/" component={App} />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
