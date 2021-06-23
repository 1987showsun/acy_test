/*
 *   Copyright (c) 2021 
 *   All rights reserved.
 */
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Components
import Nav from './nav';

// Actions
import { signOutAction } from '../../actions/sign';

// Stylesheets
import './style.scss';

const Header = ({ dispatch, token="" }) => {
    return(
        <header>
            <div className="center header-row">
                <div className="header-col logo">logo</div>
                <div className="header-col nav">
                    <Nav />
                </div>
                <div className="header-col ">
                    { 
                        token==""?(
                            <Link to="/sign_in" replace={false} className="account-sign status">Login</Link>
                        ):(
                            <>
                                <button onClick={() => dispatch(signOutAction({}))} className="account-sign status">Logout</button>
                                <Link className="account-sign" to="/registered">Registered</Link>
                            </>
                        )
                    }
                </div>
            </div>
        </header>
    );
}

const mapStateToProps = state => {
    return{

    }
}

export default connect(mapStateToProps)(Header);