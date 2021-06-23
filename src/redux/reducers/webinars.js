/*
 *   Copyright (c) 2021
 *   All rights reserved.
 */

export default (
    state = {
        posts: [],
        total: 0,
        total_pages: 0,
    },action
) => {
    const { type="", total=0, list=[], total_pages=0 } = action;
    switch( type ){
        case 'SET_POSTS':
            state = { 
                ...state,
                posts: list,
                total: total,
                total_pages: total_pages
            };
            break;

        default:
            state = {
                ...state,
            }
            break;
    }
    return state;
}