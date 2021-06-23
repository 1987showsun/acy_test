/*
 *   Copyright (c) 2021 
 *   All rights reserved.
 */
import { useEffect } from 'react';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { AiOutlineRight } from 'react-icons/ai';

// Components
import PostsCard from '../common/postsCard';

// Actions
import { postsAction, favouritesAction } from '../../actions/webinars';

// Stylesheets
import './style.scss';

const Cards = ({ dispatch, history, author={}, posts=[], total=0 }) => {

    useEffect(() => {
        dispatch( postsAction({}) );
    },[author.id]);

    const handleRegister = ( item ) => {
        const { id="" } = author;
        if( id!="" ){
            dispatch( favouritesAction({ data: { ids: [item.id], model: 'post' } }) ).then(res => {
                history.push('/registered');
            });
        }else{
            alert('Please login member first')
            history.push('/sign_in');
        }
    }

    return(
        <div className="webinars-row posts-list">
            <div className="center">
                {
                    posts.map( item => {
                        const { id } = item;
                        return(
                            <PostsCard 
                                key = {id}
                                data = {item}
                                unregister = {false}
                                onHandleRegister = {(selected) => handleRegister(selected)}
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
        posts: state.webinars.posts,
        total: state.webinars.total
    };
}

export default connect(mapStateToProps)(Cards);