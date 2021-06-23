/*
 *   Copyright (c) 2021 
 *   All rights reserved.
 */

import { connect } from 'react-redux';

// Components
import PageHead from '../compoents/webinars/pageHead';
import Posts from '../compoents/webinars/posts';
import Host from '../compoents/webinars/host';
import Register from '../compoents/webinars/register';

const Home = ({ history }) => {

    return(
        <>
            <PageHead />
            <Posts history={history}/>  
            <Host />
            <Register />
        </>
    );
}

const mapStateToProps = state => {
    return{
        
    }
}

export default connect(mapStateToProps)(Home);