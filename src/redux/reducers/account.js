/*
 *   Copyright (c) 2021
 *   All rights reserved.
 */

export default (
    state = {
        token: "",
        author: {}
    },action
) => {
    const { type="", total=0, list="", payload="", token="" } = action;
    switch( type ){
        case 'SET_ACCOUNT_TOKEN':
            state = { 
                ...state,
                token: token,
                author: payload
            };
            break;

        default:
            state = {
                ...state,
                token: sessionStorage.getItem('token')  || "",
                author: JSON.parse(sessionStorage.getItem('author'))  || {},
            }
            break;
    }
    return state;
}