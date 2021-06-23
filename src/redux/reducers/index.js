/*
 *   Copyright (c) 2019 
 *   All rights reserved.
 */

import { combineReducers } from "redux";

//Reducers
import account from './account';
import webinars from './webinars';
import registered from './registered';

export default combineReducers({
    account,
    webinars,
    registered
});