/*
 *   Copyright (c) 2021 
 *   All rights reserved.
 */
import ForexWebinars from '../pages/forex_webinars';
import SignIn from '../pages/sign_in';
import Registered from '../pages/registered';

export default (token) => {

    const nomal = [
        {
            path : '/forex_webinars',
            exact: true,
            component: ForexWebinars
        }
    ]

    const loginFalse = [
        {
            path : '/sign_in',
            component: SignIn
        }
    ]

    const loginTrue = [
        {
            path: '/registered',
            component: Registered
        }
    ]

    return [
        ...nomal,
        ...token!=""? loginTrue:loginFalse
    ]
}