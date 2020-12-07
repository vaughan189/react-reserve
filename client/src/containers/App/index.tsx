import React, { useState } from 'react';
import { Switch, Route, Router, withRouter, Redirect } from 'react-router-dom';
import { getUserDetails } from "../../utils";
import { Navbar } from "../../components";
import HomePage from '../HomePage/Home';
import LoginPage from '../LoginPage/Login'

const Index = ({ history }: any) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    history.listen(() => {
        const userDetails = JSON.parse(getUserDetails());
        if (userDetails && userDetails.id) { setIsLoggedIn(true) } else { setIsLoggedIn(false) }
    });
    return (
        <Router history={history}>
            {isLoggedIn ? <Navbar /> : null}
            <Switch>
                <Route exact path="/login" render={() => (!isLoggedIn ? (<LoginPage />) : (<Redirect to="/home" />))} />
                <Route exact path="/home" render={() => (isLoggedIn ? (<HomePage />) : (<Redirect to="/login" />))} />
                <Route exact path="/" render={() => (!isLoggedIn ? (<LoginPage />) : (<Redirect to="/home" />))} />
            </Switch>
        </Router>
    )
}

export default withRouter(Index);