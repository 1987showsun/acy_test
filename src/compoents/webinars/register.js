/*
 *   Copyright (c) 2021 
 *   All rights reserved.
 */
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { BsChevronDown } from 'react-icons/bs'

import Button from '../form/button';

const checkMail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const Register = ({ posts=[] }) => {

    const [ stateForm, setForm ] = useState({
        topic: "",
        firstname: "",
        lastname: "",
        email: "",
        country_code: "",
        phone: "",
        mobile: ""
    });
    const [ stateFormDisabled, setFormDisabled ] = useState(false);
    const handleChange = e => {
        const { name, value } = e.target;
        setForm({
            ...stateForm,
            [name]: value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
    }

    useEffect(() => {
        const required = ['firstname','lastname','email'];
        const checkRequired = required.filter( item => stateForm[item].trim()=="" );
        setFormDisabled( checkRequired.length!=0? true:false );
    },[stateForm]);

    const { topic, firstname, lastname, email, country_code, phone, mobile } = stateForm;

    return(
        <div className="webinars-row posts-register">
            <div className="center">
                <form onSubmit={handleSubmit.bind(this)}>
                    <h3>Register for a Webinar now</h3>
                    <p>Please fill in the form below and you will be contacted by one of our professional business experts.</p>
                    <div className="form-item">
                        <label htmlFor="">Topic</label>
                        <div className="input-box select">
                            <select value={topic} onChange={handleChange.bind(this)} >
                                {
                                    posts.map( item => {
                                        const { id, title } = item;
                                        return (<option key={id} value={id}>{title}</option>);
                                    })
                                }
                            </select>
                            <i><BsChevronDown size="20px"/></i>
                        </div>
                    </div>
                    <div className="form-item">
                        <label htmlFor="">First Name</label>
                        <div className="input-box">
                            <input type="text" name="firstname" value={firstname} onChange={handleChange.bind(this)} />
                        </div>
                    </div>
                    <div className="form-item">
                        <label htmlFor="">Last Name</label>
                        <div className="input-box">
                            <input type="text" name="lastname" value={lastname} onChange={handleChange.bind(this)} />
                        </div>
                    </div>
                    <div className="form-item">
                        <label htmlFor="">Email { email.trim()!="" && !checkMail(email) && `(Invalid email)`}</label>
                        <div className="input-box">
                            <input type="email" name="email" value={email} onChange={handleChange.bind(this)} />
                        </div>
                    </div>
                    <div className="form-item">
                        <label htmlFor="">Phone</label>
                        <div className="input-box code select">
                            <select name="country_code" value={country_code} onChange={handleChange.bind(this)}>
                                <option value="">+61</option>
                            </select>
                            <i><BsChevronDown size="20px"/></i>
                        </div>
                        <div className="input-box numberInput">
                            <input type="tel" name="phone" value={phone} onChange={handleChange.bind(this)} />
                        </div>
                    </div>
                    <div className="form-item">
                        <label htmlFor="">Mobile Authentication</label>
                        <div className="input-box code">
                            <Button type="button">Get Code</Button>
                        </div>
                        <div className="input-box numberInput">
                            <input type="tel" name="mobile" value={mobile} onChange={handleChange.bind(this)} />
                        </div>
                    </div>
                    <div className="form-item">
                        <div className="input-box">
                            <Button type="submit" disabled={stateFormDisabled}>Register</Button>
                        </div>
                    </div>
                </form>
            </div> 
        </div>
    );
}

const mapStateToProps = state => {
    return{
        posts: state.webinars.posts,
    }
}

export default connect(mapStateToProps)(Register);