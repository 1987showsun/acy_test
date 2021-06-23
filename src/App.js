/*
 *   Copyright (c) 2021 
 *   All rights reserved.
 */

import { connect } from 'react-redux';
import './index.scss';
import { Switch, Redirect, Route } from "react-router-dom";
import routes from './routes';

import Header from './compoents/common/header';
import Footer from './compoents/common/footer';

const App = ({ token="" }) => {  
    return(
      <>
        <Header
            token = {token}
        />
          <main>
            <Switch>
              { routes(token).map((item, i) => <Route key={i} {...item} />) }
              <Redirect to="/forex_webinars"/>
            </Switch>
          </main>
        <Footer />
      </>
    );
  }
  
  const mapStateToProps = state => {
    return {
      token: state.account.token
    }
  }
  
  export default connect(mapStateToProps)(App);