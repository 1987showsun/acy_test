/*
 *   Copyright (c) 2019 
 *   All rights reserved.
 */

import { createStore, applyMiddleware } from 'redux';
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

import reducers  from "./reducers";

const middleware = applyMiddleware( thunk, createLogger({
  predicate: function(){
    return process.env.NODE_ENV_DEV || true;
  }
}));

export default createStore(reducers, middleware)