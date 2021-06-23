/*
 *   Copyright (c) 2021 
 *   All rights reserved.
 */

import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

// Components
import Form from '../compoents/signIn/form';

// Actions
import { signInAction } from '../actions/sign';

const Sign_in = ({ dispatch, history, token="" }) => {

    // const [ stateForm, setForm ] = useState({ 
    //     email: "",
    //     password: ""
    // })

    // const handleChange = e => {
    //     const { name, value } = e.target;
    //     setForm({ ...stateForm, [name]: value });
    // }

    // const handleSubmit = e => {
    //     e.preventDefault();
    //     dispatch( signInAction({ data: stateForm }) );
    // }

    // useEffect(() => {
    //     if( token!="" ){
    //         history.push('/');
    //     }
    // },[token]);

    // const { email, password } = stateForm;

    return(
        <>
            <Form 
                history = { history }
            />
        </>
    );
}

const mapStateToProps = state => {
    return{
    }
}

export default connect(mapStateToProps)(Sign_in);