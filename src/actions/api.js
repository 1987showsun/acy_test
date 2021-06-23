/*
 *   Copyright (c) 2021 
 *   All rights reserved.
 */

import axios from 'axios';
axios.interceptors.request.use(function (config) {
    const token = sessionStorage.getItem('token');
    return token==null? (
        config
    ):({ 
        ...config, 
        headers: {
            ...config.headers,
            'Authorization': `Bearer ${token}`
        }
    });
}, function (error) {
    return error;
});

export default () => {

    const selectAPIUrl = () => {
        const { NODE_ENV_DEV=true } = process.env;

        return NODE_ENV_DEV==true? 'https://api.finlogix.com/v1':'';
    }

    return {
        sign_in: `${selectAPIUrl()}/auth/email/login`,
        sign_out: `${selectAPIUrl()}/auth/logout`,
        posts: `${selectAPIUrl()}/posts`,
        favouritesList: `${selectAPIUrl()}/posts`,
        favourites: `${selectAPIUrl()}/favourites`,
        unfavourite: `${selectAPIUrl()}/favourites/post/`,
    }
}