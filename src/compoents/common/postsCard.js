/*
 *   Copyright (c) 2021 
 *   All rights reserved.
 */
import { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { AiOutlineRight, AiOutlineClose } from 'react-icons/ai';
import PropTypes from 'prop-types';

// Stylesheets
import './style.scss';

const PostsCard = ({ 
    data= {}, 
    hide= false,
    loading= false,
    unregister= false,
    onHandleRegister=()=>{} 
}) => {
    
    const [ stateLoading, setLaoding ] = useState(false);
    const { id, title, content, created_at } = data;

    const handleRegister = ( selected ) => {
        onHandleRegister(selected);
        setLaoding(true);
    }

    useEffect(() => {
        setLaoding(loading);
    }, [loading]);

    return(
        <div key={id} className="card webinars-card" data-hide={hide}>
            <span className="date">{dayjs(created_at).format('DD/MM/YYYY')}</span>
            <h3 dangerouslySetInnerHTML={{__html: title}} />
            <div className="docs" dangerouslySetInnerHTML={{__html: `${content}<p><br/></p><p>${dayjs(created_at).add(10, 'day').format('YYYY/MM/DD hh:mm')}</p>`}} />
            <button className="register-link" data-unregister={unregister} onClick={handleRegister.bind(this,data)}>
                <span>{ unregister? "unRegister Now":"Register Now" }</span>
                <i>{ unregister? <AiOutlineClose size="10px"/>:<AiOutlineRight size="10px"/>}</i>
                { stateLoading && 
                    <div className="card-loading">
                        <div className="loader"></div>
                    </div>
                }
            </button>
        </div>
    );
}

PostsCard.propTypes = {
    data : PropTypes.object,
    hide : PropTypes.bool,
    loading: PropTypes.bool,
    unregister : PropTypes.bool,
    onHandleRegister : PropTypes.func
}

export default PostsCard;