/*
 *   Copyright (c) 2021 
 *   All rights reserved.
 */
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

// Components
import PostsCard from '../common/postsCard';

// Actions
import { registeredAction, unRegisteredAction } from '../../actions/registered';

// Stylesheets
import './style.scss';

const RegisteredList = ({ dispatch, author={}, registereds=[] }) => {

    const [ stateLoading, setLoading ] = useState( false );
    const [ stateHideItem, setHideItem ] = useState('');

    useEffect(() => {
        const { id="" } = author;
        if( id ){
            dispatch( registeredAction({ query: { favourited:1 , author: id } }) );
        }
    },[author.id]);

    const handleRegister = ( selected ) => {
        const { id } = selected;
        dispatch( unRegisteredAction({ data: { id: id } }) ).then( res => {
            setHideItem( id );
            setLoading( false );
            dispatch( registeredAction({ query: { favourited:1 , author: author.id } }) );
        });
    }

    return(
        <div className="registered-row registered-list">
            <div className="center">
                {
                    registereds.map( item => {
                        const { id } = item;
                        return(
                            <PostsCard 
                                key = { id }
                                data = { item }
                                hide = { stateHideItem==id }
                                loading = { stateLoading }
                                unregister = { true }
                                onHandleRegister = { (selected) => handleRegister(selected) }
                            />
                        );
                    })
                }
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return{
        author: state.account.author,
        registereds: state.registered.registereds
    }
}

export default connect( mapStateToProps )( RegisteredList );