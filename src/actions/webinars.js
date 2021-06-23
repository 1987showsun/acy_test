/*
 *   Copyright (c) 2021 
 *   All rights reserved.
 */
import axios from 'axios';
import queryString from 'query-string';
import API_URL from './api';

export const postsAction = ({method='get', query={}, data={}}) => {
    return(dispatch) => {
        const initQuery = {
            per_page: 12,
            page: 1
        };
        const search = queryString.stringify({ ...initQuery, ...query });
        const url = `${API_URL().posts}${search==""? "":`?${search}`}`;
        return axios({method, url, data}).then( res => {
            const { data=[], meta={} } = res.data;
            const { pagination={} } = meta;
            const { total_pages=0, total=0, current_page=1 } = pagination;
            dispatch({
                type: "SET_POSTS",
                list: data,
                total: total,
                total_pages: total_pages
            })
        });

    }
}

export const favouritesAction = ({method='post', query={}, data={}}) => {
    return(dispatch) => {
        const initQuery = {};
        const search = queryString.stringify({ ...initQuery, ...query });
        const url = `${API_URL().favourites}${search==""? "":`?${search}`}`;
        return axios({method, url, data});
    }
}