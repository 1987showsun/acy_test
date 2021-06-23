/*
 *   Copyright (c) 2021 
 *   All rights reserved.
 */
import axios from 'axios';
import queryString from 'query-string';
import API_URL from './api';

export const signInAction = ({method='post', query={}, data={}}) => {
    return(dispatch) => {
        const initQuery = {};
        const search = queryString.stringify({ ...initQuery, ...query });
        const url = `${API_URL().sign_in}${search==""? "":`?${search}`}`;
        axios({method, url, data}).then( res => {
            const { token="", user={} } = res.data;
            sessionStorage.setItem('token', token);
            sessionStorage.setItem('author', JSON.stringify(user));
            dispatch({
                type: "SET_ACCOUNT_TOKEN",
                token: token,
                payload: user
            })
        });

    }
}

export const signOutAction = ({method='post', query={}, data={}}) => {
    return(dispatch) => {
        console.log('signOutAction');
        const initQuery = {};
        const search = queryString.stringify({ ...initQuery, ...query });
        const url = `${API_URL().sign_out}${search==""? "":`?${search}`}`;
        axios({method, url, data}).then( res => {
            sessionStorage.removeItem('token');
            sessionStorage.removeItem('author');
            dispatch({
                type: "SET_ACCOUNT_TOKEN",
                token: "",
                payload: {}
            })
        });
    }
}