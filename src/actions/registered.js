/*
 *   Copyright (c) 2021 
 *   All rights reserved.
 */
import axios from 'axios';
import queryString from 'query-string';
import API_URL from './api';

export const registeredAction = ({method='get', query={}, data={}}) => {
    return(dispatch) => {
        const initQuery = {};
        const search = queryString.stringify({ ...initQuery, ...query });
        const url = `${API_URL().favouritesList}${search==""? "":`?${search}`}`;
        axios({method, url, data}).then( res => {
            const { data=[] } = res.data;
            dispatch({
                type: "SET_REGISTERED",
                list: data
            })
        });
    }
}

export const unRegisteredAction = ({method='delete', query={}, data={}}) => {
    return(dispatch) => {
        const { id="" } = data;
        const url = `${API_URL().unfavourite}${id}`;
        return axios({method, url, data});
    }
}