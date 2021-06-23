/*
 *   Copyright (c) 2021 
 *   All rights reserved.
 */
import { useState, useEffect} from 'react';
import { connect } from 'react-redux';

// Actions
import { signInAction } from '../../actions/sign';

// Stylesheets
import './style.scss';

const Form = ({ 
    dispatch, 
    history = {},
    token = ""
}) => {

    const [ stateForm, setForm ] = useState({ 
        email: "",
        password: ""
    })

    const handleChange = e => {
        const { name, value } = e.target;
        setForm({ ...stateForm, [name]: value });
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch( signInAction({ data: stateForm }) );
    }

    useEffect(() => {
        if( token!="" ){
            history.push('/');
        }
    },[token]);

    const { email, password } = stateForm;

    return(
        <div className="sign-wrap">
            <div className="center">
                <form onSubmit={handleSubmit.bind(this)}>
                    <div className="form-item">
                        <label>Username:</label>
                        <div className="input-box">
                            <input type="text" name="email" value={email} onChange={handleChange.bind(this)} />
                        </div>
                    </div>
                    <div className="form-item">
                        <label>Password:</label>
                        <div className="input-box">
                            <input type="password" name="password" value={password} onChange={handleChange.bind(this)} />
                        </div>
                    </div>
                    <div className="form-item">
                        <div className="input-box">
                            <button type="submit">Login</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return{
        token: state.account.token
    }
}

export default connect( mapStateToProps )( Form );